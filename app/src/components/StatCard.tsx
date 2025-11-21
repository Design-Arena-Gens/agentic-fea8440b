type StatCardProps = {
  label: string;
  value: string;
  footer?: string;
};

export function StatCard({ label, value, footer }: StatCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/70">
          {label}
        </p>
        <p className="text-4xl font-semibold text-white md:text-5xl">{value}</p>
      </div>
      {footer ? (
        <p className="mt-4 text-sm font-medium text-slate-300/80">{footer}</p>
      ) : null}
    </div>
  );
}
