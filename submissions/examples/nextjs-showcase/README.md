# Next.js (App Router) Showcase

This submission demonstrates how to seamlessly integrate EaseMotion CSS into a modern Next.js (App Router) environment utilizing both Server Components and Client Components.

## What's Included
1. **The Static Demo (`demo.html`)**: A lightweight, statically generated showcase landing page using pure HTML/CSS to satisfy zero-build execution checks.
2. **The Next.js Source Code (`/template`)**: The actual Next.js App Router codebase demonstrating best practices, hydration techniques, and CSS purging for production.

## How to use the Next.js Template
```bash
cd template
npm install
npm run dev
```

## Features Demonstrated
- **Server Components (SSR)**: The main layout and text content are rendered natively on the server utilizing EaseMotion CSS, preventing hydration mismatches and Layout Shifts (CLS).
- **Client Components**: The timeline items are marked with `"use client"` and use an `IntersectionObserver` to trigger EaseMotion animation classes (e.g. `ease-slide-up`) dynamically as they scroll into view.
- **CSS Purging (Production Optimization)**: The `postcss.config.mjs` is equipped with `@fullhuman/postcss-purgecss` which aggressively strips unused EaseMotion CSS classes out of the final build. Run `npm run build` to see the optimized static bundle!
