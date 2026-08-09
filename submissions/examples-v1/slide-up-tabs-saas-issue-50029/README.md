# Slide-Up Tabs — SaaS Showcase

A pure CSS tabs component with a smooth slide-up reveal, styled for SaaS product showcase layouts. No JavaScript required.

## What it does

- Clicking (or keyboard-selecting) a tab reveals its panel with a slide-up + fade transition.
- The active tab visually lifts, like a key rising, with a soft accent glow underneath.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios in the same `name` group give native keyboard support for free: `Tab` focuses the group, arrow keys move between tabs, and the group always has exactly one selection.
- `.tabs-saas:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the slide-up keyframe only when its tab is active.
- The active tab's lift/glow state is driven by an adjacent-sibling selector: `.tabs-saas__input:checked + .tabs-saas__tab`.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-saas` wrapper, so consumers can retheme or retime the component without touching the CSS file:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `420ms` | Transition/animation length |
| `--tabs-easing` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve for lift + slide-up |
| `--tabs-lift` | `6px` | How far the active tab rises |
| `--tabs-slide-distance` | `18px` | How far the panel travels on reveal |
| `--tabs-radius` | `12px` | Corner radius |
| `--tabs-accent` | `#7c5cfc` | Accent color (active tab glow, tag, index number) |
| `--tabs-bg` / `--tabs-panel-bg` | `#12141c` / `#171a23` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | `#e8e9f0` / `#8b8fa3` | Text colors |

Example override:

```html
<div class="tabs-saas" style="--tabs-duration: 250ms; --tabs-accent: #22c55e;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup for screen reader clarity.
- A visible focus ring is applied to the active tab's label via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the lift transition and slide-up animation.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven animation pattern in the SaaS aesthetic requested in issue #50029 — responsive down to mobile, keyboard accessible out of the box via native radio grouping, and fully retheme-able through custom properties.