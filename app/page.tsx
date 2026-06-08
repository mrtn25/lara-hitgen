import Image from "next/image";
import EuropeMap from "./components/EuropeMap";

// Detect if a logo file exists — we use a flag per uni
// Logos should be placed in /public/logos/<key>.png (or .svg)
const LOGOS: Record<string, string> = {
  leuphana: "/logos/leuphana.png",
  whu: "/logos/whu.png",
  btu: "/logos/btu.png",
  nova: "/logos/nova.png",
  yc: "/logos/yc.png",
  ewor: "/logos/ewor.png",
};

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
  return (
    <div
      className={`rounded-2xl p-6 border font-sans flex flex-col gap-3 ${
        highlight
          ? "bg-stone-900 text-white border-stone-900"
          : "bg-white text-stone-700 border-stone-100"
      }`}
    >
      <div className="h-10 flex items-center">
        {LOGOS[logoKey] ? (
          <Image
            src={LOGOS[logoKey]}
            alt={name}
            width={120}
            height={40}
            className={`object-contain object-left max-h-9 w-auto ${highlight ? "brightness-0 invert" : ""}`}
          />
        ) : (
          <span className={`text-xs font-semibold uppercase tracking-wider ${highlight ? "text-stone-300" : "text-stone-400"}`}>
            {name}
          </span>
        )}
      </div>
      <div>
        <p className={`text-xs uppercase tracking-widest mb-1 ${highlight ? "text-stone-400" : "text-stone-400"}`}>
          {stage} · {period}
        </p>
        <p className={`text-sm font-semibold leading-snug ${highlight ? "text-white" : "text-stone-800"}`}>
          {degree}
        </p>
        <p className={`text-xs mt-0.5 ${highlight ? "text-stone-400" : "text-stone-400"}`}>{name}</p>
        {note && (
          <p className={`text-xs mt-1 ${highlight ? "text-stone-300" : "text-stone-500"}`}>{note}</p>
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
          <span className="text-sm font-medium tracking-wide text-stone-500 uppercase font-sans">
            Lara Hitgen
          </span>
          <div className="flex gap-6 text-sm text-stone-500 font-sans">
            <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
            <a href="#publications" className="hover:text-stone-900 transition-colors">Research</a>
            <a href="#universities" className="hover:text-stone-900 transition-colors">Affiliations</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-sans">
              PhD Researcher · BTU Cottbus-Senftenberg
            </p>
            <h1
              className="text-5xl sm:text-6xl leading-tight tracking-tight text-stone-900 mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Lara Hitgen
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed mb-8 font-sans">
              Democratizing fundraising — one network at a time.
            </p>
            <p className="text-base text-stone-500 leading-relaxed max-w-xl font-sans">
              I study how gender shapes entrepreneurs&apos; access to angel and venture capital
              through networking. My research reveals why the same strategy yields different
              outcomes for women and men — and what we can do about it.
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
        </div>
      </section>

      {/* Award Banner */}
      <section className="bg-stone-900 text-white py-5 px-6">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <span className="text-amber-400 text-lg">★</span>
          <p className="text-sm font-sans text-stone-200">
            <span className="font-semibold text-white">FGF Best Entrepreneurship Research Newcomer Award 2025</span>
            {" "}— for research on networking and gendered access to funding
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
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
                where I work under Prof. Dr. Katharina Scheidgen.
              </p>
              <p>
                My research investigates how different networking strategies — <em>serendipitous</em>,{" "}
                <em>calculated</em>, and <em>trusted</em> — shape entrepreneurs&apos; access to angel
                and venture capital. A core thread through my work is understanding why identical
                strategies produce systematically unequal outcomes for women and men.
              </p>
              <p>
                I use qualitative comparative case study methods, drawing on 52 case studies and
                conducting international fieldwork, including a longitudinal project in Portugal.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-sans">Research Focus</p>
                <p className="text-stone-700 font-sans text-sm leading-relaxed">
                  Gender &amp; entrepreneurial networking · Angel &amp; venture capital access ·
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
                  Top-tier founders and VCs across Europe — including alumni of{" "}
                  <strong>EWOR</strong>, <strong>Y&nbsp;Combinator</strong>, and unicorn-stage companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications / Research */}
      <section id="publications" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Research
          </h2>
          <p className="text-stone-500 font-sans text-sm mb-12">Working papers, awards, and ongoing studies</p>

          <div className="space-y-6">
            {/* Paper 1 — Under Review + Award */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-1">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="inline-flex items-center gap-1.5 text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-sans">
                    <span>★</span> FGF Award 2025
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-1 font-sans">
                    Under Review
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-sans mt-3 mb-1">
                The role of gender in entrepreneurs&apos; investor networking strategies
              </h3>
              <p className="text-xs text-stone-400 font-sans mb-3">
                Co-Authors: Scheidgen, K. &amp; Vongswasdi, P.
              </p>
              <p className="text-stone-500 font-sans text-sm leading-relaxed mb-4">
                Investigates how serendipitous, calculated, and trusted networking strategies
                differentially shape access to angel and VC funding — and why women face structural
                disadvantages even when deploying the same strategies as men. Presented at multiple
                international conferences and currently under journal review.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.fgf-ev.de/fgf-research-insights-award-winners-best-entrepreneurship-research-newcomer-award-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold rounded-full hover:bg-amber-100 transition-colors font-sans"
                >
                  ★ FGF Award Page →
                </a>
                <a
                  href="https://journals.aom.org/doi/10.5465/AMPROC.2025.20934abstract"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 text-stone-600 border border-stone-200 text-xs font-semibold rounded-full hover:bg-stone-200 transition-colors font-sans"
                >
                  AOM 2025 Abstract →
                </a>
              </div>
            </div>

            {/* Paper 1b — G-Forum version */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap gap-2 items-center mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs bg-stone-100 text-stone-500 border border-stone-200 rounded-full px-3 py-1 font-sans">
                  Conference Paper
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-sans mb-1">
                Reinforcing (dis)advantage in entrepreneurs&apos; networking strategies: Gender differences in efficiently networking with investors
              </h3>
              <p className="text-xs text-stone-400 font-sans mb-3">
                Co-Authors: Scheidgen, K. &amp; Vongswasdi, P.
              </p>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                28. Interdisziplinäre Jahreskonferenz zu Entrepreneurship, Innovation und Mittelstand
                (G-Forum) — Stuttgart, 17.–19. September 2025
              </p>
            </div>

            {/* Paper 2 — AOM */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap gap-2 items-center mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs bg-stone-100 text-stone-500 border border-stone-200 rounded-full px-3 py-1 font-sans">
                  Conference Paper
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-sans mb-1">
                Whom You Know Beats Who You Are: Gendered (Dis-)Advantages in Entrepreneurs&apos; Networking
              </h3>
              <p className="text-xs text-stone-400 font-sans mb-3">
                Co-Authors: Scheidgen, K. &amp; Kraft, P.
              </p>
              <p className="text-stone-500 font-sans text-sm leading-relaxed mb-4">
                The 85th Annual Meeting of the Academy of Management (AOM 2025) — Copenhagen, Denmark,
                25.–29. July 2025
              </p>
              <a
                href="https://journals.aom.org/doi/10.5465/AMPROC.2025.20934abstract"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 text-stone-600 border border-stone-200 text-xs font-semibold rounded-full hover:bg-stone-200 transition-colors font-sans"
              >
                AOM Proceedings →
              </a>
            </div>

            {/* Paper 3 — AI in Fundraising */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap gap-2 items-center mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs bg-violet-50 text-violet-600 border border-violet-200 rounded-full px-3 py-1 font-sans">
                  In Progress
                </span>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 font-sans mb-1">
                AI in Fundraising
              </h3>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                Third study in the dissertation series. Explores the role of artificial intelligence
                tools in entrepreneurial fundraising — how founders leverage AI to navigate investor
                networks, and the implications for access inequality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Academic Journey
          </h2>
          <p className="text-stone-500 font-sans text-sm mb-12">Education and institutional affiliations</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <UniCard
              stage="Bachelor"
              degree="B.Sc. Management & Entrepreneurship"
              name="Leuphana University Lüneburg"
              logoKey="leuphana"
              period="2018–2021"
            />
            <UniCard
              stage="Master"
              degree="M.Sc. Entrepreneurship"
              name="WHU – Otto Beisheim School of Management"
              logoKey="whu"
              period="2021–2023"
            />
            <UniCard
              stage="PhD"
              degree="Dr. rer. oec. (ongoing)"
              name="BTU Cottbus-Senftenberg"
              logoKey="btu"
              period="2023–present"
              note="Chair of Investment and Financing · Supervisor: Prof. Dr. Katharina Scheidgen"
              highlight
            />
            <UniCard
              stage="Visiting PhD"
              degree="International Research Stay"
              name="NOVA University Lisbon"
              logoKey="nova"
              period="2024"
              note="Fieldwork project in Portugal"
            />
          </div>
        </div>
      </section>

      {/* Interview Partners Map */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Fieldwork &amp; Interview Partners
          </h2>
          <p className="text-stone-500 font-sans text-sm mb-10">
            80+ in-depth interviews with top-tier founders and investors across Europe
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <EuropeMap />
            </div>
            <div className="space-y-6">
              <div className="bg-[#faf9f6] rounded-2xl p-6 border border-stone-100">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-sans">Partner Networks</p>
                <div className="flex flex-wrap gap-2">
                  {["EWOR", "Y Combinator", "Unicorn Founders", "European Angel Investors", "Venture Capital Firms"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-white border border-stone-200 text-stone-600 text-xs rounded-full font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 font-sans">
                  <span className="mt-1 w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-stone-800">Portugal — ≈60 interviews</p>
                    <p className="text-xs text-stone-500">Concentrated in Lisbon · Longitudinal fieldwork at NOVA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 font-sans">
                  <span className="mt-1 w-3 h-3 rounded-full bg-stone-800 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-stone-800">Germany — ≈20 interviews</p>
                    <p className="text-xs text-stone-500">Concentrated in Berlin &amp; Munich</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Get in Touch
          </h2>
          <p className="text-stone-400 font-sans text-sm mb-8 max-w-md">
            Interested in my research, collaboration, or speaking? I&apos;m happy to connect
            with fellow researchers, founders, and investors.
          </p>
          <a
            href="mailto:lara.hitgen@b-tu.de"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 text-sm font-semibold rounded-full hover:bg-stone-100 transition-colors font-sans"
          >
            lara.hitgen@b-tu.de
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-stone-950 text-stone-500">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
          <span>© {new Date().getFullYear()} Lara Hitgen</span>
          <span>BTU Cottbus-Senftenberg · Chair of Investment and Financing</span>
        </div>
      </footer>
    </div>
  );
}
