export function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 pb-3 sm:pb-4 md:pb-6">
      <div className="flex items-center gap-2 text-xs font-medium tracking-tight text-zinc-300 sm:text-sm">
        <span className="inline-flex h-1.5 w-6 items-center justify-center rounded-full bg-amber-400/80 text-[9px] font-semibold text-black sm:h-2 sm:w-7">
          •
        </span>
        <span>For Twitter creators</span>
      </div>
      <a
        href="#apply"
        className="rounded-full border border-zinc-700 px-3 py-1.5 text-[10px] font-medium tracking-tight text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:px-4 sm:text-xs"
      >
        Start earning
      </a>
    </header>
  );
}
