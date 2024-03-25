import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue, Kanit } from "next/font/google";
import { ThemeProvider } from "@/components/Theme-Provider"
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/Back-to-Top";
import { Header } from "@/components/Header";
import { GeistSans } from 'geist/font/sans';

const kanit = Kanit({
  variable: '--font-kanit',
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Portfólio - Hanner Moraes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth scrollbar-thin scrollbar-track-rounded scrollbar-thumb-blue-500 scrollbar-track-transparent"
      suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${kanit.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Header />
          </header>
          <BackToTop />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
