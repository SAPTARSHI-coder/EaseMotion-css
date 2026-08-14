# Text Highlight Underline Draw Utilities

> SCSS utility mixin module for EaseMotion CSS — adds animated, "drawn-on" underline and marker-style highlight effects to inline text elements.

**Issue:** [#28403](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/28403)  
**Track:** SCSS Integration  
**Author:** [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux)

---

## What does this do?

This SCSS partial provides a family of reusable **mixins** that add animated underline and text-highlight effects to any inline text element (links, headings, spans). The animation simulates a hand-drawn marker or pen stroke, growing from one side of the text to the other on hover, focus, or page load.

It is:

- **Lightweight** — uses a single `::after` pseudo or `background-image` gradient
- **Configurable** — color, thickness, duration, easing, offset are all parameterized
- **Accessible** — respects `prefers-reduced-motion` and supports `:focus-visible`
- **Composable** — five preset mixins covering common patterns (LTR, RTL, center, marker-highlight, auto-draw)
- **Dependency-free** — pure CSS, no JavaScript

---

## Installation

Copy the file `_text-highlight-underline-draw-utilities.scss` into your SCSS project (typically under `scss/utilities/` or `scss/mixins/`), then import it:

    @use "utilities/text-highlight-underline-draw-utilities" as draw;

Or with the older `@import` syntax:

    @import "utilities/text-highlight-underline-draw-utilities";

---

## Usage

### 1. Basic underline draw (left to right)

    .link {
      color: #2563eb;
      @include ease-underline-draw-sou();
    }

### 2. Underline draw — right to left

    .link-rtl {
      color: #2563eb;
      @include ease-underline-draw-reverse-sou(#dc2626, 3px);
    }

### 3. Underline draw — from center outward

    .link-center {
      color: #111;
      @include ease-underline-draw-center-sou(#2563eb, 2px, 500ms);
    }

### 4. Marker-style highlight on hover

    .keyword {
      @include ease-highlight-draw-sou(rgba(255, 235, 59, 0.6));
    }

### 5. Auto-drawing highlight (e.g. for hero text)

    .hero-emphasis {
      @include ease-highlight-draw-permanent-sou(
        $color    : rgba(34, 197, 94, 0.45),
        $duration : 1000ms,
        $delay    : 300ms
      );
    }

---

## Mixin Parameters Reference

### `ease-underline-draw-sou($color, $thickness, $duration, $timing, $offset)`

| Parameter     | Type   | Default                            | Description                          |
| ------------- | ------ | ---------------------------------- | ------------------------------------ |
| `$color`      | Color  | `currentColor`                     | Underline color                      |
| `$thickness`  | Length | `2px`                              | Underline thickness                  |
| `$duration`   | Time   | `450ms`                            | Animation duration                   |
| `$timing`     | String | `cubic-bezier(0.65, 0, 0.35, 1)`   | CSS easing function                  |
| `$offset`     | Length | `2px`                              | Distance below text baseline         |

### `ease-underline-draw-reverse-sou(...)`

Same parameters as above. Underline draws from **right to left**.

### `ease-underline-draw-center-sou(...)`

Same parameters as above. Underline draws **outward from the center**.

### `ease-highlight-draw-sou($color, $height, $duration, $timing)`

| Parameter   | Type   | Default                            | Description                  |
| ----------- | ------ | ---------------------------------- | ---------------------------- |
| `$color`    | Color  | `rgba(255, 235, 59, 0.55)`         | Marker highlight color       |
| `$height`   | Length | `0.55em`                           | Highlight band height        |
| `$duration` | Time   | `600ms`                            | Animation duration           |
| `$timing`   | String | `cubic-bezier(0.65, 0, 0.35, 1)`   | CSS easing function          |

### `ease-highlight-draw-permanent-sou($color, $height, $duration, $delay, $timing)`

Like `ease-highlight-draw-sou`, but triggers automatically on page load instead of hover. Adds `$delay` parameter (default `200ms`) for staggered animations.

---

## Compiled CSS Output

After SCSS compilation, an example call like:

    .link { @include ease-underline-draw-sou(); }

produces clean, minimal CSS:

    .link {
      position: relative;
      display: inline-block;
      text-decoration: none;
      cursor: pointer;
    }
    .link::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: currentColor;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 450ms cubic-bezier(0.65, 0, 0.35, 1);
      pointer-events: none;
      border-radius: calc(2px / 2);
    }
    .link:hover::after,
    .link:focus-visible::after {
      transform: scaleX(1);
    }
    @media (prefers-reduced-motion: reduce) {
      .link::after { transition: none; }
    }

---

## Accessibility

- All hover effects are mirrored on `:focus-visible` so keyboard users get the same visual feedback as mouse users.
- The mixins automatically disable animation when the user has enabled **Reduce Motion** at the OS level via `@media (prefers-reduced-motion: reduce)`.
- For `ease-highlight-draw-permanent-sou`, reduced-motion users see the highlight in its final state immediately (no animation).

---

## Why is this useful?

EaseMotion CSS is built around the philosophy that **motion should be effortless, expressive, and accessible**. Drawn-on underlines and marker-style text highlights are some of the most loved micro-interactions in modern editorial and portfolio design — they add personality without sacrificing performance.

This utility brings that personality to EaseMotion in a **single import**, with **zero JavaScript**, **zero dependencies**, **full keyboard-focus parity**, and **full motion-accessibility support** — staying true to the frameworks core values of lightweight, declarative motion design.

---

## License

Part of the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) framework.
