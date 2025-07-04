'use client';
import Share from './components/share';

export default function Home() {

  // Get current date and format it
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const formattedDate = today.toLocaleDateString('en-US', options);

  // Quote data for sharing
  const quoteData = {
    date: formattedDate,
    title: "Show me how to live",
    quote: "Protect your own good in all that you do, and as concerns everything else take what is given as far as you can make reasoned use of it. If you don't, you'll be unlucky, prone to failure, hindered and stymied.",
    author: "EPICTETUS, DISCOURSES, 4.3.11"
  };

  return (
    <main className="min-h-screen flex mt-4 justify-center p-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-8xl font-mf-consent mb-6 border-b-2 border-base-content text-white">Reminder of the day</h1>
        <p className="md:text-lg text-sm text-white mb-4">{formattedDate}</p>
        <h1 className="md:text-3xl text-lg mb-6 text-white">{quoteData.title}</h1>
        <p className="md:text-lg text-sm text-white mb-6">
          {quoteData.quote}
        </p>
        <p className="md:text-sm text-xs text-white mb-6 italic">
          - {quoteData.author}
        </p>
        <p className="md:text-2xl text-sm text-white">
          <span className="font-mf-consent text-6xl items-center">T</span>he goodness inside you is like a small flame, and you are its keeper. It's your job, today and every day, to make sure that it has enough fuel, that it doesn't get obstructed or snuffed out. Every person has their own version of the flame and is responsible for it, just as you are. If they all fail, the world will be much darker—that is something you don't control. But so long as your flame flickers, there will be some light in the world.
        </p>
        {/* Share Component */}
        <Share data={quoteData}/>
      </div>
    </main>
  );
}
