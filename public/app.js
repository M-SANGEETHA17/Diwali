/**
 * SparkleWish Frontend Application Logic - Ultra-Realistic Snehpatrika Replica
 * 10 100% Natural, Balanced Luxury Invitation Cards • Handcrafted Artworks • Authentic Family Crest
 * 4-Step Interactive Editor • English / தமிழ் / हिन्दी
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  // Multi-stop Gold Foil Gradient definitions for SVG
  const GOLD_DEFS = `
    <defs>
      <linearGradient id="gGoldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="18%" stop-color="#fff2b2"/>
        <stop offset="42%" stop-color="#fed776"/>
        <stop offset="70%" stop-color="#d4af37"/>
        <stop offset="88%" stop-color="#b38217"/>
        <stop offset="100%" stop-color="#6b4604"/>
      </linearGradient>
      <linearGradient id="gGoldRich" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fff8d6"/>
        <stop offset="45%" stop-color="#eab308"/>
        <stop offset="100%" stop-color="#854d0e"/>
      </linearGradient>
      <linearGradient id="gFlame" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="#dc2626"/>
        <stop offset="35%" stop-color="#ea580c"/>
        <stop offset="70%" stop-color="#facc15"/>
        <stop offset="100%" stop-color="#ffffff"/>
      </linearGradient>
      <radialGradient id="gAura" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fef08a" stop-opacity="0.95"/>
        <stop offset="45%" stop-color="#f59e0b" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="gClayBowl" cx="50%" cy="20%" r="80%">
        <stop offset="0%" stop-color="#f97316"/>
        <stop offset="60%" stop-color="#c2410c"/>
        <stop offset="100%" stop-color="#7c2d12"/>
      </radialGradient>
    </defs>
  `;

  // ==================== 1. DATA: 10 LUXURY SNEHPATRIKA TEMPLATES ====================
  const TEMPLATES = [
    {
      id: 'navy-lotus',
      name: 'Gold foil lotus diya',
      badge: 'Invite + RSVP',
      bgClass: 'tpl-navy-lotus',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'Wishing you and your family a joyful Diwali filled with love, laughter and prosperous beginnings!',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_navy_lotus.png" alt="Royal Lotus Diya" class="h-32 sm:h-36 w-auto max-w-[90%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(253,224,71,0.65)] select-none pointer-events-none">`
    },
    {
      id: 'clay-diya',
      name: 'Painted clay diya',
      badge: 'Invite + RSVP',
      bgClass: 'tpl-clay-diya',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'Wishing you and your family a joyful Diwali filled with love, laughter and prosperous beginnings!',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_clay_diya.png" alt="Painted Clay Diya" class="h-32 sm:h-36 w-auto max-w-[90%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(253,224,71,0.65)] select-none pointer-events-none">`
    },
    {
      id: 'crimson-kalash',
      name: 'Gold foil kalash',
      badge: 'Invite + RSVP',
      bgClass: 'tpl-crimson-kalash',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '॥ श्री लक्ष्मी प्रसन्न ॥',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'Wishing you and your family a joyful Diwali filled with love, laughter and prosperous beginnings!',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_crimson_kalash.png" alt="Poornakumbha Kalash" class="h-32 sm:h-36 w-auto max-w-[90%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(253,230,138,0.65)] select-none pointer-events-none">`
    },
    {
      id: 'emerald-ganesh',
      name: 'Diwali Crackers & Flowerpots',
      badge: 'Free greeting',
      bgClass: 'tpl-emerald-ganesh',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '॥ शुभ दीपावली ॥',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'May this Diwali fill your home with light, health and happiness.',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_crackers.png" alt="Diwali Crackers & Flowerpots" class="h-32 sm:h-36 w-auto max-w-[95%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(251,191,36,0.7)] select-none pointer-events-none">`
    },
    {
      id: 'akash-kandil',
      name: 'Festive Akash Kandil',
      badge: 'Invite + RSVP',
      bgClass: 'tpl-akash-kandil',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'Wishing you and your family a joyful Diwali filled with love, laughter and prosperous beginnings!',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_akash_kandil.png" alt="Festive Akash Kandil" class="h-32 sm:h-36 w-auto max-w-[90%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(245,158,11,0.65)] select-none pointer-events-none">`
    },
    {
      id: 'midnight-gold',
      name: 'Business gold foil diyas',
      badge: 'Corporate & Family',
      bgClass: 'tpl-midnight-gold',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '',
      dateTime: 'WARMEST FESTIVE WISHES',
      venue: 'THANK YOU FOR YOUR VALUED PATRONAGE',
      defaultMsg: 'Thank you for your trust and support through the year. Wishing you and your family a Diwali full of light, health and happiness.',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_midnight_gold.png" alt="South Indian Brass Kuthu Vilakku" class="h-32 sm:h-36 w-auto max-w-[90%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(251,191,36,0.65)] select-none pointer-events-none">`
    },
    {
      id: 'tree-of-life',
      name: 'Diwali Tree of Light',
      badge: 'Invite + RSVP',
      bgClass: 'tpl-tree-of-life',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '॥ श्री गणेशाय नमः ॥',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'Wishing you and your family a joyful Diwali filled with love, laughter and prosperous beginnings!',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_tree_of_life.png" alt="Pichwai Tree of Life" class="h-32 sm:h-36 w-auto max-w-[90%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(250,225,156,0.65)] select-none pointer-events-none">`
    },
    {
      id: 'marigold-toran',
      name: 'Marigold & lotus garland',
      badge: 'Invite + RSVP',
      bgClass: 'tpl-marigold-toran',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '॥ श्री लक्ष्मी प्रसन्न ॥',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'Wishing you and your family a joyful Diwali filled with love, laughter and prosperous beginnings!',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_marigold_toran.png" alt="Fresh Marigold Toran Garland" class="h-28 sm:h-32 w-auto max-w-[95%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(251,191,36,0.65)] select-none pointer-events-none">`
    },
    {
      id: 'royal-purple',
      name: 'Royal Purple Glow',
      badge: 'Signature Edition',
      bgClass: 'tpl-royal-purple',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'May the divine light of Diwali bring peace, prosperity and happiness to your home.',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_royal_purple.png" alt="Royal Golden Peacock Diya" class="h-32 sm:h-36 w-auto max-w-[90%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(254,240,138,0.65)] select-none pointer-events-none">`
    },
    {
      id: 'golden-rangoli',
      name: 'Sparkling Diwali Crackers',
      badge: 'Festive Crackers & Light',
      bgClass: 'tpl-golden-rangoli',
      heading: 'Happy Diwali',
      tagline: 'THE DESHPANDE FAMILY WISHES YOU',
      mantra: '॥ शुभ दीपावली ॥',
      dateTime: 'SUNDAY, 8 NOVEMBER • 7:30 PM',
      venue: 'B-402, SARASWATI SOCIETY, KOTHRUD, PUNE',
      defaultMsg: 'Wishing you a sparkling, joyful and prosperous Diwali filled with light, happiness and celebration!',
      hasMarigold: false,
      artSvg: `<img src="assets/real_art_crackers.png" alt="Diwali Crackers & Sparks" class="h-32 sm:h-36 w-auto max-w-[95%] mx-auto object-contain filter drop-shadow-[0_8px_25px_rgba(251,191,36,0.7)] select-none pointer-events-none">`
    }
  ];

  // ==================== 2. WISHES DATABASE ====================
  const WISHES = {
    en: [
      'Wishing you and your family a joyous Diwali filled with love, laughter and prosperous beginnings!',
      'May the divine lights of Diwali dispel all darkness and illuminate your life with health and happiness.',
      'May Goddess Lakshmi bless you with endless abundance, peace and success this festive season.',
      'Wishing you a sparkling Diwali and a joyous New Year filled with sweet memories!'
    ],
    ta: [
      'இனிய தீபாவளி நல்வாழ்த்துகள்! எங்கள் இல்லத் தீபாவளி கொண்டாட்டத்திற்கு அன்போடு அழைக்கிறோம்.',
      'இந்த தீபாவளி திருநாளில் உங்கள் வாழ்வில் அனைத்து நலன்களும், செல்வமும், அமைதியும் நிறைய மனமார்ந்த வாழ்த்துகள்!',
      'லட்சுமி தேவியின் பரிபூரண அருளால் உங்கள் குடும்பத்தில் நல்வாழ்வும், மகிழ்ச்சியும் பெருகிட இனிய தீபாவளி வாழ்த்துக்கள்!',
      'தித்திக்கும் இனிப்புகளோடும், வண்ணமிகு பட்டாசு வெளிச்சத்தோடும் உங்கள் குடும்பத்தினருடன் மகிழ்ச்சியாக கொண்டாடுங்கள்!'
    ],
    hi: [
      'दीपावली मिलन समारोह में आपका सपरिवार हार्दिक स्वागत है। रोशनी और मिठास के इस पर्व पर अवश्य पधारें।',
      'दीपावली के इस पावन पर्व पर आपके जीवन में सुख, शांति और समृद्धि का वास हो। आपको और आपके परिवार को शुभ दीपावली!',
      'मां लक्ष्मी और भगवान गणेश की कृपा आप पर सदा बनी रहे। दीपों का यह त्योहार आपके जीवन में खुशियों का उजाला लाए।',
      'दीप जलते रहें, मन मिलते रहें, गिले-शिकवे सारे दूर होते रहें। आपको सपरिवार दिवाली की हार्दिक शुभकामनाएं!'
    ]
  };

  // ==================== 3. APP STATE & SYMBOL SVGS ====================
  const TITLE_PRESETS = {
    en: ['Happy Diwali', 'Shubh Deepavali', 'Joyful Diwali'],
    ta: ['இனிய தீபாவளி நல்வாழ்த்துகள்', 'தீபாவளி நல்வாழ்த்துக்கள்', 'மகிழ்ச்சியான தீபாவளி'],
    hi: ['शुभ दीपावली', 'दीपावली की हार्दिक शुभकामनाएं', 'हैप्पी दिवाली']
  };

  const SUBTITLE_PRESETS = {
    en: 'Wishing you and your family abundant peace, prosperity and happiness!',
    ta: 'உங்கள் இல்லத்தில் நலன்களும், செல்வமும், அமைதியும் நிறைய மனமார்ந்த தீபாவளி வாழ்த்துகள்!',
    hi: 'दीपावली के इस पावन पर्व पर आपके जीवन में सुख, शांति और समृद्धि का वास हो।'
  };

  const BLESSING_PILL = {
    en: 'Peace • Prosperity • Happiness',
    ta: 'அமைதி • செல்வம் • மகிழ்ச்சி',
    hi: 'शांति • समृद्धि • खुशियां'
  };

  const SIGNATURE_PRESETS = {
    en: (sender) => sender ? `Warmest Wishes & Joy From ${sender}` : 'Warmest Wishes & Joy From Our Family To Yours',
    ta: (sender) => sender ? `${sender} குடும்பத்தினரின் மனமார்ந்த வாழ்த்துகள்` : 'எங்கள் குடும்பத்தினரின் மனமார்ந்த நல்வாழ்த்துகள்',
    hi: (sender) => sender ? `${sender} परिवार की ओर से सपरिवार मंगलकामनाएं` : 'हमारे परिवार की ओर से हार्दिक मंगलकामनाएं'
  };

  const HOST_HELPERS = {
    en: 'Used in: "NAME WISHES YOU"',
    ta: 'Used in: "NAME வழங்கும் தீபாவளி நல்வாழ்த்துகள்"',
    hi: 'Used in: "NAME की ओर से सपरिवार हार्दिक शुभकामनाएं"'
  };

  const SYMBOL_SVGS = {
    flowerpot: `<img src="assets/mini_flowerpot.png" alt="Flowerpot" class="h-10 w-10 object-contain filter drop-shadow-[0_4px_12px_rgba(251,191,36,0.85)] inline-block select-none pointer-events-none">`,
    rocket: `<img src="assets/mini_rocket.png" alt="Rocket" class="h-10 w-10 object-contain filter drop-shadow-[0_4px_12px_rgba(239,68,68,0.85)] inline-block select-none pointer-events-none">`,
    sparkler: `<img src="assets/mini_sparkler.png" alt="Sparkler" class="h-10 w-10 object-contain filter drop-shadow-[0_4px_12px_rgba(250,204,21,0.85)] inline-block select-none pointer-events-none">`,
    diya: `<img src="assets/mini_diya.png" alt="Diya" class="h-10 w-10 object-contain filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.85)] inline-block select-none pointer-events-none">`,
    crackers: `<img src="assets/mini_crackers.png" alt="Crackers" class="h-10 w-10 object-contain filter drop-shadow-[0_4px_12px_rgba(220,38,38,0.85)] inline-block select-none pointer-events-none">`,
    ganesh: `<img src="assets/mini_diya.png" alt="Diya" class="h-10 w-10 object-contain inline-block">`,
    lakshmi: `<img src="assets/mini_flowerpot.png" alt="Flowerpot" class="h-10 w-10 object-contain inline-block">`,
    om: `<img src="assets/mini_sparkler.png" alt="Sparkler" class="h-10 w-10 object-contain inline-block">`
  };

  let state = {
    currentStep: 1,
    selectedTemplate: TEMPLATES[0],
    headingTitle: TEMPLATES[0].heading,
    senderName: localStorage.getItem('studio_sender') || 'The Deshpande family',
    subtitle: 'Wishing you and your family abundant peace, prosperity and happiness!',
    format: 'status',
    language: 'en',
    message: WISHES.en[0],
    fontStyle: 'elegant',
    symbol: 'diya',
    symbolIcon: 'diya',
    familyPhoto: localStorage.getItem('studio_avatar') || 'assets/avatar-boy.png',
    cardId: null,
    shareUrl: ''
  };

  // ==================== 4. DOM ELEMENTS ====================
  const galleryView = document.getElementById('gallery-view');
  const editorView = document.getElementById('editor-view');
  const templatesGrid = document.getElementById('templates-grid');

  const navBackBtn = document.getElementById('nav-back-btn');
  const viewTemplatesBtn = document.getElementById('view-templates-btn');
  const brandLogo = document.getElementById('brand-logo');
  const headerBrowseBtn = document.getElementById('header-browse-btn');

  const stepIndicator = document.getElementById('step-indicator');
  const stepTitleText = document.getElementById('step-title-text');
  const stepProgressBar = document.getElementById('step-progress-bar');
  const stepProgressBarContainer = document.getElementById('step-progress-bar-container');

  const greetingCard = document.getElementById('greeting-card');
  const cardRenderWrapper = document.getElementById('card-render-wrapper');
  const cardArtworkContainer = document.getElementById('card-artwork-container');
  const cardMantra = document.getElementById('card-mantra');
  const cardSymbol = document.getElementById('card-symbol');
  const cardFamilyImg = document.getElementById('card-family-img');
  const cardHostLine = document.getElementById('card-host-line');
  const cardHeading = document.getElementById('card-heading');
  const cardMessageText = document.getElementById('card-message-text');
  const cardDatetimeText = document.getElementById('card-datetime-text');
  const cardVenueText = document.getElementById('card-venue-text');
  const cardMarigolds = document.getElementById('card-marigolds');
  const cardBlessingPill = document.getElementById('card-blessing-pill');

  const familyPhotoWrapper = document.getElementById('family-photo-wrapper');
  const avatarBtnBoy = document.getElementById('avatar-btn-boy');
  const avatarBtnGirl = document.getElementById('avatar-btn-girl');
  const btnUploadPhoto = document.getElementById('btn-upload-photo');
  const inputPhotoFile = document.getElementById('input-photo-file');
  const formPhotoPreview = document.getElementById('form-photo-preview');

  const activeTemplateName = document.getElementById('active-template-name');
  const formatStatusBtn = document.getElementById('format-status-btn');
  const formatPostBtn = document.getElementById('format-post-btn');
  const fullPreviewBtn = document.getElementById('full-preview-btn');

  // Step 1
  const step1Content = document.getElementById('step-1-content');
  const helperHostPreview = document.getElementById('helper-host-preview');
  const presetTitleChipsContainer = document.getElementById('preset-title-chips-container');
  const inputSenderName = document.getElementById('input-sender-name');
  const charCountSender = document.getElementById('char-count-sender');
  const inputHeadingTitle = document.getElementById('input-heading-title');
  const inputSubtitle = document.getElementById('input-subtitle');
  const charCountSubtitle = document.getElementById('char-count-subtitle');
  const btnGotoStep2 = document.getElementById('btn-goto-step-2');

  // Step 2
  const step2Content = document.getElementById('step-2-content');
  const langTabBtns = document.querySelectorAll('.lang-tab-btn');
  const messagePresetsList = document.getElementById('message-presets-list');
  const inputCustomMessage = document.getElementById('input-custom-message');
  const btnBackToStep1 = document.getElementById('btn-back-to-step-1');
  const btnGotoStep3 = document.getElementById('btn-goto-step-3');

  // Step 3
  const step3Content = document.getElementById('step-3-content');
  const fontStyleBtns = document.querySelectorAll('.font-style-btn');
  const symbolBtns = document.querySelectorAll('.symbol-btn');
  const btnBackToStep2 = document.getElementById('btn-back-to-step-2');
  const btnGotoStep4 = document.getElementById('btn-goto-step-4');

  // Step 4
  const step4Content = document.getElementById('step-4-content');
  const step4TopShareBanner = document.getElementById('step4-top-share-banner');
  const btnTopWhatsappShare = document.getElementById('btn-top-whatsapp-share');
  const cardStepShareBtn = document.getElementById('card-step-share-btn');
  const cardStepSavedPill = document.getElementById('card-step-saved-pill');
  const btnDownloadImage = document.getElementById('btn-download-image');
  const btnShareWhatsapp = document.getElementById('btn-share-whatsapp');
  const generatedShareLink = document.getElementById('generated-share-link');
  const btnCopyLink = document.getElementById('btn-copy-link');
  const copyBtnText = document.getElementById('copy-btn-text');
  const btnSendLinkWhatsapp = document.getElementById('btn-send-link-whatsapp');
  const btnChangeDetails = document.getElementById('btn-change-details');

  // ==================== 5. RENDER NATURAL SNEHPATRIKA GALLERY ====================
  const FLY_CLASSES = ['fly-in-left', 'fly-in-top', 'fly-in-right', 'fly-in-bottom'];
  function renderGallery() {
    if (!templatesGrid) return;
    templatesGrid.innerHTML = TEMPLATES.map((tpl, idx) => {
      const flyClass = FLY_CLASSES[idx % FLY_CLASSES.length];
      const delay = (idx * 0.08).toFixed(2);
      return `
      <div class="template-card group cursor-pointer ${flyClass}" style="animation-delay: ${delay}s" data-id="${tpl.id}">
        
        <!-- Complete, Balanced Luxury Card with Inner Gold Filigree Frame -->
        <div class="luxury-gallery-card aspect-[9/16] w-full rounded-2xl overflow-hidden p-3.5 sm:p-4 text-center flex flex-col justify-between relative ${tpl.bgClass}">
          
          <!-- Inner Gold Filigree Frame -->
          <div class="card-inner-frame"></div>

          <!-- Top Artwork (Pure vector, zero white bars, transparent background) -->
          <div class="w-full flex justify-center items-center pt-1 relative z-10">
            ${tpl.artSvg}
          </div>

          <!-- Sanskrit Mantra if present -->
          ${tpl.mantra ? `<div class="text-[8px] font-hindi tracking-widest text-amber-200/90 font-semibold my-0.5 relative z-10">${tpl.mantra}</div>` : ''}

          <!-- Circular Family Portrait Crest Badge -->
          <div class="my-auto py-0.5 flex flex-col items-center relative z-10">
            <div class="w-12 h-12 sm:w-13 sm:h-13 rounded-full border-2 border-[#f5d061] p-0.5 shadow-[0_0_12px_rgba(245,158,11,0.5)] overflow-hidden bg-amber-950/60 mx-auto">
              <img src="assets/default_avatar.svg" alt="Profile" class="w-full h-full object-cover rounded-full">
            </div>
            <div class="text-[7.5px] sm:text-[8.5px] tracking-[0.16em] uppercase opacity-95 font-cinzel mt-1 font-bold text-amber-200">
              ${tpl.tagline}
            </div>
            <div class="font-great-vibes text-2xl sm:text-[26px] mt-0.5 gold-title font-normal leading-tight">
              ${tpl.heading}
            </div>
          </div>

          <!-- Invitation Message -->
          <div class="px-1 text-[8px] opacity-95 leading-relaxed font-outfit line-clamp-2 my-0.5 relative z-10 text-amber-50">
            ${tpl.defaultMsg}
          </div>

          <!-- Bottom Festive Blessing Footer -->
          <div class="pt-1.5 pb-0.5 text-[7px] sm:text-[7.5px] opacity-90 leading-relaxed font-outfit border-t border-amber-400/25 relative z-10 flex flex-col items-center">
            <div class="flex items-center space-x-1 text-amber-300 text-[6.5px] tracking-wider uppercase font-semibold">
              <span>✦</span>
              <span>Peace • Joy • Prosperity</span>
              <span>✦</span>
            </div>
            <div class="text-[6px] text-amber-200/90 font-medium tracking-wide mt-0.5">Warmest Diwali Wishes</div>
          </div>

        </div>

        <!-- Title & Subtitle below card -->
        <div class="pt-2.5 px-0.5 text-left">
          <h4 class="font-semibold text-xs sm:text-sm text-amber-100 line-clamp-1 group-hover:text-amber-300 font-marcellus">
            ${tpl.name}
          </h4>
          <span class="text-[10px] text-amber-300/75 block mt-0.5 font-outfit">
            ${tpl.badge}
          </span>
        </div>

      </div>
    `;
    }).join('');

    document.querySelectorAll('.template-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openEditorWithTemplate(id);
      });
    });
  }

  // ==================== 6. OPEN EDITOR WITH TEMPLATE ====================
  function openEditorWithTemplate(templateId) {
    const tpl = TEMPLATES.find(t => t.id === templateId) || TEMPLATES[0];
    state.selectedTemplate = tpl;
    const langTitles = TITLE_PRESETS[state.language] || TITLE_PRESETS.en;
    state.headingTitle = langTitles[0];
    if (inputHeadingTitle) inputHeadingTitle.value = state.headingTitle;

    galleryView?.classList.add('hidden');
    editorView?.classList.remove('hidden');
    navBackBtn?.classList.remove('hidden');
    viewTemplatesBtn?.classList.remove('hidden');
    stepIndicator?.classList.remove('hidden');
    stepProgressBarContainer?.classList.remove('hidden');
    headerBrowseBtn?.classList.add('hidden');

    renderTitleChips(state.language);
    goToStep(1);
    updateLiveCard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function backToGallery(scrollToTemplates = false) {
    editorView?.classList.add('hidden');
    galleryView?.classList.remove('hidden');
    navBackBtn?.classList.add('hidden');
    viewTemplatesBtn?.classList.add('hidden');
    stepIndicator?.classList.add('hidden');
    stepProgressBarContainer?.classList.add('hidden');
    headerBrowseBtn?.classList.remove('hidden');

    if (scrollToTemplates) {
      setTimeout(() => {
        const targetEl = document.getElementById('templates-headline') || document.getElementById('templates-grid');
        if (targetEl) {
          const navHeight = 70;
          const elPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elPosition - navHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          window.scrollTo({ top: 460, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  navBackBtn?.addEventListener('click', () => backToGallery(false));
  viewTemplatesBtn?.addEventListener('click', () => backToGallery(true));
  brandLogo?.addEventListener('click', (e) => {
    e.preventDefault();
    backToGallery(false);
  });
  headerBrowseBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    backToGallery(true);
  });

  // Dynamic Step Back Button above Card Preview
  const cardStepBackBtn = document.getElementById('card-step-back-btn');
  cardStepBackBtn?.addEventListener('click', () => {
    if (state.currentStep === 1) {
      backToGallery(true);
    } else {
      goToStep(state.currentStep - 1);
    }
  });

  // ==================== 7. LIVE CARD UPDATES ====================
  function updateLiveCard() {
    const tpl = state.selectedTemplate;
    if (!greetingCard) return;

    // Apply template background & aspect ratio
    greetingCard.className = `relative overflow-hidden transition-all duration-300 flex flex-col justify-between text-center select-none shadow-2xl p-4 sm:p-5 ${state.format === 'status' ? 'card-status-ratio' : 'card-post-ratio'} ${tpl.bgClass}`;

    // Top Artwork (Pure SVG artwork with zero white bars)
    if (cardArtworkContainer) {
      cardArtworkContainer.innerHTML = tpl.artSvg;
    }

    // Mantra & Symbol
    if (cardMantra) {
      if (tpl.mantra) {
        cardMantra.textContent = tpl.mantra;
        cardMantra.classList.remove('hidden');
      } else {
        cardMantra.textContent = '';
        cardMantra.classList.add('hidden');
      }
    }

    if (cardSymbol) {
      if (state.symbol && state.symbol !== 'none' && SYMBOL_SVGS[state.symbol]) {
        cardSymbol.innerHTML = SYMBOL_SVGS[state.symbol];
        cardSymbol.classList.remove('hidden');
      } else {
        cardSymbol.classList.add('hidden');
        cardSymbol.innerHTML = '';
      }
    }

    // Family Crest Photo
    if (cardFamilyImg) cardFamilyImg.src = state.familyPhoto;
    if (formPhotoPreview) formPhotoPreview.src = state.familyPhoto;

    // Host Line
    const rawHost = state.senderName ? state.senderName.trim() : (state.language === 'ta' ? 'தேஷ்பாண்டே குடும்பத்தினர்' : state.language === 'hi' ? 'देशपांडे परिवार' : 'The Deshpande family');
    if (cardHostLine) {
      if (state.language === 'ta') {
        cardHostLine.className = 'font-tamil text-[10.5px] sm:text-[12px] font-semibold text-amber-200 mt-2 leading-tight tracking-normal';
        cardHostLine.textContent = `${rawHost} வழங்கும் தீபாவளி நல்வாழ்த்துகள்`;
      } else if (state.language === 'hi') {
        cardHostLine.className = 'font-hindi text-[10.5px] sm:text-[12px] font-semibold text-amber-200 mt-2 leading-tight tracking-normal';
        cardHostLine.textContent = `${rawHost} की ओर से सपरिवार हार्दिक शुभकामनाएं`;
      } else {
        cardHostLine.className = 'font-cinzel text-[9px] sm:text-[10.5px] tracking-[0.18em] uppercase font-bold text-amber-200 mt-2 leading-tight';
        cardHostLine.textContent = `${rawHost.toUpperCase()} WISHES YOU`;
      }
    }

    // Main Heading & Script Font
    if (cardHeading) {
      const activeHeading = (state.headingTitle !== undefined && state.headingTitle !== '') ? state.headingTitle : (TITLE_PRESETS[state.language] ? TITLE_PRESETS[state.language][0] : tpl.heading);
      cardHeading.textContent = activeHeading;
      if (state.language === 'ta') {
        cardHeading.className = 'font-tamil text-2xl sm:text-3xl font-bold leading-tight my-1 gold-title text-amber-100 filter drop-shadow-[0_2px_12px_rgba(245,158,11,0.6)]';
      } else if (state.language === 'hi') {
        cardHeading.className = 'font-hindi text-2xl sm:text-3xl font-bold leading-tight my-1 gold-title text-amber-100 filter drop-shadow-[0_2px_12px_rgba(245,158,11,0.6)]';
      } else {
        const fontClass = state.fontStyle === 'traditional' ? 'font-playfair italic' : 
                          state.fontStyle === 'modern' ? 'font-marcellus' : 'font-great-vibes';
        cardHeading.className = `${fontClass} text-3xl sm:text-4xl font-normal leading-tight my-0.5 gold-title text-amber-100 filter drop-shadow-[0_2px_12px_rgba(245,158,11,0.6)]`;
      }
    }

    // Invitation Message
    if (cardMessageText) {
      cardMessageText.textContent = state.message;
      if (state.language === 'ta') {
        cardMessageText.className = 'font-tamil text-[12px] sm:text-[13px] leading-relaxed text-amber-50/95 font-medium max-w-[94%] mx-auto';
      } else if (state.language === 'hi') {
        cardMessageText.className = 'font-hindi text-[12px] sm:text-[13px] leading-relaxed text-amber-50/95 font-medium max-w-[94%] mx-auto';
      } else {
        cardMessageText.className = 'font-outfit text-[13px] sm:text-[14px] leading-relaxed text-amber-50/95 font-medium max-w-[94%] mx-auto';
      }
    }

    // Card Blessing Pill
    if (cardBlessingPill) {
      cardBlessingPill.textContent = BLESSING_PILL[state.language] || BLESSING_PILL.en;
      if (state.language === 'ta') {
        cardBlessingPill.className = 'font-tamil text-[10px] sm:text-[11px] font-semibold tracking-normal';
      } else if (state.language === 'hi') {
        cardBlessingPill.className = 'font-hindi text-[10px] sm:text-[11px] font-semibold tracking-normal';
      } else {
        cardBlessingPill.className = 'font-outfit text-[10px] sm:text-[11px] tracking-widest uppercase font-semibold';
      }
    }

    // Festive Blessing Signature
    const cardSenderSign = document.getElementById('card-sender-sign');
    if (cardSenderSign) {
      const sender = state.senderName ? state.senderName.trim() : '';
      const signFunc = SIGNATURE_PRESETS[state.language] || SIGNATURE_PRESETS.en;
      cardSenderSign.textContent = signFunc(sender);
      if (state.language === 'ta') {
        cardSenderSign.className = 'text-xs sm:text-[13px] font-bold font-tamil text-amber-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] mt-0.5 tracking-normal';
      } else if (state.language === 'hi') {
        cardSenderSign.className = 'text-xs sm:text-[13px] font-bold font-hindi text-amber-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] mt-0.5 tracking-normal';
      } else {
        cardSenderSign.className = 'text-xs sm:text-[13px] font-bold font-marcellus text-amber-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] mt-0.5 tracking-wider';
      }
    }

    // Meta Badge
    if (activeTemplateName) activeTemplateName.textContent = tpl.name;
  }

  // ==================== 8. FESTIVE AVATAR (BOY / GIRL) & PHOTO UPLOAD ====================
  function updateAvatarSelectionUI() {
    const isBoy = state.familyPhoto === 'assets/avatar-boy.png';
    const isGirl = state.familyPhoto === 'assets/avatr-girl.png' || state.familyPhoto === 'assets/avatar-girl.png';

    if (avatarBtnBoy) {
      if (isBoy) {
        avatarBtnBoy.className = 'avatar-preset-btn group relative flex flex-col items-center p-1 rounded-2xl transition-all cursor-pointer border-2 border-amber-500 bg-amber-100/90 shadow-[0_0_12px_rgba(245,158,11,0.45)] ring-2 ring-amber-400';
      } else {
        avatarBtnBoy.className = 'avatar-preset-btn group relative flex flex-col items-center p-1 rounded-2xl transition-all cursor-pointer border-2 border-transparent hover:border-amber-300 hover:bg-amber-100/50';
      }
    }

    if (avatarBtnGirl) {
      if (isGirl) {
        avatarBtnGirl.className = 'avatar-preset-btn group relative flex flex-col items-center p-1 rounded-2xl transition-all cursor-pointer border-2 border-amber-500 bg-amber-100/90 shadow-[0_0_12px_rgba(245,158,11,0.45)] ring-2 ring-amber-400';
      } else {
        avatarBtnGirl.className = 'avatar-preset-btn group relative flex flex-col items-center p-1 rounded-2xl transition-all cursor-pointer border-2 border-transparent hover:border-amber-300 hover:bg-amber-100/50';
      }
    }
  }

  avatarBtnBoy?.addEventListener('click', () => {
    state.familyPhoto = 'assets/avatar-boy.png';
    localStorage.setItem('studio_avatar', state.familyPhoto);
    updateAvatarSelectionUI();
    updateLiveCard();
  });

  avatarBtnGirl?.addEventListener('click', () => {
    state.familyPhoto = 'assets/avatr-girl.png';
    localStorage.setItem('studio_avatar', state.familyPhoto);
    updateAvatarSelectionUI();
    updateLiveCard();
  });

  btnUploadPhoto?.addEventListener('click', () => inputPhotoFile?.click());
  familyPhotoWrapper?.addEventListener('click', () => inputPhotoFile?.click());

  inputPhotoFile?.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        state.familyPhoto = event.target.result;
        updateAvatarSelectionUI();
        updateLiveCard();
      };
      reader.readAsDataURL(file);
    }
  });

  // ==================== 9. FORMAT TOGGLE (STATUS 9:16 VS POST 1:1) ====================
  formatStatusBtn?.addEventListener('click', () => {
    state.format = 'status';
    formatStatusBtn.className = 'px-2.5 py-1 rounded-lg bg-amber-400 text-[#4a1010] font-extrabold shadow-sm text-[11px] sm:text-xs transition-all';
    if (formatPostBtn) formatPostBtn.className = 'px-2.5 py-1 rounded-lg text-amber-200/90 hover:text-white font-medium text-[11px] sm:text-xs transition-all';
    updateLiveCard();
  });

  formatPostBtn?.addEventListener('click', () => {
    state.format = 'post';
    formatPostBtn.className = 'px-2.5 py-1 rounded-lg bg-amber-400 text-[#4a1010] font-extrabold shadow-sm text-[11px] sm:text-xs transition-all';
    if (formatStatusBtn) formatStatusBtn.className = 'px-2.5 py-1 rounded-lg text-amber-200/90 hover:text-white font-medium text-[11px] sm:text-xs transition-all';
    updateLiveCard();
  });

  // Full Preview Modal Toggle
  fullPreviewBtn?.addEventListener('click', () => {
    cardRenderWrapper?.classList.toggle('scale-105');
    setTimeout(() => cardRenderWrapper?.classList.remove('scale-105'), 400);
  });

  // ==================== 10. DYNAMIC CHIPS & LANGUAGE SWITCHING ====================
  function renderTitleChips(lang) {
    if (!presetTitleChipsContainer) return;
    const titles = TITLE_PRESETS[lang] || TITLE_PRESETS.en;
    presetTitleChipsContainer.innerHTML = titles.map(title => {
      const isSelected = state.headingTitle === title;
      return `
        <button type="button" class="preset-title-chip px-3 py-1.5 rounded-lg border text-xs transition-all flex items-center gap-1.5 ${
          isSelected 
            ? 'bg-amber-200/95 border-amber-400 text-[#4a1010] font-bold shadow-xs' 
            : 'bg-amber-100/70 hover:bg-amber-200/60 border-amber-300/80 text-[#631818] font-medium'
        }" data-title="${title}">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-600"></i>
          <span class="${lang === 'ta' ? 'font-tamil' : lang === 'hi' ? 'font-hindi' : 'font-outfit'}">${title}</span>
        </button>
      `;
    }).join('');

    if (window.lucide) lucide.createIcons();

    presetTitleChipsContainer.querySelectorAll('.preset-title-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const chosen = chip.getAttribute('data-title');
        if (chosen) {
          state.headingTitle = chosen;
          if (inputHeadingTitle) inputHeadingTitle.value = chosen;
          renderTitleChips(state.language);
          updateLiveCard();
        }
      });
    });
  }

  function switchLanguage(lang) {
    if (!lang) return;
    const oldLang = state.language;
    state.language = lang;

    // 1. Sync Preview Header buttons (.lang-selector-btn)
    document.querySelectorAll('.lang-selector-btn').forEach(btn => {
      const bLang = btn.getAttribute('data-lang');
      if (bLang === lang) {
        btn.className = 'lang-selector-btn px-2.5 py-1 rounded-lg bg-amber-400 text-[#4a1010] font-extrabold shadow-sm text-xs transition-all';
      } else {
        btn.className = 'lang-selector-btn px-2.5 py-1 rounded-lg text-amber-200/90 hover:text-white font-medium text-xs transition-all';
      }
    });

    // 2. Sync Step 1 Language buttons (.step1-lang-btn)
    document.querySelectorAll('.step1-lang-btn').forEach(btn => {
      const bLang = btn.getAttribute('data-lang');
      if (bLang === lang) {
        btn.className = 'step1-lang-btn px-2.5 py-1 rounded-md text-xs font-bold transition-all bg-[#8b1e22] text-white shadow-xs';
      } else {
        btn.className = 'step1-lang-btn px-2.5 py-1 rounded-md text-xs font-medium text-[#714b30] hover:text-[#4a1010] transition-all';
      }
    });

    // 3. Sync Step 2 Language Tabs (.lang-tab-btn)
    document.querySelectorAll('.lang-tab-btn').forEach(btn => {
      const bLang = btn.getAttribute('data-lang');
      if (bLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 4. Update Host helper in Step 1
    if (helperHostPreview) {
      helperHostPreview.textContent = HOST_HELPERS[lang] || HOST_HELPERS.en;
    }

    // 5. Update Heading & Title Chips if heading is one of the defaults
    const allDefaultTitles = [
      ...TITLE_PRESETS.en,
      ...TITLE_PRESETS.ta,
      ...TITLE_PRESETS.hi,
      'Happy Diwali',
      'Shubh Deepavali',
      'Joyful Diwali'
    ];
    if (oldLang !== lang) {
      if (!state.headingTitle || allDefaultTitles.includes(state.headingTitle)) {
        state.headingTitle = TITLE_PRESETS[lang][0];
        if (inputHeadingTitle) inputHeadingTitle.value = state.headingTitle;
      }

      // Update Subtitle / Festive note if default
      const allDefaultSubtitles = [
        SUBTITLE_PRESETS.en,
        SUBTITLE_PRESETS.ta,
        SUBTITLE_PRESETS.hi
      ];
      if (!state.subtitle || allDefaultSubtitles.includes(state.subtitle)) {
        state.subtitle = SUBTITLE_PRESETS[lang];
        if (inputSubtitle) {
          inputSubtitle.value = state.subtitle;
          if (charCountSubtitle) charCountSubtitle.textContent = `${state.subtitle.length}/120`;
        }
      }
    }

    // Re-render Title Chips for current language
    renderTitleChips(lang);

    // 6. Update Step 2 Message presets
    renderMessagesForLanguage(lang);

    // 7. Update Live Card
    updateLiveCard();
  }

  // Bind All Language Switchers (Preview Header, Step 1, Step 2)
  document.querySelectorAll('.lang-selector-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  document.querySelectorAll('.step1-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  document.querySelectorAll('.lang-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  // ==================== 11. STEP 1: DETAILS HANDLERS ====================
  inputSenderName?.addEventListener('input', (e) => {
    state.senderName = e.target.value;
    if (charCountSender) charCountSender.textContent = `${e.target.value.length}/45`;
    localStorage.setItem('studio_sender', state.senderName);
    updateLiveCard();
  });

  inputHeadingTitle?.addEventListener('input', (e) => {
    state.headingTitle = e.target.value;
    renderTitleChips(state.language);
    updateLiveCard();
  });

  inputSubtitle?.addEventListener('input', (e) => {
    state.subtitle = e.target.value;
    if (charCountSubtitle) charCountSubtitle.textContent = `${e.target.value.length}/120`;
    updateLiveCard();
  });

  btnGotoStep2?.addEventListener('click', () => {
    goToStep(2);
  });

  // ==================== 12. STEP 2: MESSAGES HANDLERS ====================
  function renderMessagesForLanguage(lang) {
    state.language = lang;
    const wishes = WISHES[lang] || WISHES.en;
    if (!messagePresetsList) return;

    messagePresetsList.innerHTML = wishes.map((w, idx) => `
      <div class="message-radio-item ${state.message === w ? 'selected' : ''}" data-msg="${encodeURIComponent(w)}">
        <label class="flex items-start space-x-3 cursor-pointer">
          <input type="radio" name="preset-wish" class="mt-1 text-[#8b1e22] focus:ring-[#8b1e22]" ${state.message === w ? 'checked' : ''}>
          <span class="text-xs sm:text-[13px] text-[#3b1818] leading-relaxed select-none ${lang === 'ta' ? 'font-tamil font-medium' : lang === 'hi' ? 'font-hindi font-medium' : 'font-outfit'}">
            ${w}
          </span>
        </label>
      </div>
    `).join('');

    messagePresetsList.querySelectorAll('.message-radio-item').forEach(item => {
      item.addEventListener('click', () => {
        const msg = decodeURIComponent(item.getAttribute('data-msg'));
        state.message = msg;
        if (inputCustomMessage) inputCustomMessage.value = msg;
        messagePresetsList.querySelectorAll('.message-radio-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        const radio = item.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        updateLiveCard();
      });
    });

    if (!wishes.includes(state.message)) {
      state.message = wishes[0];
      if (inputCustomMessage) inputCustomMessage.value = wishes[0];
      const firstRadio = messagePresetsList.querySelector('.message-radio-item');
      if (firstRadio) firstRadio.classList.add('selected');
    }
    updateLiveCard();
  }

  inputCustomMessage?.addEventListener('input', (e) => {
    state.message = e.target.value;
    document.querySelectorAll('.message-radio-item').forEach(i => i.classList.remove('selected'));
    updateLiveCard();
  });

  btnBackToStep1?.addEventListener('click', () => goToStep(1));
  btnGotoStep3?.addEventListener('click', () => goToStep(3));

  // ==================== 12. STEP 3: STYLE & ACCENTS ====================
  fontStyleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fontStyleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.fontStyle = btn.getAttribute('data-font');
      updateLiveCard();
    });
  });

  symbolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      symbolBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sym = btn.getAttribute('data-symbol');
      state.symbol = sym;
      state.symbolIcon = sym;
      updateLiveCard();
    });
  });

  btnBackToStep2?.addEventListener('click', () => goToStep(2));
  btnGotoStep4?.addEventListener('click', () => {
    // Compulsory Step 3 to Step 4 Registration Popup
    if (typeof window.openRegisterModal === 'function') {
      window.openRegisterModal('step3');
    } else {
      goToStep(4);
      saveCardToServer();
    }
  });

  // ==================== 13. STEP 4: SAVE, DOWNLOAD & SHARE ====================
  btnDownloadImage?.addEventListener('click', async () => {
    btnDownloadImage.disabled = true;
    const origHtml = btnDownloadImage.innerHTML;
    btnDownloadImage.innerHTML = `<span>Generating HD PNG...</span>`;

    try {
      const canvas = await html2canvas(greetingCard, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        onclone: (clonedDoc) => {
          const cloneCard = clonedDoc.getElementById('greeting-card');
          if (cloneCard) {
            cloneCard.style.transform = 'none';
            cloneCard.style.animation = 'none';

            // Clean all text-transparent & bg-clip-text so html2canvas renders crystal clear gold text without solid rectangular blocks!
            const clipElements = cloneCard.querySelectorAll('.gold-title, .gold-title-warm, #card-heading, #card-sender-sign, .bg-clip-text, [class*="bg-clip-text"]');
            clipElements.forEach(el => {
              el.style.background = 'transparent';
              el.style.backgroundImage = 'none';
              el.style.webkitBackgroundClip = 'initial';
              el.style.backgroundClip = 'initial';
              el.style.webkitTextFillColor = '#fed776';
              el.style.color = '#fed776';
              el.style.textShadow = '0 1px 2px rgba(0,0,0,0.8), 0 0 10px rgba(254,215,102,0.6)';
            });
          }
        }
      });

      const link = document.createElement('a');
      link.download = `diwali-greeting-${state.selectedTemplate.id}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      triggerConfetti();
    } catch (err) {
      console.error('Download error:', err);
      alert('Could not generate image. Please try again!');
    } finally {
      btnDownloadImage.disabled = false;
      btnDownloadImage.innerHTML = origHtml;
    }
  });

  async function shareCardOnWhatsapp() {
    let cardUrl = generatedShareLink?.value;
    if (!cardUrl || cardUrl === 'Generating private link...' || !state.shareUrl) {
      if (generatedShareLink) generatedShareLink.value = 'Generating private link...';
      await saveCardToServer();
      cardUrl = generatedShareLink?.value;
    }

    if (!cardUrl || cardUrl === 'Generating private link...' || !cardUrl.startsWith('http')) {
      cardUrl = state.shareUrl ? `${window.location.origin}${state.shareUrl}` : window.location.href;
    }

    const activeHeading = state.headingTitle || state.selectedTemplate.heading || 'Happy Diwali';
    const sender = state.senderName ? state.senderName.trim() : 'Our Family';

    const text = encodeURIComponent(
      `🪔✨ *${activeHeading.toUpperCase()}* ✨🪔\n\n` +
      `"${state.message}"\n\n` +
      `— Warm festive wishes from *${sender}* 🙏\n\n` +
      `✨ *Open your personalized Diwali Greeting Card here:* 👇\n` +
      `${cardUrl}`
    );

    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  }

  btnShareWhatsapp?.addEventListener('click', shareCardOnWhatsapp);
  btnSendLinkWhatsapp?.addEventListener('click', shareCardOnWhatsapp);
  btnTopWhatsappShare?.addEventListener('click', shareCardOnWhatsapp);
  cardStepShareBtn?.addEventListener('click', shareCardOnWhatsapp);

  btnCopyLink?.addEventListener('click', () => {
    if (!generatedShareLink?.value) return;
    navigator.clipboard.writeText(generatedShareLink.value).then(() => {
      btnCopyLink.classList.remove('bg-[#73191d]', 'hover:bg-[#5b1216]');
      btnCopyLink.classList.add('bg-[#156034]', 'hover:bg-[#0f4625]');
      btnCopyLink.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-white"></i><span id="copy-btn-text">Copied!</span>`;
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        btnCopyLink.classList.remove('bg-[#156034]', 'hover:bg-[#0f4625]');
        btnCopyLink.classList.add('bg-[#73191d]', 'hover:bg-[#5b1216]');
        btnCopyLink.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5 text-white"></i><span id="copy-btn-text">Copy</span>`;
        if (window.lucide) lucide.createIcons();
      }, 2000);
    });
  });

  btnChangeDetails?.addEventListener('click', () => {
    goToStep(1);
  });

  // ==================== 14. SERVER PERSISTENCE ====================
  async function saveCardToServer() {
    if (generatedShareLink) generatedShareLink.value = 'Generating private link...';
    try {
      const tpl = state.selectedTemplate.id;
      const msg = state.message;
      const sender = state.senderName;
      const heading = state.headingTitle || state.selectedTemplate.heading;

      const payload = {
        templateId: tpl,
        template: tpl, // Dual compatibility with any server
        heading: heading,
        senderName: sender,
        subtitle: state.subtitle,
        format: state.format,
        language: state.language,
        message: msg,
        customMessage: msg, // Dual compatibility with any server
        fontStyle: state.fontStyle,
        symbol: state.symbol,
        symbolIcon: state.symbolIcon,
        familyPhoto: state.familyPhoto
      };

      let cardId = 'dw_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36).substring(4);
      let shareUrl = `/view.html?id=${cardId}&tpl=${encodeURIComponent(tpl)}`;

      try {
        const res = await fetch('/api/cards', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          const data = await res.json();
          if (data && data.card && data.card.id) {
            cardId = data.card.id;
            shareUrl = `/view.html?id=${cardId}&tpl=${encodeURIComponent(tpl)}`;
          }
        }
      } catch (networkErr) {
        console.warn('Network save note:', networkErr);
      }

      // 100% Client-side Guarantee: store in localStorage so view.html instantly matches preview
      try {
        localStorage.setItem('dw_card_' + cardId, JSON.stringify({ ...payload, id: cardId }));
        localStorage.setItem('dw_last_card', JSON.stringify({ ...payload, id: cardId }));
      } catch (storageErr) {}

      state.cardId = cardId;
      state.shareUrl = shareUrl;

      const fullUrl = `${window.location.origin}${shareUrl}`;
      if (generatedShareLink) generatedShareLink.value = fullUrl;
    } catch (err) {
      console.error('Server save error:', err);
      const fallbackUrl = `${window.location.origin}/view.html?tpl=${encodeURIComponent(state.selectedTemplate.id)}`;
      if (generatedShareLink) generatedShareLink.value = fallbackUrl;
    }
  }

  // ==================== 15. STEP NAVIGATION ====================
  function goToStep(stepNumber) {
    state.currentStep = stepNumber;

    [step1Content, step2Content, step3Content, step4Content].forEach((p, idx) => {
      if (p) p.classList.toggle('hidden', idx + 1 !== stepNumber);
    });

    const stepTitles = [
      'Step 1 of 4 • Sender & Event Details',
      'Step 2 of 4 • Pick Language & Wishes',
      'Step 3 of 4 • Card Style & Accents',
      'Step 4 of 4 • Share Greeting'
    ];
    if (stepTitleText) stepTitleText.textContent = stepTitles[stepNumber - 1];

    // Toggle Step 4 Top Share Actions (Instantly visible on Mobile View!)
    document.body.classList.toggle('is-step-4', stepNumber === 4);
    if (step4TopShareBanner) {
      step4TopShareBanner.classList.toggle('hidden', stepNumber !== 4);
    }
    if (cardStepShareBtn) {
      if (stepNumber === 4) {
        cardStepShareBtn.classList.remove('hidden');
        cardStepShareBtn.classList.add('flex');
        cardStepSavedPill?.classList.add('hidden');
      } else {
        cardStepShareBtn.classList.add('hidden');
        cardStepShareBtn.classList.remove('flex');
        cardStepSavedPill?.classList.remove('hidden');
      }
    }

    // Update Card Top Step Header & Dynamic Back Button
    const cardStepBadge = document.getElementById('card-step-badge');
    const cardBackBtnText = document.getElementById('card-back-btn-text');

    const stepBadges = [
      'Step 1 of 4 • Details',
      'Step 2 of 4 • Wishes',
      'Step 3 of 4 • Style',
      'Step 4 of 4 • Share'
    ];

    const backBtnLabels = [
      'Templates',
      'Step 1 (Details)',
      'Step 2 (Wishes)',
      'Step 3 (Style)'
    ];

    if (cardStepBadge) cardStepBadge.textContent = stepBadges[stepNumber - 1];
    if (cardBackBtnText) cardBackBtnText.textContent = backBtnLabels[stepNumber - 1];

    const progressWidths = ['25%', '50%', '75%', '100%'];
    if (stepProgressBar) stepProgressBar.style.width = progressWidths[stepNumber - 1];

    if (stepNumber === 2) {
      renderMessagesForLanguage(state.language);
    }

    if (stepNumber === 4) {
      triggerConfetti();
    }

    // On mobile devices, smoothly align view for active step
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const targetEl = stepNumber === 4 
          ? (document.getElementById('card-step-header') || document.getElementById('editor-view'))
          : document.getElementById('editor-view');
        if (targetEl) {
          const navOffset = 60;
          const pos = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
          window.scrollTo({ top: Math.max(0, pos), behavior: 'smooth' });
        }
      }, 60);
    }
    if (window.lucide) lucide.createIcons();
  }

  // ==================== 16. CONFETTI CELEBRATION ====================
  function triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#dc2626', '#10b981', '#ec4899', '#ffd700']
      });
    }
  }

  // ==================== 17. DIWALI FIRECRACKER SOUND & ANIMATIONS ====================
  function playCrackerBurstSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const bufferSize = Math.floor(ctx.sampleRate * 0.35);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.08));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.3);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.55, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
    } catch (e) {}
  }

  function triggerFirecrackerShow() {
    if (typeof confetti !== 'function') return;
    const colors = ['#ffd700', '#f59e0b', '#ef4444', '#10b981', '#ec4899', '#ffffff'];

    // Stage 1: Big Center Cracker Burst
    playCrackerBurstSound();
    confetti({
      particleCount: 110,
      spread: 100,
      origin: { x: 0.5, y: 0.42 },
      colors: colors,
      startVelocity: 42,
      shapes: ['circle', 'square']
    });

    // Stage 2: Twin Left & Right Rocket Bursts
    setTimeout(() => {
      playCrackerBurstSound();
      confetti({
        particleCount: 75,
        angle: 60,
        spread: 75,
        origin: { x: 0.18, y: 0.52 },
        colors: colors,
        startVelocity: 45
      });
      confetti({
        particleCount: 75,
        angle: 120,
        spread: 75,
        origin: { x: 0.82, y: 0.52 },
        colors: colors,
        startVelocity: 45
      });
    }, 220);

    // Stage 3: Golden Starry Fireworks Sky Burst
    setTimeout(() => {
      playCrackerBurstSound();
      confetti({
        particleCount: 70,
        spread: 130,
        origin: { x: 0.5, y: 0.3 },
        colors: ['#ffe680', '#ffd700', '#ffffff', '#fbbf24'],
        shapes: ['star'],
        startVelocity: 38
      });
    }, 460);

    // Stage 4: Sparkling Ember Rain
    setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 160,
        origin: { x: 0.5, y: 0.25 },
        colors: ['#ffd700', '#f59e0b', '#ffffff'],
        shapes: ['star'],
        scalar: 0.8
      });
    }, 700);
  }

  function triggerFlyInCards() {
    const cards = document.querySelectorAll('.template-card');
    cards.forEach((card, idx) => {
      const flyClass = FLY_CLASSES[idx % FLY_CLASSES.length];
      card.classList.remove('fly-in-left', 'fly-in-right', 'fly-in-bottom', 'fly-in-top');
      void card.offsetWidth;
      card.style.animationDelay = `${(idx * 0.08).toFixed(2)}s`;
      card.classList.add(flyClass);

      setTimeout(() => {
        card.classList.add('card-floating');
      }, 1100 + (idx * 80));
    });
  }

  function launchCrackerIntro() {
    const overlay = document.getElementById('cracker-intro-overlay');
    if (!overlay) {
      triggerFlyInCards();
      return;
    }

    // Direct grand entrance with realistic Diwali cracker bursts (No white flash)
    setTimeout(() => {
      triggerFirecrackerShow();

      setTimeout(() => {
        overlay.classList.add('opacity-0', 'pointer-events-none');
        triggerFlyInCards();
        setTimeout(() => overlay.remove(), 750);
      }, 1900);
    }, 120);
  }

  // ==================== CONTINUOUS BACKGROUND FIREWORKS ANIMATION (MATCHING REFERENCE IMAGE) ====================
  function initBackgroundFireworks() {
    const canvas = document.getElementById('bg-fireworks-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const fireworks = [];
    const THEME_COLORS = ['#ffd700', '#f59e0b', '#f43f5e', '#fb7185', '#fbbf24', '#ffffff', '#e879f9', '#c084fc'];

    class Firework {
      constructor() {
        this.x = Math.random() * width;
        this.y = height;
        this.targetY = Math.random() * (height * 0.4) + 40;
        this.speed = Math.random() * 3 + 4.5;
        this.angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.2;
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.color = THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)];
        this.alive = true;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.04;
        if (this.vy >= 0 || this.y <= this.targetY) {
          this.explode();
          this.alive = false;
        }
      }
      explode() {
        const count = Math.floor(Math.random() * 20) + 25;
        for (let i = 0; i < count; i++) {
          particles.push(new Particle(this.x, this.y, this.color));
        }
      }
      draw() {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.2 + 0.8;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.012;
        this.size = Math.random() * 2.2 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.05;
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.alpha -= this.decay;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // ==================== INTERACTIVE CLICK-TO-BURST CRACKER PARTICLES ====================
    class ClickSparkleParticle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5.5 + 2.0;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.alpha = 1;
        this.decay = Math.random() * 0.022 + 0.016;
        this.size = Math.random() * 2.8 + 1.2;
        this.flicker = Math.random() > 0.3;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.08;
        this.vx *= 0.96;
        this.vy *= 0.96;
        this.alpha -= this.decay;
      }
      draw() {
        ctx.save();
        const curAlpha = this.flicker && Math.random() > 0.4 ? this.alpha * 0.6 : this.alpha;
        ctx.globalAlpha = Math.max(0, curAlpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        if (this.size > 2.5 && this.alpha > 0.45) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(this.x - 3, this.y);
          ctx.lineTo(this.x + 3, this.y);
          ctx.moveTo(this.x, this.y - 3);
          ctx.lineTo(this.x, this.y + 3);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    const CLICK_BURST_COLORS = ['#ffd700', '#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff', '#00f5d4', '#ffffff', '#f43f5e'];

    function spawnClickBurst(x, y) {
      const count = Math.floor(Math.random() * 12) + 28;
      for (let i = 0; i < count; i++) {
        const color = CLICK_BURST_COLORS[Math.floor(Math.random() * CLICK_BURST_COLORS.length)];
        particles.push(new ClickSparkleParticle(x, y, color));
      }
      if (typeof playCrackerBurstSound === 'function') {
        playCrackerBurstSound();
      }
    }

    window.addEventListener('pointerdown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
        return;
      }
      spawnClickBurst(e.clientX, e.clientY);
    });

    let lastLaunch = 0;
    function loop(time) {
      ctx.clearRect(0, 0, width, height);

      if (time - lastLaunch > Math.random() * 500 + 900) {
        fireworks.push(new Firework());
        if (Math.random() > 0.6) fireworks.push(new Firework());
        lastLaunch = time;
      }

      for (let i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        if (fireworks[i].alive) {
          fireworks[i].draw();
        } else {
          fireworks.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        if (particles[i].alpha > 0) {
          particles[i].draw();
        } else {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // Burst Crackers Button
  const btnBurstCrackers = document.getElementById('btn-burst-crackers');
  btnBurstCrackers?.addEventListener('click', () => {
    triggerFirecrackerShow();
    playCrackerBurstSound();
    setTimeout(() => playCrackerBurstSound(), 250);
    triggerFlyInCards();
  });

  // Interactive Clickable Busuvanam (Flowerpot Fountain) Explosion
  const clickBusuvanam = document.getElementById('clickable-busuvanam');
  clickBusuvanam?.addEventListener('click', (e) => {
    e.stopPropagation();
    playCrackerBurstSound();
    setTimeout(() => playCrackerBurstSound(), 180);
    setTimeout(() => playCrackerBurstSound(), 360);

    clickBusuvanam.classList.add('scale-125', 'brightness-150');
    setTimeout(() => clickBusuvanam.classList.remove('scale-125', 'brightness-150'), 450);

    const rect = clickBusuvanam.getBoundingClientRect();
    const x = (rect.right - 35) / window.innerWidth;
    const y = (rect.bottom - 25) / window.innerHeight;

    confetti({
      particleCount: 85,
      angle: 85,
      spread: 65,
      startVelocity: 55,
      origin: { x: x, y: y },
      colors: ['#ffe680', '#ffd700', '#ff9900', '#ffffff', '#f43f5e', '#a855f7'],
      shapes: ['star', 'circle']
    });

    setTimeout(() => {
      confetti({
        particleCount: 65,
        angle: 90,
        spread: 80,
        startVelocity: 65,
        origin: { x: x, y: y },
        colors: ['#ffd700', '#ffffff', '#fb923c', '#38bdf8'],
        shapes: ['star']
      });
    }, 160);
  });

  // Interactive Clickable Thara Chakaram (Ground Spinner) Explosion
  const clickChakaram = document.getElementById('clickable-chakaram');
  clickChakaram?.addEventListener('click', (e) => {
    e.stopPropagation();
    playCrackerBurstSound();
    setTimeout(() => playCrackerBurstSound(), 200);
    setTimeout(() => playCrackerBurstSound(), 400);

    clickChakaram.classList.add('scale-125', 'brightness-150');
    setTimeout(() => clickChakaram.classList.remove('scale-125', 'brightness-150'), 450);

    const rect = clickChakaram.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 95,
      spread: 360,
      startVelocity: 42,
      origin: { x: x, y: y },
      colors: ['#ffd700', '#ef4444', '#10b981', '#3b82f6', '#f59e0b', '#ffffff'],
      shapes: ['circle', 'square']
    });

    setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 360,
        startVelocity: 52,
        origin: { x: x, y: y },
        colors: ['#ffd700', '#f97316', '#ffffff', '#ec4899'],
        shapes: ['star']
      });
    }, 200);
  });

  // ==================== INITIALIZE ====================
  try {
    renderGallery();
    launchCrackerIntro();
    initBackgroundFireworks();
  } catch (err) {
    console.error('renderGallery error:', err);
  }

  if (inputSenderName) {
    inputSenderName.value = state.senderName;
    if (charCountSender) charCountSender.textContent = `${state.senderName.length}/45`;
  }
  if (inputSubtitle) {
    inputSubtitle.value = state.subtitle;
    if (charCountSubtitle) charCountSubtitle.textContent = `${state.subtitle.length}/120`;
  }
  if (inputHeadingTitle) {
    inputHeadingTitle.value = state.headingTitle;
  }
  if (inputCustomMessage) {
    inputCustomMessage.value = state.message;
  }

  renderTitleChips(state.language);
  switchLanguage(state.language);
  updateAvatarSelectionUI();

  // ==================== FESTIVE REGISTRATION MODAL LOGIC ====================
  const regModal = document.getElementById('register-modal');
  const btnOpenReg = document.getElementById('btn-open-register');
  const btnCloseReg = document.getElementById('btn-close-register');
  const btnCloseSuccess = document.getElementById('btn-close-success');
  const regForm = document.getElementById('register-form');
  const regSuccess = document.getElementById('register-success');
  let regModalSource = 'step3';

  window.openRegisterModal = function(source = 'step3') {
    regModalSource = source;
    if (!regModal) return;
    regModal.classList.remove('hidden');
    regModal.classList.add('flex');
    if (regForm) regForm.classList.remove('hidden');
    if (regSuccess) regSuccess.classList.add('hidden');

    const regNameInput = document.getElementById('reg-name');
    if (regNameInput && state.senderName) {
      regNameInput.value = state.senderName.trim();
    }

    const modalTitle = document.getElementById('reg-modal-title');
    const modalSubtitle = document.getElementById('reg-modal-subtitle');
    const btnSubmit = document.getElementById('btn-submit-reg');

    if (btnSubmit) {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = `<span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></span><i data-lucide="shield-check" class="w-4 h-4 text-[#3e1008] shrink-0"></i><span id="btn-submit-reg-text" class="font-extrabold tracking-wide">Verify</span><i data-lucide="arrow-right" class="w-4 h-4 text-[#3e1008] group-hover:translate-x-1 transition-transform shrink-0"></i>`;
    }

    if (modalTitle) modalTitle.textContent = 'Verify to Continue';
    if (modalSubtitle) modalSubtitle.textContent = 'Quick verification to confirm you are not a robot & unlock your greeting card! 🪔✨';

    if (window.lucide) lucide.createIcons();
  };

  if (btnOpenReg) {
    btnOpenReg.addEventListener('click', () => {
      window.openRegisterModal('navbar');
    });
  }

  const closeRegModal = () => {
    if (regModal) {
      regModal.classList.add('hidden');
      regModal.classList.remove('flex');
    }
  };

  if (btnCloseReg) btnCloseReg.addEventListener('click', closeRegModal);
  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener('click', () => {
      closeRegModal();
      if (regModalSource === 'step3') {
        goToStep(4);
        saveCardToServer();
      }
    });
  }

  if (regModal) {
    regModal.addEventListener('click', (e) => {
      if (e.target === regModal) closeRegModal();
    });
  }

  if (regForm) {
    regForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = (document.getElementById('reg-name')?.value || '').trim();
      const phone = (document.getElementById('reg-phone')?.value || '').trim();
      const email = (document.getElementById('reg-email')?.value || '').trim();

      const btnSubmit = document.getElementById('btn-submit-reg');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>Saving & Continuing...</span>`;
        if (window.lucide) lucide.createIcons();
      }

      try {
        let success = false;
        try {
          const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, email, city: '', wishMessage: '' })
          });
          const data = await res.json();
          if (data && data.success) success = true;
        } catch (serverErr) {
          console.warn('Server offline or restarting, caching locally:', serverErr);
        }

        // Always save locally in case of network issue
        try {
          const localList = JSON.parse(localStorage.getItem('sparkle_registrations') || '[]');
          localList.unshift({ name, phone, email, city: '', wishMessage: '', createdAt: new Date().toISOString() });
          localStorage.setItem('sparkle_registrations', JSON.stringify(localList));
          success = true;
        } catch (e) {}

        // Set persistent flag so user is never prompted again in this browser session
        localStorage.setItem('sparkle_user_registered', 'true');

        if (success) {
          // Trigger GRAND FIREWORKS CELEBRATION!
          if (typeof triggerFirecrackerShow === 'function') triggerFirecrackerShow();
          if (typeof playCrackerBurstSound === 'function') {
            playCrackerBurstSound();
            setTimeout(() => playCrackerBurstSound(), 200);
            setTimeout(() => playCrackerBurstSound(), 400);
          }

          if (typeof confetti === 'function') {
            confetti({
              particleCount: 110,
              spread: 130,
              origin: { y: 0.5 },
              colors: ['#ffd700', '#ef4444', '#10b981', '#3b82f6', '#f59e0b', '#ffffff'],
              shapes: ['circle', 'square', 'star']
            });
          }

          if (regModalSource === 'step3') {
            // Instant smooth transition to Step 4 (No text flicker, zero delay!)
            closeRegModal();
            goToStep(4);
            saveCardToServer();
          } else {
            regForm.classList.add('hidden');
            regSuccess.classList.remove('hidden');
            regSuccess.classList.add('flex');
            regForm.reset();
          }
        }
      } catch (err) {
        console.error('Registration error:', err);
        closeRegModal();
        if (regModalSource === 'step3') {
          goToStep(4);
          saveCardToServer();
        }
      } finally {
        // Only reset button text if modal is NOT being closed to step 4
        if (btnSubmit && regModalSource !== 'step3') {
          btnSubmit.disabled = false;
          btnSubmit.innerHTML = `<span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></span><i data-lucide="shield-check" class="w-4 h-4 text-[#3e1008] shrink-0"></i><span id="btn-submit-reg-text" class="font-extrabold tracking-wide">Verify</span><i data-lucide="arrow-right" class="w-4 h-4 text-[#3e1008] group-hover:translate-x-1 transition-transform shrink-0"></i>`;
          if (window.lucide) lucide.createIcons();
        }
      }
    });
  }
});
