# Smooth-Animated Accordion / Disclosure

A CSS-only accordion/disclosure component that animates expand and
collapse smoothly, with no JavaScript.

Addresses issue **"Feature: Add smooth-animated Accordion / Disclosure
component."**

## The technique

`height` cannot be transitioned directly between `0` and `auto` in CSS.
This component uses the **CSS Grid `grid-template-rows: 0fr → 1fr`**
trick instead:

```css
.ease-accordion-content {
  display: grid;
  grid-template-rows: 0fr; /* collapsed */
  transition: grid-template-rows var(--ease-speed-medium) var(--ease-ease);
}

.ease-accordion[open] > .ease-accordion-content {
  grid-template-rows: 1fr; /* expanded, sized to content */
}
```

Because `fr` units *are* animatable, this produces a smooth height
transition that automatically adapts to the content's real height — no
JavaScript `scrollHeight` measuring, and no hardcoded `max-height` guess.

As a progressive enhancement, browsers that support the newer
`interpolate-size: allow-keywords` property will animate `height: auto`
natively via the `@supports` block included in `style.css`; this is
additive and safely ignored elsewhere.

## Built on EaseMotion tokens

The component reuses EaseMotion's existing CSS custom properties rather
than hardcoding values, so it drops in cleanly alongside the rest of the
framework:

| Token used | Purpose |
|---|---|
| `--ease-speed-medium` | Expand/collapse transition duration |
| `--ease-speed-fast` | Header hover transition duration |
| `--ease-ease` | Easing curve for all transitions |
| `--ease-radius-md` | Corner radius of the accordion panel |
| `--ease-color-primary` | Focus outline color |

Each has a fallback value so the component still looks correct even if
loaded standalone, outside the full EaseMotion bundle.

## Accessibility

- Built on native `<details>`/`<summary>` — keyboard toggle (Enter/Space),
  focus handling, and screen reader semantics all come for free.
- A visible `:focus-visible` outline is included on the header.
- Respects `prefers-reduced-motion: reduce` by collapsing transition
  durations to near-zero for users who've requested less motion.

## Usage

```html
<details class="ease-accordion">
  <summary class="ease-accordion-header">
    What is EaseMotion?
    <span class="ease-accordion-icon">▾</span>
  </summary>
  <div class="ease-accordion-content">
    <div class="ease-accordion-inner">
      EaseMotion is a modern CSS animation framework...
    </div>
  </div>
</details>
```

Multiple `<details class="ease-accordion">` elements can be placed
adjacent to each other to form an accordion group; each opens/closes
independently (use `name="group-id"` on each `<details>` if you want
only one panel open at a time — supported natively by `<details>` in
modern browsers).

## Files

| File | Purpose |
|---|---|
| `demo.html` | Interactive demo with three accordion panels. |
| `style.css` | The `.ease-accordion*` component styles, plus demo-page-only presentation at the bottom of the file. |
| `README.md` | This file. |

## Suggested integration path

The proposed structure in the original issue was a standalone
`components/accordion.css` imported into `easemotion.css`. Since
`components/` is currently under the contribution freeze, this
submission lives under `submissions/examples/` instead — the
`.ease-accordion*` rules in `style.css` are written to be liftable
into `components/accordion.css` with minimal changes once a maintainer
reviews and integrates it.
