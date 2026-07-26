# EaseMotion CSS - Customization via CSS Variables

## Overview

EaseMotion CSS is built on top of a central design token system powered by native **CSS Custom Properties (Variables)**. This beginner-friendly documentation showcase demonstrates how to customize the framework's colors, animation speed, spacing scale, border radius, and box shadows **without modifying core framework files**.

By overriding CSS variables in your project's custom stylesheet or within specific CSS selectors, you can rapidly theme, white-label, or tweak component appearances while retaining full framework compatibility.

---

## 1. What does this do?

This example shows how to override default EaseMotion CSS tokens (`--ease-*`) globally via `:root` or locally within component scopes to customize colors, spacing, motion speeds, radii, and shadows.

---

## 2. How is it used?

### Option A: Global Theme Override (`:root`)

To customize default tokens for your entire application, redefine the desired CSS variables inside your global stylesheet after importing `easemotion.css`:

```css
/* custom-theme.css */
:root {
  /* Colors */
  --ease-color-primary: #06b6d4; /* Vibrant Cyan */
  --ease-color-secondary: #ec4899; /* Hot Pink */

  /* Animation Speeds */
  --ease-speed-fast: 100ms; /* Snappier fast transitions */
  --ease-speed-medium: 250ms; /* Faster medium transitions */

  /* Spacing Scale */
  --ease-space-4: 1.25rem; /* Increased base spacing (20px) */
  --ease-space-6: 2rem; /* Increased section spacing (32px) */

  /* Border Radius */
  --ease-radius-md: 1rem; /* Rounder medium corners (16px) */

  /* Shadows */
  --ease-shadow-md: 0 10px 25px -5px rgba(6, 182, 212, 0.25);
}
```

### Option B: Scoped / Component-Level Override

To apply custom variables only to a specific container, card, or widget:

```css
.card-featured {
  --ease-color-primary: #10b981; /* Emerald Accent */
  --ease-radius-md: 20px; /* Custom radius for featured card */
  --ease-shadow-md: 0 12px 30px rgba(16, 185, 129, 0.3);
}
```

### Option C: Theme Switching via Data Attributes

You can also target specific theme modes dynamically:

```css
[data-theme="cyberpunk"] {
  --ease-color-primary: #ff007f;
  --ease-color-bg: #0d0221;
  --ease-color-surface: #190a38;
  --ease-color-text: #00f6ff;
  --ease-radius-md: 4px;
}
```

---

## 3. Why is it useful?

- **Non-Invasive**: Customization happens in your project CSS without altering `easemotion.css` or core files.
- **Zero-Build Overhead**: Uses browser-native CSS custom properties that evaluate instantly at runtime.
- **Maintainable**: Updates to the core EaseMotion CSS framework won't overwrite your custom brand tokens.
- **Consistent Scaling**: Overriding base tokens like `--ease-speed-fast` updates all dependent components automatically.

---

## Key CSS Variables Reference

| Variable Category   | Property Name            | Default Value         | Description                      |
| :------------------ | :----------------------- | :-------------------- | :------------------------------- |
| **Colors**          | `--ease-color-primary`   | `#6c63ff`             | Primary brand/accent color       |
|                     | `--ease-color-secondary` | `#8b5cf6`             | Secondary accent color           |
|                     | `--ease-color-bg`        | `#f8fafc` / `#0b1121` | Page background color            |
|                     | `--ease-color-surface`   | `#ffffff` / `#141e33` | Card & container surface color   |
|                     | `--ease-color-text`      | `#1e293b` / `#e2e8f0` | Body text color                  |
| **Animation Speed** | `--ease-speed-fast`      | `150ms`               | Quick hover & active transitions |
|                     | `--ease-speed-medium`    | `300ms`               | Standard component motion        |
|                     | `--ease-speed-slow`      | `600ms`               | Smooth entrance/exit animations  |
| **Spacing Scale**   | `--ease-space-2`         | `0.5rem` (8px)        | Small padding / gap              |
|                     | `--ease-space-4`         | `1rem` (16px)         | Standard element padding / gap   |
|                     | `--ease-space-6`         | `1.5rem` (24px)       | Card inner padding / grid gap    |
| **Border Radius**   | `--ease-radius-sm`       | `0.25rem` (4px)       | Small pill / button radius       |
|                     | `--ease-radius-md`       | `0.5rem` (8px)        | Standard card & container radius |
|                     | `--ease-radius-lg`       | `1rem` (16px)         | Prominent card radius            |
| **Shadows**         | `--ease-shadow-md`       | `0 4px 6px ...`       | Medium box shadow elevation      |
|                     | `--ease-glow-primary`    | `0 0 16px ...`        | Primary focus/hover glow effect  |

---

## Interactive Demo

Open `demo.html` in your web browser to explore:

1. Side-by-side comparison of **Default Tokens** vs **Customized Overrides**.
2. Live interactive controls to tweak primary color, animation speed, spacing scale, border radius, and shadow live on screen.
3. Sample UI components (Buttons, Cards, Badges, Spacing Blocks) demonstrating CSS variable application.
