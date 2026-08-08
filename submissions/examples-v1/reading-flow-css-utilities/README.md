# Reading Flow CSS Utilities

A focused utility toolkit for the experimental `reading-flow` CSS property — letting you align keyboard focus and reading order with the visual presentation of flex and grid layouts, rather than their DOM source order.

---

## Overview

CSS layout tools like Flexbox and Grid let us rearrange elements visually via `order`, `flex-direction: row-reverse`, or explicit grid placement. But keyboard focus has always followed the DOM — creating an invisible disconnect for anyone navigating with a keyboard or assistive technology.

The `reading-flow` property is the CSS Working Group's answer to this problem. It instructs the browser to walk focus (and, in time, screen reader reading order) through a container in the order items *appear on screen*, according to a chosen strategy.

These six utility classes wrap each `reading-flow` value into a composable, single-class API that fits the EaseMotion CSS workflow.

---

## Utilities Included

| Class | CSS Value | Use case |
|---|---|---|
| `.reading-flow-normal` | `normal` | Reset to default DOM-order traversal |
| `.reading-flow-flex-visual` | `flex-visual` | Follow visual flex position (respects writing-mode) |
| `.reading-flow-flex-flow` | `flex-flow` | Follow flex axis (ignores writing-mode) |
| `.reading-flow-grid-rows` | `grid-rows` | Grid traversal row by row, left→right |
| `.reading-flow-grid-columns` | `grid-columns` | Grid traversal column by column, top→bottom |
| `.reading-flow-grid-order` | `grid-order` | Respect CSS `order` property on grid items |

---

## Example Usage

### Reset to default

```html
<!-- Remove any inherited reading-flow from a parent container -->
<div class="reading-flow-normal">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
</div>
```

### Reversed flex row

```html
<!--
  Items are in DOM order 5→4→3→2→1 but rendered right-to-left.
  Without reading-flow, focus would go 5→4→3→2→1.
  With flex-visual, focus correctly follows the screen: 1→2→3→4→5.
-->
<div class="reading-flow-flex-visual" style="display: flex; flex-direction: row-reverse;">
  <button>5</button>
  <button>4</button>
  <button>3</button>
  <button>2</button>
  <button>1</button>
</div>
```

### Grid with row-first focus

```html
<!--
  Items are placed in arbitrary grid cells via grid-column/grid-row.
  reading-flow: grid-rows ensures focus sweeps each row before moving down.
-->
<div class="reading-flow-grid-rows" style="display: grid; grid-template-columns: repeat(3, 1fr);">
  <button style="grid-column:2; grid-row:1;">B</button>
  <button style="grid-column:1; grid-row:1;">A</button>
  <button style="grid-column:3; grid-row:1;">C</button>
  <button style="grid-column:2; grid-row:2;">E</button>
  <button style="grid-column:1; grid-row:2;">D</button>
  <button style="grid-column:3; grid-row:2;">F</button>
</div>
<!-- Focus: A → B → C → D → E → F -->
```

### Grid with explicit CSS order

```html
<!--
  Each item carries an `order` value that defines desired focus sequence,
  regardless of visual position in the grid.
-->
<div class="reading-flow-grid-order" style="display: grid; grid-template-columns: repeat(3, 1fr);">
  <button style="grid-column:3; order:1;">First focus</button>
  <button style="grid-column:1; order:2;">Second focus</button>
  <button style="grid-column:2; order:3;">Third focus</button>
</div>
```

---

## Browser Support

> **`reading-flow` is experimental and not yet production-ready.**

| Browser | Support |
|---|---|
| Chrome 125+ | ✅ Behind flag — enable *Experimental Web Platform Features* at `chrome://flags` |
| Edge 125+ | ✅ Follows Chromium |
| Firefox | ❌ Not supported |
| Safari | ❌ Not supported |

In unsupported browsers, the property is silently ignored and focus falls back to standard DOM source order. Ensure your DOM order remains a sensible fallback for all users.

Spec reference: [CSS Basic User Interface Module Level 4 — reading-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/reading-flow)

---

## Customization

These are intentionally thin utilities — each is a single property declaration. Combine them with any EaseMotion layout class or your own existing Flexbox/Grid setup:

```css
/* Override for a specific viewport if needed */
@media (max-width: 768px) {
  .my-reversed-nav {
    flex-direction: row; /* No longer reversed on mobile */
    reading-flow: normal; /* Reset to DOM order */
  }
}
```

You can also extend the token system in `style.css` by adjusting the CSS custom properties under `:root` — colors, spacing, and shadow values are all token-driven.

---

## Accessibility Notes

- **Match reading order intentionally.** Only apply a `reading-flow` value that genuinely mirrors how a human would read the content on screen. Arbitrary traversal orders are just as confusing as wrong DOM order.

- **Test with real assistive technology.** Screen reader virtual cursors (e.g. NVDA browse mode, VoiceOver Quick Nav) may not yet follow `reading-flow` the same way sequential keyboard focus does. Always test with NVDA, JAWS, and VoiceOver before shipping.

- **Don't replace ARIA with this.** `reading-flow` adjusts *focus traversal order*, not element semantics. Continue using appropriate ARIA roles, landmarks, and labels alongside it.

- **Progressive enhancement first.** Treat `reading-flow` as an enhancement layer — your DOM order should always make independent sense as a fallback. Never rely solely on CSS to produce a coherent experience.

- **Visible focus styles.** The demo includes high-contrast focus rings on all interactive elements. Your production layout should maintain at least a 3:1 contrast ratio for focus indicators per WCAG 2.2 Success Criterion 2.4.11.

- **Avoid mixing with `tabindex`.** `reading-flow` is designed to replace `tabindex` juggling for layout reordering. Using both simultaneously can produce unpredictable and hard-to-debug traversal behaviour.

---

## Preview Description

The demo page (`demo.html`) is a single-page documentation site with a sticky dark sidebar navigation on desktop and a horizontal nav bar on smaller viewports. Each utility gets its own section with:

- A plain-language explanation of the value
- A live, tabbable example using real `<button>` elements — so you can press Tab and physically feel how focus moves
- A syntax-highlighted code block showing the CSS definition and a typical HTML usage pattern
- Colour-coded demo items per utility for quick visual distinction

The **Side-by-side** section lets you compare `grid-rows` vs `grid-columns` on identical markup, and `normal` vs `flex-visual` on a reversed flex row — making the behavioural difference immediately tangible.

All focus rings in the demos are intentionally oversized and high-contrast so the traversal order is easy to follow while learning.

---

## File Structure

```
submissions/examples/reading-flow-css-utilities/
├── demo.html     # Documentation + live examples
├── style.css     # Utility classes + demo-page styles
└── README.md     # This file
```

---

*EaseMotion CSS · GSSoC 2026 Contribution*