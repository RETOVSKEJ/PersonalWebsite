import "@/app/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { i18n, Locale } from "@/dictionaries/i18n-config";
import { Suspense } from "react";
import Loading from "@/app/loading";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  if (params.lang === "pl")
    return {
      title: "Michał Silski",
      description: "Prywatna strona-portfolio Michała Silskiego",
    };

  return {
    title: "Michał Silski",
    description: "Personal website of Michał Silski",
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body
        className={`${inter.className} overflow-x-hidden  scroll-smooth border-box selection:bg-accent selection:text-slate-600`}
      >
        <Navbar lang={params.lang} />
        {children}
      </body>
    </html>
  );
}
