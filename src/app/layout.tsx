import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EATnaked',
  description: 'Unapologetically clean, raw foods.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FFFDF9] text-gray-900 min-h-screen">
        <main>{children}</main>
      </body>
    </html>
  );
}