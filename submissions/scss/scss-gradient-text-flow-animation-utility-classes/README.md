# Gradient Text Flow & Animation Utility Classes

**EaseMotion CSS SCSS Utility** · `submissions/scss/scss-gradient-text-flow-animation-utility-classes/`

A comprehensive SCSS partial providing mixins, functions, and pre-built utility classes for creating smooth, animated gradient text effects. Supports linear flow, diagonal sweep, pulse, hue-spin, and shimmer effects across 10 curated preset palettes.

---

## File Structure

```
scss-gradient-text-flow-animation-utility-classes/
├── _gradient-text-flow-animation-utility-classes.scss   ← SCSS partial (import this)
└── README.md                                            ← This documentation
```

---

## Installation / Import

In your project's main SCSS entry point:

```scss
@use 'path/to/_gradient-text-flow-animation-utility-classes' as ease-grad;
```

Or as a partial `@forward` in a manifest:

```scss
@forward 'path/to/_gradient-text-flow-animation-utility-classes';
```

---

## Configuration Variables

Override these `!default` variables before importing to customize global defaults:

| Variable | Default | Description |
|---|---|---|
| `$ease-gradient-duration-fast` | `2s` | Duration for `-flow-fast` classes |
| `$ease-gradient-duration-medium` | `4s` | Duration for `-flow-medium` classes |
| `$ease-gradient-duration-slow` | `8s` | Duration for `-flow-slow` classes |
| `$ease-gradient-bg-size` | `200% auto` | Default background-size for the pan effect |
| `$ease-gradient-easing` | `linear` | Timing function for all flow animations |
| `$ease-gradient-presets` | Map of 10 presets | Preset palette map (extend or override) |

---

## Mixins

### `gradient-text-flow()` — Main Mixin

Applies an animated left-to-right flowing gradient to text.

```scss
@mixin gradient-text-flow(
  $from:      #6366f1,   // Gradient start color
  $to:        #ec4899,   // Gradient end color
  $via:       null,      // Optional mid-stop color (3-stop gradient)
  $direction: to right,  // Gradient direction or angle
  $duration:  4s,        // Animation duration
  $easing:    linear,    // CSS timing function
  $keyframe:  ease-gradient-flow-lr  // @keyframes name to use
)
```

**Example:**

```scss
.hero-title {
  @include ease-grad.gradient-text-flow(#06b6d4, #6366f1, $via: #a78bfa, $duration: 3s);
}
```

**Compiled CSS output (abbreviated):**

```css
.hero-title {
  background-image: linear-gradient(to right, #06b6d4, #a78bfa, #6366f1);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: ease-gradient-flow-lr 3s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .hero-title { animation: none; background-size: 100% auto; }
}
```

---

### `gradient-text-diagonal()` — Diagonal Sweep

Flows the gradient diagonally (top-left → bottom-right) for a more dynamic effect.

```scss
@mixin gradient-text-diagonal($from, $to, $via: null, $duration: 4s)
```

```scss
.section-heading {
  @include ease-grad.gradient-text-diagonal(#f97316, #9333ea, $via: #ec4899);
}
```

---

### `gradient-text-pulse()` — Breathing Pulse

The gradient scale and opacity breathe in and out, creating a glowing live-data feel.

```scss
@mixin gradient-text-pulse($from, $to, $via: null, $duration: 4s)
```

```scss
.live-badge {
  @include ease-grad.gradient-text-pulse(#4facfe, #f472b6);
}
```

---

### `gradient-text-hue-spin()` — Hue Wheel

Uses `filter: hue-rotate()` to cycle through all hues over the gradient base. GPU-composited — extremely smooth at 60fps.

```scss
@mixin gradient-text-hue-spin($from, $to, $duration: 8s)
```

```scss
.rainbow-heading {
  @include ease-grad.gradient-text-hue-spin(#ec4899, #6366f1, $duration: 6s);
}
```

---

### `gradient-text-shimmer()` — Light Sweep Shimmer

A bright white highlight sweeps across the gradient text from left to right on a loop.

```scss
@mixin gradient-text-shimmer($from, $to, $duration: 2.5s)
```

```scss
.premium-label {
  @include ease-grad.gradient-text-shimmer(#fbbf24, #f97316);
}
```

---

## Keyframes Reference

| Keyframe | Effect |
|---|---|
| `ease-gradient-flow-lr` | Pans background-position left → right → left |
| `ease-gradient-flow-diagonal` | Pans background-position 0%/0% → 100%/100% |
| `ease-gradient-pulse` | Scales background-size 200% ↔ 250%, fades opacity |
| `ease-gradient-spin` | Rotates hue via `filter: hue-rotate(0 → 360deg)` |
| `ease-gradient-shimmer` | Sweeps background-position from −200% → +200% |

---

## Pre-built Utility Classes (HTML Usage)

For zero-SCSS environments, compose classes directly in HTML. Requires `ease-gradient-text` as a base class, then a preset color class, then an animation modifier.

### Syntax

```html
<element class="ease-gradient-text [preset] [animation]">...</element>
```

### Color Preset Classes

| Class | Stops (From → Via → To) |
|---|---|
| `.ease-gradient-aurora` | `#4facfe` → `#a78bfa` → `#f472b6` |
| `.ease-gradient-sunset` | `#f97316` → `#ec4899` → `#9333ea` |
| `.ease-gradient-ocean` | `#06b6d4` → `#3b82f6` → `#6366f1` |
| `.ease-gradient-forest` | `#6ee7b7` → `#34d399` → `#059669` |
| `.ease-gradient-fire` | `#fde68a` → `#f97316` → `#dc2626` |
| `.ease-gradient-candy` | `#f9a8d4` → `#c084fc` → `#818cf8` |
| `.ease-gradient-neon` | `#00fff0` → `#a855f7` → `#ec4899` |
| `.ease-gradient-gold` | `#fbbf24` → `#f59e0b` → `#d97706` |
| `.ease-gradient-plasma` | `#e879f9` → `#818cf8` → `#22d3ee` |
| `.ease-gradient-cosmic` | `#1d4ed8` → `#7c3aed` → `#db2777` |

### Animation Modifier Classes

| Class | Effect | Duration |
|---|---|---|
| `.ease-gradient-flow-fast` | Left-right pan | 2s |
| `.ease-gradient-flow-medium` | Left-right pan | 4s |
| `.ease-gradient-flow-slow` | Left-right pan | 8s |
| `.ease-gradient-flow-diagonal` | Diagonal pan | 4s |
| `.ease-gradient-pulse` | Size + opacity breathe | 4s |
| `.ease-gradient-hue-spin` | Full hue wheel rotation | 8s |
| `.ease-gradient-shimmer` | White light sweep | 2.5s |

### HTML Examples

```html
<!-- Aurora gradient flowing left-to-right (medium speed) -->
<h1 class="ease-gradient-text ease-gradient-aurora ease-gradient-flow-medium">
  Deep Space Telemetry
</h1>

<!-- Gold shimmer effect for a premium badge -->
<span class="ease-gradient-text ease-gradient-gold ease-gradient-shimmer">
  PRO
</span>

<!-- Neon hue-spin on a hero heading -->
<h2 class="ease-gradient-text ease-gradient-neon ease-gradient-hue-spin">
  Quantum Exchange
</h2>

<!-- Slow pulsing sunset gradient -->
<p class="ease-gradient-text ease-gradient-sunset ease-gradient-pulse ease-gradient-flow-slow">
  Loading mission data...
</p>
```

---

## Accessibility

All animations in this module automatically disable when the user has enabled **Reduce Motion** in their OS or browser:

```css
@media (prefers-reduced-motion: reduce) {
  /* All ease-gradient-* animation classes: animation: none */
  /* Static gradient is preserved for visual distinction */
}
```