# Zoom-In Tabs — Accessible Web

A pure CSS tabs component with a subtle zoom-in reveal, where the "Accessible Web" brief shapes the actual visual and interaction design rather than being treated as an afterthought. No JavaScript required.

## What it does

- Switching tabs reveals the panel with a short, subtle scale-and-fade (96% → 100%, 200ms) — enough to draw the eye without becoming a distraction.
- Every tab has a minimum 44×44px target size, per WCAG 2.5.5 target-size guidance.
- Focus and selection are visually distinct: the keyboard focus ring is amber, the selected-tab fill is blue, so a sighted keyboard user can always tell "where I am" from "what's chosen."
- Set in Atkinson Hyperlegible, a typeface designed specifically to increase legibility for readers with low vision.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs) — this is called out explicitly in the demo copy rather than left implicit.
- `.tabs-a11y:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the zoom-in keyframe.
- `prefers-reduced-motion: reduce` fully removes the animation (not just shortens it) — the panel simply appears.

## Customization

All values are exposed as CSS custom properties on the `.tabs-a11y` wrapper. If you retheme colors, re-check contrast — the defaults are chosen to pass WCAG AA, and swapping them without checking can silently break that:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `200ms` | Zoom-in animation length (kept short intentionally) |
| `--tabs-easing` | `ease-out` | Easing curve |
| `--tabs-scale-start` | `0.96` | Starting scale of the panel (kept subtle intentionally) |
| `--tabs-radius` | `8px` | Corner radius |
| `--tabs-accent` / `--tabs-accent-contrast` | `#1a56db` / `#ffffff` | Selected-tab fill and its text color (passes AA together) |
| `--tabs-focus-ring` | `#b45309` | Keyboard focus ring — deliberately distinct from `--tabs-accent` |
| `--tabs-text` / `--tabs-text-dim` | `#111827` / `#374151` | Text colors, both AA-passing on white |

Example override:

```html
<div class="tabs-a11y" style="--tabs-accent: #0f766e; --tabs-focus-ring: #9333ea;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs: keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS or ARIA-managed focus logic.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- Minimum 44×44px tap targets on every tab.
- Focus ring color is distinct from the selected-state color so the two states are never visually ambiguous.
- All text/background pairs (including secondary/dim text) meet WCAG AA contrast.
- `prefers-reduced-motion: reduce` removes the animation entirely rather than just reducing its duration.
- On narrow viewports, tabs stack to full-width instead of shrinking below a legible/tappable size.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven zoom-in pattern where the "Accessible Web" aesthetic requested in issue #50049 is expressed through actual accessibility decisions (contrast, target size, focus visibility, motion respect) rather than through visual styling alone.