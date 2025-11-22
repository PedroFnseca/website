import "./globals.css";
import { Inter } from "next/font/google";
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
