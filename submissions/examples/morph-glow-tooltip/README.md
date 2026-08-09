# Morph-Glow Tooltip

A minimalist, high-tech tooltip for modern interfaces. Built entirely with pure HTML/CSS, it features a cubic-bezier scaling "morph" effect combined with a keyframed neon box-shadow pulse.

## 🎯 Features
- **Pure CSS/HTML:** No JavaScript required.
- **Morphing Animation:** Smoothly scales, translates, and alters border-radius on hover.
- **Neon Glow:** Uses an alternate-reverse keyframe animation to pulse an inset/outset box shadow.
- **Accessible:** Fully supports `@media (prefers-reduced-motion: reduce)` by disabling the morph scale and keyframe pulse, falling back to a clean opacity fade.
- **Responsive:** Adapts cleanly to mobile and desktop viewports.

## 🛠️ Usage

Wrap your trigger element and the tooltip text inside a `.morph-tooltip-wrapper` container.

```html
<div class="morph-tooltip-wrapper" tabindex="0">
  <button class="tech-trigger">Hover Me</button>
  <div class="morph-tooltip">System resources optimal.</div>
</div>