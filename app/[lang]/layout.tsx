import "@/app/globals.css";
import { i18n, type Locale } from "@/dictionaries/i18n-config";
import type { Metadata } from "next";
import React from "react";

function isLocale(v: string): v is Locale {
  return (i18n.locales as readonly string[]).includes(v);
}

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const safeLang: Locale = isLocale(lang) ? lang : "en";

  if (safeLang === "pl") {
    return {
      title: "Michał Silski",
      description: "Prywatna strona-portfolio Michała Silskiego",
    };
  }

  return {
    title: "Michał Silski",
    description: "Personal website of Michał Silski",
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = React.use(params);

  const safeLang: Locale = isLocale(lang) ? lang : "en";

  return (
    <html lang={safeLang}>
      <body>{children}</body>
    </html>
  );
}