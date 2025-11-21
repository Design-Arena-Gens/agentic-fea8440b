import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Faraz Murtaza — Product Leadership Partner",
  description:
    "Fractional CPO and product strategist helping venture-backed teams translate ambition into sustained growth.",
  openGraph: {
    title: "Faraz Murtaza — Product Leadership Partner",
    description:
      "Fractional CPO and product strategist helping venture-backed teams translate ambition into sustained growth.",
    url: "https://agentic-fea8440b.vercel.app",
    siteName: "Faraz Murtaza",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faraz Murtaza — Product Leadership Partner",
    description:
      "Product strategist, operator, and advisor driving high-velocity teams.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
