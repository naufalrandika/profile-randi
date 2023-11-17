"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import MainNav from "@/components/layout/main-nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNav/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}