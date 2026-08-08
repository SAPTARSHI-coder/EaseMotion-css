# Text Shadow Mixin (SCSS)

A reusable SCSS mixin collection for applying customizable text shadows, designed to complement EaseMotion CSS animations. Ships with sensible defaults and five ready-to-use presets: base, soft, glow, 3D, and outline.

---

## File

_text-shadow.scss

---

## What It Does

Provides five reusable SCSS mixins that generate cross-browser-safe text-shadow declarations. Every mixin accepts arguments and falls back to sensible defaults, letting you write expressive typography styles in a single line.

Perfect for pairing with EaseMotion animations like fade-in, pulse, and slide-in to create rich, layered text effects.

---

## Available Mixins

### 1. ease-text-shadow
The base mixin for a single, customizable text shadow.

| Parameter | Type   | Default              | Description        |
| --------- | ------ | -------------------- | ------------------ |
| $x        | Length | 0px                  | Horizontal offset  |
| $y        | Length | 2px                  | Vertical offset    |
| $blur     | Length | 4px                  | Blur radius        |
| $color    | Color  | rgba(0,0,0,0.35)     | Shadow color       |

### 2. ease-text-shadow-soft
Subtle, elegant shadow — pairs well with fade-in animations.

| Parameter | Type  | Default              | Description  |
| --------- | ----- | -------------------- | ------------ |
| $color    | Color | rgba(0,0,0,0.2)      | Shadow color |

### 3. ease-text-shadow-glow
Neon-style glow effect — pairs perfectly with EaseMotion pulse animations.

| Parameter  | Type   | Default   | Description          |
| ---------- | ------ | --------- | -------------------- |
| $color     | Color  | #00e5ff   | Glow color           |
| $intensity | Length | 8px       | Glow spread radius   |

### 4. ease-text-shadow-3d
Creates a layered 3D depth effect using stacked shadows.

| Parameter | Type   | Default              | Description               |
| --------- | ------ | -------------------- | ------------------------- |
| $color    | Color  | rgba(0,0,0,0.25)     | Base shadow color         |
| $depth    | Number | 5                    | Number of layered shadows |

### 5. ease-text-shadow-outline
Creates a clean, outlined text effect using shadows on all four sides.

| Parameter  | Type   | Default | Description        |
| ---------- | ------ | ------- | ------------------ |
| $color     | Color  | #000    | Outline color      |
| $thickness | Length | 1px     | Outline thickness  |

---

## Usage

Import the partial and use @include to apply any mixin:

    @import "text-shadow";

    // 1. Basic — uses defaults
    .title {
      @include ease-text-shadow;
    }

    // 2. Custom base shadow
    .hero-heading {
      @include ease-text-shadow(1px, 2px, 6px, rgba(0, 0, 0, 0.5));
    }

    // 3. Soft subtle shadow
    .subtitle {
      @include ease-text-shadow-soft;
    }

    // 4. Neon glow effect
    .cta-button-text {
      @include ease-text-shadow-glow(#ff00ff, 10px);
    }

    // 5. 3D depth effect
    .hero-title {
      @include ease-text-shadow-3d(rgba(0, 0, 0, 0.4), 6);
    }

    // 6. Outlined text
    .badge {
      color: #fff;
      @include ease-text-shadow-outline(#000, 2px);
    }

---

## Why It Is Useful

- DRY and Reusable: Replaces repetitive text-shadow declarations with expressive mixins.
- EaseMotion-Native: Uses the ease- naming convention that fits the framework philosophy.
- Customizable: Every mixin exposes parameters with sensible defaults.
- Composable: Pairs seamlessly with EaseMotion animations (fade-in, pulse, slide-in).
- Accessibility-Aware: The outline variant improves contrast for text over busy backgrounds.

---

## Author

soumyasekharshee265-ux
