type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3 text-center md:text-left">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-slate-300/90">
          {description}
        </p>
      ) : null}
    </div>
  );
}
