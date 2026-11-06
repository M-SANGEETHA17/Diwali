require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js') || filePath.endsWith('.html') || filePath.endsWith('.css')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// ==========================================
// LOCAL FILE FALLBACK STORAGE HELPERS
// ==========================================
const CARDS_FILE = path.join(__dirname, 'cards.json');
const REGISTRATIONS_FILE = path.join(__dirname, 'registrations.json');

function getCards() {
  try {
    if (!fs.existsSync(CARDS_FILE)) return {};
    const data = fs.readFileSync(CARDS_FILE, 'utf-8');
    return JSON.parse(data || '{}');
  } catch (err) {
    return {};
  }
}

function saveCards(data) {
  try {
    fs.writeFileSync(CARDS_FILE, JSON.stringify(data, null, 2));
  } catch (err) {}
}

function getRegistrations() {
  try {
    if (!fs.existsSync(REGISTRATIONS_FILE)) return [];
    const data = fs.readFileSync(REGISTRATIONS_FILE, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    return [];
  }
}

function saveRegistrations(data) {
  try {
    fs.writeFileSync(REGISTRATIONS_FILE, JSON.stringify(data, null, 2));
  } catch (err) {}
}

// ==========================================
// MONGOOSE SCHEMAS & MODELS
// ==========================================
const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: '' },
  city: { type: String, default: '' },
  wishMessage: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const Registration = mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);

const CardSchema = new mongoose.Schema({
  cardId: { type: String, required: true, unique: true },
  templateId: { type: String, default: 'navy-lotus' },
  heading: { type: String, default: 'Happy Diwali' },
  senderName: { type: String, required: true },
  subtitle: { type: String, default: '' },
  format: { type: String, default: 'status' },
  language: { type: String, default: 'en' },
  message: { type: String, default: '' },
  fontStyle: { type: String, default: 'elegant' },
  symbol: { type: String, default: 'none' },
  symbolIcon: { type: String, default: '' },
  familyPhoto: { type: String, default: 'assets/avatar-boy.png' },
  createdAt: { type: Date, default: Date.now }
}, { strict: false });

const Card = mongoose.models.Card || mongoose.model('Card', CardSchema);

// ==========================================
// MONGODB ATLAS CONNECTION
// ==========================================
let rawMongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || '';
if (rawMongoUri.startsWith('MONGO_URI=')) {
  rawMongoUri = rawMongoUri.replace(/^MONGO_URI=/, '').trim();
}
const MONGO_URI = rawMongoUri.trim();
let isMongoConnected = false;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(async () => {
      isMongoConnected = true;
      console.log('🌟 [SparkleWish] MongoDB Atlas Connected Successfully!');

      // Auto-sync existing local JSON leads to MongoDB
      try {
        const localList = getRegistrations();
        for (const item of localList) {
          if (item && item.phone) {
            const exists = await Registration.findOne({ phone: item.phone });
            if (!exists) {
              await Registration.create({
                name: item.name || 'Anonymous',
                phone: item.phone,
                email: item.email || '',
                city: item.city || '',
                wishMessage: item.wishMessage || '',
                createdAt: item.createdAt ? new Date(item.createdAt) : new Date()
              });
              console.log(`📥 [MongoDB] Synced lead into database: ${item.name} (${item.phone})`);
            }
          }
        }
      } catch (syncErr) {
        console.warn('⚠️ [MongoDB] Leads sync note:', syncErr.message);
      }

      // Auto-sync existing cards from cards.json into MongoDB
      try {
        const localCards = getCards();
        for (const [cId, cData] of Object.entries(localCards)) {
          if (cData && cId) {
            await Card.findOneAndUpdate(
              { cardId: cId },
              {
                cardId: cId,
                templateId: cData.templateId || cData.template || 'navy-lotus',
                heading: cData.heading || 'Happy Diwali',
                senderName: cData.senderName || '',
                subtitle: cData.subtitle || '',
                format: cData.format || 'status',
                language: cData.language || 'en',
                message: cData.message || cData.customMessage || '',
                fontStyle: cData.fontStyle || 'elegant',
                symbol: cData.symbol || 'none',
                symbolIcon: cData.symbolIcon || '',
                familyPhoto: cData.familyPhoto || 'assets/avatar-boy.png',
                createdAt: cData.createdAt ? new Date(cData.createdAt) : new Date()
              },
              { upsert: true }
            );
          }
        }
      } catch (cErr) {
        console.warn('⚠️ [MongoDB] Card sync note:', cErr.message);
      }
    })
    .catch((err) => {
      console.error('⚠️ [SparkleWish] MongoDB Connection Failed:', err.message);
      console.log('📁 Continuing with local JSON file fallback mode.');
    });
} else {
  console.log('ℹ️ [SparkleWish] No MONGO_URI defined in .env yet.');
  console.log('📁 Running in local JSON storage mode (data safely stored in registrations.json & cards.json).');
}

// ==========================================
// ROUTES & API ENDPOINTS
// ==========================================

// 1. Create / Save Custom Card
app.post('/api/cards', async (req, res) => {
  const cardData = req.body;
  if (!cardData || !cardData.senderName) {
    return res.status(400).json({ success: false, error: 'Sender name is required' });
  }

  const cardId = 'dw_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36).substring(4);
  const newCard = {
    id: cardId,
    ...cardData,
    createdAt: new Date().toISOString()
  };

  // Always save to JSON file
  const cards = getCards();
  cards[cardId] = newCard;
  saveCards(cards);

  // If MongoDB is connected, save to MongoDB collection
  if (mongoose.connection.readyState === 1) {
    try {
      await Card.findOneAndUpdate(
        { cardId: newCard.id },
        {
          cardId: newCard.id,
          templateId: newCard.templateId || newCard.template || 'navy-lotus',
          heading: newCard.heading || 'Happy Diwali',
          senderName: newCard.senderName,
          subtitle: newCard.subtitle || '',
          format: newCard.format || 'status',
          language: newCard.language || 'en',
          message: newCard.message || newCard.customMessage || '',
          fontStyle: newCard.fontStyle || 'elegant',
          symbol: newCard.symbol || 'none',
          symbolIcon: newCard.symbolIcon || '',
          familyPhoto: newCard.familyPhoto || 'assets/avatar-boy.png',
          createdAt: newCard.createdAt ? new Date(newCard.createdAt) : new Date()
        },
        { upsert: true, new: true }
      );
    } catch (e) {
      console.warn('⚠️ Card saved to file, MongoDB copy failed:', e.message);
    }
  }

  res.json({
    success: true,
    id: cardId,
    shareUrl: `/view.html?id=${cardId}&tpl=${newCard.templateId || 'emerald-ganesh'}`,
    card: newCard
  });
});

// 2. Get Card by ID
app.get('/api/cards/:id', async (req, res) => {
  const { id } = req.params;

  // 1. Check local cards.json first as authoritative source
  const localCards = getCards();
  const localCard = localCards[id];

  let cardData = localCard ? { ...localCard } : null;

  // 2. Check MongoDB if connected
  if (mongoose.connection.readyState === 1) {
    try {
      const doc = await Card.findOne({ cardId: id }).lean();
      if (doc) {
        // Protect against any old 'royal-gold' or empty message
        const validTpl = (doc.templateId && doc.templateId !== 'royal-gold')
          ? doc.templateId
          : (doc.template || (localCard ? (localCard.templateId || localCard.template) : 'navy-lotus'));

        const validMsg = doc.message || doc.customMessage || (localCard ? (localCard.message || localCard.customMessage) : '') || 'Happy Diwali!';
        const validFamilyPhoto = doc.familyPhoto || (localCard ? localCard.familyPhoto : '') || 'assets/avatar-boy.png';

        cardData = {
          ...(localCard || {}),
          ...doc,
          id: doc.cardId || id,
          templateId: validTpl,
          template: validTpl,
          message: validMsg,
          heading: doc.heading || (localCard ? localCard.heading : 'Happy Diwali'),
          senderName: doc.senderName || (localCard ? localCard.senderName : ''),
          subtitle: doc.subtitle || (localCard ? localCard.subtitle : ''),
          symbol: doc.symbol || (localCard ? localCard.symbol : 'none'),
          familyPhoto: validFamilyPhoto
        };
      }
    } catch (e) {}
  }

  if (!cardData) {
    return res.status(404).json({ success: false, error: 'Card not found' });
  }

  res.json({ success: true, card: cardData });
});

// 3. Health & DB Status Check
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.json({
    status: 'ok',
    database: dbStatus,
    mongoConnected: mongoose.connection.readyState === 1,
    time: new Date().toISOString()
  });
});

// 4. Register User Lead API (Saves to MongoDB and local JSON)
app.post('/api/register', async (req, res) => {
  try {
    const { name, phone, email, city, wishMessage } = req.body;
    if (!name || !phone) {
      return res.status(400).json({ success: false, error: 'Name and phone number are required' });
    }

    const regData = {
      id: 'REG-' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      city: city ? city.trim() : '',
      wishMessage: wishMessage ? wishMessage.trim() : '',
      createdAt: new Date().toISOString()
    };

    // 1. Save to local JSON backup (Deduplicate by phone: 1 number = 1 entry)
    const rawList = getRegistrations();
    const list = rawList.filter(r => (r.phone || '').trim() !== regData.phone);
    list.unshift(regData);
    saveRegistrations(list);

    // 2. Save to MongoDB if connected (Upsert by phone so duplicate records are never created)
    let mongoSaved = false;
    if (mongoose.connection.readyState === 1) {
      try {
        await Registration.findOneAndUpdate(
          { phone: regData.phone },
          {
            name: regData.name,
            phone: regData.phone,
            createdAt: new Date(regData.createdAt)
          },
          { upsert: true, new: true }
        );
        mongoSaved = true;
        console.log(`✅ [MongoDB] Saved/Updated unique lead for ${regData.name} (${regData.phone})`);
      } catch (dbErr) {
        console.error('⚠️ [MongoDB] Save failed, fallback kept:', dbErr.message);
      }
    }

    res.json({
      success: true,
      message: 'Registration successful! Happy Diwali!',
      registration: regData,
      storage: mongoSaved ? 'mongodb' : 'json'
    });
  } catch (err) {
    console.error('Registration API error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// 5. Admin Login API
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && (password === 'admin123' || password === 'sparkle2026')) {
    return res.json({
      success: true,
      token: 'sparkle_admin_token_' + Date.now()
    });
  }
  return res.status(401).json({ success: false, error: 'Invalid username or password' });
});

// 6. Admin Get All Registrations API (Reads from MongoDB or JSON, Deduplicated by Phone)
app.get('/api/admin/registrations', async (req, res) => {
  try {
    let registrations = [];
    let source = 'json';

    if (mongoose.connection.readyState === 1) {
      try {
        const docs = await Registration.find().sort({ createdAt: -1 }).lean();
        registrations = docs.map((doc) => ({
          id: doc._id.toString(),
          name: doc.name,
          phone: doc.phone,
          createdAt: doc.createdAt ? new Date(doc.createdAt).toISOString() : new Date().toISOString()
        }));
        source = 'mongodb';
      } catch (dbErr) {
        console.warn('⚠️ [MongoDB] Fetch failed, using JSON backup:', dbErr.message);
        registrations = getRegistrations();
      }
    } else {
      registrations = getRegistrations();
    }

    // Strictly deduplicate by phone number - keep the newest entry for each unique phone
    const seenPhones = new Set();
    const uniqueRegistrations = [];
    for (const r of registrations) {
      const p = (r.phone || '').trim();
      if (p && !seenPhones.has(p)) {
        seenPhones.add(p);
        uniqueRegistrations.push(r);
      }
    }
    registrations = uniqueRegistrations;

    res.json({
      success: true,
      count: registrations.length,
      registrations,
      database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      source
    });
  } catch (err) {
    console.error('Admin registrations API error:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// 7. Route for /adminlogin & /adminlogin.html
app.get('/adminlogin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'adminlogin.html'));
});

// Fallback to index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`✨ [SparkleWish] Server running on http://localhost:${PORT}`);
  console.log(`📊 Admin Portal:  http://localhost:${PORT}/adminlogin.html`);
  console.log(`💾 Database:      ${mongoose.connection.readyState === 1 ? 'MongoDB Connected' : 'Checking .env / Local fallback'}`);
  console.log(`======================================================\n`);
});
