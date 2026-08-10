# 3D Flip Tabs — E-Commerce Checkout

A pure CSS tabs component with a 3D flip transition, styled for an e-commerce checkout step switcher (Shipping / Payment / Review). No JavaScript required.

## What it does

- Switching checkout steps flips the content panel open on its X axis — like a flap tipping down into place — using real 3D transforms (`perspective` + `rotateX`), not a simulated effect.
- Numbered step circles fill in with the accent color as each step becomes active, giving a familiar "checkout progress" feel alongside the flip.
- Panel switching and the flip animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each step is a hidden `<input type="radio">` paired with a `<label>` containing a numbered circle and a text span. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between steps).
- `.tabs-checkout:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the flip keyframe.
- `perspective` is set on the `.tabs-checkout__stage` wrapper so the panel's `rotateX()` reads as genuine 3D depth. `backface-visibility: hidden` keeps it from rendering upside-down mid-flip.
- Note: this uses plain radio inputs for step switching (any step is directly selectable) rather than gating navigation behind form validation — pair it with real validation logic if used in a production multi-step checkout.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-checkout` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `420ms` | Flip animation length |
| `--tabs-easing` | `cubic-bezier(0.25, 0.8, 0.4, 1)` | Easing curve |
| `--tabs-flip-angle` | `-80deg` | Starting X-axis rotation before the panel settles flat |
| `--tabs-perspective` | `1100px` | 3D perspective depth |
| `--tabs-radius` | `12px` | Corner radius |
| `--tabs-accent` | `#0ea5a5` | Accent color (active step circle, secure badge) |
| `--tabs-bg` / `--tabs-surface` | `#ffffff` / `#f4f7f7` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | dark / muted | Text colors |

Example override:

```html
<div class="tabs-checkout" style="--tabs-flip-angle: -60deg; --tabs-accent: #d97706;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between steps) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active step via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the step-circle transition and the panel flip animation.
- On very narrow viewports, step labels collapse to numbered circles only, keeping the tap targets legible without truncating text mid-word.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven 3D flip pattern in the e-commerce checkout aesthetic requested in issue #50057 — responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.