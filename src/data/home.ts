export interface HomeService {
  title: string;
  text: string;
  image: string;
  alt: string;
  href: string;
}

export const HOME_SERVICES: readonly HomeService[] = [
  {
    title: "Développement web",
    text: "Sites et applications pensés pour être clairs, rapides et faciles à faire évoluer.",
    image: "/images/service-web.jpg",
    alt: "Développement web",
    href: "/services#d3",
  },
  {
    title: "Marketing digital & design",
    text: "Identité, contenus et réseaux sociaux pour être visible et attirer des clients.",
    image: "/images/service-marketing.jpg",
    alt: "Marketing digital et design",
    href: "/services#d4",
  },
  {
    title: "Intelligence artificielle",
    text: "Assistants et outils intelligents qui font gagner du temps au quotidien.",
    image: "/images/service-ai.jpg",
    alt: "Intelligence artificielle",
    href: "/services#d7",
  },
  {
    title: "Data & automatisation",
    text: "Tableaux de bord et automatisations pour décider et travailler plus simplement.",
    image: "/images/service-data.jpg",
    alt: "Data et automatisation",
    href: "/services#d8",
  },
];

export interface WhyStep {
  title: string;
  text: string;
  left: string;
  top: string;
}

export const WHY_STEPS: readonly WhyStep[] = [
  { title: "Un seul interlocuteur", text: "Web, marketing, IA et data au même endroit.", left: "11%", top: "21%" },
  { title: "Des offres claires", text: "Des tarifs adaptés aux budgets locaux.", left: "37%", top: "14%" },
  { title: "L’IA et la data", text: "Au service de votre activité.", left: "63%", top: "14%" },
  { title: "Trois langues", text: "Français, arabe et anglais.", left: "89%", top: "21%" },
];

/** End points of the four light rays (all start at 500,482). */
export const WHY_RAYS: readonly string[] = ["M500 482 L110 220", "M500 482 L370 180", "M500 482 L630 180", "M500 482 L890 220"];

export interface Audience {
  title: string;
  text: string;
  image: string;
  alt: string;
}

/** Images live in /public/images — drop the files supplied with the wireframes there. */
export const AUDIENCES: readonly Audience[] = [
  {
    title: "Petits projets et indépendants",
    text: "Auto-entrepreneurs, boutiques, jeunes marques, freelances : une présence digitale simple et abordable pour bien démarrer.",
    image: "/images/ciblePetitprojet.png",
    alt: "Petits projets et indépendants",
  },
  {
    title: "Restaurants, cafés, hôtels et riads",
    text: "Menu QR, réservation, WhatsApp, Google Maps, chatbot : des solutions pour attirer et fidéliser.",
    image: "/images/REstaucafe.png",
    alt: "Restaurants, cafés, hôtels et riads",
  },
  {
    title: "Entreprises et groupes",
    text: "PME, écoles, groupes avec réseau de partenaires : stratégie, site, contenu, publicité et reporting.",
    image: "/images/entreprisesetecoles.png",
    alt: "Entreprises et groupes",
  },
];
