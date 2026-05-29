
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
  const themeScript = `
    (function() {
      var storedTheme = window.localStorage.getItem('theme');
      var systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      var theme = storedTheme || (systemPrefersLight ? 'light' : 'dark');
      document.documentElement.classList.toggle('light', theme === 'light');
      document.documentElement.setAttribute('data-theme', theme);
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden theme-transition">
        {children}
      </body>
    </html>
  );
}
