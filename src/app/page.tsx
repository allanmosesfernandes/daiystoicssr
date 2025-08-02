import Share from './components/share';
import { getDailyQuote } from "@/lib/quote";
export default async function Home() {
let dailyQuote = null;
try {
  dailyQuote = await getDailyQuote();
} catch (error) {
  return <p className="text-red-500">Failed to load quote: {(error as Error).message}</p>;
}

  return (
    <>
      <main className="flex mt-4 justify-center p-4">
          <div className="max-w-5xl mx-auto text-center color-base">
              <h1 className="text-4xl md:text-6xl font-mf-consent pb-2 border-b text-base-content">Reminder of the day</h1>
              <p className="md:text-lg text-sm text-[var(--color-offwhite)] my-4">{dailyQuote.date}</p>
              <>
                  <h1 className="md:text-2xl font-bold text-sm text-base-content">{dailyQuote.title}</h1>
                  <p className="md:text-lg text-sm text-[var(--color-offwhite)] my-4">{dailyQuote.quote}</p>
                  <p className="text-sm font-bold text-base-content italic color-base">- {dailyQuote.author}</p>
                  <p className="md:text-lg text-sm my-4 text-[var(--color-offwhite)]">
                      <span className="font-mf-consent text-6xl items-center text-base-content">T</span>
                      {dailyQuote.text.substring(1)}
                  </p>
                  {/* Share Component */}
                  <Share data={dailyQuote} />
              </>
          </div>
      </main>
    </>
  );
}
