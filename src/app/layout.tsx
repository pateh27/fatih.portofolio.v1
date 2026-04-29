
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Muhammad Al-Fatih Ulima Robby — Junior Web Developer",
  description:
    "Personal portfolio of Muhammad Al-Fatih Ulima Robby, a junior web developer with a passion for creating visually stunning and user-friendly websites.",
  openGraph: {
    title: "Muhammad Al-Fatih Ulima Robby — Junior Web Developer",
    description: "Personal portfolio of Muhammad Al-Fatih Ulima Robby",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
