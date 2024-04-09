import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { GoogleTagManager } from "@next/third-parties/google";
const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Exercise Habits Exercise Physiology | Mobile Exercise Physiology for Sydney NDIS Participants",
  description:
    "University Quailified and No Out of Pocket Charges. We come to you with NDIS Exercise Physiology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TMDQTCFM" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
