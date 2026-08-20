# Multi-Layer Box Shadow Elevation Scale (SCSS Mixin)

A reusable **elevation system** for EaseMotion CSS built from *layered* shadows. Each level stacks a soft **ambient** shadow (large blur, low opacity) beneath a crisp **key** shadow (tight blur, directional) to mimic real light — giving flat UI convincing depth and a consistent visual hierarchy.

> Track: `submissions/scss/` · Closes issue **#28279**

---

## What it does

- Defines a 6-step elevation scale (**level 0–5**) in a single SCSS map.
- Ships a **function**, two **mixins**, and auto-generated **utility classes** so you can reach for whichever style fits your workflow.
- Uses EaseMotion design tokens (`--ease-ease`, `--ease-speed-medium`) for the hover transition, with safe fallbacks so the partial also compiles and works **standalone** (zero external dependencies).

---

## API

| Kind | Signature | Purpose |
|------|-----------|---------|
| Function | `em-elevation($level)` | Returns the raw layered `box-shadow` value for a level. |
| Mixin | `em-elevation($level: 1)` | Applies a single elevation level. |
| Mixin | `em-elevation-hover($from: 1, $to: 3, $duration: token)` | Rests at `$from`, animates up to `$to` on hover / `:focus-visible`. |
| Classes | `.ease-elevation-0` … `.ease-elevation-5` | Drop-in utility classes, no SCSS required. |

### Parameters

- **`$level`** *(Number, 0–5)* — elevation key. An out-of-range value emits an `@warn` and falls back to `none`.
- **`$from` / `$to`** *(Number, 0–5)* — resting and raised levels for the hover mixin.
- **`$duration`** *(Time)* — transition duration; defaults to `var(--ease-speed-medium, 300ms)`.

You can override the entire scale by re-declaring `$em-elevation-map` before the `@use` (it is marked `!default`).

---

## How to use

### 1. As a mixin

```scss
@use "multi-layer-box-shadow-elevation-scale" as e;

.panel              { @include e.em-elevation(2); }
.card--interactive  { @include e.em-elevation-hover(1, 4); }
```

### 2. As utility classes (no SCSS)

```html
<div class="ease-elevation-1">Resting card</div>
<div class="ease-elevation-4">Floating dialog</div>
```

### 3. As a function inside your own rule

```scss
.tooltip { box-shadow: e.em-elevation(3); }
```

---

## Compiled CSS output

Compiled with `sass` (Dart Sass 1.101.0). The utility classes:

```css
.ease-elevation-0 { box-shadow: none; }
.ease-elevation-1 { box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1); }
.ease-elevation-2 { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1); }
.ease-elevation-3 { box-shadow: 0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.12); }
.ease-elevation-4 { box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08), 0 16px 32px rgba(0, 0, 0, 0.14); }
.ease-elevation-5 { box-shadow: 0 16px 24px rgba(0, 0, 0, 0.1), 0 24px 48px rgba(0, 0, 0, 0.18); }
```

The `@include` examples above compile to:

```css
.panel {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card--interactive {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
}
.card--interactive:hover,
.card--interactive:focus-visible {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08), 0 16px 32px rgba(0, 0, 0, 0.14);
}
```

---

## Accessibility

The hover mixin animates only `box-shadow` (a compositor-friendly, non-layout property) and also triggers on `:focus-visible` for keyboard users. EaseMotion's global `prefers-reduced-motion` layer already neutralises the transition for users who request reduced motion.

## Compile it yourself

```bash
sass _multi-layer-box-shadow-elevation-scale.scss
```
