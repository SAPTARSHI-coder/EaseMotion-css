# Pricing Tier Comparison Motion Board

Related issue: #51870

## What does this do?

A focused pricing comparison board with three tiers — Free, Pro, and Team — and a monthly/yearly billing toggle. Switching periods crossfades price numbers, lifts the featured Pro card while sibling cards sink slightly, and triggers a single pulse on the “Most Popular” badge.

## How is it used?

Open `demo.html` in a browser.

1. Review the three pricing cards side by side (stacked on narrow viewports).
2. Click **Monthly** or **Yearly** in the billing toggle.
3. Watch prices crossfade, card elevation shift, and the badge pulse once per toggle.
4. Enable **prefers-reduced-motion** in your OS to see instant price swaps and static cards.

No build step, CDN, or backend is required.

## Why is it useful?

Pricing pages rely on subtle motion to guide attention without overwhelming users. This demo isolates common SaaS patterns — tier emphasis, animated price changes, and promotional badge feedback — in a self-contained board suitable for motion design reviews, accessibility audits, or contributor workshops.

## Accessibility

- Billing toggle uses `aria-pressed` and a labeled button group.
- Price regions use `aria-live="polite"` for screen reader updates.
- All interactive elements have visible `:focus-visible` rings.
- Animations respect `prefers-reduced-motion: reduce`.

## Files

```
submissions/examples/feature-pricing-tier-comparison-motion-board-sum/
├── demo.html
├── style.css
└── README.md
```
