import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AuthButtons from '@/components/AuthButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VeriSage - AI-Powered Research Platform',
  description: 'Explore the universe through AI-powered research and development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black`}>
        <AuthButtons />
        {children}
      </body>
    </html>
  );
}