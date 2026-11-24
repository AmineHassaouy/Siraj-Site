import Link from "next/link";
import { CONTACT, FOOTER_SERVICES, NAV_LINKS, SITE_DESCRIPTION } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="fg">
          <div>
            <div className="lk" style={{ fontSize: 28 }}>
              <div className="lg" />
              <div className="nm">SIRAJ</div>
            </div>
            <p className="d">{SITE_DESCRIPTION}</p>
            <div className="soc">
              <a target="_blank" rel="noopener" href={CONTACT.linkedin}>
                Linkedin
              </a>
              <a target="_blank" rel="noopener" href={CONTACT.instagram}>
                Instagram
              </a>
              <a target="_blank" rel="noopener" href={CONTACT.facebook}>
                Facebook
              </a>
            </div>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.key}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="fb">
          <span>© 2026 SIRAJ. Tous droits réservés.</span>
          <span>
            <b style={{ color: "var(--ocl)" }}>FR</b> | EN
          </span>
        </div>
      </div>
    </footer>
  );
}
