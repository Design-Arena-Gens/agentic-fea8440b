import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCard } from "@/components/StatCard";

export default function Home() {
  const stats = [
    {
      label: "Product Leadership",
      value: "12+ yrs",
      footer: "Driving strategy across fintech, healthtech, and AI ventures.",
    },
    {
      label: "Teams Led",
      value: "40+",
      footer: "Scaled multi-disciplinary squads from concept to launch.",
    },
    {
      label: "Capital Raised",
      value: "$48M",
      footer: "Partnered with founders to unlock milestone funding rounds.",
    },
  ];

  const experience = [
    {
      role: "Founder & Fractional CPO",
      company: "Iridium Labs",
      timeframe: "2021 — Present",
      summary:
        "Product strategy studio collaborating with venture-backed startups and mid-market companies to ignite growth from 0→1 and 1→N.",
      highlights: [
        "Designed venture operating playbooks used by 6 portfolio companies to reach product-market fit inside 12 months.",
        "Built multi-tenant analytics platform that unlocked 35% faster roadmap iteration for Series A AI client.",
        "Coached product leads on metrics-driven rituals, cutting experiment cycle time by 42%.",
      ],
    },
    {
      role: "VP Product",
      company: "Northstar Technologies",
      timeframe: "2017 — 2021",
      summary:
        "Led product, design, and research while expanding an enterprise financial wellness platform across North America.",
      highlights: [
        "Launched advisor marketplace that increased annual recurring revenue by $11.2M within two quarters.",
        "Introduced ML-powered insights engine adopted by 78% of enterprise customers in the first release.",
        "Stood up a dual-track discovery practice integrating customer councils and rapid prototyping.",
      ],
    },
    {
      role: "Product Lead",
      company: "Lumina Health",
      timeframe: "2013 — 2017",
      summary:
        "Shaped digital therapeutics platform helping hospital networks modernize chronic care management.",
      highlights: [
        "Directed cross-functional launch of remote patient monitoring suite adopted by 140+ clinics.",
        "Integrated EHR partnerships that shortened onboarding time from 6 weeks to 8 days.",
        "Scaled product org from 6 to 24 contributors while maintaining NPS above 70.",
      ],
    },
  ];

  const projects = [
    {
      name: "Atlas Growth Blueprint",
      description:
        "Modular operating system aligning founders, product, and go-to-market teams around a shared North Star metric.",
      impact:
        "Adopted by 18 startups, driving an average 2.3× lift in qualified pipeline within the first quarter.",
      stack: ["Notion", "FigJam", "Retool"],
      link: "https://www.notion.so",
    },
    {
      name: "SignalOps Insight Engine",
      description:
        "Real-time decision dashboard fusing qualitative research, telemetry, and financial signals for executive teams.",
      impact:
        "Reduced decision latency by 57% and increased experiment success rate by 34% across partner orgs.",
      stack: ["Next.js", "Postgres", "Python"],
    },
    {
      name: "Momentum Workshop Series",
      description:
        "Live scaling labs teaching operators how to translate customer insight into roadmap bets that convert.",
      impact:
        "Graduated 240+ operators with a 96% satisfaction score and multi-team adoption across 11 enterprises.",
      stack: ["Miro", "Airmeet", "HubSpot"],
      link: "https://www.airmeet.com",
    },
  ];

  const principles = [
    "Customers reveal the roadmap when you measure behavior, not opinions.",
    "Strategy horsepower accelerates when design, product, and engineering solve the same question every week.",
    "Momentum compounds when teams celebrate learning velocity over ship velocity.",
  ];

  const actions = [
    {
      label: "Book a strategy hour",
      href: "mailto:hello@iridiumlabs.com?subject=Strategy%20Session%20with%20Faraz",
      external: false,
    },
    {
      label: "Review advisory portfolio",
      href: "https://www.linkedin.com/in/farazmurtaza",
      external: true,
    },
    {
      label: "Download growth scorecard",
      href: "https://read.cv",
      external: true,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,116,144,0.18),transparent_55%)]" />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-10 lg:px-12">
        <header className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100/80 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Product Leadership Partner
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Faraz Murtaza turns bold ideas into high-velocity product engines.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-200/90">
              Operator, advisor, and product strategist helping venture-backed
              teams activate customer insight, ship with conviction, and scale
              durable growth. Faraz architects the rituals, metrics, and stories
              that bring clarity to the chaos of building the future.
            </p>
            <div className="flex flex-wrap gap-4">
              {actions.map(({ label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-3 rounded-full border border-emerald-300/50 bg-emerald-400/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-400/20"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <span>{label}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-200/30 bg-emerald-200/10 text-xs font-bold transition group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-3">
            {stats.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
        </header>

        <section className="space-y-12">
          <SectionHeading
            eyebrow="Principles"
            title="Operating beliefs that shape every engagement."
            description="Rituals and narratives that keep teams obsessed with outcomes, not output."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-base leading-relaxed text-slate-100/90 shadow-lg shadow-emerald-500/5"
              >
                {principle}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading
            eyebrow="Experience"
            title="Trusted by founders and operators navigating their next inflection point."
            description="Hands-on partnership across strategy, discovery, and execution."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={item.company} {...item} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeading
            eyebrow="Signature Work"
            title="Frameworks and products engineered to unlock momentum."
            description="Battle-tested assets that accelerate go-to-market, product discovery, and operational clarity."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-transparent p-10">
          <SectionHeading
            eyebrow="Next Step"
            title="Partner with Faraz to architect your next leap."
            description="Bring the discipline, storytelling, and experimentation muscle your team needs to turn ambition into traction."
          />
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@iridiumlabs.com?subject=Partnering%20with%20Faraz"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:-translate-y-1 hover:bg-slate-100"
            >
              Start the conversation
            </a>
            <a
              href="https://cal.com"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              Explore advisory slots
            </a>
            <a
              href="https://medium.com"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              Read latest essays
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
