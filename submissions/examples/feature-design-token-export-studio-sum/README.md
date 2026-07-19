# Design Token Export Studio

## What does this do?

An interactive studio for tuning local design tokens (`--ease-color-primary`, `--ease-speed-medium`, `--ease-radius`) with a live preview of button, card, and navigation UI, plus export tools for CSS and JSON.

## How is it used?

Open `demo.html` in a browser. Adjust the sliders, preview the components, then export or copy the generated snippet:

```html
<link rel="stylesheet" href="style.css" />
<main class="token-studio-sum">…</main>
```

Use **Export CSS** for a `:root` block or **Export JSON** for a token map. **Copy** and **Download** work on the textarea content. **Reset** restores defaults.

## Why is it useful?

Design systems need a fast way to iterate on motion and surface tokens before committing them to a codebase. This demo shows token-driven UI updates and portable export formats for handoff to CSS or tooling pipelines.

## Accessibility

- All controls have visible labels and live value outputs
- Export status uses `role="status"` and `aria-live="polite"`
- Focus styles on buttons and the primary CTA
- Under `prefers-reduced-motion: reduce`, hover transitions and CTA lift are disabled

## Files

```
submissions/examples/feature-design-token-export-studio-sum/
├── demo.html
├── style.css
└── README.md
```

Related issue: #51883
