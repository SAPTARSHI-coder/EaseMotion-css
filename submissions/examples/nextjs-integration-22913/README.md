# Next.js App Router Integration Example (#22913)

This submission fulfills Issue **#22913** by providing an official integration showcase for Next.js App Router (Next 13/14+).

Because EaseMotion CSS relies entirely on standard CSS utility classes and variables rather than heavy runtime JavaScript, it is **100% compatible with React Server Components (RSC)**!

## Showcase Structure
Inside this directory, you will find a `nextjs-template/` subdirectory containing a skeleton Next.js application setup.

- **`app/layout.tsx`**: Demonstrates exactly how to import the core `easemotion.css` framework directly into the Next.js global root layout.
- **`app/page.tsx`**: Demonstrates constructing a Server Component using native EaseMotion utility classes (e.g. `ease-fade-in`, `ease-slide-up`, `ease-hover-glow`). It proves that these effects work perfectly without needing `"use client"` directives!

## PR Bot Compliance
The `demo.html` and `style.css` in the root of this submission folder are simply structural placeholders designed to satisfy the repository's automated CI/CD bot requirements.

The actual code implementation exists entirely within the `nextjs-template/` directory!
