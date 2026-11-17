import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


export const viewport: Viewport = {
  themeColor: '#1d4ed8',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://blog-post-iota-three.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "UzMO.uz - Sirdaryo va O'zbekiston Xizmatlar va maskanlar Portali",
    template: "%s | UzMO.uz",
  },
  description:
    "UzMO.uz - Sirdaryo viloyati va O'zbekiston bo'yicha barcha soha kadrlari, mutaxassislar, o'quv markazlari, kafe-restoranlar, tibbiyot va xizmatlarining yagona ma'lumotlar bazasi.",
  keywords: [
    'UzMO',
    'UzMO.uz',
    'Sirdaryo kadrlar',
    'Sirdaryo mutaxassislar',
    'Guliston o\'quv markazlari',
    'Guliston restoranlar va kafe',
    'Sirdaryo shifokorlari',
    'Guliston ustalar',
    'Sirdaryo xizmatlar bazasi',
    'Sirdaryo gid',
    'Guliston xizmatlar',
  ],
  authors: [{ name: 'UzMO.uz' }],
  creator: 'UzMO.uz',
  applicationName: 'UzMO.uz',
  appleWebApp: {
    capable: true,
    title: 'UzMO.uz',
    statusBarStyle: 'default',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '64x64', type: 'image/png' },
      { url: '/uzmo-icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/uzmo-icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/uzmo-apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: baseUrl,
    siteName: 'UzMO.uz',
    title: 'UzMO.uz - Sirdaryo va O\'zbekiston Xizmatlar va maskanlar Portali',
    description: "Sirdaryo viloyatining barcha mutaxassislari, kadrlar, ziyorat va dam olish maskanlari, o'quv markazlari hamda xizmatlar bazasi.",
    images: [
      {
        url: '/uzmo-og.png',
        width: 1200,
        height: 630,
        alt: 'UzMO.uz Xizmatlar Portali Logosi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UzMO.uz',
    description: "Guliston va Sirdaryo viloyatining barcha xizmatlari va ustalari bir joyda.",
    images: ['/uzmo-og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};


import { LanguageProvider } from '@/context/LanguageContext';
import { AuthProvider } from '@/context/AuthContext';
import { getCurrentUserAction } from '@/actions/user-auth-actions';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import NavigationProgressBar from '@/components/NavigationProgressBar';
import { cookies } from 'next/headers';
import type { Language } from '@/lib/translations';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value as Language | undefined;
  const initialLang: Language = cookieLocale === 'ru' ? 'ru' : 'uz';

  const userRes = await getCurrentUserAction();

  return (
    <html lang={initialLang} suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="app-body min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-200">
        <Suspense fallback={null}>
          <NavigationProgressBar />
        </Suspense>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <AuthProvider initialUser={userRes.user}>
            <LanguageProvider initialLang={initialLang}>
              <Suspense fallback={<div className="h-14 sm:h-16 bg-background border-b border-border" />}>
                <Header />
              </Suspense>
              <main className="min-w-0 w-full flex-1">{children}</main>
              <Suspense fallback={null}>
                <Footer />
              </Suspense>
              <Suspense fallback={null}>
                <BottomNav />
              </Suspense>
            </LanguageProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
