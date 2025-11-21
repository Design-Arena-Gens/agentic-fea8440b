type ExperienceCardProps = {
  role: string;
  company: string;
  timeframe: string;
  summary: string;
  highlights: string[];
};

export function ExperienceCard({
  role,
  company,
  timeframe,
  summary,
  highlights,
}: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-xl shadow-emerald-500/10 transition hover:-translate-y-1 hover:border-emerald-300/40">
      <header className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div>
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <p className="text-sm font-medium text-emerald-200/80">{company}</p>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-300/60">
          {timeframe}
        </p>
      </header>
      <p className="mb-4 text-sm leading-relaxed text-slate-200/90">{summary}</p>
      <ul className="space-y-2 text-sm text-slate-200/90">
        {highlights.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border border-white/5 bg-white/5 p-3 backdrop-blur"
          >
            <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
