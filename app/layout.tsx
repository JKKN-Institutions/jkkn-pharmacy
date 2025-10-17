import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Infine - Life and Business Coach",
  description: "Expert your life & business coaching",
  keywords: "coaching, business coach, life coach",
  authors: [{ name: "Awaiken" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx" suppressHydrationWarning>
      <head>
        {/* Favicon */}
            <link rel="shortcut icon" type="image/x-icon" href="/images/logo.png" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fustat:wght@200..800&display=swap" rel="stylesheet" />
        
        {/* CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link href="/css/all.css" rel="stylesheet" media="screen" />
        <link href="/css/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body suppressHydrationWarning>
        {children}
        
        {/* JavaScript Files */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
