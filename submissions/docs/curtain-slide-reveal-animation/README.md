# Documentation: Curtain Slide Reveal SCSS Animation Mixin (#81673)

Comprehensive documentation guide, copy-paste HTML markup examples, custom CSS timing variable overrides, and accessibility notes for the EaseMotion **Curtain Slide Reveal** animation (`#81673`).

## 🚀 Overview & Features

- **Hardware Accelerated:** Uses `transform` and `opacity` exclusively to maintain buttery-smooth 60 FPS performance.
- **Configurable Timing Variables:** Easily customizable via `--ease-duration` and `--ease-timing` CSS custom properties.
- **Reduced Motion Support:** Fully honors user accessibility settings by disabling animations when `@media (prefers-reduced-motion: reduce)` is active.

## 🛠️ Copy-Paste HTML Markup Example

```html
<div class="ease-anim-curtain-slide-reveal" role="region" aria-label="Curtain Slide Reveal Element" tabindex="0">
    <h2>Curtain Slide Reveal Content</h2>
    <p>Smooth vertical entrance animation.</p>
</div>
