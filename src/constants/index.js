import {
  istanbul,
  paris,
  berlin,
  dubai,
  ankara,
  celebration,
  music,
  wedding,
  weddingBg,
  celebrationBg,
  musicBg,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  gal_1,
  gal_2,
  gal_3,
  gal_4,
  gal_5,
  gal_6,
  gal_7,
  gal_8,
  gal_9,
  gal_10,
  gal_11,
  gal_12,
} from "../assets";

export const navLinks = [
  {
    id: "events",
    title: "Events",
  },
  {
    id: "past_events",
    title: "Aktuellste",
  },
  {
    id: "hochzeit",
    title: "Hochzeit",
  },
  {
    id: "galerie",
    title: "Galerie",
  },
  {
    id: "ueber_uns",
    title: "Über uns",
  },
  {
    id: "faq",
    title: "Faq",
  },
  {
    id: "kontakt",
    title: "Kontakt",
  },
];
const galerieImages = [
  {
    original: gal_1,
    thumbnail: gal_1,
  },
  {
    original: gal_2,
    thumbnail: gal_2,
  },
  {
    original: gal_3,
    thumbnail: gal_3,
  },
  { original: gal_4, thumbnail: gal_4 },
  { original: gal_5, thumbnail: gal_5 },
  { original: gal_6, thumbnail: gal_6 },
  { original: gal_7, thumbnail: gal_7 },
  { original: gal_8, thumbnail: gal_8 },
  { original: gal_9, thumbnail: gal_9 },
  { original: gal_10, thumbnail: gal_10 },
  { original: gal_11, thumbnail: gal_11 },
  { original: gal_12, thumbnail: gal_12 },
];

const events = [
  {
    title: "Istanbul",
    text: "Sie möchten Ihrer Hochzeitsdekoration einen Hauch von Luxus verleihen? Unsere goldfarbene Dekoration ist perfekt, um ein elegantes, anspruchsvolles Ambiente zu schaffen. Von goldenem Besteck und Tellern bis hin zu einer schwarzen Tischdecke mit auffälligen goldenen Details – mit dieser Dekoration wird Ihre Hochzeit zu einem echten Highlight. Lassen Sie Ihre Gäste an Ihrem besonderen Tag mit unserer luxuriösen Dekoration die feineren Dinge des Lebens genießen.",
    image: istanbul,
  },
  {
    title: "Paris",
    text: "Die Dekoration für Ihre Hochzeit muss nicht langweilig sein! Mit unserer weißgoldenen Dekoration wird Ihre Hochzeit schick und elegant. Die goldenen Akzente sorgen für einen Hauch von Luxus, während die weißen Teller und die Tischdecke für einen klassischen Look sorgen. Und mit unserem goldenen Besteck und den weißen Tellern können Ihre Gäste ihre Mahlzeit stilvoll genießen.",
    image: paris,
  },
  {
    title: "Berlin",
    text: "Diese elegante und stilvolle Dekoration ist perfekt für Ihre Hochzeit. Die weißen und goldenen Akzente sind umwerfend und lassen Ihre Veranstaltung erstrahlen. Das goldene Besteck und die weißen Teller sind elegant und das Tischtuch ist wunderschön. Auch die weiß-goldenen Teller und die transparenten Untersetzer sind eine tolle Ergänzung für Ihre Veranstaltung. Die grünen Pflanzen verleihen Ihrer Veranstaltung einen Hauch von Klasse.",
    image: berlin,
  },
  {
    title: "Dubai",
    text: "Verwandeln Sie Ihre Hochzeit in eine glamouröse, elegante Angelegenheit mit unserem schwarz-goldenen Dekorationsset. Mit glitzernden goldenen Akzenten, luxuriösem Besteck und Tellern sowie einer schlichten schwarzen Tischdecke verwandelt dieses Set jeden gewöhnlichen Veranstaltungsort in einen prächtigen Rahmen, der einer königlichen Feier würdig ist. Ihre Gäste werden von dem luxuriösen Ambiente absolut geblendet sein und Ihren besonderen Tag unvergesslich machen.",
    image: dubai,
  },
  {
    title: "Ankara",
    text: "Diese wunderschöne Tischdekoration ist perfekt für Ihren Hochzeitstag. Die weiße Decke und das silberne Besteck machen ihn zu einer raffinierten und eleganten Wahl für Ihren großen Tag. Das helle Farbschema eignet sich auch perfekt, um eine ruhige und romantische Atmosphäre zu schaffen.",
    image: ankara,
  },
];



const past_events = [
  {
    title: "Sonia & Mark's Traumhochzeit",
    icon: wedding,
    iconBg: "#ffffff",
    date: "15. Mai 2023",
    about:
      "Eine wunderschöne Frühlingshochzeit fand in unserem exquisiten Veranstaltungsort statt. Unter blauem Himmel und von blühenden Blumen umgeben, gaben sich Sonia und Mark das Ja-Wort.",
    event_type: "Hochzeit",
    type_style: "gold",
    cardBg: weddingBg,
  },
  {
    title: "Lena & Lukas' Winterzauber",
    icon: wedding,
    iconBg: "#ffffff",
    date: "28. Dezember 2022",
    about:
      "Eine elegante Winterhochzeit wurde in unserem erstklassigen Veranstaltungsort zelebriert. Die festliche Atmosphäre war durch leuchtende Lichter und den Glanz eines prächtigen Weihnachtsbaums geprägt.",
    event_type: "Hochzeit",
    type_style: "gold",
    cardBg: weddingBg,
  },
  {
    title: "Festliche Unternehmensfeier von ABC GmbH",
    icon: celebration,
    iconBg: "#ffffff",
    date: "12. November 2022",
    about:
      "Die ABC GmbH veranstaltete eine eindrucksvolle Firmenfeier in unseren Räumlichkeiten. Gemeinsam wurden Erfolge gefeiert und zukünftige Pläne geschmiedet, während die Mitarbeiter in einer inspirierenden Umgebung zusammenkamen.",
    event_type: "Fest & Jubiläum",
    type_style: "#DE93CA",
    cardBg: celebrationBg,
  },

  {
    title: "Sarah & Timo's Romantisches Fest",
    icon: wedding,
    iconBg: "#ffffff",
    date: "7. Juli 2022",
    about:
      "Eine traumhafte Sommerhochzeit fand in unserem bezaubernden Veranstaltungsort statt. Vor der Kulisse eines goldenen Sonnenuntergangs gaben sich Sarah und Timo inmitten von Freunden und Familie das Jawort.",
    event_type: "Hochzeit",
    type_style: "gold",
    cardBg: weddingBg,
  },
  {
    title: "Konzertnacht unter den Sternen",
    icon: music,
    iconBg: "#ffffff",
    date: "20. August 2022",
    about:
      "Eine mitreißende Konzertnacht wurde auf unserer Open-Air-Bühne veranstaltet. Unter dem funkelnden Nachthimmel wurden vielfältige musikalische Talente gefeiert, während das Publikum in einer begeisterten Atmosphäre mitrissende Klänge erlebte.",
    event_type: "Live-Musik",
    type_style: "#1565E5",
    cardBg: musicBg,
  },
];



const aboutContent = {
  text: "Lassen Sie sich von unserer Hochzeitsdekoration inspirieren, um eine stimmige und schöne Raumgestaltung für Ihren besonderen Tag zu schaffen. Mit unserer Hilfe können Sie den ersten Eindruck prägen, indem Sie Farben wählen, die zu Ihrem Hochzeitsthema passen und eine gemütliche und einladende Atmosphäre für Ihre Gäste schaffen. Wählen Sie Ihre Hochzeitsdekoration, um Ihrem großen Tag die festliche Atmosphäre zu verleihen, die er verdient!",
};

const slides = [
  {
    title: "Istanbul",
    subtitle: "Türkiye",
    description: "Elegant und ausschließlich",
    image: istanbul
  },
  {
    title: "Paris",
    subtitle: "France",
    description: "Lassen Sie Ihre Träume wahr werden",
    image: paris
  },
  {
    title: "Dubai",
    subtitle: "U.A.E",
    description: "Ein Stück des Himmels",
    image: dubai
  },
  {
    title: "Ankara",
    subtitle: "Türkiye",
    description: "Traditionell schick und elegant",
    image: ankara
  },
  {
    title: "Berlin",
    subtitle: "Deutschland",
    description: "Eine romantische und natürliche Wahl",
    image: berlin
  }
];

export {
  events,
  slides,
  past_events,
  aboutContent,
  galerieImages,
};
