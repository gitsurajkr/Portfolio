import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";

const pixelifySans = localFont({ 
  src: "../public/fonts/PixelifySans.ttf",
  variable: "--font-pixelify-sans"
});

const oldStandard = localFont({
   src: "../public/fonts/OldStandard.ttf",
  variable: "--font-oldstandard"
});

const cookie = localFont({
  src: "../public/fonts/Cookie.ttf",
  variable: "--font-cookie"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suraj Kumar | Portfolio",
  description: "Welcome to our space!",
  icons: {
    icon: '/galaxy.png', 
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
        className={`${geistSans.variable} ${geistMono.variable} ${pixelifySans.variable} ${oldStandard.variable} ${cookie.variable} antialiased`}
      >
        <div className="relative flex min-h-screen w-full bg-white">
          <div
            className={cn(
              "absolute inset-0 z-0",
              "[background-size:30px_30px]",
              "[background-image:linear-gradient(to_right,#f9f9f9_1px,transparent_1px),linear-gradient(to_bottom,#f9f9f9_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)]",
            )}
          />
          
          <div className="relative z-10 w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
