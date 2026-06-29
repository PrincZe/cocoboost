import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mycocoboost.com"),
  title:
    "CocoBoost — Premium Coconut Supplier in Malaysia | Wholesale & Export B2B",
  description:
    "CocoBoost is a Malaysia-based B2B coconut supplier for distributors, F&B manufacturers, hotels, retailers and export buyers. Fresh coconut, coconut water, milk & cream, desiccated coconut and oil at wholesale scale.",
  keywords: [
    "coconut supplier Malaysia",
    "wholesale coconut",
    "coconut water supplier",
    "desiccated coconut export",
    "coconut milk manufacturer",
    "OEM coconut products",
    "B2B coconut",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://mycocoboost.com/" },
  openGraph: {
    type: "website",
    siteName: "CocoBoost",
    title:
      "CocoBoost — Premium Coconut Supplier in Malaysia | Wholesale & Export",
    description:
      "Malaysia-grown coconut products at scale for distributors, manufacturers, hotels and export markets. Fresh coconut, water, milk & cream, desiccated coconut and oil.",
    url: "https://mycocoboost.com/",
    locale: "en_MY",
    images: ["https://mycocoboost.com/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CocoBoost — Premium Coconut Supplier in Malaysia",
    description:
      "Wholesale & export coconut supply for B2B buyers across Malaysia and beyond.",
    images: ["https://mycocoboost.com/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#3F8C6E",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://mycocoboost.com/#organization",
  name: "CocoBoost Sdn. Bhd.",
  url: "https://mycocoboost.com/",
  logo: "https://mycocoboost.com/logo.png",
  description:
    "Malaysia-based B2B supplier of fresh coconut and coconut products for distributors, F&B manufacturers, hospitality, retail and export buyers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lot 00, Jalan Industri 0/0",
    addressLocality: "Selangor",
    postalCode: "00000",
    addressCountry: "MY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+60-12-345-6789",
    contactType: "sales",
    areaServed: ["MY", "Worldwide"],
    availableLanguage: ["en", "ms"],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${hanken.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
