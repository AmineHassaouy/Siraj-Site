/** Shared (client + server) contact-form model and validation. */

export const SERVICE_OPTIONS = [
  "Développement web & mobile",
  "Marketing digital",
  "IA & automatisation",
  "Analyse de données & BI",
  "Autre / pas encore sûr",
] as const;

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  /** Honeypot — real visitors never fill it. */
  website: string;
}

export type ContactField = "name" | "email" | "message";
export type ContactErrors = Partial<Record<ContactField, string>>;

const MAX = { name: 120, email: 160, phone: 40, company: 160, service: 80, message: 5000, website: 200 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Coerces unknown input (request body / FormData) into a trimmed, length-capped payload. */
export function toPayload(input: unknown): ContactPayload {
  const src = (typeof input === "object" && input !== null ? input : {}) as Record<string, unknown>;
  const str = (k: keyof typeof MAX) => (typeof src[k] === "string" ? (src[k] as string).trim().slice(0, MAX[k]) : "");
  return {
    name: str("name"),
    email: str("email"),
    phone: str("phone"),
    company: str("company"),
    service: str("service"),
    message: str("message"),
    website: str("website"),
  };
}

export function validateContact(p: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (!p.name) errors.name = "Merci d’indiquer votre nom.";
  if (!p.email) errors.email = "Merci d’indiquer votre adresse e-mail.";
  else if (!EMAIL_RE.test(p.email)) errors.email = "Cette adresse e-mail semble invalide.";
  if (!p.message) errors.message = "Dites-nous en quelques mots votre projet.";
  return errors;
}
