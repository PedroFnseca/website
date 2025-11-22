import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { LanguageProvider } from "./providers/LanguageProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { translations } from "./constants/translations";

const inter = Inter({ subsets: ["latin"] });

const DEFAULT_LANGUAGE = "pt-BR";

export const metadata = translations[DEFAULT_LANGUAGE]?.metadata ?? {
  title: "Pedro Fonseca",
  description: "Portfólio de Pedro Fonseca",
};

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
