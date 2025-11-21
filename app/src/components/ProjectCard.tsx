type ProjectCardProps = {
  name: string;
  description: string;
  impact: string;
  stack: string[];
  link?: string;
};

export function ProjectCard({
  name,
  description,
  impact,
  stack,
  link,
}: ProjectCardProps) {
  const content = (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/10">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm leading-relaxed text-slate-200/90">
          {description}
        </p>
        <p className="text-sm font-medium text-emerald-200/80">{impact}</p>
      </div>
      <ul className="mt-6 flex flex-wrap gap-2">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-emerald-200/30 bg-emerald-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-100/90"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="h-full">
        {content}
      </a>
    );
  }

  return content;
}
