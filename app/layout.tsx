import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/footer/footer";
import Navbar from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "OpsellAI - Automate your Ecommerce Business",
    template: "%s | OpsellAI",
  },

  description:
    "Opsell helps ecommerce sellers track competitors, monitor pricing changes, and optimize prices automatically in real time.",

    keywords: [
      "AI pricing tool",
      "dynamic pricing",
      "competitor tracking",
      "ecommerce pricing",
      "price optimization",
      "shopify pricing tool",
      "ecommerce automation",
      "competitor monitoring",
      "AI competitor analysis",
      "real time pricing",
      "ecommerce competitor tracker",
      "pricing automation",
      "price tracking software",
      "AI for ecommerce",
      "smart pricing tool",
      "ecommerce growth tool",
      "shopify competitor tracking",
      "pricing strategy software",
      "competitor price monitoring",
      "online store price optimization",
      "ecommerce analytics",
      "AI sales optimization",
      "automated price recommendations",
      "market price tracking",
      "small business ecommerce tools",
      "dynamic pricing software",
      "retail price intelligence",
      "ecommerce profit optimization",
      "shopify automation tool",
      "competitor price checker",
      "AI tool for online sellers",
      "pricing insights",
      "ecommerce seller software",
      "real time competitor pricing",
      "competitor tracking for ecommerce",
      "amazon price tracker",
      "flipkart competitor tracking",
      "ecommerce revenue optimization",
      "online business automation",
      "pricing dashboard",
    ],

  authors: [{ name: "Shaurya Gupta Manas" }],

  creator: "Opsell",
  publisher: "Opsell",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Opsell – AI Competitor Tracking & Dynamic Pricing",
    description:
      "Track competitor prices and optimize your ecommerce pricing automatically with Opsell.",
    url: "https://yourdomain.com",
    siteName: "Opsell",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Opsell – AI Competitor Tracking & Dynamic Pricing",
    description:
      "Track competitors and optimize your ecommerce prices in real time with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.className} min-h-screen flex flex-col bg-background text-foreground`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}