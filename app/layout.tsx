import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE_CONFIG } from "@/config/constants";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://reddyraj.com"),
  applicationName: "Reddy Anna",
  title: `${SITE_CONFIG.brand.name} – Official ID | Get ${SITE_CONFIG.brand.name} Book ID Online`,
  description: SITE_CONFIG.description,
  keywords: ["Reddy Anna", "Reddy Book", "Anna Book", "Cricket Betting ID", "IPL Betting ID", "Online Betting India"],
  authors: [{ name: "Reddy Anna" }],
  creator: "Reddy Anna",
  publisher: "Reddy Anna",
  alternates: {
    canonical: "https://reddyraj.com",
  },
  openGraph: {
    title: `${SITE_CONFIG.brand.name} – Official ID`,
    description: SITE_CONFIG.description,
    url: "https://reddyraj.com",
    siteName: SITE_CONFIG.brand.name,
    images: [
      {
        url: "/hero_bg.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.brand.name} Official`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brand.name} – Official ID`,
    description: SITE_CONFIG.description,
    images: ["/hero_bg.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="QZQ3l6zSqswP9JOJw1KP8EXL87tYdTX8zot5l7UM1Hc" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KPJQFQ4X');`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://reddyraj.com/#website",
                  "url": "https://reddyraj.com/",
                  "name": "Reddy Anna",
                  "inLanguage": "en"
                },
                {
                  "@type": "Organization",
                  "@id": "https://reddyraj.com/#organization",
                  "name": "Reddy Anna",
                  "url": "https://reddyraj.com/"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://reddyraj.com/#webpage",
                  "url": "https://reddyraj.com/",
                  "name": "Reddy Anna ID Guide | Access & Account Information | reddyraj.com",
                  "description": "Explore Reddy Anna information, online ID guidance, sports betting and gaming resources, account help, and frequently asked questions.",
                  "isPartOf": {
                    "@id": "https://reddyraj.com/#website"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://reddyraj.com/#faq",
                  "url": "https://reddyraj.com/",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What is Reddy Anna?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Reddy Anna is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does a Reddy Anna ID work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An account ID is generally used to identify a user account. Refer to Reddy Anna's current account instructions and terms for the exact process."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I access the Reddy Anna website?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What sports are available on Reddy Anna?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does Reddy Anna provide live sports information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Check the site's current sports section for any live-event information and the terms that apply to its use."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I get help with my Reddy Anna account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What payment options are supported?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I check Reddy Anna login information?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What should I do if I have a problem with my account?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to Reddy Anna's current website information and terms for the most accurate answer."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Where can I find the latest Reddy Anna updates?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Refer to Reddy Anna's current website information and terms for the most accurate answer."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${playfair.variable}`}
        style={{
          '--primary': SITE_CONFIG.theme.primary,
          '--primary-hover': SITE_CONFIG.theme.primaryHover,
          '--primary-rgb': SITE_CONFIG.theme.primaryRgb,
          '--background': SITE_CONFIG.theme.background,
          '--secondary': SITE_CONFIG.theme.secondary,
          '--foreground': SITE_CONFIG.theme.foreground,
          '--text-primary': SITE_CONFIG.theme.textPrimary,
          '--text-secondary': SITE_CONFIG.theme.textSecondary,
          '--text-muted': SITE_CONFIG.theme.textMuted,
          '--border': SITE_CONFIG.theme.border,
        } as React.CSSProperties}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPJQFQ4X" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        />
        <Navbar />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7K2DYR1YJ4" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7K2DYR1YJ4');
            `
          }}
        />
      </body>
    </html>
  );
}
