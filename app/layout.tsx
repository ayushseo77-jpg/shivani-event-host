import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivani – Event Host & Emcee",
  description:
    "Warm, confident and memorable event hosting for weddings, corporate events and milestone celebrations in Ambala and beyond.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
