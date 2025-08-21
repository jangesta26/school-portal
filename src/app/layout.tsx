
import { poppins } from '@/lib/fonts';
import '@/style/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
