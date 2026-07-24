# Rotate-Click Tabs — Cyberpunk Neon

A pure CSS tabs component with a rotate-click interaction, styled as a cyberpunk "access node" switcher (Access / Uplink / Defense). Each tab is a small hexagonal node that rotates into a "locked" angle and lights up neon green when selected. No JavaScript required.

## What it does

- Each tab has a hexagon (a rotated, clipped square) that sits dim and unrotated at rest. Selecting the tab spins it to a locked angle while it lights up with a neon glow, like a terminal access node engaging.
- The panel content rotates in from a slight tilt and settles flat, echoing the same click motion as the node.
- A secondary magenta accent is used only for tags/borders, keeping the primary neon green reserved for the "active/locked" state so the two colors carry distinct meaning rather than being interchangeable decoration.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>` containing a hex node (`.tabs-node__hex`, a `clip-path` hexagon) and a text label. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-node:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the click keyframe.
- The hex's rotation on activation is a plain `transform: rotate()` transition, not a keyframe animation — so it can be freely combined with the panel's separate entrance animation without timing conflicts.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-node` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `380ms` | Transition/animation length |
| `--tabs-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing curve |
| `--tabs-node-angle` | `45deg` | Angle the hex rotates to when "locked" |
| `--tabs-panel-angle` | `8deg` | Panel's starting rotation before it settles flat |
| `--tabs-radius` | `4px` | Corner radius (kept small/angular for the HUD look) |
| `--tabs-accent` / `--tabs-accent-2` | `#39ff14` / `#ff2bd6` | Primary (active/lock) and secondary (tags/borders) neon colors |
| `--tabs-bg` / `--tabs-panel-bg` | `#050806` / `#0c130e` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | light / muted green-gray | Text colors |

Example override:

```html
<div class="tabs-node" style="--tabs-accent: #00f0ff; --tabs-node-angle: 90deg;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the hex rotation, label color transition, and the panel click animation.
- Hex node graphics are `aria-hidden`; the text label carries the meaning for screen readers.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven rotate-click pattern in the cyberpunk neon aesthetic requested in issue #50075 — using a distinct hex-node lock mechanic (rather than a dial or gauge needle), responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.