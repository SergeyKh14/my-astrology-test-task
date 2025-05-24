import type { Metadata, Viewport } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { Providers } from "@/context";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--montserrat",
});

export const metadata: Metadata = {
  title: "My Astrology",
  description: "My Astrology",
  icons: {
    icon: "/images/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${montserrat.variable} antialiased`}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
