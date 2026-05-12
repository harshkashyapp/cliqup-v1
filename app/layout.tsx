import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cliqup — Click. Grow. Dominate.",
  description: "Cliqup is a digital growth agency specializing in websites, social media, SEO, paid ads, and branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}
