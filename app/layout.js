import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["wdth", "opsz"],
  display: "swap",
});

const text = Newsreader({
  subsets: ["latin"],
  variable: "--font-text",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name}, ${site.role}`,
  description: site.intro,
  openGraph: {
    title: `${site.name}, ${site.role}`,
    description: site.intro,
    images: ["/og.png"],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEF0F3" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1828" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
