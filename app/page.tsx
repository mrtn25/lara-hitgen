import Image from "next/image";
import EuropeMap from "./components/EuropeMap";

const LOGOS: Record<string, { src: string; ext: string }> = {
  leuphana: { src: "/logos/leuphana.jpg", ext: "jpg" },
  whu:      { src: "/logos/whu.png",      ext: "png" },
  uq:       { src: "/logos/uq.png",       ext: "png" },
  btu:      { src: "/logos/btu.svg",      ext: "svg" },
  nova:     { src: "/logos/nova.png",     ext: "png" },
};

const PARTNER_LOGOS = [
  { key: "yc",           src: "/logos/yc.png",           alt: "Y Combinator" },
  { key: "ewor",         src: "/logos/ewor.png",          alt: "EWOR" },
  { key: "techstars",    src: "/logos/techstars.png",     alt: "Techstars" },
  { key: "founders-inc", src: "/logos/founders-inc.png",  alt: "Founders, Inc." },
];

function UniCard({
  stage,
  degree,
  name,
  logoKey,
  period,
  note,
  highlight,
}: {
  stage: string;
  degree: string;
  name: string;
  logoKey: string;
  period: string;
  note?: string;
  highlight?: boolean;
}) {
  const logo = LOGOS[logoKey];
  return (
    <div
      className={`rounded-2xl p-6 border font-sans flex flex-col gap-3 ${
        highlight
          ? "bg-white text-stone-700 border-stone-300 border-2"
          : "bg-white text-stone-700 border-stone-100"
      }`}
    >
      <div className="h-10 flex items-center">
        {logo ? (
          <Image
            src={logo.src}
            alt={name}
            width={120}
            height={40}
            className="object-contain object-left max-h-9 w-auto"
          />
        ) : (
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            {name}
          </span>
        )}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest mb-1 text-stone-400">
          {stage} · {period}
        </p>
        <p className="text-sm font-semibold leading-snug text-stone-800">
          {degree}
        </p>
        <p className="text-xs mt-0.5 text-stone-400">{name}</p>
        {note && (
          <p className="text-xs mt-1 text-stone-500">{note}</p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-medium tracking-wide text-stone-600 font-sans">
            Lara Hitgen
          </span>
          <div className="flex gap-5 text-sm text-stone-500 font-sans items-center">
            <a href="#about" className="hidden sm:block hover:text-stone-900 transition-colors">About</a>
            <a href="#publications" className="hidden sm:block hover:text-stone-900 transition-colors">Research</a>
            <a href="#universities" className="hidden md:block hover:text-stone-900 transition-colors">Affiliations</a>
            <a href="#contact" className="hidden sm:block hover:text-stone-900 transition-colors">Contact</a>
            <a
              href="https://www.linkedin.com/in/lara-h-btu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors flex items-center"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-14 px-6 md:pt-32 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start">
            <div className="flex-1 max-w-2xl">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-sans">
                PhD Researcher · BTU Cottbus-Senftenberg
              </p>
              <h1
                className="text-5xl sm:text-6xl leading-tight tracking-tight text-stone-900 mb-6"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Lara Hitgen
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed mb-6 font-sans">
                Democratizing fundraising, one network at a time.
              </p>
              <p className="text-base text-stone-500 leading-relaxed max-w-xl font-sans">
                I study how gender shapes access to angel and venture capital through networking.
                My research shows why the same strategy yields different outcomes for women and men,
                and what that means for how we build the next generation of founders.
              </p>
              <div className="mt-10 flex gap-4 flex-wrap">
                <a
                  href="#publications"
                  className="px-5 py-2.5 bg-stone-900 text-white text-sm rounded-full hover:bg-stone-700 transition-colors font-sans"
                >
                  View Research
                </a>
                <a
                  href="#contact"
                  className="px-5 py-2.5 border border-stone-300 text-stone-700 text-sm rounded-full hover:border-stone-500 transition-colors font-sans"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <Image
                src="/profile.png"
                alt="Lara Hitgen"
                width={260}
                height={320}
                className="rounded-2xl object-cover object-top shadow-sm w-full md:w-[260px]"
                style={{ aspectRatio: "4/5", maxHeight: "320px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Banner */}
      <section className="bg-stone-900 text-white py-5 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <span className="text-amber-400 text-lg">★</span>
          <p className="text-sm font-sans text-stone-200">
            <span className="font-semibold text-white">FGF Best Entrepreneurship Research Newcomer Award 2025</span>
            {" "}for research on networking and gendered access to funding
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl text-stone-900 mb-12"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-stone-600 font-sans leading-relaxed">
              <p>
                I am a PhD student at the <strong className="text-stone-800">Chair of General Business
                Administration (especially Investment and Financing)</strong> at BTU Cottbus-Senftenberg,
                working under Prof. Dr. Katharina Scheidgen.
              </p>
              <p>
                My work looks at how serendipitous, calculated, and trusted networking strategies
                shape access to angel and venture capital. A central question running through my
                research is why the same strategy produces unequal outcomes for women and men.
              </p>
              <p>
                I use qualitative comparative case study methods across 52 cases, and I conduct
                international fieldwork, including a longitudinal project in Portugal.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-sans">Research Focus</p>
                <p className="text-stone-700 font-sans text-sm leading-relaxed">
                  Gender and entrepreneurial networking · Angel and VC access ·
                  Qualitative comparative case study · Fundraising inequality · AI in fundraising
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-sans">Methods</p>
                <p className="text-stone-700 font-sans text-sm leading-relaxed">
                  Qualitative comparative case study (52 cases) · International fieldwork ·
                  In-depth interviews with founders and investors
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-sans">Interview Partners</p>
                <p className="text-stone-700 font-sans text-sm leading-relaxed">
                  Top-tier founders and VCs across Europe, including alumni of{" "}
                  <strong>EWOR</strong>, <strong>Y Combinator</strong>, and unicorn-stage companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Research
          </h2>
          <p className="text-stone-500 font-sans text-sm mb-12">Working papers, awards, and ongoing studies</p>

          <div className="space-y-6">
            {/* Paper 1: Award + Under Review */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-sans">
                  <span>★</span> FGF Award 2025
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-1 font-sans">
                  Under Review
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-sans mb-1">
                The role of gender in entrepreneurs&apos; investor networking strategies
              </h3>
              <p className="text-xs text-stone-400 font-sans mb-4">
                Co-Authors: Scheidgen, K. and Vongswasdi, P.
              </p>
              <p className="text-stone-500 font-sans text-sm leading-relaxed mb-5">
                How do serendipitous, calculated, and trusted networking strategies shape access to
                angel and VC funding, and why do women face structural disadvantages even when using
                the same strategies as men? This paper, presented at multiple international
                conferences, is currently under journal review.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.fgf-ev.de/fgf-research-insights-award-winners-best-entrepreneurship-research-newcomer-award-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold rounded-full hover:bg-amber-100 transition-colors font-sans"
                >
                  ★ FGF Award Page
                </a>
                <a
                  href="https://journals.aom.org/doi/10.5465/AMPROC.2025.20934abstract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 text-stone-600 border border-stone-200 text-xs font-semibold rounded-full hover:bg-stone-200 transition-colors font-sans"
                >
                  AOM 2025 Abstract
                </a>
              </div>
            </div>

            {/* Paper 2: G-Forum */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs bg-stone-100 text-stone-500 border border-stone-200 rounded-full px-3 py-1 font-sans">
                  Conference Paper
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-sans mb-1">
                Reinforcing (dis)advantage in entrepreneurs&apos; networking strategies: Gender differences in efficiently networking with investors
              </h3>
              <p className="text-xs text-stone-400 font-sans mb-3">
                Co-Authors: Scheidgen, K. and Vongswasdi, P.
              </p>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                28. Interdisziplinare Jahreskonferenz zu Entrepreneurship, Innovation und Mittelstand
                (G-Forum), Stuttgart, 17. to 19. September 2025
              </p>
            </div>

            {/* Paper 3: AOM */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs bg-stone-100 text-stone-500 border border-stone-200 rounded-full px-3 py-1 font-sans">
                  Conference Paper
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-sans mb-1">
                Whom You Know Beats Who You Are: Gendered (Dis-)Advantages in Entrepreneurs&apos; Networking
              </h3>
              <p className="text-xs text-stone-400 font-sans mb-3">
                Co-Authors: Scheidgen, K. and Kraft, P.
              </p>
              <p className="text-stone-500 font-sans text-sm leading-relaxed mb-4">
                The 85th Annual Meeting of the Academy of Management (AOM 2025), Copenhagen, Denmark,
                25. to 29. July 2025
              </p>
              <a
                href="https://journals.aom.org/doi/10.5465/AMPROC.2025.20934abstract"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 text-stone-600 border border-stone-200 text-xs font-semibold rounded-full hover:bg-stone-200 transition-colors font-sans"
              >
                AOM Proceedings
              </a>
            </div>

            {/* Paper 4: AI in Fundraising */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs bg-violet-50 text-violet-600 border border-violet-200 rounded-full px-3 py-1 font-sans">
                  In Progress
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-sans mb-1">
                AI in Fundraising
              </h3>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                Third study in the dissertation series. Looks at how founders use AI tools to
                navigate investor networks and what that means for who gets funded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Academic Journey
          </h2>
          <p className="text-stone-500 font-sans text-sm mb-12">Education and institutional affiliations</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <UniCard
              stage="Bachelor"
              degree="B.Sc. International Business Administration and Entrepreneurship"
              name="Leuphana University Luneburg"
              logoKey="leuphana"
              period="2018 to 2022"
            />
            <UniCard
              stage="Master"
              degree="M.Sc. Entrepreneurship"
              name="WHU Otto Beisheim School of Management"
              logoKey="whu"
              period="2022 to 2024"
              note="Grade: 1.2"
            />
            <UniCard
              stage="Exchange"
              degree="Exchange Semester, Entrepreneurship and Innovation"
              name="The University of Queensland"
              logoKey="uq"
              period="Jul to Nov 2023"
              note="Grade: 6.5/7"
            />
            <UniCard
              stage="PhD"
              degree="Doctoral Candidate, Entrepreneurial Finance"
              name="BTU Cottbus-Senftenberg"
              logoKey="btu"
              period="Sep 2025 to present"
              note="Chair of Investment and Financing · Supervisor: Prof. Dr. Katharina Scheidgen"
              highlight
            />
            <UniCard
              stage="Visiting PhD"
              degree="Visiting PhD Researcher"
              name="NOVA School of Business and Economics"
              logoKey="nova"
              period="Feb 2026 to present"
              note="Lisbon · On-site fieldwork"
            />
          </div>
        </div>
      </section>

      {/* Map + Interview Partners */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Fieldwork and Interview Partners
          </h2>
          <p className="text-stone-500 font-sans text-sm mb-10">
            80+ in-depth interviews with founders and investors across Europe
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {[
              { value: "5+", label: "Unicorn Founders" },
              { value: "30+", label: "General Partners" },
              { value: "40+", label: "Analysts" },
            ].map(({ value, label }) => (
              <div key={label} className="bg-[#faf9f6] rounded-2xl p-6 border border-stone-100 text-center font-sans">
                <p className="text-3xl font-bold text-stone-900 mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{value}</p>
                <p className="text-xs text-stone-500 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <EuropeMap />
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3 font-sans">
                  <span className="mt-1.5 w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-stone-800">Portugal, 60+ interviews</p>
                    <p className="text-xs text-stone-500">Concentrated in Lisbon · Longitudinal fieldwork at NOVA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 font-sans">
                  <span className="mt-1.5 w-3 h-3 rounded-full bg-stone-800 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-stone-800">Germany, 20+ interviews</p>
                    <p className="text-xs text-stone-500">Concentrated in Berlin and Munich</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#faf9f6] rounded-2xl p-6 border border-stone-100">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-sans">Including interview partners from</p>
                <div className="grid grid-cols-2 gap-4 items-center">
                  {PARTNER_LOGOS.map(({ src, alt }) => (
                    <div key={alt} className="flex items-center justify-center h-10">
                      <Image
                        src={src}
                        alt={alt}
                        width={110}
                        height={40}
                        className="object-contain w-full max-h-8"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-shrink-0 w-40 md:w-auto">
              <Image
                src="/profile.png"
                alt="Lara Hitgen"
                width={200}
                height={240}
                className="rounded-2xl object-cover object-top shadow-lg"
                style={{ aspectRatio: "4/5" }}
              />
            </div>
            <div>
              <h2
                className="text-3xl text-white mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Get in Touch
              </h2>
              <p className="text-stone-400 font-sans text-sm mb-8 max-w-md leading-relaxed">
                Interested in the research, open to collaboration, or want to talk about
                entrepreneurial ecosystems? Feel free to reach out.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:lara.hitgen@b-tu.de"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 text-sm font-semibold rounded-full hover:bg-stone-100 transition-colors font-sans"
                >
                  lara.hitgen@b-tu.de
                </a>
                <a
                  href="https://www.linkedin.com/in/lara-h-btu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white text-sm font-semibold rounded-full hover:bg-stone-700 transition-colors font-sans"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-stone-950 text-stone-500">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
          <span>2025 Lara Hitgen</span>
          <span>BTU Cottbus-Senftenberg · Chair of Investment and Financing</span>
        </div>
      </footer>
    </div>
  );
}
