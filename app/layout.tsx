import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pure Unity Exports Ltd | Agricultural Export & Supply",
  description:
    "Pure Unity Exports Ltd connects Nigerian agricultural commodities with international buyers and supplies agricultural farm merchandise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}