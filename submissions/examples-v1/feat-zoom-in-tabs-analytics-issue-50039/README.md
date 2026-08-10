# Zoom-In Tabs — Dashboard Analytics

A pure CSS tabs component with a zoom-in reveal, styled for a dashboard analytics metric switcher. No JavaScript required.

## What it does

- Switching between metrics (Revenue, Users, Conversion) scales the panel up from slightly smaller than full size while fading in, like a chart snapping into focus.
- The active tab gets a quick scale "pop" of its own, reinforcing the zoom motif at the trigger point, not just the destination.
- Each panel includes a small CSS-only bar chart (plain `<div>`s with inline `height`, no SVG/JS) so the zoom has real content to draw attention to.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-zoom:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the zoom-in keyframe, which animates `transform: scale()` from `--tabs-scale-start` to `1` alongside opacity.
- The active tab's own `transform: scale(1.04)` is a separate, instant style change (not the keyframe animation) so the trigger feels responsive.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-zoom` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `340ms` | Zoom-in animation length |
| `--tabs-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing curve |
| `--tabs-scale-start` | `0.85` | Starting scale of the panel before it zooms to full size |
| `--tabs-radius` | `12px` | Corner radius |
| `--tabs-accent` | `#10b981` | Accent color (active bar, delta text, active tab tint) |
| `--tabs-bg` / `--tabs-panel-bg` | `#0b1220` / `#121b2e` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | light / muted | Text colors |

Example override:

```html
<div class="tabs-zoom" style="--tabs-scale-start: 0.7; --tabs-accent: #6366f1;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- Visible focus ring via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the active-tab scale pop and the panel zoom-in animation.
- Decorative bar chart is marked `aria-hidden="true"`; the metric value and delta are readable as plain text.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven zoom-in pattern in the dashboard analytics aesthetic requested in issue #50039 — responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.