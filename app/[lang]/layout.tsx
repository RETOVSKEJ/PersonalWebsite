import "@/app/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ThemePicker from "@/components/ThemePicker";
import LanguagePicker from "@/components/LanguagePicker";
import { i18n } from "@/dictionaries/i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michał Silski",
  description: "Personal website of Michał Silski",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className}  scroll-smooth border-box selection:bg-accent selection:text-slate-600`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
