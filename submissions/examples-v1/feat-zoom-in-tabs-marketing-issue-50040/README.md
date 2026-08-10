# Zoom-In Tabs — Marketing Landing Page

A pure CSS tabs component with a bouncy zoom-in reveal, styled for a marketing landing page audience switcher (Teams / Individuals / Enterprise). No JavaScript required.

## What it does

- Switching audience tabs zooms the panel in from a smaller scale with a slight bounce/overshoot, giving it an energetic, marketing-page feel rather than a subtle dashboard fade.
- The panel's icon badge pops in on a short delay after the panel itself, layering two zoom moments instead of one flat reveal.
- The active tab fills with a two-color gradient to match the CTA button, tying the whole component to a consistent brand accent.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-market:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the zoom-in keyframe.
- The badge inside each panel runs its own `tabs-market-badge-pop` animation with a short `animation-delay`, so it visibly zooms in just after the panel container.
- The bouncy feel comes entirely from the easing curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`), not extra keyframe steps — swapping `--tabs-easing` to a standard ease removes the bounce without changing anything else.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-market` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `500ms` | Zoom-in animation length |
| `--tabs-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve (the overshoot creates the bounce) |
| `--tabs-scale-start` | `0.75` | Starting scale of the panel before it zooms to full size |
| `--tabs-radius` | `16px` | Corner radius |
| `--tabs-accent-a` / `--tabs-accent-b` | `#ff3d6e` / `#ff8a3d` | Gradient accent (active tab, badge, CTA button) |
| `--tabs-bg` / `--tabs-surface` | `#ffffff` / `#faf7f5` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | dark / muted | Text colors |

Example override:

```html
<div class="tabs-market" style="--tabs-accent-a: #7c3aed; --tabs-accent-b: #06b6d4;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling both the panel zoom-in and the badge pop animations.
- CTA links use standard `<a>` elements so they're reachable and operable like any other link.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven zoom-in pattern in the marketing landing page aesthetic requested in issue #50040 — responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.