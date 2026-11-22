import ServicesCarousel from "./ServicesCarousel";

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="w">
        <div className="rv">
          <div className="lab">Nos services</div>
          <h2 className="t">
            Quatre expertises,
            <br />
            un seul interlocuteur.
          </h2>
          <p className="sub">Textes de cartes provisoires, à valider.</p>
        </div>
      </div>
      <ServicesCarousel />
    </section>
  );
}
