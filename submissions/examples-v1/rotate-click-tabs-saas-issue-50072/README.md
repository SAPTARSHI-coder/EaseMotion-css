# Rotate-Click Tabs — SaaS Showcase

A pure CSS tabs component with a rotate-click interaction, styled for SaaS product/account settings layouts. No JavaScript required.

## What it does

- Each tab has a small dial indicator that sits rotated off-axis at rest and **clicks into its upright position** when selected, like a physical knob settling into place — the easing includes a slight overshoot for that tactile "click" feel.
- The panel content reveals with a matching rotate: it flips in from a tilted 3D angle (`rotateX`) to flat, as if the whole panel clicked into position along with the dial.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-rotate:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the rotate-click keyframe.
- The dial's rest/active rotation is controlled by `--tabs-dial-angle`, transitioning via `.tabs-rotate__input:checked + .tabs-rotate__tab .tabs-rotate__dial { transform: rotate(0deg); }`.
- The panel's 3D flip uses `perspective` on `.tabs-rotate__panels` and a `rotateX()` keyframe on the panel itself, controlled by `--tabs-flip-angle`.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-rotate` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `380ms` | Transition/animation length |
| `--tabs-easing` | `cubic-bezier(0.34, 1.35, 0.64, 1)` | Easing curve (includes overshoot for the "click" feel) |
| `--tabs-dial-angle` | `35deg` | Dial's rest rotation before it clicks upright |
| `--tabs-flip-angle` | `70deg` | Panel's starting rotateX angle on reveal |
| `--tabs-radius` | `12px` | Corner radius |
| `--tabs-accent` | `#4f46e5` | Accent color (active tab, dial, tag) |
| `--tabs-bg` / `--tabs-surface` | `#ffffff` / `#f6f7fb` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | dark / muted | Text colors |

Example override:

```html
<div class="tabs-rotate" style="--tabs-dial-angle: 50deg; --tabs-accent: #0ea5e9;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the dial rotation transition and the panel flip animation.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven rotate-click pattern in the SaaS aesthetic requested in issue #50072 — responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.