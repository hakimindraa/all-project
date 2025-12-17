import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Hakim Lesmana — Links",
  description: "Photography • AI • Web",
  openGraph: {
    title: "Hakim Lesmana",
    description: "Photography • AI • Web",
    url: "https://all-projectport.vercel.app",
    images: [
      {
        url: "/og-bio.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
