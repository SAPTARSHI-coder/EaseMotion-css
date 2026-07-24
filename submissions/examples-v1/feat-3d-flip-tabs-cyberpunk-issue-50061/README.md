# 3D Flip Tabs — Cyberpunk Neon

A pure CSS tabs component with a 3D flip transition, styled as a cyberpunk HUD/terminal panel switcher (System / Network / Security). No JavaScript required.

## What it does

- Switching panels flips the content in on its Y axis while a brief `hue-rotate` sweep passes over it mid-flip, reading as a signal glitch rather than a clean, mechanical rotation.
- The active tab's label gets a layered neon text-shadow glow instead of a filled background, keeping the dark HUD aesthetic instead of looking like a conventional button state.
- A faint repeating-gradient scanline texture sits over every panel for a CRT/terminal feel, done in pure CSS with no image assets.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>`. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-cyber:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel and triggers the flip keyframe.
- `perspective` on `.tabs-cyber__stage` gives the `rotateY()` real 3D depth; `backface-visibility: hidden` avoids a mirrored flash mid-flip.
- The glitch effect is a three-step keyframe: start rotated and hue-shifted, pass through a stronger hue-rotate at 40%, then settle flat and color-true by 100% — a small departure from a simple two-keyframe flip that gives it a "signal locking in" feel.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-cyber` wrapper:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `420ms` | Flip animation length |
| `--tabs-easing` | `cubic-bezier(0.5, 0, 0.2, 1)` | Easing curve |
| `--tabs-flip-angle` | `100deg` | Starting Y-axis rotation before the panel settles flat |
| `--tabs-perspective` | `1000px` | 3D perspective depth |
| `--tabs-radius` | `4px` | Corner radius (kept small/angular for the HUD look) |
| `--tabs-cyan` / `--tabs-magenta` | `#00f0ff` / `#ff2bd6` | The two neon accents (active tab glow / tag border) |
| `--tabs-bg` / `--tabs-panel-bg` | `#0a0018` / `#120026` | Background surfaces |
| `--tabs-text` / `--tabs-text-dim` | light / muted violet-gray | Text colors |

Example override:

```html
<div class="tabs-cyber" style="--tabs-cyan: #39ff14; --tabs-magenta: #ff073a;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input.
- Respects `prefers-reduced-motion` by disabling the flip/glitch animation entirely — the panel still switches, just without the rotation or hue sweep.
- The cyan-on-dark-violet text combination was chosen to stay legible despite the neon aesthetic; body copy uses the dimmer muted tone rather than full-saturation neon to avoid eye strain over longer reads.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven 3D flip pattern in the cyberpunk neon aesthetic requested in issue #50061 — responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.