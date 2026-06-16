import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LeadFit — More Clients For Your Fitness Studio",
  description:
    "LeadFit runs targeted Meta Ads and builds lead funnels that fill your gym, yoga, or pilates studio with paying members — consistently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-cream text-night antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
