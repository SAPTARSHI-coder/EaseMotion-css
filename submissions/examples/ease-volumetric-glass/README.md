# Volumetric Glass Sidebar (macOS Style)

A premium, translucent sidebar with real volumetric depth and edge-lighting
— not just a flat `blur()` tint. Built to mimic thick acrylic glass like
macOS Big Sur+ sidebars, purely in CSS.

## How it works

Depth comes from **layering four separate techniques**, not one blur:

1. **Core glass** — `backdrop-filter: blur(40px) saturate(150%)` on a
   low-opacity white background. The saturation boost is what keeps
   colors behind the glass vivid instead of muddy grey.
2. **Refracted border** — a `border-image` linear-gradient that's bright
   on the top-left and fades elsewhere, simulating light bending through
   an acrylic edge rather than a uniform stroke.
3. **Embedded noise grain** — an inline SVG `feTurbulence` filter applied
   via `::before` at very low opacity with `mix-blend-mode: overlay`,
   which breaks up the "flat frosted rectangle" look real blur alone
   produces.
4. **Glowing top edge + inner light bloom** — `box-shadow: inset 0 1px 0
   rgba(255,255,255,.5)` for the crisp top highlight, plus a soft
   `::after` gradient bloom near the top and an outer cast shadow for
   volume against the page.

```css
.glass-sidebar {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(40px) saturate(150%);
  border-image: linear-gradient(160deg, rgba(255,255,255,.65), rgba(255,255,255,.04)) 1;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.5), 8px 0 40px rgba(0,0,0,.35);
}
```

## Customizing

- **Blur strength:** adjust `blur(40px)` — lower = sharper background,
  higher = more frosted.
- **Tint color:** change the `rgba(255,255,255,...)` background to any
  hue for a colored glass effect.
- **Edge glow angle:** rotate the `border-image` gradient's `160deg` to
  reposition where the "light source" appears to hit the glass.
- **Grain intensity:** tweak the `opacity` on `.glass-sidebar::before`.

## Why it fits EaseMotion CSS

No images, no JS, no canvas — every part of the depth illusion (blur,
noise, light bloom, refracted border) is achieved with layered native CSS
properties. Class names describe intent (`glass-sidebar`, `nav-item`,
`sidebar-footer`) and the whole effect is copy-paste portable into any
layout.

## Accessibility

- Text contrast is kept above the glass with solid white/near-white type
  rather than relying on the backdrop for readability.
- Interactive nav items get a visible `:hover`/`.active` state independent
  of the glass effect (background + inset highlight), so functionality
  doesn't depend on perceiving translucency.

## Browser support

`backdrop-filter` is supported in all modern evergreen browsers (Safari
needs no prefix as of 9+, but `-webkit-backdrop-filter` is included for
broader Safari coverage). A `@supports not (backdrop-filter: blur(1px))`
fallback swaps in a solid dark background so the sidebar stays fully
legible on unsupported browsers.