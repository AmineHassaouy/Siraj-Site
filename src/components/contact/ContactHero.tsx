export default function ContactHero() {
  return (
    <section className="hero">
      <svg className="arcs" viewBox="0 0 600 600" aria-hidden="true">
        <defs>
          <radialGradient id="glow">
            <stop offset="0" stopColor="#A4530C" stopOpacity=".35" />
            <stop offset="1" stopColor="#A4530C" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="430" cy="170" r="190" />
        <path pathLength="1" d="M60 560 A420 420 0 0 1 560 90" stroke="#A4530C" />
        <path pathLength="1" d="M130 570 A330 330 0 0 1 570 160" stroke="#8B3F0C" opacity=".55" />
        <path pathLength="1" d="M210 580 A240 240 0 0 1 580 240" stroke="#A4530C" opacity=".5" />
      </svg>
      <small>CONTACT</small>
      <h1>Chaque grand projet commence par une conversation.</h1>
      <p>
        Vous avez une idée, un projet ou un défi digital ? Nous serions ravis d’en entendre parler. Discutons de votre
        vision et voyons ensemble comment lui donner vie.
      </p>
    </section>
  );
}
