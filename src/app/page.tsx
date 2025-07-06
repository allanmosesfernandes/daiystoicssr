'use client';
import { useState, useEffect } from 'react';
import Share from './components/share';

interface QuoteData {
    date: string;
    title: string;
    quote: string;
    author: string;
    text: string;
}

export default function Home() {

  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get current date and format it
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = today.toLocaleDateString('en-US', options);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/daily-quote');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuoteData({ ...data, date: formattedDate });
      } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError('An unknown error occurred while fetching the quote.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [formattedDate]);

  return (
    <main className="flex mt-4 justify-center p-4">
      <div className="max-w-5xl mx-auto text-center color-base">
        {/* Header */}
        <h1 className="text-4xl md:text-6xl font-mf-consent pb-2 border-b text-base-content">Reminder of the day</h1>
        <p className="md:text-lg text-sm text-[var(--color-offwhite)] my-4">{formattedDate}</p>
        {loading && <p className="text-white color-base">Loading today&apos;s quote...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {quoteData && (
          <>
            <h1 className="md:text-2xl font-bold text-sm text-base-content">{quoteData.title}</h1>
            <p className="md:text-lg text-sm text-[var(--color-offwhite)] my-4">
              {quoteData.quote}
            </p>
            <p className="text-sm font-bold text-base-content italic color-base">
              - {quoteData.author}
            </p>
            <p className="md:text-lg text-sm my-4 text-[var(--color-offwhite)]">
              <span className="font-mf-consent text-6xl items-center text-base-content">T</span>{quoteData.text.substring(1)}
            </p>
            {/* Share Component */}
            <Share data={quoteData}/>
          </>
        )}
      </div>
    </main>
  );
}
