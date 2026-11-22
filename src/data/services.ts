/** Images are served from /public/images — drop the files supplied with the wireframes there. */
const img = (file: string) => `/images/${encodeURIComponent(file)}`;

export interface ServiceOverview {
  href: string;
  image: string;
  alt: string;
  icon: string;
  title: string;
  text: string;
  tag: string;
}

export const SERVICE_OVERVIEW: readonly ServiceOverview[] = [
  {
    href: "#d1",
    image: img("strategie.png"),
    alt: "Stratégie digitale et conseil",
    icon: "❂",
    title: "Stratégie digitale et conseil",
    text: "Auditer, positionner et orienter votre transformation digitale avec clarté et précision.",
    tag: "01 / Conseil",
  },
  {
    href: "#d2",
    image: img("identitevisuel.png"),
    alt: "Identité visuelle et design",
    icon: "✦",
    title: "Identité visuelle et design",
    text: "Une identité cohérente, de la charte graphique aux supports du quotidien et menus QR.",
    tag: "02 / Identité",
  },
  {
    href: "#d3",
    image: img("webetsolutiondigital.png"),
    alt: "Web et solutions digitales",
    icon: "✧",
    title: "Web et solutions digitales",
    text: "Sites vitrines, réservation en ligne, boutiques et plateformes pensés pour votre activité.",
    tag: "03 / Web",
  },
  {
    href: "#d4",
    image: img("digitalmarketing.png"),
    alt: "Marketing digital et réseaux sociaux",
    icon: "◈",
    title: "Marketing digital et réseaux sociaux",
    text: "Présence, contenus et communication éditoriale pour faire vivre et rayonner votre marque.",
    tag: "04 / Social",
  },
  {
    href: "#d5",
    image: img("publicitedigital.png"),
    alt: "Publicité digitale",
    icon: "✺",
    title: "Publicité digitale",
    text: "Des campagnes ciblées sur Meta, Google et LinkedIn pour toucher la bonne audience.",
    tag: "05 / Acquisition",
  },
  {
    href: "#d6",
    image: img("visibilitelocale.png"),
    alt: "Visibilité locale et communication client",
    icon: "❖",
    title: "Visibilité locale et communication client",
    text: "Être trouvé près de chez vous via Google Maps et faciliter le contact sur WhatsApp Business.",
    tag: "06 / Local",
  },
  {
    href: "#d7",
    image: img("intelligenceartificielleetautomatisation.png"),
    alt: "Intelligence artificielle et automatisation",
    icon: "✦",
    title: "Intelligence artificielle et automatisation",
    text: "Chatbots intelligents, assistants WhatsApp et automatisations pour gagner du temps au quotidien.",
    tag: "07 / IA & Flux",
  },
  {
    href: "#d8",
    image: img("data&bi.png"),
    alt: "Data et Business Intelligence",
    icon: "❖",
    title: "Data et Business Intelligence",
    text: "Vos données transformées en tableaux de bord interactifs et en décisions stratégiques.",
    tag: "08 / Pilotage",
  },
];

export interface ServiceDomain {
  id: string;
  num: string;
  title: string;
  lead: string;
  items: readonly string[];
  image: string;
  alt: string;
  /** Background behind the (possibly transparent) screenshot. */
  mediaBg: string;
  /** Width of the artwork column (the `--s` custom property). */
  scale: string;
  /** Artwork on the left, text on the right (`.dom.r`). */
  reversed?: boolean;
  /** Narrow (portrait) artwork frame. */
  narrow?: boolean;
  /** Above-the-fold image: load eagerly with high fetch priority. */
  eager?: boolean;
}

export const SERVICE_DOMAINS: readonly ServiceDomain[] = [
  {
    id: "d1",
    num: "01",
    title: "Stratégie digitale et conseil",
    lead: "Auditer, positionner et orienter votre transformation digitale.",
    items: [
      "Audit digital",
      "Stratégie digitale et marketing",
      "Positionnement et analyse des concurrents",
      "Transformation digitale",
    ],
    image: img("strategie.png"),
    alt: "Stratégie & Consulting — Vision stratégique, intelligence collective et feuille de route digitale",
    mediaBg: "#1C1A17",
    scale: "100%",
    eager: true,
  },
  {
    id: "d2",
    num: "02",
    title: "Identité visuelle et design",
    lead: "Une identité cohérente, de la charte graphique aux supports du quotidien.",
    items: [
      "Logo, identité visuelle et charte graphique",
      "Cartes de visite, flyers et affiches",
      "Menu design et menu QR",
      "Catalogue digital",
      "Présentations, brochures et rapports",
      "Templates pour réseaux sociaux",
    ],
    image: img("identitevisuel.png"),
    alt: "Identité Visuelle & Branding — Menu gastronomique et chevalet QR Corrigan's Restaurant",
    mediaBg: "#2A1416",
    scale: "88%",
    reversed: true,
  },
  {
    id: "d3",
    num: "03",
    title: "Web et solutions digitales",
    lead: "Sites, boutiques et plateformes pensés pour votre activité.",
    items: [
      "Landing pages, sites vitrines et portfolios",
      "Sites professionnels multilingues",
      "Réservation en ligne",
      "Catalogues et boutiques en ligne",
      "Portails et plateformes métier",
      "Sites responsive et maintenance",
    ],
    image: img("webetsolutiondigital.png"),
    alt: "Web & Solutions Digitales — Interface de réservation en ligne Corrigan's",
    mediaBg: "#1B261D",
    scale: "100%",
  },
  {
    id: "d4",
    num: "04",
    title: "Marketing digital et réseaux sociaux",
    lead: "Présence, contenus et communication pour faire vivre votre marque.",
    items: [
      "Création de pages professionnelles",
      "Gestion des réseaux sociaux et community management",
      "Création de contenu",
      "Calendrier éditorial",
      "Marketing saisonnier et événementiel",
      "Communication institutionnelle et e-mailing",
      "Influence marketing",
    ],
    image: img("digitalmarketing.png"),
    alt: "Digital Marketing & Social Media — Grille éditoriale Instagram Luxury Clothing",
    mediaBg: "#121212",
    scale: "94%",
    reversed: true,
  },
  {
    id: "d5",
    num: "05",
    title: "Publicité digitale",
    lead: "Des campagnes ciblées pour toucher la bonne audience.",
    items: ["Meta Ads", "Google Ads", "LinkedIn Ads et génération de leads", "Remarketing", "Reporting publicitaire"],
    image: img("publicitedigital.png"),
    alt: "Publicité Digitale (Ads) — Création publicitaire sponsorisée Instagram haute conversion",
    mediaBg: "#121212",
    scale: "100%",
    narrow: true,
  },
  {
    id: "d6",
    num: "06",
    title: "Visibilité locale et communication client",
    lead: "Être trouvé près de chez vous et faciliter le contact avec vos clients.",
    items: [
      "Google Business Profile et Google Maps",
      "WhatsApp Business",
      "QR codes et liens de contact",
      "Formulaires et gestion des demandes",
    ],
    image: img("visibilitelocale.png"),
    alt: "Visibilité Locale & Google Business — Google Maps, WhatsApp Business et QR Code",
    mediaBg: "#ECEAE4",
    scale: "90%",
    reversed: true,
  },
  {
    id: "d7",
    num: "07",
    title: "Intelligence artificielle et automatisation",
    lead: "Assistants et automatisations pour gagner du temps au quotidien.",
    items: [
      "Chatbots et assistants IA",
      "Assistants de réservation et WhatsApp",
      "Automatisation administrative et commerciale",
      "Assistants internes et traitement de documents",
      "Génération de contenu assistée par IA",
    ],
    image: img("intelligenceartificielleetautomatisation.png"),
    alt: "Intelligence Artificielle & Automatisation — Assistant IA conversationnel intégré sur site web",
    mediaBg: "#F5F2EB",
    scale: "100%",
  },
  {
    id: "d8",
    num: "08",
    title: "Data et Business Intelligence",
    lead: "Vos données transformées en tableaux de bord et en décisions.",
    items: [
      "Suivi des données avec Excel et Google Sheets",
      "Tableaux de bord interactifs",
      "Analyse des ventes, réservations et satisfaction",
      "Reporting mensuel automatisé",
      "Analyse prédictive et Business Intelligence",
    ],
    image: img("data&bi.png"),
    alt: "Data & Business Intelligence (BI) — Tableau de bord financier analytique Finora",
    mediaBg: "#0E2433",
    scale: "92%",
    reversed: true,
  },
];
