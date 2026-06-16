import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandni Adil Welfare Foundation",
  description:
    "A family-led welfare foundation supporting masjid construction, education, benches, and village improvements in Mohra Syedan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
