import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ThemePicker from "@/components/ThemePicker";
import LanguagePicker from "@/components/LanguagePicker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michał Silski",
  description: "Personal website of Michał Silski",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary scroll-smooth border-box selection:bg-accent selection:text-slate-600`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
