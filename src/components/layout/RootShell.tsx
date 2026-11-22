import { preconnect } from "react-dom";
import type { ReactNode } from "react";

interface RootShellProps {
  children: ReactNode;
  /** Google Fonts stylesheet URL for this page (see data/fonts.ts). */
  fontsHref: string;
  bodyClassName?: string;
  bodyId?: string;
}

/**
 * <html>/<body> shell shared by the four route-group root layouts.
 *
 * Each page of the site has its own stylesheet (the wireframes re-define the same
 * class names with different rules), so every route group is its own root layout
 * and loads only its own CSS. Navigating between pages is a full document load,
 * exactly like the original multi-file site.
 */
export default function RootShell({ children, fontsHref, bodyClassName, bodyId }: RootShellProps) {
  // React 19 hoists these into <head>.
  preconnect("https://fonts.googleapis.com");
  preconnect("https://fonts.gstatic.com", { crossOrigin: "anonymous" });

  return (
    <html lang="fr">
      <body className={bodyClassName} id={bodyId}>
        <link rel="stylesheet" href={fontsHref} precedence="default" />
        {children}
      </body>
    </html>
  );
}
