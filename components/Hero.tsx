import { Reveal } from "./Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <Reveal className="hero-copy">
          <span className="eyebrow">
            <span className="dot" /> Now live in 9 African countries
          </span>
          <h1>
            Electronics that keep <span className="accent">working</span>, wherever you are.
          </h1>
          <p className="lead">
            Voltra sells genuine devices, repairs them fast with certified technicians, and ships
            across the continent — plus smart home and solar backup installs for the days the grid
            doesn&apos;t cooperate.
          </p>
          <div className="hero-actions">
            <a href="#shop" className="btn btn-primary">
              Shop electronics
            </a>
            <a href="#repair-form" className="btn btn-ghost">
              Book a repair
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <b>210k+</b>
              <span>Devices delivered</span>
            </div>
            <div className="stat">
              <b>48hr</b>
              <span>Avg. repair turnaround</span>
            </div>
            <div className="stat">
              <b>9</b>
              <span>Countries served</span>
            </div>
            <div className="stat">
              <b>4.8/5</b>
              <span>Customer rating</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="map-frame">
          <div className="map-topbar">
            <span>voltra://network-status</span>
            <span className="live">
              <i /> live
            </span>
          </div>
          <svg
            viewBox="0 0 460 420"
            width="100%"
            height="auto"
            role="img"
            aria-label="Animated map showing Voltra's delivery and service network expanding across African cities"
          >
            <path id="t1" className="trace" d="M120 90 C 160 140, 150 190, 210 220 S 300 260, 330 320" />
            <path id="t2" className="trace" d="M330 320 C 280 300, 230 300, 210 220" />
            <path id="t3" className="trace" d="M210 220 C 170 230, 120 250, 100 300" />
            <path id="t4" className="trace" d="M120 90 C 90 130, 70 170, 100 300" />
            <path id="t5" className="trace" d="M330 320 C 350 260, 340 180, 300 120" />
            <path id="t6" className="trace" d="M300 120 C 260 100, 200 80, 120 90" />

            <circle className="pulse" r="2.6">
              <animateMotion dur="4.2s" repeatCount="indefinite" begin="0s">
                <mpath href="#t1" />
              </animateMotion>
            </circle>
            <circle className="pulse" r="2.6" opacity=".9">
              <animateMotion dur="3.6s" repeatCount="indefinite" begin=".6s">
                <mpath href="#t4" />
              </animateMotion>
            </circle>
            <circle className="pulse" r="2.6" opacity=".9">
              <animateMotion dur="5s" repeatCount="indefinite" begin="1.1s">
                <mpath href="#t5" />
              </animateMotion>
            </circle>
            <circle className="pulse" r="2.6" opacity=".9">
              <animateMotion dur="3.2s" repeatCount="indefinite" begin="1.8s">
                <mpath href="#t3" />
              </animateMotion>
            </circle>

            <g className="node" transform="translate(210,220)">
              <circle className="ring" r="5" />
              <circle className="core" r="5" />
              <text x="12" y="4" fontFamily="IBM Plex Mono" fontSize="11" fill="#F5F6F8">
                Nairobi
              </text>
            </g>
            <g className="node teal" transform="translate(120,90)">
              <circle className="ring" r="4.5" />
              <circle className="core" r="4.5" />
              <text x="11" y="4" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#8A94A6">
                Kampala
              </text>
            </g>
            <g className="node teal" transform="translate(330,320)">
              <circle className="ring" r="4.5" />
              <circle className="core" r="4.5" />
              <text x="11" y="4" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#8A94A6">
                Dar es Salaam
              </text>
            </g>
            <g className="node" transform="translate(100,300)">
              <circle className="ring" r="4" />
              <circle className="core" r="4" />
              <text x="-72" y="4" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#8A94A6">
                Kigali
              </text>
            </g>
            <g className="node" transform="translate(300,120)">
              <circle className="ring" r="4" />
              <circle className="core" r="4" />
              <text x="11" y="4" fontFamily="IBM Plex Mono" fontSize="10.5" fill="#8A94A6">
                Addis Ababa
              </text>
            </g>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
