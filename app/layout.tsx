import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PROFILE } from "@/lib/portfolio-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const SITE_URL = "https://truongnguyen.cv";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Truong Nguyen — Senior Frontend Developer",
  description: PROFILE.summary,
  keywords: [
    "Truong Nguyen", "Senior Frontend Developer", "React", "Next.js", "TypeScript",
    "Angular", "Vue.js", "Frontend Engineer", "Da Nang", "Vietnam",
  ],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Truong Nguyen — Senior Frontend Developer",
    description: PROFILE.summary,
    siteName: "Truong Nguyen Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truong Nguyen — Senior Frontend Developer",
    description: PROFILE.summary,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.title,
  email: `mailto:${PROFILE.email}`,
  url: SITE_URL,
  address: { "@type": "PostalAddress", addressLocality: "Da Nang", addressCountry: "VN" },
  sameAs: [PROFILE.links.linkedin, PROFILE.links.github, PROFILE.links.website],
  knowsAbout: ["React", "Next.js", "TypeScript", "Angular", "Vue.js", "Frontend Architecture"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Duy Tan University" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
