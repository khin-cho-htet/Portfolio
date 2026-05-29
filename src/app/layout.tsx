
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Khin Cho Htet | Business Analyst Portfolio',
  description: 'Professional portfolio of Khin Cho Htet, a Senior Business Analyst with expertise in ERP and financial systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#0c0d12] text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
