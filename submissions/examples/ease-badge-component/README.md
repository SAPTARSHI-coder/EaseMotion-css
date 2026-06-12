# Badge Component – EaseMotion CSS

A premium, modern, and context-aware Badge Component designed to display small labels, counts, notifications, and status markers.

Located in: `submissions/examples/ease-badge-component/`

---

## Overview

The `ease-badge` is designed to perfect the layout and styling of secondary tags, metadata indicators, and alerts. Built entirely with pure CSS design tokens, it offers excellent readability and adaptiveness.

1. **Context-Aware Scaling (`em` Sizing):** By configuring spacing and typography with relative `em` values, the badge scales automatically relative to its parent container (e.g., matching a massive heading or small helper paragraph) without needing manually specified size modifiers.
2. **WCAG Contrast Compliant:** Following accessibility best practices, colors are paired mathematically to ensure WCAG 4.5:1 (AA) color contrast conformance.
3. **Motion-Enabled:** Embedded transitions and interactive classes enable fluid translation, scaling, and color fades aligned with the EaseMotion motion system.

---

## Features

- **Colors & Combinations:** Offers **Solid**, **Subtle/Soft** background tints, and **Outline** variants.
- **Color Scales:** Includes `Primary`, `Secondary`, `Success`, `Warning`, `Danger`, and `Info` configurations.
- **Flexible Shapes:** Offers standard rounded-corner blocks and fully rounded `Pill` shapes.
- **Notification dots:**
  - Standalone indicator dots (`.ease-badge-dot`).
  - Absolute corner overlays (`.ease-badge-corner`) for avatars or icon layouts.
  - Text badges with status dots inside (`.ease-badge-has-dot`).
- **Icon Support:** Formatted to align with inline SVG or icon fonts with balanced left/right margins and dedicated square or circular icon-only buttons (`.ease-badge-icon-only`).
- **Premium Gradients:** Multi-tone gradient backgrounds (`Sunset`, `Ocean`, `Forest`) with responsive coordinate hover effects.
- **Adaptive Pulse Animation:** Custom keyframes offering a clean radial color ripple matching the specific badge context.

---

## Usage Examples

### 1. Standard Color Badges (Solid, Soft, Outline)

```html
<!-- Solid Badge -->
<span class="ease-badge ease-badge-primary">New Feature</span>

<!-- Soft/Subtle Badge -->
<span class="ease-badge ease-badge-soft ease-badge-success">Stable</span>

<!-- Outline Badge -->
<span class="ease-badge ease-badge-outline ease-badge-danger">Error</span>
```

### 2. Pill Shape

```html
<span class="ease-badge ease-badge-primary ease-badge-pill">99+</span>
```

### 3. Dot & Status Markers

```html
<!-- Inline Status Dot -->
<span class="ease-badge ease-badge-has-dot">Active</span>

<!-- Corner Positioned Dot (inside relative wrapper) -->
<div class="avatar-wrapper" style="position: relative; display: inline-block;">
  <img src="avatar.jpg" alt="User Avatar" style="border-radius: 50%;" />
  <span class="ease-badge-dot ease-badge-success ease-badge-corner"></span>
</div>
```

### 4. Gradient Backgrounds

```html
<span class="ease-badge ease-badge-gradient ease-badge-gradient-sunset"
  >Trending</span
>
```

### 5. Motion & Pulse Animations

```html
<!-- Interactive Link Badge (Lifts on hover) -->
<a href="#" class="ease-badge ease-badge-primary">Learn More</a>

<!-- Pulsing Glow Badge -->
<span class="ease-badge ease-badge-danger ease-badge-pulse">Live</span>
```

---

## Customization

You can customize the badge parameters locally or globally using CSS custom variables:

### Layout Variables

| CSS Custom Variable   | Purpose                            | Default Reference                               |
| :-------------------- | :--------------------------------- | :---------------------------------------------- |
| `font-size`           | Sizing reference for `em` scaling  | Inherits from parent (`0.75em` base multiplier) |
| `border-radius`       | Controls shape geometry corners    | `var(--ease-radius-sm)` (0.25rem)               |
| `transition-duration` | Speeds up or slows down animations | `var(--ease-speed-fast)` (150ms)                |

### Overriding Badge Colors

To customize a badge color theme locally, override the custom colors in your own CSS:

```css
.my-custom-badge {
  /* Override color tokens */
  --ease-color-primary: #10b981;
  --ease-badge-primary-soft-text: #047857;
}
```
