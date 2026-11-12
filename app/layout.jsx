import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { LanguageProvider } from "./providers/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { translations, languageOptions } from "./constants/translations";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

const DEFAULT_LANGUAGE = "pt-BR";

const availableLanguageCodes = languageOptions.map((option) => option.code);

function detectBrowserLanguageServer(acceptLanguage, fallback) {
  if (!acceptLanguage) return fallback;

  const preferredLanguages = acceptLanguage.split(",").map((lang) => {
    const [code] = lang.trim().split(";");
    return code.trim();
  });

  for (const locale of preferredLanguages) {
    if (!locale) continue;

    if (availableLanguageCodes.includes(locale)) {
      return locale;
    }

    const baseLocale = locale.split("-")[0];
    const match = availableLanguageCodes.find((code) =>
      code.startsWith(baseLocale)
    );

    if (match) return match;
  }

  return fallback;
}

export async function generateMetadata() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const preferredLanguage = detectBrowserLanguageServer(
    acceptLanguage,
    DEFAULT_LANGUAGE
  );

  return (
    translations[preferredLanguage]?.metadata ??
    translations[DEFAULT_LANGUAGE].metadata
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVB72GN8');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVB72GN8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ReactQueryProvider>
          <LanguageProvider defaultLanguage={DEFAULT_LANGUAGE}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Header />
              <main>{children}</main>
              <Footer />
            </ThemeProvider>
          </LanguageProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
