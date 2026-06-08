export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1c1917]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f6]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-sm font-medium tracking-wide text-stone-500 uppercase">
            Lara Hitgen
          </span>
          <div className="flex gap-6 text-sm text-stone-500">
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
              className="text-5xl sm:text-6xl font-serif leading-tight tracking-tight text-stone-900 mb-6"
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
            className="text-3xl font-serif text-stone-900 mb-12"
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
                  Qualitative comparative case study · Fundraising inequality
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
            className="text-3xl font-serif text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Research
          </h2>
          <p className="text-stone-500 font-sans text-sm mb-12">Working papers, awards, and ongoing studies</p>

          <div className="space-y-6">
            {/* Award Paper */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-3 py-1 font-sans mb-3">
                    <span>★</span> FGF Award 2025
                  </span>
                  <h3 className="text-lg font-semibold text-stone-900 font-sans">
                    Networking Strategies and Gendered Access to Venture Capital
                  </h3>
                </div>
                <span className="text-xs text-stone-400 font-sans whitespace-nowrap">Best Newcomer Paper</span>
              </div>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                Investigates how serendipitous, calculated, and trusted networking strategies
                differentially shape access to angel and VC funding — and why women face
                structural disadvantages even when deploying the same strategies as men.
                Awarded the FGF Best Entrepreneurship Research Newcomer Award 2025.
              </p>
            </div>

            {/* Under Review */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-blue-50 text-blue-600 border border-blue-200 rounded-full px-3 py-1 font-sans mb-3">
                    Under Review
                  </span>
                  <h3 className="text-lg font-semibold text-stone-900 font-sans">
                    Study I — Primary Research Paper
                  </h3>
                </div>
              </div>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                Currently under review at a peer-reviewed journal. Details available upon request.
              </p>
            </div>

            {/* Second Study */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-stone-100 text-stone-500 border border-stone-200 rounded-full px-3 py-1 font-sans mb-3">
                    In Progress
                  </span>
                  <h3 className="text-lg font-semibold text-stone-900 font-sans">
                    Study II — Portugal Field Research
                  </h3>
                </div>
              </div>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                International comparative case study drawing on fieldwork conducted in Portugal.
                Examines cross-cultural variation in how gender interacts with entrepreneurial
                network formation and investor access.
              </p>
            </div>

            {/* Third Study */}
            <div className="bg-[#faf9f6] rounded-2xl p-8 border border-stone-100">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-stone-100 text-stone-500 border border-stone-200 rounded-full px-3 py-1 font-sans mb-3">
                    In Progress
                  </span>
                  <h3 className="text-lg font-semibold text-stone-900 font-sans">
                    Study III — Forthcoming
                  </h3>
                </div>
              </div>
              <p className="text-stone-500 font-sans text-sm leading-relaxed">
                Third study in the dissertation series. Details to be announced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section id="universities" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-serif text-stone-900 mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Academic Affiliations
          </h2>
          <p className="text-stone-500 font-sans text-sm mb-12">Universities and institutions</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "BTU Cottbus-Senftenberg", role: "PhD Candidate", primary: true },
              { name: "Leuphana University", role: "Affiliated", primary: false },
              { name: "WHU – Otto Beisheim", role: "Affiliated", primary: false },
              { name: "NOVA University Lisbon", role: "Field Research", primary: false },
            ].map((uni) => (
              <div
                key={uni.name}
                className={`rounded-2xl p-6 border font-sans ${
                  uni.primary
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-white text-stone-700 border-stone-100"
                }`}
              >
                <p className={`text-xs uppercase tracking-widest mb-2 ${uni.primary ? "text-stone-400" : "text-stone-400"}`}>
                  {uni.role}
                </p>
                <p className={`text-sm font-semibold leading-snug ${uni.primary ? "text-white" : "text-stone-800"}`}>
                  {uni.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences + Social Proof */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-serif text-stone-900 mb-12"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Conferences &amp; Fieldwork
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-sans">Conference Activity</p>
              <ul className="space-y-3 text-stone-600 font-sans text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                  FGF Entrepreneurship Research Conference (Award Winner 2025)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                  International entrepreneurship and gender research forums
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-stone-400 flex-shrink-0" />
                  Venture capital and angel investment symposia across Europe
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-sans">Interview Partners</p>
              <p className="text-stone-600 font-sans text-sm leading-relaxed mb-4">
                For my research I have conducted in-depth interviews with top-tier founders and
                investors from across Europe — including participants from:
              </p>
              <div className="flex flex-wrap gap-2">
                {["EWOR", "Y Combinator", "Unicorn Founders", "European VCs", "Angel Investors"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-stone-100 text-stone-600 text-xs rounded-full font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-serif text-white mb-4"
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
