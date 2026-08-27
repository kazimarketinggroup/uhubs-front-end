import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.uhubs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Uhubs — Increase Your Win Rate and Revenue Per Head",
    template: "%s | Uhubs",
  },
  description:
    "Uhubs combines Human Experts and AI Assistants on the industry's largest sales capability benchmark to increase revenue per head by 83%.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Uhubs",
    title: "Uhubs — Increase Your Win Rate and Revenue Per Head",
    description:
      "Uhubs combines Human Experts and AI Assistants on the industry's largest sales capability benchmark to increase revenue per head by 83%.",
    images: [
      {
        url: "/assets/images/hero-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Uhubs Sales Excellence Score dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uhubs — Increase Your Win Rate and Revenue Per Head",
    description:
      "Uhubs combines Human Experts and AI Assistants on the industry's largest sales capability benchmark to increase revenue per head by 83%.",
    images: ["/assets/images/hero-dashboard.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Uhubs",
  legalName: "UPSKILLHUBS LIMITED",
  url: siteUrl,
  logo: `${siteUrl}/assets/images/uhubs-logo.png`,
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Uhubs",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
