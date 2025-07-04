import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Stoic Reminders",
  description: "Daily wisdom from stoic philosophy to guide your life",
  openGraph: {
    title: "Daily Stoic Reminders",
    description: "Daily wisdom from stoic philosophy to guide your life",
    type: "website",
    locale: "en_US",
    siteName: "Daily Stoic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Stoic Reminders",
    description: "Daily wisdom from stoic philosophy to guide your life",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="luxury">
      <body className={`antialiased font-mono`}>
        {children}
      </body>
    </html>
  );
}
