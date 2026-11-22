/* eslint-disable @next/next/no-img-element -- artwork supplied with the wireframes; natural size unknown, sized by Tailwind classes */
import { cssVars } from "@/lib/css";

export default function ServicesIntro() {
  return (
    <section id="introduction" className="pb-16 md:pb-28 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6 text-center lg:text-left rv">
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A120E] leading-[1.14] mb-7">
            Des solutions <span className="italic font-normal text-[#B8642A]">intelligentes.</span>
            <br />
            Des idées <span className="italic font-normal text-[#B8642A]">ambitieuses.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#2C221E]/80 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-9">
            Nous combinons technologie, créativité et intelligence artificielle pour concevoir des solutions digitales
            qui accompagnent votre évolution.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="#overview" className="btn">
              Explorer nos expertises
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 rv" style={cssVars({ "--d": ".15s" })}>
          <div className="editorial-frame p-0 sm:p-3.5 bg-gradient-to-br from-[#F4EDE0] via-white to-[#EFE6D5]">
            <div className="relative rounded-xl overflow-hidden bg-[#E7DEC8]">
              <img
                src="/images/introimage.png"
                alt="SIRAJ Services — Écosystème de solutions intelligentes et accompagnement digital"
                className="w-full h-auto object-contain block rounded-xl"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#D4963B]/25 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
