# Scroll-Driven Cinematic Focus Reveal (`ease-scroll-focus-reveal-sn`)

## What does this do?

An animated scroll reveal utility that transitions elements smoothly from a heavily blurred, slightly shrunk, and semi-transparent state to a crisp, fully focused, and standard-scale layout as they scroll into view.

## How is it used?

Apply the `.ease-scroll-focus-reveal` class to the target elements:

```html
<h2 class="ease-scroll-focus-reveal">Focused on Scroll</h2>
<p class="ease-scroll-focus-reveal" style="--ease-reveal-blur: 12px;">
  Customized blur depth.
</p>
```

You can customize the maximum blur radius using the CSS custom property `--ease-reveal-blur` (defaults to `16px`).

## Why is it useful?

It provides a premium, high-impact editorial design aesthetic often seen on luxury brand, modern tech portfolio, and agency sites. Because it runs on CSS Scroll-Driven Animations (`@supports (animation-timeline: view())` and `view()`), it is executed on the compositor thread with zero Javascript overhead, degrading cleanly to standard readable text on unsupported browsers and respecting accessibility rules (`prefers-reduced-motion`).

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effect.

---

## Submission Details

- **Author:** Shafin Nigamana (GSSoC 2026)
- **Issue:** #6984
