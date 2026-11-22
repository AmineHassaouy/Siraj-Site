/** Google Fonts stylesheet used by each page (identical to the wireframes' <link> tags). */
const BASE = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500";

export const FONTS = {
  home: `${BASE}&family=Manrope:wght@400;500;600&display=swap`,
  about: `${BASE}&family=Manrope:wght@400;500;600&display=swap`,
  services: `${BASE}&family=Inter:wght@300;400;500;600&family=Manrope:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap`,
  contact: `${BASE}&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Manrope:wght@400;500;600&display=swap`,
} as const;
