# Cyberpunk Neon Tilt Hover Button

## Overview

A pure CSS 3D perspective hover animation button featuring cyberpunk neon aesthetics. This example demonstrates smooth, GPU-accelerated tilt transforms on hover with no JavaScript required. Fully responsive, keyboard accessible, and customizable via CSS custom properties.

## 📁 Files

* `demo.html` — Interactive showcase with multiple button variants, colors, and sizes
* `style.css` — Scoped pure CSS with 3D perspective transforms and neon glow effects
* `README.md` — This documentation

## ✨ Features

- **Pure CSS 3D Animation:** Smooth perspective-based tilt rotation on hover using `rotateX()` and `rotateY()`
- **No JavaScript:** Entirely CSS-driven; HTML + CSS only
- **Neon Aesthetic:** Four vibrant color variants (Cyan, Magenta, Purple, Lime)
- **Responsive Design:** Adapts to mobile, tablet, and desktop with scaled tilt intensity
- **Keyboard Accessible:** Full `:focus-visible` support with outline styling
- **Customizable:** CSS custom properties for animation duration, easing, rotation angles, and scale
- **GPU Accelerated:** `will-change` and `transform-style: preserve-3d` for smooth 60fps animations
- **Reduced Motion Support:** Respects `prefers-reduced-motion` media query
- **Glow Effects:** Simulated neon glow using box-shadow and gradient overlays

## 🎨 Color Variants

### `.neon-cyan`
Primary cyan neon color (#00ffff) with corresponding glow shadows.

### `.neon-magenta`
Secondary magenta color (#ff00ff) for contrast and variety.

### `.neon-purple`
Tertiary purple variant (#b026ff) for darker cyberpunk aesthetics.

### `.neon-lime`
Accent lime green (#00ff00) for status/success states.

## ⚙️ CSS Custom Properties (Customization)

All animations are driven by CSS variables that can be overridden:

```css
:root {
  --neon-tilt-duration: 0.3s;           /* Tilt animation speed */
  --neon-tilt-easing: cubic-bezier(...); /* Easing function */
  --neon-glow-duration: 0.4s;            /* Glow fade-in speed */
  --neon-glow-easing: ease-in-out;       /* Glow easing */
  --neon-tilt-rotate-x: 15deg;           /* X-axis rotation angle */
  --neon-tilt-rotate-y: 15deg;           /* Y-axis rotation angle */
  --neon-tilt-scale: 1.02;               /* Scale on hover */
  --btn-size: 1;                         /* Button size multiplier */
}
```

### Customization Examples

**Slower Animation:**
```css
:root {
  --neon-tilt-duration: 0.5s;
}
```

**More Aggressive Tilt:**
```css
:root {
  --neon-tilt-rotate-x: 25deg;
  --neon-tilt-rotate-y: 25deg;
}
```

**Different Button Size:**
```html
<button class="neon-tilt-btn neon-cyan" style="--btn-size: 1.5;">BIG BUTTON</button>
```

## 🔧 Button States

### Default State
- Transparent background with neon border
- Text color matches border color
- No tilt, no glow

### Hover State
- 3D perspective tilt based on `--neon-tilt-rotate-x/y`
- Scale up by `--neon-tilt-scale`
- Intense neon glow (box-shadow)
- Text shadow for text-based glow
- Shimmer effect on background

### Focus Visible (Keyboard)
- Dashed outline around button
- Subtle 3D tilt (60% of hover intensity)
- Moderate glow
- Full keyboard accessibility

### Active/Press State
- Reduced tilt (50% of hover intensity)
- Reduced scale (0.98 instead of 1.02)
- Maintains glow for visual feedback

### Disabled State
- Reduced opacity (0.4)
- Cursor changes to `not-allowed`
- No animations or glows
- No hover effects

## 📱 Responsive Behavior

The button automatically scales tilt intensity on smaller screens:

| Breakpoint | Tilt Angle | Scale | Description |
|-----------|-----------|-------|-------------|
| Desktop (>768px) | 15deg | 1.02 | Full intensity |
| Tablet (≤768px) | 10deg | 1.01 | Reduced tilt |
| Mobile (≤480px) | 8deg | 1.005 | Minimal tilt |

Button padding and font size also scale proportionally.

## ♿ Accessibility Features

1. **Keyboard Navigation:** Full support for Tab and Enter/Space activation
2. **Focus Visible:** Clear `:focus-visible` outline styling
3. **Disabled State:** Proper visual indication and cursor feedback
4. **Color Contrast:** High contrast neon colors meet WCAG AA standards
5. **Reduced Motion:** Respects `prefers-reduced-motion: reduce` preference
6. **Semantic HTML:** Proper `<button>` elements with no aria-* hacks

## 🎯 HTML Usage

### Basic Button
```html
<button class="neon-tilt-btn neon-cyan">ACTIVATE</button>
```

### Different Colors
```html
<button class="neon-tilt-btn neon-magenta">INFILTRATE</button>
<button class="neon-tilt-btn neon-purple">SYNC</button>
<button class="neon-tilt-btn neon-lime">CONFIRM</button>
```

### Custom Size
```html
<button class="neon-tilt-btn neon-cyan" style="--btn-size: 1.5;">LARGE</button>
<button class="neon-tilt-btn neon-cyan" style="--btn-size: 0.75;">SMALL</button>
```

### Disabled Button
```html
<button class="neon-tilt-btn neon-cyan" disabled>LOCKED</button>
```

## 🎬 Animation Details

### The Tilt Effect
When you hover over the button, CSS 3D transforms rotate it along both X and Y axes:
```css
transform: rotateX(15deg) rotateY(15deg) scale(1.02);
```

This creates a "leaning forward" perspective effect without any JavaScript mouse tracking.

### The Glow Effect
Uses multiple box-shadow layers:
1. **Outer glow:** `box-shadow: 0 0 50px rgba(0, 255, 255, 0.6)` (intense outer glow)
2. **Inset glow:** `inset 0 0 20px var(--neon-glow)` (inner edge highlight)
3. **Text shadow:** `text-shadow: 0 0 10px var(--neon-glow)` (text glow)

### The Shimmer
A gradient overlay (`::before` pseudo-element) animates across the button surface during hover.

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

Requires support for:
- CSS 3D Transforms (`transform: rotateX/Y`)
- CSS Perspective
- CSS `will-change`
- CSS Custom Properties

## ⚡ Performance Notes

- GPU acceleration via `transform-style: preserve-3d` and `will-change`
- No layout recalculations (animations use `transform` only)
- `backface-visibility: hidden` prevents flickering
- Smooth 60fps animations on modern devices
- Minimal paint operations

## 🎨 Design Philosophy

This button embodies the **EaseMotion CSS** philosophy:
- **Lightweight:** Single CSS file, no dependencies
- **Customizable:** CSS variables for easy theming
- **Performant:** GPU-accelerated transforms
- **Accessible:** Full keyboard support and semantic HTML
- **Responsive:** Adapts gracefully to all screen sizes
- **No Framework Required:** Pure CSS, zero JavaScript

## 📝 License

Created as a CSS example submission for the EaseMotion CSS repository.

---

**Pro Tips:**
- Combine multiple button variants in your interface for visual hierarchy
- Customize `--neon-tilt-duration` and `--neon-tilt-easing` for different interaction feels
- Use with dark backgrounds for maximum neon impact
- Test on touch devices (hover effects disabled for better UX)
