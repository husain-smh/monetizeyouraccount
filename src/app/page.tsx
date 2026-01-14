export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-8 pt-4 sm:px-6 sm:pb-12 sm:pt-6 md:px-10 md:pt-10">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 md:pb-6">
          <div className="text-xs font-semibold tracking-tight text-zinc-200 sm:text-sm">
            Oops, Take Premium
          </div>
          <a
            href="#apply"
            className="rounded-full border border-zinc-700 px-3 py-1.5 text-[10px] font-medium tracking-tight text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:px-4 sm:text-xs"
          >
            Start earning
          </a>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col gap-12 py-8 sm:gap-16 sm:py-10 md:py-16">
          <section className="max-w-3xl space-y-4 sm:space-y-6">
            <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400/80 sm:text-xs">
              Monetize your profile, not your soul
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Get paid to quietly boost{" "}
              <span className="text-amber-400">great posts</span> on Twitter.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              We connect quality accounts with vetted campaigns. You stay in
              control, we send you posts worth supporting, and you get paid for
              the likes, bookmarks, and retweets you&apos;re comfortable making
              anyway.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="#apply"
                className="w-fit rounded-full bg-amber-400 px-5 py-2 text-xs font-medium tracking-tight text-black shadow-[0_0_40px_rgba(251,191,36,0.35)] transition hover:bg-amber-300 sm:px-6 sm:text-sm"
              >
                See if you qualify
              </a>
              <span className="text-[10px] text-zinc-500 sm:text-xs">
                Built for creators who care about what they co-sign.
              </span>
            </div>
          </section>

          {/* Engagement Types */}
          <section className="grid gap-6 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-zinc-900/60 p-5 sm:rounded-3xl sm:gap-6 sm:p-6 md:grid-cols-2 md:p-8">
            <div className="space-y-3 border-b border-zinc-800 pb-5 sm:space-y-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Likes & bookmarks
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400">
                Quiet engagement that doesn&apos;t clutter your timeline. We send
                you posts worth supporting; you like or bookmark what fits. Simple,
                frequent, and completely private.
              </p>
              <div className="rounded-xl border border-zinc-800 bg-black/60 p-3 text-xs sm:rounded-2xl sm:p-4 sm:text-sm">
                <div className="space-y-1.5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-zinc-400">Per like/bookmark</span>
                    <span className="text-sm font-semibold text-zinc-50 sm:text-base">
                      $5 – $15
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-zinc-400">Typical volume</span>
                    <span className="text-sm font-semibold text-zinc-50 sm:text-base">
                      20 – 40/month
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-zinc-500 sm:mt-1 sm:text-xs">
                  Estimated rates. Final pricing negotiable based on your reach,
                  engagement rate, and participation level.
                </p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 md:pl-6">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Retweets & quote tweets
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400">
                Public amplification for campaigns that align perfectly. Retweet
                as-is or add your own quote. Higher visibility, higher rates, fewer
                asks—only when it makes sense for your audience.
              </p>
              <div className="rounded-xl border border-zinc-800 bg-black/60 p-3 text-xs sm:rounded-2xl sm:p-4 sm:text-sm">
                <div className="space-y-1.5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-zinc-400">Per retweet/quote</span>
                    <span className="text-sm font-semibold text-zinc-50 sm:text-base">
                      $20 – $50
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-zinc-400">Typical volume</span>
                    <span className="text-sm font-semibold text-zinc-50 sm:text-base">
                      10 – 30/month
                    </span>
                  </div>
                </div>
                <p className="mt-2 text-[10px] text-zinc-500 sm:mt-1 sm:text-xs">
                  Estimated rates. Final pricing negotiable based on your audience
                  size, engagement quality, and comfort level.
                </p>
              </div>
            </div>
          </section>

          {/* Trust & controls */}
          <section className="grid gap-6 sm:gap-8 md:grid-cols-[1.2fr,0.9fr]">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                Built for people who actually read what they share.
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                We work with clients who care about long-term trust. Every post
                we send you is pre-screened for basic quality, clarity, and
                legitimacy. No casino wheel screenshots, no obvious scam coins,
                no &quot;get rich tomorrow&quot; nonsense.
              </p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span>
                    Only campaigns that feel like something you could show your
                    followers without apologising for it later.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span>
                    Clear guidelines for what we will and will not send you,
                    updated as we learn from each partnership.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 sm:space-y-4 sm:rounded-3xl sm:p-5">
              <h3 className="text-sm font-semibold tracking-tight text-zinc-100">
                You always keep veto power.
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                Don&apos;t like how a post feels? Think it&apos;s too pushy,
                too salesy, or even slightly off? You can refuse any like,
                bookmark, retweet, or quote—no penalty, no awkward calls, no
                questions.
              </p>
              <div className="rounded-xl border border-zinc-800 bg-black/60 p-3 text-[10px] text-zinc-300 sm:rounded-2xl sm:p-4 sm:text-xs">
                <p className="font-medium text-zinc-100">
                  One-tap decline, zero pressure
                </p>
                <p className="mt-1 text-zinc-400">
                  If something looks scammy, misaligned with your values, or
                  just not you, you simply pass. We&apos;d rather lose a single
                  post than damage your relationship with your audience.
                </p>
              </div>
            </div>
          </section>

          {/* Apply / CTA */}
          <section
            id="apply"
            className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 sm:rounded-3xl sm:p-6 md:flex md:items-center md:justify-between md:p-7"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-semibold tracking-tight sm:text-base">
                Ready to see what your account could earn?
              </h3>
              <p className="max-w-xl text-xs leading-relaxed text-zinc-400 sm:text-sm">
                Share your handle, rough follower count, and typical engagement.
                We&apos;ll get back with a transparent, negotiable range and a
                few example campaigns that actually match your lane.
              </p>
            </div>
            <div className="mt-4 flex flex-col items-start gap-2 text-xs sm:mt-4 sm:text-sm md:mt-0 md:items-end">
              <a
                href="mailto:hey@oopstakepremium.com?subject=Creator%20application"
                className="rounded-full bg-amber-400 px-4 py-2 text-xs font-medium tracking-tight text-black transition hover:bg-amber-300 sm:px-5 sm:text-sm"
              >
                Email your profile
              </a>
              <span className="text-[10px] text-zinc-500 sm:text-xs">
                No spam. No obligation. Just numbers and options.
              </span>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-4 flex flex-col gap-2 border-t border-zinc-900 pt-4 text-[10px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
          <span>© {new Date().getFullYear()} Oops, Take Premium.</span>
          <span>Not affiliated with X / Twitter.</span>
        </footer>
      </div>
    </div>
  );
}
