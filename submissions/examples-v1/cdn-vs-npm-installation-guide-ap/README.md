# CDN vs. NPM Installation Guide

Welcome to the **CDN vs. NPM Installation Guide**! This comprehensive document details the setup steps, trade-offs, and performance implications of linking EaseMotion CSS via public CDNs versus installing it as an NPM package dependency.

---

## 📋 Table of Contents

1. [CDN vs. NPM Comparison Matrix](#1-cdn-vs-npm-comparison-matrix)
2. [CDN Setup (Prototypes & Simple Sites)](#2-cdn-setup-prototypes--simple-sites)
3. [NPM Setup (Production & Build Tools)](#3-npm-setup-production--build-tools)
4. [Bundle Size & Performance Implications](#4-bundle-size--performance-implications)

---

## 1. CDN vs. NPM Comparison Matrix

| Criteria            | CDN (jsDelivr / unpkg)                  | NPM Package                                      |
| :------------------ | :-------------------------------------- | :----------------------------------------------- |
| **Setup Speed**     | **🟢 Instant** (less than 1 minute)     | ⚠️ Requires installer and config                 |
| **Tree Shaking**    | ❌ No (Downloads full library)          | **🟢 Yes** (Vite/PostCSS purges unused rules)    |
| **Local Overrides** | Global variables overrides only         | **🟢 Yes** (Nesting variables inside components) |
| **Target Use Case** | Prototypes, landing pages, quick drafts | Large web apps, Next.js/Nuxt, production build   |

---

## 2. CDN Setup (Prototypes & Simple Sites)

Using a CDN is the fastest way to get started. You do not need any build configurations, compilers, or local packages.

### 1. Setup Instructions

Paste the jsDelivr link tag inside your HTML document's `<head>` element:

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Quick Prototype</title>

    <!-- Fetch the minified animations sheet from jsDelivr edges -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/easemotion-css/core/animations.min.css"
    />
  </head>
  <body>
    <div class="ease-zoom-in">Quick Prototype Card</div>
  </body>
</html>
```

### 2. Benefits

- **Direct Cache Matches**: If users have visited other sites using the same jsDelivr EaseMotion URL, the browser loads the CSS instantly from local cache.
- **No Maintenance**: Updates can be fetched automatically by targeting semver links (e.g. `@latest`).

---

## 3. NPM Setup (Production & Build Tools)

For production applications using frameworks (React, Vue, Svelte) and bundlers (Vite, Webpack), install EaseMotion as a local dependency to enable tree-shaking and component-scoped styles.

### 1. Installation

Run the install command inside your project shell directory:

```bash
npm install easemotion-css
```

### 2. Bundler Import

Import the stylesheet inside your main javascript module (e.g., `src/main.js`):

```javascript
import "easemotion-css";
```

### 3. Tree-Shaking Configurations

To ensure your production build includes only the animations you use, configure PurgeCSS or Tailwind CSS to parse EaseMotion classes:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Whitelist EaseMotion classes
    "./node_modules/easemotion-css/core/animations.min.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 4. Bundle Size & Performance Implications

- **CDN Strategy**: Downloads the complete pre-compiled CSS file (~12.18 KB). While Cloudflare and Edge CDNs deliver assets fast, loading unused classes adds overhead on mobile connections.
- **NPM Strategy**: Bundles only the animation styles active in your components. If your landing page uses only three EaseMotion classes, the compiler outputs a stylesheet under **1 KB** (0.88 KB), improving performance.
