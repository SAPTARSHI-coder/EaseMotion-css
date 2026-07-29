# 3D Flip Tabs — Product Catalog

A pure CSS tabs component with a 3D flip transition, styled for a product catalog / category switcher. No JavaScript required.

## What it does

- Switching category tabs flips the featured-product card in on its Y axis, like a card spinning into view, using real 3D transforms (`perspective` + `rotateY`) rather than a simulated effect.
- Active category chips get a solid accent fill; inactive ones stay outlined.
- Panel switching and the flip animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-flip:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the flip keyframe.
- `perspective` is set on the `.tabs-flip__stage` wrapper so the child panel's `rotateY()` reads as genuine 3D depth rather than a flat squash.
- Each panel has `backface-visibility: hidden` so it never renders upside-down mid-flip.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-flip` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `460ms` | Flip animation length |
| `--tabs-easing` | `cubic-bezier(0.25, 0.8, 0.4, 1)` | Easing curve |
| `--tabs-flip-angle` | `90deg` | Starting Y-axis rotation before the panel settles flat |
| `--tabs-perspective` | `1000px` | 3D perspective depth — lower values exaggerate the flip |
| `--tabs-radius` | `14px` | Corner radius |
| `--tabs-accent` | `#2f5fff` | Accent color (active tab, category label, image backdrop) |
| `--tabs-bg` / `--tabs-card-bg` | `#f7f7f5` / `#ffffff` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | dark / muted | Text colors |

Example override:

```html
<div class="tabs-flip" style="--tabs-perspective: 600px; --tabs-accent: #16a34a;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the tab-chip transition and the panel flip animation.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven 3D flip pattern in the product-catalog aesthetic requested in issue #50055 — responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.