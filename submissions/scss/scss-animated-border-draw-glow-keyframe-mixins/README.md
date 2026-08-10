# Animated Border Draw & Glow Keyframe Mixins

> SCSS utility mixin module for EaseMotion CSS — adds animated border-draw and pulsing glow keyframe effects to any element.

**Issue:** [#28402](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/28402)  
**Track:** SCSS Integration  
**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)

---

## What does this do?

This SCSS partial provides a family of reusable **keyframe-based mixins** that add animated border-draw effects (borders that animate themselves into existence, stroke by stroke), continuously rotating conic-gradient borders, and pulsing/breathing glow effects to any element.

It is:

- **Lightweight** — uses only `::before` pseudo-elements and shared `@keyframes`
- **Configurable** — color, width, duration, easing, radius, glow size all parameterized
- **Accessible** — respects `prefers-reduced-motion` and `:focus-visible`
- **Composable** — six preset mixins covering draw-on, spin, pulse, breathe, and combo effects
- **Dependency-free** — pure CSS, no JavaScript

---

## Installation

Copy the file `_animated-border-draw-glow-keyframe-mixins.scss` into your SCSS project (typically under `scss/utilities/` or `scss/mixins/`), then import it:

    @use "utilities/animated-border-draw-glow-keyframe-mixins" as border;

Or with the older `@import` syntax:

    @import "utilities/animated-border-draw-glow-keyframe-mixins";

---

## Usage

### 1. Border that draws itself on load

    .card {
      padding: 2rem;
      border-radius: 12px;
      @include ease-border-draw-sou(#2563eb, 2px);
    }

### 2. Border that draws itself on hover

    .button {
      padding: 0.75rem 1.5rem;
      @include ease-border-draw-sou(
        $color    : #22c55e,
        $width    : 2px,
        $on-hover : true
      );
    }

### 3. Continuously rotating conic-gradient border

    .feature-card {
      padding: 1.5rem;
      border-radius: 16px;
      background: #0f172a;
      color: #fff;
      @include ease-border-spin-sou(#6366f1, #22d3ee, 2px, 4s);
    }

### 4. Pulsing glow effect

    .cta-btn {
      padding: 1rem 2rem;
      border-radius: 999px;
      background: #2563eb;
      color: #fff;
      @include ease-glow-pulse-sou(rgba(37, 99, 235, 0.7));
    }

### 5. Soft breathing glow (ambient)

    .ambient-card {
      padding: 2rem;
      border-radius: 16px;
      @include ease-glow-breathe-sou(rgba(168, 85, 247, 0.5));
    }

### 6. Combined draw-on border with ambient glow

    .hero-cta {
      padding: 1rem 2.5rem;
      border-radius: 12px;
      @include ease-border-draw-glow-sou(
        $color : #f59e0b,
        $width : 2px,
        $glow  : rgba(245, 158, 11, 0.6)
      );
    }

---

## Mixin Parameters Reference

### `ease-border-draw-sou($color, $width, $duration, $timing, $radius, $on-hover)`

| Parameter   | Type    | Default                          | Description                              |
| ----------- | ------- | -------------------------------- | ---------------------------------------- |
| `$color`    | Color   | `#2563eb`                        | Border color                             |
| `$width`    | Length  | `2px`                            | Border thickness                         |
| `$duration` | Time    | `1200ms`                         | Animation duration                       |
| `$timing`   | String  | `cubic-bezier(0.65, 0, 0.35, 1)` | CSS easing function                      |
| `$radius`   | Length  | `8px`                            | Border radius                            |
| `$on-hover` | Boolean | `false`                          | If true, draws on hover instead of load  |

### `ease-border-spin-sou($color, $accent, $width, $duration, $radius)`

| Parameter   | Type   | Default     | Description                       |
| ----------- | ------ | ----------- | --------------------------------- |
| `$color`    | Color  | `#2563eb`   | Primary gradient color            |
| `$accent`   | Color  | `#22d3ee`   | Accent gradient color             |
| `$width`    | Length | `2px`       | Border thickness                  |
| `$duration` | Time   | `4s`        | Full rotation duration            |
| `$radius`   | Length | `8px`       | Border radius                     |

### `ease-glow-pulse-sou($color, $size, $spread, $duration, $timing)`

| Parameter   | Type   | Default                       | Description                  |
| ----------- | ------ | ----------------------------- | ---------------------------- |
| `$color`    | Color  | `rgba(37, 99, 235, 0.7)`      | Glow color                   |
| `$size`     | Length | `16px`                        | Maximum blur radius          |
| `$spread`   | Length | `4px`                         | Maximum spread radius        |
| `$duration` | Time   | `1800ms`                      | Pulse cycle duration         |
| `$timing`   | String | `ease-in-out`                 | Easing function              |

### `ease-glow-breathe-sou($color, $duration, $timing)`

Softer, slower breathing glow ideal for hero CTAs and ambient highlights.

### `ease-border-draw-glow-sou($color, $width, $radius, $glow)`

Combo helper that includes both `ease-border-draw-sou` and `ease-glow-pulse-sou` with shared color tokens.

---

## Compiled CSS Output

After SCSS compilation, an example call like:

    .card { @include ease-border-draw-sou(); }

produces clean, minimal CSS:

    @keyframes ease-border-draw-sou-anim {
      0%   { clip-path: inset(0 100% 100% 0); }
      25%  { clip-path: inset(0 0 100% 0); }
      50%  { clip-path: inset(0 0 0 0); }
      100% { clip-path: inset(0 0 0 0); }
    }

    .card {
      position: relative;
      border-radius: 8px;
    }
    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      border: 2px solid #2563eb;
      border-radius: inherit;
      pointer-events: none;
      box-sizing: border-box;
      animation: ease-border-draw-sou-anim 1200ms cubic-bezier(0.65, 0, 0.35, 1) forwards;
    }

    @media (prefers-reduced-motion: reduce) {
      .card::before {
        animation: none;
        clip-path: inset(0 0 0 0);
      }
    }

---

## Accessibility

- All hover/focus animations are mirrored on `:focus-visible` so keyboard users get the same visual feedback as mouse users.
- All mixins automatically disable their animations under `@media (prefers-reduced-motion: reduce)` and gracefully fall back to a static final state.
- The `@property --ease-border-angle` declaration enables smooth animation of the conic-gradient rotation in supporting browsers (Chromium, Safari 16.4+).

---

## Why is this useful?

EaseMotion CSS is built around the philosophy that **motion should be effortless, expressive, and accessible**. Animated borders and ambient glow effects are powerful visual cues — they draw attention to interactive elements, signal state changes, and add a layer of polish that elevates static designs.

This utility brings that polish to EaseMotion in a **single import**, with **zero JavaScript**, **zero dependencies**, **full keyboard-focus parity**, and **full motion-accessibility support** — staying true to the frameworks core values of lightweight, declarative motion design.

---

## License

Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) framework.
