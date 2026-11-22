# SIRAJ — Next.js site

Conversion of the four static wireframes (Home, About, Services, Contact) to
Next.js 16.4.6 · React 19.3.1 · TypeScript · Tailwind CSS 3.4 · ESLint 9.39.5 · Node 24.14.0.

```bash
nvm use            # Node 24.14.0 (.nvmrc)
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run lint && npm run typecheck
```

## 1. Add the images that were not in the upload

The wireframes referenced image files that were not attached. Copy them (same file names) into `public/images/`:

| Page | Files |
|---|---|
| Home (audiences) | `ciblePetitprojet.png`, `REstaucafe.png`, `entreprisesetecoles.png` |
| Services | `introimage.png`, `strategie.png`, `identitevisuel.png`, `webetsolutiondigital.png`, `digitalmarketing.png`, `publicitedigital.png`, `visibilitelocale.png`, `intelligenceartificielleetautomatisation.png`, `data&bi.png` |

Already extracted from your HTML into `public/images/`: `logo.png`, `hero-bg.jpg`, `service-web|marketing|ai|data.jpg`.

## 2. Contact form

`POST /api/contact` validates, has a honeypot, and sends through [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and fill it in. Without keys: dev logs the message; production answers 503.

## Structure

```
src/app/(home|about|services|contact)/   one route group = one root layout = one stylesheet
src/components/layout/                   Header (mobile menu + home logo morph), Footer, WhatsApp, RootShell
src/components/{home,about,services,contact}/
src/data/                                all copy/content as typed data
```

**Why four root layouts?** The wireframes define the same class names (`.nav`, `.hero`, `.rv`, `@keyframes rise`…)
with *different* rules per page. Isolating each page's CSS per root layout keeps every page pixel-identical;
moving between pages is a normal document load, as with the original files.
Each `*.css` is the wireframe's `<style>` carried over verbatim. Tailwind (with preflight) is loaded only
in `services.css`, after the page CSS, exactly as the CDN script did.
