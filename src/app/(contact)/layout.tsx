import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import RootShell from "@/components/layout/RootShell";
import { FONTS } from "@/data/fonts";
import { SITE_DESCRIPTION } from "@/data/site";
import "./contact.css";

export const metadata: Metadata = {
  title: "SIRAJ – Contact",
  description: SITE_DESCRIPTION,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function ContactRootLayout({ children }: { children: ReactNode }) {
  return (
    <RootShell fontsHref={FONTS.contact} bodyId="home">
      {children}
    </RootShell>
  );
}
