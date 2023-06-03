import "@/app/globals.css";
import { i18n, Locale } from "@/dictionaries/i18n-config";

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
  return <html lang={params.lang}>{children}</html>;
}
