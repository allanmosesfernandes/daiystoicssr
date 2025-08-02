import { QuoteData } from "@/types";

export async function getDailyQuote(): Promise<QuoteData> {
    const baseURL = process.env.BASE_API_URL;
    const res = await fetch(`${baseURL}/daily-quote`, {
        next: { revalidate: 600 }
    });

    if (!res.ok) throw new Error('Failed to fetch quote');

    const data = await res.json();
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    const formattedDate = today.toLocaleDateString('en-US', options);

    return { ...data, date: formattedDate };
}
