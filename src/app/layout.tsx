import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eat Naked Clone',
  description: 'Unapologetically clean, raw foods.',
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
