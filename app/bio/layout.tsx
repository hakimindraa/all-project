import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakim Lesmana — Links",
  description: "Photography • AI • Web",
  openGraph: {
    title: "Hakim Lesmana",
    description: "Photography • AI • Web",
    url: "https://hakimlesmna.vercel.app/bio",
    siteName: "Hakim Lesmana",
    images: [
      {
        url: "/og-bio.jpg",
        width: 1200,
        height: 630,
        alt: "Hakim Lesmana — Link in Bio",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakim Lesmana",
    description: "Photography • AI • Web",
    images: ["/og-bio.jpg"],
  },
};

export default function BioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
