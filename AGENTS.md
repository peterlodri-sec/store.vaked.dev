# AGENTS.md — `store.vaked.dev`

> **Sovereign E-Commerce Storefront Node for the vaked.dev Constellation**

`store.vaked.dev` is the commercial and physical asset node of the **vaked.dev constellation**. It connects our generative visual art (#01–#49) and procedural audio engines directly with physical Giclée print fulfillment, 24-bit uncompressed audio master downloads, and 180g audiophile vinyl records.

---

## ✦ Tech Stack & Architecture

- **Frontend:** Vanilla HTML5, CSS3 Glassmorphic Design System, responsive fluid typography (`clamp()`), and zero-dependency JS.
- **Hosting:** Cloudflare Pages (`store-vaked-dev.pages.dev` & `store.vaked.dev`).
- **Web3 Integration:** Ethereum (`0x4f584F6fd3a0a8C807aF2F00571c172603600578`) and Solana (`FoStDzbwLqgkw5g7GwSCeD9WpqP9TSrxQ1W2Apn7p9A4`) 1-click payment triggers.
- **Authentication:** Honest-Auth Passkey identity verification.
- **Production Engine:** Headless LMMS CLI (`lmms_procedural_render.py`).

---

## 🛡️ Standards & Control Rules

1. **Accessibility (a11y):** All product cards must include explicit `alt` text, high-contrast focus rings (`:focus-visible`), and semantic HTML5 (`<header>`, `<main>`, `<article>`, `<footer>`).
2. **SEO & Structured Data:** Must maintain Schema.org `Store` and `Product` JSON-LD data and 16:9 OpenGraph share images.
3. **Security Headers:** Enforced via `_headers` (CSP, HSTS, X-Content-Type-Options).
4. **Anti-AI Scraping:** Governed by `robots.txt` (`X-Robots-Tag: noai, noimageai`).

*the constellation · 0 + 1 · fine touch from within · vaked.dev*
