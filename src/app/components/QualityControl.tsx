export function QualityControl() {
  return (
    <section className="grid gap-6 sm:gap-8 md:grid-cols-[1.2fr,0.9fr]">
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-base font-semibold tracking-tight sm:text-lg text-zinc-50">
          Our Quality Standard
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          We protect your reputation above all else. We only partner with brands
          that match your niche and values.
        </p>
        <ul className="space-y-2 text-sm text-zinc-300">
          <li className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
            <span>
              Curated campaigns that feel natural to your timeline.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
            <span>
              Strict vetting process for all advertisers.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 sm:space-y-4 sm:rounded-3xl sm:p-5">
        <h3 className="text-sm font-semibold tracking-tight text-zinc-100">
          You have full control
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          If a campaign doesn't feel right, you skip it. No penalties. We'd rather you maintain trust with your audience than force a mismatched post.
        </p>
        <div className="rounded-xl border border-zinc-800 bg-black/60 p-3 text-[10px] text-zinc-300 sm:rounded-2xl sm:p-4 sm:text-xs">
          <p className="font-medium text-zinc-100">
            One-tap decline policy
          </p>
          <p className="mt-1 text-zinc-400">
            Reject any request that doesn't align with your personal brand.
          </p>
        </div>
      </div>
    </section>
  );
}
