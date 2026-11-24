/* eslint-disable @next/next/no-img-element -- artwork supplied with the wireframes; natural size unknown, sized by Tailwind classes */
import { SERVICE_OVERVIEW } from "@/data/services";
import { cssVars } from "@/lib/css";

export default function ServicesOverview() {
  return (
    <section id="overview" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 rv">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3A2416]/75">Neuf domaines</span>
        <h2 className="font-editorial text-3xl md:text-5xl font-bold text-[#1A120E] mt-3">
          Ce que nous faisons, du premier regard au dernier détail.
        </h2>
        <div className="w-16 h-0.5 bg-[#D4963B] mx-auto mt-4" />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 rv"
        style={cssVars({ "--d": ".1s" })}
      >
        {SERVICE_OVERVIEW.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="card-light-hover relative group bg-white/75 md:backdrop-blur-md rounded-2xl p-7 border border-[#3A2416]/12 shadow-sm hover:shadow-xl hover:border-[#D4963B]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[260px]"
          >
            <img
              src={s.image}
              alt={s.alt}
              className="card-hover-img absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            />
            <div className="card-hover-scrim absolute inset-0 bg-gradient-to-t from-[#1A120E]/92 via-[#1A120E]/72 to-[#1A120E]/45 pointer-events-none z-[1]" />
            <div className="light-sweep-effect absolute inset-0 z-[2]" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#3A2416]/5 flex items-center justify-center text-[#3A2416] text-xl mb-5 group-hover:bg-[#3A2416]/90 group-hover:text-[#D4963B] group-hover:ring-1 group-hover:ring-[#D4963B]/50 transition-all duration-500 shadow-sm">
                {s.icon}
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#1A120E] mb-2.5 group-hover:text-[#FAF8EA] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C221E]/75 leading-relaxed font-light group-hover:text-[#FAF8EA]/90 transition-colors duration-300">
                {s.text}
              </p>
            </div>
            <div className="relative z-10 mt-6 pt-3.5 border-t border-[#3A2416]/10 group-hover:border-[#FAF8EA]/20 flex items-center justify-between text-xs font-medium text-[#3A2416] group-hover:text-[#FAF8EA] transition-colors duration-300">
              <span>{s.tag}</span>
              <span className="text-[#D4963B] group-hover:translate-x-1 transition-transform">Explorer →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
