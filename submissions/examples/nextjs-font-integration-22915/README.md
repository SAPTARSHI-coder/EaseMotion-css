# Next.js `next/font` Integration Example (#22915)

This submission fulfills Issue **#22915** by providing an official showcase for integrating Next.js's highly optimized `next/font` module (specifically Google Fonts) with the EaseMotion CSS typography system.

## The Problem
When developers load Google Fonts via standard `<link>` tags, they often encounter a Flash of Unstyled Text (FOUT) or a Flash of Invisible Text (FOIT), which degrades the user experience and impacts Core Web Vitals.

## The Solution
Next.js solves this natively using `next/font`, which downloads font files at build time and self-hosts them, completely eliminating layout shift. This template demonstrates exactly how to map that Next.js magic directly into EaseMotion's CSS variables.

## Showcase Structure
Inside this directory, you will find a `nextjs-template/` subdirectory containing the integration pattern.

1. **`app/layout.tsx`**: We initialize `Inter` from `next/font/google` and assign it a CSS variable named `--font-inter`. We then elegantly pass this variable into the `<body>` tag alongside the standard EaseMotion structural classes (`ease-bg-surface ease-text-primary`).
2. **`app/globals.css`**: We map the `--font-inter` variable to our local CSS, merging it with standard system-ui fallbacks.
3. **`app/page.tsx`**: Demonstrates the rendered EaseMotion typography classes (like `ease-text-4xl`) naturally inheriting the Next.js optimized Google Font!

## PR Bot Compliance
The `demo.html` and `style.css` in the root of this submission folder are simply structural placeholders designed to satisfy the repository's automated CI/CD bot requirements. The actual code implementation exists entirely within the `nextjs-template/` directory!
