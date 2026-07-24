# 3D Flip Tabs — SaaS Showcase

A pure CSS tabs component with a real 3D flip, styled as a pricing-plan showcase. Instead of swapping panels in and out, this uses a single **rotating 3-sided prism card** — selecting a plan physically turns the card so that plan's face rotates to the front. No JavaScript required.

## What it does

- Three plan faces (Starter, Pro, Business) are pre-arranged around a single card at 0°, 120°, and 240° using `rotateY()` + `translateZ()`.
- Selecting a tab rotates the *entire card*, not the individual faces — the card turns until the selected plan's face is the one facing the viewer, exactly like spinning a physical triangular prism.
- `backface-visibility: hidden` means only the face currently pointed at the viewer is visible; the other two are hidden behind the card at any given moment.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-prism:has(#tab-x:checked) .tabs-prism__card { transform: rotateY(...); }` rotates the whole card to the angle that brings face `x` to the front (0° for Starter, -120° for Pro, -240° for Business).
- `perspective` is set on `.tabs-prism__stage` so the rotation reads as real 3D depth.
- Unlike a typical enter/exit flip animation, nothing here toggles `display` — all three faces exist simultaneously in 3D space at all times; only the card's own rotation changes.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-prism` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `620ms` | Prism rotation length |
| `--tabs-easing` | `cubic-bezier(0.65, 0, 0.35, 1)` | Easing curve |
| `--tabs-depth` | `150px` | Distance each face sits from the card's center — larger values make the prism feel "wider" |
| `--tabs-perspective` | `1400px` | 3D perspective depth — lower values exaggerate the rotation |
| `--tabs-radius` | `16px` | Corner radius |
| `--tabs-accent` | `#0891b2` | Accent color (active tab, plan label, CTA button) |
| `--tabs-bg` / `--tabs-card-bg` | `#f7fafa` / `#ffffff` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | dark / muted | Text colors |

Example override:

```html
<div class="tabs-prism" style="--tabs-depth: 200px; --tabs-accent: #7c3aed;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling both the tab-chip transition and the card rotation (the correct face still appears, just without the spin).

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven 3D flip pattern in the SaaS showcase aesthetic requested in issue #50058 — using a genuinely different flip mechanic (a rotating multi-face prism) from a typical single-panel flip, responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.