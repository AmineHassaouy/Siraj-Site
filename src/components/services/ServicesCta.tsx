import Link from "next/link";

export default function ServicesCta() {
  return (
    <section id="cta">
      <div className="w rv">
        <h2>
          Votre prochain projet commence par une idée. <em>Donnons-lui vie.</em>
        </h2>
        <p>Parlons de vos ambitions et imaginons ensemble la solution qui vous correspond.</p>
        <Link className="btn" href="/contact">
          Discutons de votre projet <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
