# fade-slide-combo — Page Entrance Animation Mixin

Closes #23080

## Overview

`fade-slide-combo` is a single SCSS mixin that combines **opacity fade** with
**directional slide** to create smooth, natural page entrance animations.
Supports all four directions, custom distance, spring easing, scale variants,
and a built-in stagger helper for child elements.

---

## Files

| File                     | Purpose                                    |
| ------------------------ | ------------------------------------------ |
| `_fade-slide-combo.scss` | Mixin source — copy into your SCSS project |
| `style.css`              | Pre-compiled output (CDN / no-build use)   |
| `demo.html`              | Live demo with replay controls             |
| `README.md`              | This document                              |

---

## Quick Start

```scss
@use "path/to/fade-slide-combo" as *;

.hero-title {
  @include fade-slide-combo(up);
}
.hero-sub {
  @include fade-slide-combo(up, $delay: 150ms);
}
.sidebar {
  @include fade-slide-combo(right, $distance: 40px);
}
```

---

## Mixin Signature

```scss
@mixin fade-slide-combo(
  $direction: up,
  // up | down | left | right
  $distance: 22px,
  // slide travel distance
  $duration: 400ms,
  // animation duration
  $easing: cubic-bezier(0.22, 1, 0.36, 1),
  $delay: 0ms,
  $fill: both,
  $scale: false // scale 0.96→1 alongside slide (up/down only)
);
```

---

## Available Mixins

| Mixin                                     | Description                   |
| ----------------------------------------- | ----------------------------- |
| `fade-slide-combo($direction, …)`         | Master mixin — all options    |
| `fsc-up($duration, $delay, $distance)`    | Shortcut — fade up            |
| `fsc-down($duration, $delay, $distance)`  | Shortcut — fade down          |
| `fsc-left($duration, $delay, $distance)`  | Shortcut — fade left          |
| `fsc-right($duration, $delay, $distance)` | Shortcut — fade right         |
| `fsc-up-spring($duration, $delay)`        | Spring easing + scale variant |
| `fsc-stagger($count, $step, $base-delay)` | nth-child delay ladder        |

---

## Utility Classes

```html
<h1 class="fsc-up">Title</h1>
<nav class="fsc-right fsc-delay-200">Sidebar</nav>
<div class="fsc-up-spring">Card</div>

<ul class="fsc-stagger">
  <li class="fsc-up">Item 1</li>
  <li class="fsc-up">Item 2</li>
</ul>
```

Duration: `.fsc-fast` `.fsc-slow` `.fsc-xslow`
Delay: `.fsc-delay-100` `.fsc-delay-200` `.fsc-delay-300` `.fsc-delay-400` `.fsc-delay-500` `.fsc-delay-700`
Distance: `.fsc-slide-sm` `.fsc-slide-lg` `.fsc-slide-xl`

---

## Accessibility

All animations wrapped in `@media (prefers-reduced-motion: no-preference)`.
Reduced-motion users see elements instantly at full opacity with no movement.

---

## License

MIT
