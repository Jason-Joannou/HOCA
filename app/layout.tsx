import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["cyrillic"] });

export const metadata = {
  title: "HOCA Cape Town",
  description: "Hellenic Outreach and Community Association",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
