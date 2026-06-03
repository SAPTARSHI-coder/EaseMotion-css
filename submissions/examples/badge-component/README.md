# Badge / Tag Component System

A complete, composable badge system for displaying statuses, labels, categories, notifications, counters, and live indicators — built entirely with CSS.

---

## What does this do?

Provides a flexible set of badge and tag classes that can be combined together to create soft, solid, outline, glowing, pulsing, dismissible, and counter-style badges — all without JavaScript.

---

## How is it used?

### Base Badge

```html
<span class="badge">Default</span>
```

### Soft Variants

```html
<span class="badge badge-default">Default</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
```

### Solid Variants

```html
<span class="badge badge-solid-primary">Primary</span>
<span class="badge badge-solid-success">Success</span>
<span class="badge badge-solid-danger">Danger</span>
<span class="badge badge-solid-warning">Warning</span>
```

### Outline Variants

```html
<span class="badge badge-outline">Neutral</span>
<span class="badge badge-outline-primary">Primary</span>
<span class="badge badge-outline-success">Success</span>
<span class="badge badge-outline-danger">Danger</span>
<span class="badge badge-outline-warning">Warning</span>
```

### Size Variants

```html
<span class="badge badge-primary badge-sm">Small</span>
<span class="badge badge-primary">Default</span>
<span class="badge badge-primary badge-lg">Large</span>
```

### Square Shape

```html
<span class="badge badge-primary badge-square">Square</span>
```

### Dot Status

```html
<span class="badge badge-success badge-dot">Online</span>
<span class="badge badge-danger badge-dot">Busy</span>
```

### Pulse (Live Indicator)

```html
<span class="badge badge-solid-danger badge-pulse">LIVE</span>
```

### Hover Effect

```html
<span class="badge badge-primary badge-hover">Hover me</span>
```

### Glow Variants

```html
<span class="badge badge-solid-primary badge-glow-primary ">Glow</span>
<span class="badge badge-solid-success badge-glow-success">Glow</span>
<span class="badge badge-solid-danger badge-glow-danger">Glow</span>
```

### Dismissible Tags

```html
<span class="badge badge-primary badge-close-btn">Technology</span>
```

### Notification Counter

```html
<span class="badge badge-solid-danger badge-count">5</span>
<span class="badge badge-solid-primary badge-count">99+</span>
```

### Composing Multiple Modifiers

All modifier classes can be combined freely:

```html
<span class="badge badge-solid-danger badge-pulse badge-glow-danger badge-lg">LIVE</span>
<span class="badge badge-success badge-sm badge-dot badge-hover">Online</span>
<span class="badge badge-outline-danger badge-lg badge-close-btn">Remove</span>
```

---

## Class Reference

| Class                   | Type      | Description                              |
|-------------------------|-----------|------------------------------------------|
| `badge`                 | Base      | Core badge styles                        |
| `badge-default`         | Soft      | Neutral soft variant                     |
| `badge-primary`         | Soft      | Primary soft variant                     |
| `badge-success`         | Soft      | Success soft variant                     |
| `badge-danger`          | Soft      | Danger soft variant                      |
| `badge-warning`         | Soft      | Warning soft variant                     |
| `badge-solid-primary`   | Solid     | Primary solid variant                    |
| `badge-solid-success`   | Solid     | Success solid variant                    |
| `badge-solid-danger`    | Solid     | Danger solid variant                     |
| `badge-solid-warning`   | Solid     | Warning solid variant                    |
| `badge-outline`         | Outline   | Neutral outline variant                  |
| `badge-outline-primary` | Outline   | Primary outline variant                  |
| `badge-outline-success` | Outline   | Success outline variant                  |
| `badge-outline-danger`  | Outline   | Danger outline variant                   |
| `badge-outline-warning` | Outline   | Warning outline variant                  |
| `badge-sm`              | Size      | Small size                               |
| `badge-lg`              | Size      | Large size                               |
| `badge-square`          | Shape     | Rounded-rectangle shape                  |
| `badge-dot`             | Status    | Colored dot before text                  |
| `badge-pulse`           | Status    | Animated pulsing dot                     |
| `badge-hover`           | Utility   | Lift + shadow on hover                   |
| `badge-glow-primary`    | Glow      | Primary colored glow                     |
| `badge-glow-success`    | Glow      | Success colored glow                     |
| `badge-glow-danger`     | Glow      | Danger colored glow                      |
| `badge-close-btn`       | Feature   | Dismissible × button                     |
| `badge-count`           | Feature   | Notification counter styling             |

---

## Why is it useful?

EaseMotion CSS's philosophy is composable, reusable, modern UI utilities. This badge system directly extends that philosophy by offering:

- **Composability** — Every modifier is independent. Combine `badge-solid-danger` + `badge-pulse` + `badge-glow-danger` + `badge-lg` in a single element. No conflicts, no overrides, no custom CSS needed.

- **Consistency** — All variants share the same spacing scale, border-radius, typography, and transition timing. The system feels unified even when mixing variant types.

- **CSS-only** — Zero JavaScript. The pulse animation, dot indicator, and dismiss button are all achieved with pure CSS pseudo-elements and keyframes.

- **Accessibility** — Includes `prefers-reduced-motion` support. Animations and hover transforms are disabled for users who request reduced motion.

- **Lightweight** — The entire component CSS is under 5 KB unminified. No dependencies, no build step.

- **Framework-ready** — Uses CSS custom properties scoped to the badge system. The maintainer can remap these to EaseMotion's `--ease-*` tokens during integration without touching the class logic.

---

## Files

| File         | Purpose                                      |
|--------------|----------------------------------------------|
| `demo.html`  | Self-contained demo — open directly in browser |
| `style.css`  | Complete badge component CSS                 |
| `README.md`  | Documentation and usage guide                |
