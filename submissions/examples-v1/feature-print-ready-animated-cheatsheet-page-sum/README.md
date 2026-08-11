# Print-Ready Animated Cheatsheet

Related issue: #51875

## What does this do?

A one-page motion utility cheatsheet with grouped sections for fade, slide, hover, and delay/stagger patterns. Each entry shows a live animated demo on screen using local `demo-*` class names (not library prefixes). A dedicated `@media print` block freezes animations, simplifies borders, and compacts layout so the sheet prints cleanly on a single page.

## How is it used?

Open `demo.html` in a browser.

1. Scroll through the grouped sections and interact with hover/focus demos on screen.
2. Click **Print cheatsheet** (or use the browser print shortcut) to open print preview.
3. Confirm animations are static in print preview and class names remain readable.

No build tools or external assets are required.

## Why is it useful?

Teams learning motion utilities need both interactive examples and a portable reference. This pattern demonstrates how to ship animated docs that respect `prefers-reduced-motion` on screen while producing a stable, printer-friendly snapshot for workshops, handouts, or offline onboarding.

## Accessibility

- Hover demos are focusable buttons with visible focus styles.
- Decorative stagger dots use `aria-hidden="true"`.
- Animations are disabled under `prefers-reduced-motion: reduce`.

## Files

```
submissions/examples/feature-print-ready-animated-cheatsheet-page-sum/
├── demo.html
├── style.css
└── README.md
```
