# Rotate-Click Tabs — Neumorphic Soft

A pure CSS tabs component with a rotate-click interaction, styled in the neumorphic "soft UI" aesthetic (monochrome surfaces, dual light/dark shadows, no borders). Each tab presses inward like a physical button and its dial indicator rotates upright on selection. No JavaScript required.

## What it does

- Every tab has a soft embossed dial with a small dot at rest, tilted off-angle. Selecting the tab rotates the dot upright while the whole tab's shadow flips from raised (convex) to pressed (concave) — mimicking a soft physical button being pushed in and a dial catching.
- All depth comes from dual box-shadows (a light shadow and a dark shadow on opposite corners) against a single flat background color — the defining neumorphic technique, with no borders or gradients used for depth.
- Panel switching and animation are handled entirely with the `:has()` CSS selector reacting to native radio input state — zero JS.

## How it works

- Each tab is a hidden `<input type="radio">` paired with a `<label>` containing a dial (`.tabs-soft__dial` + `.tabs-soft__dot`) and a text label. Radios sharing a `name` give native keyboard support for free (`Tab` focuses the group, arrow keys move between tabs).
- `.tabs-soft:has(#tab-x:checked) #panel-x { display: block; animation: ...; }` shows the matching panel.
- The "pressed" look on the active tab comes from swapping the outer shadow direction to `inset` — same two colors, opposite placement, so the surface itself never needs a background or border change to read as pushed in.
- The dot's rotation (`--tabs-dial-angle` to `0deg`) is a plain CSS transition, layered independently of the panel's own settle animation.

## Customization

All animation and color values are exposed as CSS custom properties on the `.tabs-soft` wrapper. Because neumorphism depends on the shadow colors being derived from the base background, retheming the base color usually means adjusting the shadow colors to match — see the note below the table:

| Property | Default | Controls |
|---|---|---|
| `--tabs-duration` | `340ms` | Transition/animation length |
| `--tabs-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing curve |
| `--tabs-dial-angle` | `-40deg` | Dot's rest angle before it rotates upright |
| `--tabs-radius` | `18px` | Corner radius (kept generous for the soft look) |
| `--tabs-accent` | `#6c7ae0` | Accent color (active dot, active label) |
| `--tabs-base` | `#e6e9f0` | The single background color everything sits on |
| `--tabs-shadow-light` / `--tabs-shadow-dark` | `#ffffff` / `#b9c0d4` | The two shadow colors that create the embossed/pressed depth — should stay a lighter and darker tint of `--tabs-base` |
| `--tabs-text` / `--tabs-text-dim` | dark / muted slate | Text colors |

Example override (a warmer neumorphic palette):

```html
<div class="tabs-soft" style="--tabs-base: #f0e9e0; --tabs-shadow-light: #ffffff; --tabs-shadow-dark: #c9beae; --tabs-accent: #d97757;">
  ...
</div>
```

## Accessibility

- Built on native radio inputs, so keyboard navigation (Tab in, arrow keys between tabs) works without any custom JS.
- `role="tablist"` / `role="tab"` and `aria-selected` are set on the markup.
- A visible focus ring is applied to the active tab via `:focus-visible` on the (visually hidden) input — necessary since neumorphic UIs often have low inherent contrast and can't rely on shadow alone to signal keyboard focus.
- Respects `prefers-reduced-motion` by disabling the dot rotation, shadow transition, and panel settle animation.
- Dial/dot graphics are `aria-hidden`; the text label carries the meaning for screen readers.

## Why it fits EaseMotion

Adds a zero-JS, CSS-custom-property-driven rotate-click pattern in the neumorphic soft aesthetic requested in issue #50076 — using the raised/pressed shadow swap as the core "click" feedback (distinct from the dial-knob and gauge-needle mechanics used elsewhere), responsive down to mobile, keyboard accessible via native radio grouping, and fully retheme-able through custom properties.