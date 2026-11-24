import { CONTACT } from "@/data/site";

/** Direct-contact panel that slides out from behind the form. Order of `.item`s drives the stagger. */
export default function ContactPanel() {
  return (
    <aside className="panel" aria-label="Contact direct">
      <h3 className="item">Vous préférez nous parler directement ?</h3>
      <p className="lead item">Joignez l’équipe sur le canal qui vous convient le mieux.</p>
      <a className="wa-row item" target="_blank" rel="noopener" href={CONTACT.whatsapp}>
        <span>
          <small>WhatsApp</small>
          <strong>Démarrer la conversation</strong>
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21z" />
        </svg>
      </a>
      <a className="row item" href={CONTACT.mailto}>
        <small>E-mail</small>
        <strong>{CONTACT.emailLabel}</strong>
      </a>
      <a className="row item" href={CONTACT.phoneHref}>
        <small>Téléphone</small>
        <strong>{CONTACT.phoneLabel}</strong>
      </a>
      <div className="soc item">
        <a target="_blank" rel="noopener" href={CONTACT.instagram}>
          Instagram
        </a>
        <a target="_blank" rel="noopener" href={CONTACT.facebook}>
          Facebook
        </a>
        <a target="_blank" rel="noopener" href={CONTACT.linkedin}>
          Linkedin
        </a>
      </div>
    </aside>
  );
}
