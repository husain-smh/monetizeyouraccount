import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { EngagementCard } from "./components/EngagementCard";
import { QualityControl } from "./components/QualityControl";
import { ApplicationForm } from "./components/ApplicationForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-8 pt-4 sm:px-6 sm:pb-12 sm:pt-6 md:px-10 md:pt-10">
        <Header />

        <main className="flex flex-1 flex-col gap-12 py-8 sm:gap-16 sm:py-10 md:py-16">
          <Hero />

          {/* Pricing Grid */}
          <section className="grid gap-6 rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-950 via-black to-zinc-900/60 p-5 sm:rounded-3xl sm:gap-6 sm:p-6 md:grid-cols-2 md:p-8">
            <EngagementCard
              title="Likes & Bookmarks"
              description="Quiet engagement. We send you posts worth supporting; you like or bookmark what fits. Simple and private."
              pricePerAction="$5 – $15"
              volume="20 – 40/month"
              disclaimer="Rates based on engagement quality."
            />
            <EngagementCard
              title="Retweets & Quotes"
              description="Public amplification. Higher visibility, higher rates. Only for campaigns that perfectly align with your voice."
              pricePerAction="$20 – $50"
              volume="10 – 30/month"
              disclaimer="Pricing negotiable based on reach."
              isPremium={true}
            />
          </section>

          <QualityControl />
          
          <ApplicationForm />
        </main>

        <footer className="mt-4 flex flex-col gap-2 border-t border-zinc-900 pt-4 text-[10px] text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-[11px]">
          <span>© {new Date().getFullYear()} Oops, Take Premium.</span>
          <div className="flex gap-4">
             <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
             <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
             <span>Not affiliated with X / Twitter.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
