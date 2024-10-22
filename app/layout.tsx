import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Navigation } from "swiper/modules";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

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
  title: "Sahar Iftikhar",
  description: "This is my Protofilo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  );
}
