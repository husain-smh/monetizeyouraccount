export function Hero() {
  return (
    <section className="max-w-3xl space-y-4 sm:space-y-6">
      <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400/80 sm:text-xs">
        Monetize without selling out
      </p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-zinc-50">
        Get paid for authentic engagement.
      </h1>
      <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
        We match you with brands that fit your audience. You like, bookmark, or
        retweet what genuinely resonates—and get paid for it. No spam, no
        forced promotions.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <a
          href="#apply"
          className="w-fit rounded-full bg-amber-400 px-5 py-2 text-xs font-medium tracking-tight text-black shadow-[0_0_40px_rgba(251,191,36,0.35)] transition hover:bg-amber-300 sm:px-6 sm:text-sm"
        >
          See if you qualify
        </a>
        <span className="text-[10px] text-zinc-500 sm:text-xs">
          Exclusive to quality-first creators.
        </span>
      </div>
    </section>
  );
}
