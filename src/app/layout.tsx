import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mastero-cc | UI",
  description: "Mastero-cc | UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        
      <body className={inter.className}>
        <Navbar />

        {children}
        
        <Toaster />
        <Footer />
        </body>
        
    </html>
  ); 
}
