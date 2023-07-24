import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { openGraphImage } from "./shared-metadata";
import RootStyleRegistry from "./emotion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "금호 와이어",
  description: "금호 와이어 주짓수 대진표",
  openGraph: {
    ...openGraphImage,
    title: "금호 와이어",
    description: "금호 와이어 주짓수 대진표",
  },
  robots: {
    index: false,
    googleBot: {
      index: false,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
