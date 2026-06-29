import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Brandon Chen | Portfolio",
  description: "Software engineer, business analyst, solutions architect. NTU double-degree student.",
  openGraph: { title: "Brandon Chen | Portfolio", description: "Software engineer, business analyst, solutions architect.", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-gray-900 text-gray-400 font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
