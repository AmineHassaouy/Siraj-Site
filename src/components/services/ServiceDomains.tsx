/* eslint-disable @next/next/no-img-element -- artwork supplied with the wireframes; natural size unknown, sized by CSS */
import { SERVICE_DOMAINS } from "@/data/services";
import { cssVars } from "@/lib/css";

export default function ServiceDomains() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <radialGradient id="gc" cx=".35" cy=".3" r=".85">
            <stop offset="0" stopColor="#F6C490" />
            <stop offset=".5" stopColor="#C17A3A" />
            <stop offset="1" stopColor="#7A3A0C" />
          </radialGradient>
          <radialGradient id="gs" cx=".35" cy=".3" r=".85">
            <stop offset="0" stopColor="#D5E0D3" />
            <stop offset=".5" stopColor="#8DA28C" />
            <stop offset="1" stopColor="#506C55" />
          </radialGradient>
          <radialGradient id="gl" cx=".35" cy=".3" r=".85">
            <stop offset="0" stopColor="#FFFFFA" />
            <stop offset=".55" stopColor="#F2EDCF" />
            <stop offset="1" stopColor="#CDBE88" />
          </radialGradient>
          <radialGradient id="gd" cx=".35" cy=".3" r=".85">
            <stop offset="0" stopColor="#9A6A32" />
            <stop offset=".5" stopColor="#5E3B14" />
            <stop offset="1" stopColor="#2A1807" />
          </radialGradient>
        </defs>
      </svg>

      <div id="doms">
        {SERVICE_DOMAINS.map((d, i) => (
          <section className={d.reversed ? "dom r t" : "dom"} id={d.id} key={d.id} data-i={i}>
            <div className="w">
              <div className="rv">
                <div className="gn">{d.num}</div>
                <h2 className="t">{d.title}</h2>
                <p className="lead">{d.lead}</p>
                <ul className="sv">
                  {d.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="art rv" style={cssVars({ "--s": d.scale, "--d": ".15s" })}>
                <figure className={d.narrow ? "editorial-frame narrow" : "editorial-frame"}>
                  <div className="media" style={{ background: d.mediaBg }}>
                    <img
                      src={d.image}
                      alt={d.alt}
                      loading={d.eager ? "eager" : "lazy"}
                      fetchPriority={d.eager ? "high" : undefined}
                      decoding="async"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
