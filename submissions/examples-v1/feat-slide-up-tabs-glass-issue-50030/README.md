# Slide-Up Tabs — Glassmorphism UI

A pure CSS tabs component with a smooth slide-up reveal, styled with a glassmorphism aesthetic (frosted, translucent, blurred surfaces). No JavaScript required.

## What it does

- Clicking (or keyboard-selecting) a tab reveals its panel with a slide-up + fade + soft blur-out transition, like it's coming into focus through frosted glass.
- The active tab lifts up off the glass tray, gaining a stronger tint and a light-catching inset highlight along its top edge.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-glass:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` reveals the matching panel and triggers the slide-up-and-unblur keyframe.
- The glass look comes from `backdrop-filter: blur()` plus a low-opacity white background and border on each translucent layer (tray, tab, panel) — layered at slightly different opacities to suggest physical depth.
- A demo gradient scene (`.tabs-glass-scene`) is included so the blur effect has something to refract; the component itself works over any backdrop.

## Customization

All animation and visual values are exposed as CSS custom properties on the `.tabs-glass` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `400ms` | Transition/animation length |
| `--tabs-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve |
| `--tabs-lift` | `8px` | How far the active tab rises off the tray |
| `--tabs-slide-distance` | `16px` | How far the panel travels on reveal |
| `--tabs-radius` | `18px` | Corner radius |
| `--tabs-blur` | `18px` | Backdrop blur strength |
| `--tabs-glass-bg` / `--tabs-glass-bg-strong` | translucent white | Base / active-state glass tint |
| `--tabs-glass-border` | translucent white | Glass edge highlight |
| `--tabs-text` / `--tabs-text-dim` | white / muted white | Text colors |

Example override:

```html
<div class="tabs-glass" style="--tabs-blur: 28px; --tabs-lift: 12px;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab's label via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the lift transition and slide-up/blur animation.
- Includes a `@supports` fallback to a solid translucent background for browsers without `backdrop-filter` support, so text stays readable either way.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven animation pattern in the glassmorphism aesthetic requested in issue #50030 — responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.