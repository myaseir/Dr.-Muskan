import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Font configurations matching your component style guides
const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  weight: ['300', '400', '500', '700']
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-cormorant",
  weight: ['300', '400', '500', '600', '700'] 
});

// Comprehensive SEO Metadata for Dr. Muskan Clinic on Jail Road, Lahore
export const metadata: Metadata = {
  title: "Dr. Muskan Pain Management & Physiotherapy Clinic Lahore",
  description: "Advanced non-surgical pain management and physical rehabilitation clinic at 28A, Jail Road, Lahore. Expert treatments for Sciatica, chronic back pain, stroke rehab, and sports injuries.",
  keywords: [
    "Physiotherapy clinic Lahore", 
    "Dr Muskan Physiotherapist", 
    "Pain management Jail Road Lahore", 
    "Sciatica treatment Lahore", 
    "Back pain rehabilitation",
    "Best physical therapist Lahore"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${cormorant.variable} font-sans bg-white text-zinc-900 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}