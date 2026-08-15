# css-ribbon-banner

A corner ribbon/banner component for **EaseMotion CSS** that displays a rotated "New", "Sale", "Beta", or percentage label pinned to the top-right corner of a card, with a stitched-down fold look — pure CSS, no JavaScript.

## 1. What does this do?

It renders an absolutely-positioned corner ribbon on a card (or any `position: relative` container) so a label like "New", "Sale", or "-50%" appears rotated diagonally in the corner, with a small pop-in animation that respects `prefers-reduced-motion`.

## 2. How is it used?

Wrap a `.ribbon` (with a color modifier) and a `.ribbon__label` inside any container that has `position: relative`:

```html
<div style="position: relative;">
  <span class="ribbon ribbon--new" aria-hidden="true">
    <span class="ribbon__label">New</span>
  </span>

  <!-- your card content -->
</div>
```

Available color modifiers: `ribbon--new` (green), `ribbon--sale` (red), `ribbon--info` (blue). Add `ribbon--lg` for a larger marketing variant.

Because the ribbon is purely decorative, mark it `aria-hidden="true"` and provide the same information in the surrounding text (or via a visually-hidden `.sr-only` label) for screen-reader users — see `demo.html` for the accessible pattern.

## 3. Why is it useful for EaseMotion CSS?

Ribbon banners are a ubiquitous e-commerce and content-card pattern (product badges, "New" flags, sale tags) that front-end developers routinely rebuild with JavaScript or copy-paste snippets. A single, self-contained, animation-first component with a subtle pop-in entrance and a `prefers-reduced-motion` guard fits EaseMotion's philosophy of giving developers ready-to-use, accessible CSS building blocks without any JavaScript dependency.

## Files

- `style.css` — the ribbon component styles (CSS custom properties for size/colors, color modifiers, large variant, entrance animation, reduced-motion guard).
- `demo.html` — self-contained demo showing five cards: `New`, `Sale`, `Beta`, a large `-50%` variant, and an accessible `Featured` example paired with a visually-hidden label. Opens directly in a browser — no server, CDNs, or frameworks.
- `README.md` — this file.
