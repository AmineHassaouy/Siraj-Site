import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import RootShell from "@/components/layout/RootShell";
import { FONTS } from "@/data/fonts";
import { SITE_DESCRIPTION } from "@/data/site";
import "./services.css";

export const metadata: Metadata = {
  title: "SIRAJ — Services Page",
  description: SITE_DESCRIPTION,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function ServicesRootLayout({ children }: { children: ReactNode }) {
  return (
    <RootShell
      fontsHref={FONTS.services}
      bodyClassName="bg-[#FAF8EA] text-[#2C221E] antialiased selection:bg-[#D4963B]/30 selection:text-[#3A2416]"
    >
      {children}
    </RootShell>
  );
}
