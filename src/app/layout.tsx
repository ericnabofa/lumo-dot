import type { Metadata } from "next";
import { Manrope, Gaegu } from 'next/font/google'
import "./globals.css";
import { ColorSchemeProvider } from '@/components/ColorSchemeProvider';
import ReactiveDotWrapper from '@/components/ReactiveDotWrapper';

export const manrope = Manrope({ subsets: ['latin'] })
const gaegu = Gaegu({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lumo",
  description: "Bringing the toy to life",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ReactiveDotWrapper />
        {children}
      </body>
    </html>
  );
}