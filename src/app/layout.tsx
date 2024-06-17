import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { WalletContextProvider } from '@/components';
import { ThemeProvider } from '@/providers/theme-provider';

// Define metadata for SEO and page title
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`)
  ).toString(),
  title: 'crowdfunding',
  description: 'A crowdfunding dapp built on Solana',
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Import Geist Sans font */}
        <style>{GeistSans.css}</style>
        {/* Import Inter and Poppins fonts from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Global styles */}
        <link rel="stylesheet" href="/globals.css" />
      </head>
      <body className={GeistSans.className}>
        {/* Theme provider for managing theme and system preferences */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Wallet context provider for providing wallet-related context */}
          <WalletContextProvider>{children}</WalletContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

