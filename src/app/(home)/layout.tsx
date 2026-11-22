import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import RootShell from "@/components/layout/RootShell";
import { FONTS } from "@/data/fonts";
import { SITE_DESCRIPTION } from "@/data/site";
import "./home.css";

export const metadata: Metadata = {
  title: "SIRAJ — Home Page",
  description: SITE_DESCRIPTION,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function HomeRootLayout({ children }: { children: ReactNode }) {
  return <RootShell fontsHref={FONTS.home}>{children}</RootShell>;
}
