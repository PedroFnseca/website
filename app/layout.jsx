import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pedro Fonseca | Full Stack Developer",
  description: "Portfólio de Pedro Fonseca - Desenvolvedor Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ReactQueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
