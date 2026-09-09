# EaseMotion Glowing Badge

## Overview
The **EaseMotion Glowing Badge** is a lightweight, responsive, and highly customizable UI component designed to highlight status indicators, counts, and tags with a smooth glowing animation. Built with performance and accessibility in mind, it uses single RGB CSS Custom Properties (`--ease-badge-color`) to drive background tinting, border highlights, and hardware-accelerated `box-shadow` glowing effects.

---

## Base Usage
To create a basic badge, add the `.ease-badge` base class along with your preferred text content. To activate the pulsing glow effect, append the `.ease-badge--glow` modifier class.

```html
<!-- Default Badge -->
<span class="ease-badge">Default</span>

<!-- Default Badge with Glow -->
<span class="ease-badge ease-badge--glow">Glowing Default</span>
```

---

## Semantic Color Variants
EaseMotion Glowing Badge supports five semantic color variations out of the box. Simply attach the semantic modifier class alongside `.ease-badge`:

- **Default (Sky Blue)**: `.ease-badge`
- **Success (Emerald)**: `.ease-badge--success`
- **Warning (Amber)**: `.ease-badge--warning`
- **Danger (Rose)**: `.ease-badge--danger`
- **Info (Indigo)**: `.ease-badge--info`

### Code Examples

```html
<!-- Static Badges -->
<span class="ease-badge">Default</span>
<span class="ease-badge ease-badge--success">Success</span>
<span class="ease-badge ease-badge--warning">Warning</span>
<span class="ease-badge ease-badge--danger">Danger</span>
<span class="ease-badge ease-badge--info">Info</span>

<!-- Glowing Badges -->
<span class="ease-badge ease-badge--glow">Default</span>
<span class="ease-badge ease-badge--success ease-badge--glow">Success</span>
<span class="ease-badge ease-badge--warning ease-badge--glow">Warning</span>
<span class="ease-badge ease-badge--danger ease-badge--glow">Danger</span>
<span class="ease-badge ease-badge--info ease-badge--glow">Info</span>
```

---

## The Animation Engine
The component utilizes CSS Custom Properties (`--ease-badge-color`) containing raw RGB values (e.g., `56, 189, 248`). This dynamic architecture allows the component to compute dynamic alpha channels (`rgba(var(--ease-badge-color), alpha)`) for:
- Background tinting (10% opacity)
- Border stroke (30% opacity)
- Hardware-accelerated dynamic `box-shadow` pulsing (0% to 50% opacity)

### Dynamic Custom Color Overrides
You can easily override the badge color dynamically in inline styles or custom CSS rules without writing additional keyframe animations:

```html
<span class="ease-badge ease-badge--glow" style="--ease-badge-color: 168, 85, 247;">
  Custom Purple Glow
</span>
```

---

## Accessibility (a11y)
Animations can cause discomfort or nausea for users with vestibular spectrum disorders. EaseMotion Glowing Badge includes a built-in `@media (prefers-reduced-motion: reduce)` media query fallback.

When a user enables "Reduce Motion" in their operating system settings:
1. Infinite pulse animations (`@keyframes ease-pulse-glow`) are cleanly disabled (`animation: none`).
2. The badge transitions to a static ambient glow (`box-shadow: 0 0 10px 0 rgba(var(--ease-badge-color), 0.3)`) to maintain visual distinction without motion triggers.
3. High contrast text colors (`color: rgb(...)`) and borders ensure compliant readability across dark and light surfaces.
