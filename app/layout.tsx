import type { Metadata, Viewport } from "next";
import { Anton, Manrope } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

const title = "Faisal Raza | Accountant, Bookkeeper & Sales Operations";
const description =
  "Faisal Raza is a Lahore-based accounting, bookkeeping and sales operations professional with 8+ years of combined experience in reconciliations, AP/AR, SAP Business One and Zoho Books.";

export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, type: "website", images: ["/faisal.png"] },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { themeColor: "#0b0c0c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body suppressHydrationWarning>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
