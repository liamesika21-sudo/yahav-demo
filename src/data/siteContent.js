export const SITE = {
  name: 'יהב רוזן',
  englishName: 'YAHAV ROSEN',
  discipline: 'INTERIOR DESIGN',
  url: 'https://yahavrosen.com',
  description: 'סטודיו לעיצוב פנים ותכנון חללים ייחודיים לדירות, בתים פרטיים, קליניקות, משרדים וחללים מסחריים.',
};

export const CONTACT = {
  phoneDisplay: '052-241-1933',
  phoneHref: 'tel:+972522411933',
  whatsapp: 'https://wa.me/972522411933',
  email: 'hello@yahavrosen.com',
  emailHref: 'mailto:hello@yahavrosen.com',
};

export const about = {
  label: 'ABOUT YAHAV',
  title: 'קצת עליי',
  text: 'שמי יהב רוזן, מעצבת פנים שמתמחה ביצירת חללים ייחודיים שמשלבים בין פונקציונליות לאסתטיקה. אני מאמינה שלבית יש תפקיד משמעותי בחיינו — הוא המקום שבו אנחנו מרגישים הכי בנוח, יוצרים זיכרונות ומוצאים השראה.',
  text2: 'כל פרויקט עבורי הוא מסע משותף: הקשבה, תכנון מדויק, בחירת חומרים וירידה לפרטים הקטנים עד שהחלום מקבל צורה בחלל אמיתי.',
};

const responsiveImage = (path, width, height, source, objectPosition = '50% 50%', objectPositionMobile = objectPosition) => ({
  src: `${path}-1800.webp`,
  srcSet: `${path}-960.webp 960w, ${path}-1800.webp 1800w`,
  width,
  height,
  source,
  objectPositionDesktop: objectPosition,
  objectPositionMobile,
});

const homeImage = (name, width, height, source, desktop = '50% 50%', mobile = desktop) => ({
  src: `/media/home/${name}-1400.webp`,
  srcSet: `/media/home/${name}-720.webp 720w, /media/home/${name}-1400.webp 1400w`,
  width,
  height,
  source,
  objectPositionDesktop: desktop,
  objectPositionMobile: mobile,
});

export const homeEditorial = {
  livingRoom: homeImage('living-room', 1024, 1536, 'Homepage — living room', '50% 57%', '50% 52%'),
  livingTv: homeImage('living-tv', 1024, 1536, 'Homepage — living room and timber wall', '50% 55%', '50% 50%'),
  bathroom: homeImage('bathroom', 1024, 1536, 'Homepage — bathroom', '50% 48%', '50% 49%'),
  kitchen: homeImage('kitchen', 1408, 1870, 'Homepage — kitchen', '53% 54%', '58% 53%'),
  libraryDetail: homeImage('library-detail', 1024, 1536, 'Homepage — timber library detail', '50% 52%', '50% 50%'),
  stoneLiving: homeImage('stone-living', 994, 1536, 'Homepage — stone living room', '50% 52%', '50% 48%'),
  loungeChair: homeImage('lounge-chair', 1408, 3062, 'Homepage — lounge detail', '52% 58%', '50% 54%'),
};

const clinic = [
  responsiveImage('/media/projects/clinic/clinic-08', 1800, 1200, 'IMG_9217.JPG', '50% 52%', '44% 50%'),
  responsiveImage('/media/projects/clinic/clinic-02', 1800, 1200, 'IMG_9225.JPG'),
  responsiveImage('/media/projects/clinic/clinic-06', 1200, 1800, 'IMG_9204.JPG'),
  responsiveImage('/media/projects/clinic/clinic-11', 1800, 1200, 'IMG_9223.JPG'),
  responsiveImage('/media/projects/clinic/clinic-07', 1800, 1200, 'IMG_9224.JPG'),
  responsiveImage('/media/projects/clinic/clinic-01', 1800, 1200, 'IMG_9232.JPG'),
  responsiveImage('/media/projects/clinic/clinic-04', 1800, 1200, 'IMG_9236.JPG'),
  responsiveImage('/media/projects/clinic/clinic-05', 1800, 1200, 'IMG_9219.JPG'),
  responsiveImage('/media/projects/clinic/clinic-03', 1200, 1800, 'IMG_9203.JPG'),
  responsiveImage('/media/projects/clinic/clinic-09', 1200, 1800, 'IMG_9230.JPG'),
  responsiveImage('/media/projects/clinic/clinic-10', 1200, 1800, 'IMG_9202 2.JPG'),
  responsiveImage('/media/projects/clinic/clinic-12', 1200, 1800, 'IMG_9216.JPG'),
];

const carmel = [
  responsiveImage('/media/projects/carmel/carmel-08', 1800, 2400, 'IMG_2709.HEIC', '50% 50%'),
  responsiveImage('/media/projects/carmel/carmel-01', 1800, 2400, 'IMG_2728.HEIC'),
  responsiveImage('/media/projects/carmel/carmel-02', 1800, 2400, 'IMG_2700.HEIC'),
  responsiveImage('/media/projects/carmel/carmel-03', 1800, 2400, 'IMG_2724.HEIC'),
  responsiveImage('/media/projects/carmel/carmel-04', 1800, 2400, 'IMG_2720.HEIC'),
  responsiveImage('/media/projects/carmel/carmel-05', 1800, 2400, 'IMG_2502.HEIC'),
  responsiveImage('/media/projects/carmel/carmel-06', 1800, 2400, 'IMG_2479.HEIC'),
  responsiveImage('/media/projects/carmel/carmel-07', 1800, 2400, 'IMG_2421.HEIC'),
  responsiveImage('/media/projects/carmel/carmel-09', 1600, 2400, 'IMG_6247.JPG'),
  responsiveImage('/media/projects/carmel/carmel-10', 1600, 2400, 'IMG_6250.JPG'),
];

const vardiya = [
  responsiveImage('/media/projects/vardiya/vardiya-01', 1800, 1350, '8d976212-1803-4623-8799-4551af2c4620.jpg', '50% 50%'),
  responsiveImage('/media/projects/vardiya/vardiya-02', 1600, 1200, 'e87390b7-0027-45ad-9df7-fddc8b922ab5.jpg'),
  responsiveImage('/media/projects/vardiya/vardiya-03', 1536, 2048, 'f31c7398-5bfd-4009-a29d-43cce6528af4.jpg'),
  responsiveImage('/media/projects/vardiya/vardiya-04', 1536, 2048, 'fc124c84-f8ca-4e98-bd02-02910aff51ec.jpg'),
  responsiveImage('/media/projects/vardiya/vardiya-05', 1200, 1600, 'fe7ce8ce-8b79-4495-bfe6-868eb4bab46f.jpg'),
  responsiveImage('/media/projects/vardiya/vardiya-06', 1536, 2048, 'f0162b4e-19da-469b-8bd3-589405d6b3c7.jpg'),
  responsiveImage('/media/projects/vardiya/vardiya-07', 1536, 2048, '9f9cb419-06b0-447f-be2d-d309dc3b39fa.jpg'),
  responsiveImage('/media/projects/vardiya/vardiya-08', 1536, 2048, '5d5ff224-7b98-466f-a2d9-c91e4e3ef32a.jpg'),
];

const herzliya = [
  responsiveImage('/media/projects/herzliya/herzliya-03', 1800, 3200, 'IMG_4815.MOV · frame 00:02', '50% 52%', '48% 52%'),
  responsiveImage('/media/projects/herzliya/herzliya-01', 1800, 3200, 'IMG_4803.MOV · frame 00:02', '50% 54%'),
  responsiveImage('/media/projects/herzliya/herzliya-02', 1800, 3200, 'IMG_4803.MOV · frame 00:05'),
  responsiveImage('/media/projects/herzliya/herzliya-04', 1800, 2400, 'IMG_5307.HEIC'),
  responsiveImage('/media/projects/herzliya/herzliya-05', 1800, 2400, 'IMG_5308.HEIC'),
  responsiveImage('/media/projects/herzliya/herzliya-06', 1800, 2400, 'IMG_5346.HEIC'),
  responsiveImage('/media/projects/herzliya/herzliya-07', 1800, 2400, 'IMG_5365.HEIC'),
];

export const projects = [
  {
    id: 'clinic',
    folder: 'קליניקה',
    slug: 'clinic',
    title: 'קליניקה',
    englishTitle: 'PRIVATE CLINIC',
    cover: clinic[0],
    gallery: clinic,
    featured: true,
    stage: 'complete',
    editorial: {
      en: {
        metadata: ['WELLNESS', 'TEL AVIV', '2024'],
        intro: 'A refined clinical space where calm, professionalism, and warmth coexist in perfect balance. Natural materials, soft lighting, and thoughtful details create a welcoming environment that elevates the patient experience.',
        tagline: 'MORE THAN A CLINIC — A BETTER YOU.',
        storyOne: {
          eyebrow: 'A SPACE WITH PURPOSE',
          title: 'Where Aesthetics Meets Well-Being',
          body: 'The clinic was designed to offer a sense of calm from the very first moment. Natural materials, warm lighting, and refined details create an atmosphere that feels both sophisticated and personal.',
          quote: 'Design can make people feel more at ease — and that’s a powerful form of care.',
        },
        storyTwo: {
          eyebrow: 'REFINED DETAILS',
          title: 'Natural Beauty in Every Element',
          body: 'Stone, wood, and warm metallic accents come together to create a timeless and tactile experience. Every detail is considered, from the lighting to the textures, shaping a space that feels both elegant and human.',
        },
      },
      he: {
        metadata: ['קליניקת וולנס', 'תל אביב', '2024'],
        intro: 'חלל קליני מעודן שבו רוגע, מקצועיות וחום מתקיימים באיזון מדויק. חומרים טבעיים, תאורה רכה ופרטים מחושבים יוצרים סביבה מזמינה שמרוממת את חוויית המטופלים.',
        tagline: 'יותר מקליניקה — מרחב שמרגיש טוב.',
        storyOne: {
          eyebrow: 'חלל עם מטרה',
          title: 'המקום שבו אסתטיקה פוגשת רווחה',
          body: 'הקליניקה תוכננה להעניק תחושת רוגע מהרגע הראשון. חומרים טבעיים, תאורה חמימה ופרטים מעודנים יוצרים אווירה אישית, שקטה ומתוחכמת.',
          quote: 'לעיצוב יש כוח לגרום לאנשים להרגיש בנוח — וזו צורה משמעותית של אכפתיות.',
        },
        storyTwo: {
          eyebrow: 'פרטים מעודנים',
          title: 'יופי טבעי בכל אלמנט',
          body: 'אבן, עץ ונגיעות מתכת חמות מתחברים לחוויה על־זמנית ומוחשית. כל פרט נשקל — מהתאורה ועד לטקסטורות — כדי ליצור חלל אלגנטי ואנושי.',
        },
      },
    },
  },
  {
    id: 'carmel',
    folder: 'פנטהאוז כרמל',
    slug: 'carmel-penthouse',
    title: 'פנטהאוז כרמל',
    englishTitle: 'CARMEL PENTHOUSE',
    cover: carmel[0],
    gallery: carmel,
    featured: true,
    stage: 'complete',
    editorial: {
      en: {
        metadata: ['PENTHOUSE', 'HAIFA', '2025'],
        intro: 'A calm contemporary penthouse shaped by open views, quiet geometry, and an understated material palette. Every line supports a generous, effortless way of living.',
        tagline: 'A QUIET HOME ABOVE THE CITY.',
        storyOne: {
          eyebrow: 'ABOVE THE EVERYDAY',
          title: 'Calm, Framed by Light',
          body: 'Soft daylight moves through an open sequence of spaces, connecting kitchen, living, and private rooms with a clear architectural rhythm.',
          quote: 'True luxury is the ease with which a home supports everyday life.',
        },
        storyTwo: {
          eyebrow: 'MATERIAL HARMONY',
          title: 'Precision in Every Surface',
          body: 'Layered neutrals, tailored joinery, and carefully placed light create depth without noise — a restrained home that becomes warmer over time.',
        },
      },
      he: {
        metadata: ['פנטהאוז', 'חיפה', '2025'],
        intro: 'פנטהאוז עכשווי ושקט שנבנה סביב נוף פתוח, גאומטריה נקייה ופלטת חומרים מאופקת. כל קו תומך בחוויית מגורים נדיבה וטבעית.',
        tagline: 'בית שקט מעל העיר.',
        storyOne: {
          eyebrow: 'מעל היומיום',
          title: 'רוגע שממוסגר באור',
          body: 'אור יום רך נע בין החללים הפתוחים ומחבר את המטבח, הסלון והאזורים הפרטיים בקצב אדריכלי ברור.',
          quote: 'יוקרה אמיתית היא הקלות שבה הבית תומך בחיי היומיום.',
        },
        storyTwo: {
          eyebrow: 'הרמוניה חומרית',
          title: 'דיוק בכל משטח',
          body: 'גוונים ניטרליים, נגרות מדויקת ותאורה ממוקמת בקפידה יוצרים עומק ללא רעש — בית מאופק שהופך חם יותר עם הזמן.',
        },
      },
    },
  },
  {
    id: 'vardiya',
    folder: 'ורדיה',
    slug: 'vardiya',
    title: 'ורדיה',
    englishTitle: 'VARDIYA',
    cover: vardiya[0],
    gallery: vardiya,
    featured: true,
    stage: 'complete',
    editorial: {
      en: {
        metadata: ['PRIVATE RESIDENCE', 'HAIFA', '2024'],
        intro: 'A bright family home redesigned around openness, connection, and the rituals of everyday life. A soft neutral language allows light and movement to lead.',
        tagline: 'DESIGNED AROUND THE WAY LIFE UNFOLDS.',
        storyOne: {
          eyebrow: 'MADE FOR LIVING',
          title: 'A Home with Room to Breathe',
          body: 'The plan opens the shared spaces to one another, creating long views and an easy flow between cooking, gathering, and moments of rest.',
          quote: 'A home should feel intuitive — beautiful because it belongs to the people who live in it.',
        },
        storyTwo: {
          eyebrow: 'QUIET CONNECTIONS',
          title: 'Light, Flow and Belonging',
          body: 'A measured palette and precise storage keep the rooms calm, while personal details give the home warmth and a distinct sense of place.',
        },
      },
      he: {
        metadata: ['בית פרטי', 'חיפה', '2024'],
        intro: 'בית משפחתי מואר שתוכנן מחדש סביב פתיחות, קשר וטקסי היומיום. שפה ניטרלית ורכה מאפשרת לאור ולתנועה להוביל.',
        tagline: 'מתוכנן סביב הדרך שבה החיים מתרחשים.',
        storyOne: {
          eyebrow: 'נוצר לחיים',
          title: 'בית עם מקום לנשום',
          body: 'התכנון פותח את החללים המשותפים זה אל זה ויוצר מבטים ארוכים וזרימה טבעית בין בישול, אירוח ומנוחה.',
          quote: 'בית צריך להרגיש אינטואיטיבי — יפה מפני שהוא שייך לאנשים שחיים בו.',
        },
        storyTwo: {
          eyebrow: 'חיבורים שקטים',
          title: 'אור, זרימה ותחושת שייכות',
          body: 'פלטה מדודה ואחסון מדויק שומרים על שקט בחללים, בזמן שהפרטים האישיים מעניקים לבית חום וזהות.',
        },
      },
    },
  },
  {
    id: 'herzliya',
    folder: 'דירה הרצליה',
    slug: 'herzliya-apartment',
    title: 'דירה בהרצליה',
    englishTitle: 'HERZLIYA APARTMENT',
    cover: herzliya[0],
    gallery: herzliya,
    featured: false,
    stage: 'process',
    editorial: {
      en: {
        metadata: ['APARTMENT', 'HERZLIYA', 'IN PROGRESS'],
        intro: 'An apartment in transformation, where the architecture is being clarified before the final layers are introduced. Light, proportion, and movement guide every decision.',
        tagline: 'THE QUIET PRECISION BEHIND THE FINISHED SPACE.',
        storyOne: {
          eyebrow: 'A SPACE IN THE MAKING',
          title: 'From Structure to Home',
          body: 'The existing shell is opened and refined to create stronger sightlines, better natural light, and a calm foundation for the life that will unfold here.',
          quote: 'The most important design decisions are often made long before the finishes arrive.',
        },
        storyTwo: {
          eyebrow: 'THE DETAILS AHEAD',
          title: 'Clarity Before Decoration',
          body: 'Services, junctions, and proportions are resolved with care so the completed home can feel effortless, coherent, and deeply considered.',
        },
      },
      he: {
        metadata: ['דירה', 'הרצליה', 'בתהליך'],
        intro: 'דירה בתהליך שינוי, שבה האדריכלות מתבהרת לפני כניסת שכבות הגמר. אור, פרופורציה ותנועה מובילים כל החלטה.',
        tagline: 'הדיוק השקט שמאחורי החלל המוגמר.',
        storyOne: {
          eyebrow: 'חלל בהתהוות',
          title: 'ממבנה לבית',
          body: 'המעטפת הקיימת נפתחת ומתעדנת כדי ליצור קווי מבט חזקים יותר, אור טבעי טוב יותר ובסיס רגוע לחיים שיתרחשו כאן.',
          quote: 'החלטות העיצוב החשובות ביותר מתקבלות לעיתים הרבה לפני שחומרי הגמר מגיעים.',
        },
        storyTwo: {
          eyebrow: 'הפרטים שבדרך',
          title: 'בהירות לפני דקורציה',
          body: 'מערכות, מפגשים ופרופורציות נפתרים בקפידה כדי שהבית המוגמר ירגיש טבעי, שלם ומדויק לעומק.',
        },
      },
    },
  },
];

export const heroSlides = [
  { image: homeEditorial.livingRoom },
  { image: homeEditorial.kitchen },
  { image: homeEditorial.bathroom },
];

export const processVideo = {
  src: '/media/video/yahav-process.mp4',
  poster: '/media/video/yahav-process-poster.webp',
  context: 'נקודת מבטה של יהב רוזן על תהליך העבודה המשותף בפרויקט מיוחד.',
};

export const navLinks = [
  { label: 'DESIGNS', href: '/projects' },
  { label: 'ABOUT', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};

export const getPreviousProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index - 1 + projects.length) % projects.length];
};
