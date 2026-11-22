export type PageKey = "home" | "about" | "services" | "contact";

export interface NavLink {
  key: PageKey;
  label: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { key: "home", label: "Accueil", href: "/" },
  { key: "about", label: "À propos", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export const CONTACT = {
  whatsapp: "https://wa.me/212754512451",
  /** Address behind the “E-mail” row of the contact panel (as in the wireframe). */
  mailto: "mailto:sirajagency1@gmail.com",
  /** Label displayed for that row (as in the wireframe). */
  emailLabel: "hello@siraj.ma",
  phoneLabel: "+212 7 54 51 24 51",
  phoneHref: "tel:+212754512451",
  instagram: "https://www.instagram.com/siraj.digitale?avpt=MXd6OXIyMHZnZnZ5Zg==",
} as const;

/** Footer “Services” column + the home carousel links point at these detail sections. */
export const FOOTER_SERVICES = [
  { label: "Développement web", href: "/services#d3" },
  { label: "Marketing digital & design", href: "/services#d4" },
  { label: "Intelligence artificielle", href: "/services#d7" },
  { label: "Data & automatisation", href: "/services#d8" },
] as const;

export const SITE_DESCRIPTION =
  "Agence digitale et IA basée à Casablanca : web, marketing, intelligence artificielle et data.";
