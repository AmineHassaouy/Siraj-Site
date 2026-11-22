import Link from "next/link";

/** “Parlons de vos ambitions.” closing band (Home + About). */
export default function ContactCta() {
  return (
    <section id="contact">
      <div className="w rv">
        <h2>
          Parlons de
          <br />
          vos <em>ambitions.</em>
        </h2>
        <p>Dites-nous ce dont vous avez besoin, nous vous répondrons simplement et clairement.</p>
        <Link className="btn" href="/contact">
          Nous contacter <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
