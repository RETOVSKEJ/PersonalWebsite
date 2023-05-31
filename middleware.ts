import { NextResponse, NextRequest } from "next/server";
import { i18n } from "./dictionaries/i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log(request.nextUrl);

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products

    let url;
    pathname === "/"
      ? (url = new URL(`/${locale}`, request.url))
      : (url = new URL(`/${locale}${pathname}`, request.url));
    return NextResponse.redirect(url);
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`,  but we need to ignore files in `public` manually. AND /pl /en
  matcher: [
    "/((?!api|_next/static|_next/image|pl|en|favicon.ico|resume_ENG.pdf|resume_PL.pdf).*)",
  ],
};
