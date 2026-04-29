
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import SplashCursor from "@/components/ui/SplashCursor";

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
      <body>
         <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#A855F7"
        />
        {children}
      </body>
    </html>
  );
}
