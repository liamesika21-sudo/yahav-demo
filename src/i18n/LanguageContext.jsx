import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const content = {
  en: {
    languageName: 'עברית', languageCode: 'HE',
    nav: { designs: 'DESIGNS', about: 'ABOUT', contact: 'CONTACT' },
    projectNames: { clinic: 'Aesthetic Clinic', carmel: 'Carmel Penthouse', vardiya: 'Vardiya', herzliya: 'Herzliya Apartment' },
    home: {
      heroEyebrow: 'SPACES FOR A', heroTitle: 'BETTER WAY OF LIVING', heroTitleDesktop: ['BETTER', 'WAY OF LIVING'], heroTitleMobile: ['BETTER WAY', 'OF LIVING'],
      heroBody: 'Thoughtful interior design for modern life. Timeless spaces, crafted with intention.',
      heroAction: 'EXPLORE OUR WORK', imageNote: 'INTERIORS THAT FEEL LIKE HOME',
      introTitle: 'Designing meaningful spaces for modern living.',
      introBody: 'Great design goes beyond aesthetics — it shapes the way you live, feel and belong.',
      featured: 'FEATURED PROJECTS', viewAll: 'VIEW ALL PROJECTS', moreProjects: 'MORE PROJECTS', journey: 'A CONTINUOUS JOURNEY',
      philosophyEyebrow: 'OUR PHILOSOPHY', philosophyTitle: 'Thoughtful design for a more meaningful everyday.',
      philosophyBody: 'Refined, livable spaces that balance beauty and purpose — shaped through listening, precise planning and thoughtful detail.',
      aboutAction: 'ABOUT YAHAV', videoEyebrow: 'A CLOSER LOOK', videoTitle: 'Spaces that feel like home.',
      videoBody: 'A closer look at the details, atmosphere and intention behind the process.', facebook: 'WATCH ON FACEBOOK',
      ctaEyebrow: 'LET’S CREATE TOGETHER', ctaTitle: 'GET IN TOUCH', ctaAction: 'START A CONVERSATION',
      processEyebrow: 'OUR PROCESS', processTitle: 'A THOUGHTFUL JOURNEY',
    },
    projects: {
      eyebrow: 'PROJECTS', mobileEyebrow: 'SPACES FOR A BETTER WAY OF LIVING', title: 'SELECTED PROJECTS', mobileTitle: 'PROJECTS',
      body: 'A curated collection of spaces that reflects a considered, timeless approach to modern living.',
      all: 'ALL PROJECTS', tagline: 'A MORE MEANINGFUL WAY OF LIVING', meta: 'INTERIOR DESIGN / SELECTED WORKS', process: 'PROCESS DOCUMENTATION',
    },
    project: {
      back: 'ALL PROJECTS', gallery: 'PROJECT GALLERY', images: 'IMAGES', previous: 'PREVIOUS PROJECT', next: 'NEXT PROJECT', process: 'PROCESS DOCUMENTATION',
      viewGallery: 'VIEW FULL GALLERY', contactEyebrow: 'GET IN TOUCH', contactTitle: 'Let’s create something personal.',
      contactBody: 'Tell us about your space, your vision, or simply start a conversation. We’d love to hear from you.', contactAction: 'CONTACT US',
    },
    about: {
      eyebrow: 'ABOUT', title: 'SPACES FOR A BETTER WAY OF LIVING',
      body1: 'I’m Yahav Rosen, an interior designer specializing in unique spaces that bring function and aesthetics together. I believe the home plays a meaningful role in our lives — it is where we feel most comfortable, create memories and find inspiration.',
      body2: 'Every project is a shared journey: listening, precise planning, material selection and attention to the smallest details, until the vision takes shape in a real space.',
      philosophy: 'OUR PHILOSOPHY', philosophyTitle: 'Thoughtful design for a more meaningful everyday.',
      philosophyBody: 'Every space is approached with balance, function and timeless beauty in mind — always personal, always intentional.',
      process: 'OUR PROCESS', journey: 'A THOUGHTFUL JOURNEY',
      steps: [
        { number: '01', title: 'DISCOVER', body: 'We begin with a conversation about your lifestyle, needs and vision.' },
        { number: '02', title: 'DESIGN', body: 'Ideas become a cohesive concept where function and beauty meet.' },
        { number: '03', title: 'REFINE', body: 'Every detail is considered, from materials and lighting to atmosphere.' },
        { number: '04', title: 'REALIZE', body: 'We bring the vision to life with precision, care and commitment.' },
      ],
    },
    contact: {
      eyebrow: 'LET’S CREATE TOGETHER', title: 'GET IN TOUCH', body: 'Tell us a little about your space and what you would like to create.',
      name: 'YOUR NAME', phone: 'YOUR PHONE', email: 'YOUR EMAIL', message: 'TELL US ABOUT THE PROJECT', submit: 'SEND A MESSAGE',
      status: 'Your message is ready and opening in WhatsApp.', greeting: 'Hello Yahav, my name is', phoneMessage: 'Phone', emailMessage: 'Email', projectMessage: 'About the project', direct: 'DIRECT',
    },
    footer: { rights: 'ALL RIGHTS RESERVED', tagline: 'THOUGHTFUL INTERIORS FOR A BETTER WAY OF LIVING.', backToTop: 'BACK TO TOP' }, notFound: { title: 'PAGE NOT FOUND', action: 'BACK TO PROJECTS' },
    accessibility: {
      skip: 'Skip to main content', home: 'Yahav Rosen home', primaryNav: 'Primary navigation', footerNav: 'Footer navigation', openMenu: 'Open menu', closeMenu: 'Close menu',
      previousImage: 'Previous image', nextImage: 'Next image', closeGallery: 'Close gallery', playVideo: 'Play the process video',
      openProject: 'Open project', openImage: 'Open image', projectGallery: 'Project gallery', interiorDesign: 'interior design by Yahav Rosen', switchLanguage: 'Switch language to Hebrew',
    },
  },
  he: {
    languageName: 'ENGLISH', languageCode: 'EN',
    nav: { designs: 'פרויקטים', about: 'אודות', contact: 'יצירת קשר' },
    projectNames: { clinic: 'קליניקה אסתטית', carmel: 'פנטהאוז כרמל', vardiya: 'ורדיה', herzliya: 'דירה בהרצליה' },
    home: {
      heroEyebrow: 'חללים לדרך', heroTitle: 'טובה יותר לחיות', heroTitleDesktop: ['דרך טובה יותר', 'לחיות'], heroTitleMobile: ['דרך טובה יותר', 'לחיות'],
      heroBody: 'עיצוב פנים קשוב לחיים מודרניים. חללים על־זמניים, שנוצרים מתוך כוונה.',
      heroAction: 'לפרויקטים שלנו', imageNote: 'חללים שמרגישים כמו בית',
      introTitle: 'מתכננים חללים משמעותיים לחיים המודרניים.', introBody: 'עיצוב טוב הוא מעבר לאסתטיקה — הוא מעצב את הדרך שבה חיים, מרגישים ושייכים.',
      featured: 'פרויקטים נבחרים', viewAll: 'לכל הפרויקטים', moreProjects: 'פרויקטים נוספים', journey: 'מסע מתמשך',
      philosophyEyebrow: 'הפילוסופיה שלנו', philosophyTitle: 'עיצוב מדויק ליומיום משמעותי יותר.',
      philosophyBody: 'חללים מעודנים ונעימים שמאזנים בין יופי למטרה — דרך הקשבה, תכנון מדויק וירידה לפרטים.',
      aboutAction: 'אודות יהב', videoEyebrow: 'מבט מקרוב', videoTitle: 'חללים שמרגישים כמו בית.',
      videoBody: 'מבט קרוב על הפרטים, האווירה והכוונה שמאחורי התהליך.', facebook: 'לצפייה בפייסבוק',
      ctaEyebrow: 'בואו ניצור יחד', ctaTitle: 'נשמח להכיר', ctaAction: 'מתחילים בשיחה',
      processEyebrow: 'התהליך שלנו', processTitle: 'מסע משותף ומדויק',
    },
    projects: {
      eyebrow: 'פרויקטים', mobileEyebrow: 'חללים לדרך טובה יותר לחיות', title: 'פרויקטים נבחרים', mobileTitle: 'פרויקטים', body: 'אוסף נבחר של חללים המבטא גישה מדויקת ועל־זמנית לחיים המודרניים.',
      all: 'כל הפרויקטים', tagline: 'דרך משמעותית יותר לחיות', meta: 'עיצוב פנים / עבודות נבחרות', process: 'תיעוד תהליך',
    },
    project: {
      back: 'לכל הפרויקטים', gallery: 'גלריית הפרויקט', images: 'תמונות', previous: 'הפרויקט הקודם', next: 'הפרויקט הבא', process: 'תיעוד תהליך',
      viewGallery: 'לגלריה המלאה', contactEyebrow: 'יצירת קשר', contactTitle: 'בואו ניצור משהו אישי.',
      contactBody: 'ספרו לנו על החלל, על החזון שלכם, או פשוט התחילו שיחה. נשמח מאוד לשמוע מכם.', contactAction: 'דברו איתנו',
    },
    about: {
      eyebrow: 'אודות', title: 'חללים שמרגישים כמו בית',
      body1: 'שמי יהב רוזן, מעצבת פנים שמתמחה ביצירת חללים ייחודיים שמשלבים בין פונקציונליות לאסתטיקה. אני מאמינה שלבית יש תפקיד משמעותי בחיינו — הוא המקום שבו אנחנו מרגישים הכי בנוח, יוצרים זיכרונות ומוצאים השראה.',
      body2: 'כל פרויקט עבורי הוא מסע משותף: הקשבה, תכנון מדויק, בחירת חומרים וירידה לפרטים הקטנים עד שהחלום מקבל צורה בחלל אמיתי.',
      philosophy: 'הפילוסופיה שלנו', philosophyTitle: 'עיצוב מדויק ליומיום משמעותי יותר.',
      philosophyBody: 'כל חלל נוצר מתוך איזון, פונקציונליות ויופי על־זמני — תמיד אישי ותמיד מכוון.',
      process: 'התהליך שלנו', journey: 'מסע משותף ומדויק',
      steps: [
        { number: '01', title: 'היכרות', body: 'מתחילים בשיחה על אורח החיים, הצרכים והחזון שלכם.' },
        { number: '02', title: 'תכנון', body: 'הרעיונות מתגבשים לקונספט שלם שבו פונקציונליות ויופי נפגשים.' },
        { number: '03', title: 'דיוק', body: 'כל פרט נשקל בקפידה — מהחומרים והתאורה ועד לאווירה.' },
        { number: '04', title: 'הגשמה', body: 'מביאים את החזון לחיים בדיוק, באכפתיות ובמחויבות.' },
      ],
    },
    contact: {
      eyebrow: 'בואו ניצור יחד', title: 'נשמח להכיר', body: 'ספרו לנו בקצרה על החלל ועל מה שתרצו ליצור בו.',
      name: 'השם שלך', phone: 'טלפון', email: 'אימייל', message: 'כמה מילים על הפרויקט', submit: 'שליחת הודעה',
      status: 'ההודעה מוכנה ונפתחת עכשיו בוואטסאפ.', greeting: 'שלום יהב, שמי', phoneMessage: 'טלפון', emailMessage: 'אימייל', projectMessage: 'על הפרויקט', direct: 'פרטי קשר',
    },
    footer: { rights: 'כל הזכויות שמורות', tagline: 'חללים מדויקים לדרך טובה יותר לחיות.', backToTop: 'חזרה למעלה' }, notFound: { title: 'העמוד לא נמצא', action: 'חזרה לפרויקטים' },
    accessibility: {
      skip: 'דלגו לתוכן הראשי', home: 'עמוד הבית של יהב רוזן', primaryNav: 'ניווט ראשי', footerNav: 'ניווט תחתון', openMenu: 'פתיחת תפריט', closeMenu: 'סגירת תפריט',
      previousImage: 'התמונה הקודמת', nextImage: 'התמונה הבאה', closeGallery: 'סגירת הגלריה', playVideo: 'ניגון הסרטון על תהליך העבודה',
      openProject: 'פתיחת פרויקט', openImage: 'פתיחת תמונה', projectGallery: 'גלריית פרויקט', interiorDesign: 'עיצוב פנים מאת יהב רוזן', switchLanguage: 'החלפת שפה לאנגלית',
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('yahav-language') === 'he' ? 'he' : 'en'; } catch { return 'en'; }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    try { localStorage.setItem('yahav-language', language); } catch { /* Persistence is optional. */ }
  }, [language]);

  const value = useMemo(() => ({
    language,
    isHebrew: language === 'he',
    copy: content[language],
    toggleLanguage: () => setLanguage((current) => current === 'en' ? 'he' : 'en'),
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}

export function getProjectTitle(project, language) {
  return content[language].projectNames[project.id];
}
