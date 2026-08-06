# CSS 3D-Flip Popover

A pure HTML5 &amp; CSS SaaS feature card that flips in 3D on hover/focus to
reveal a feature list and call-to-action. Built for **EaseMotion CSS** —
no JavaScript, no dependencies.

![no-js](https://img.shields.io/badge/JavaScript-none-brightgreen)
![a11y](https://img.shields.io/badge/keyboard-accessible-blue)

---

## Overview

This component simulates a floating SaaS feature card commonly seen on
modern product/marketing pages. Each card floats gently, and on
hover or keyboard focus it performs a smooth 3D flip:

- **Front** — icon, title, short description
- **Back** — feature list + CTA button

The demo page (`demo.html`) showcases four cards arranged in a
responsive grid to demonstrate the component inside a realistic SaaS
showcase layout.

---

## Folder Structure

```
submissions/examples/css-3d-flip-popover/
├── demo.html     # Semantic markup + 4-card showcase grid
├── style.css     # All styling, tokens, animation, responsiveness
└── README.md     # This file
```

---

## Features

- 🎴 True 3D flip using `perspective` + `transform-style: preserve-3d`
- 🪶 Subtle continuous floating animation (staggered per card)
- 💎 Glassmorphism styling — translucent, blurred, soft-bordered cards
- 🌈 Attractive animated gradient background
- ⌨️ Fully keyboard accessible (`:focus` / `:focus-within`, no `outline: none` traps)
- ♿ `prefers-reduced-motion` fallback (cross-fade instead of rotation)
- 📱 Responsive grid: desktop → tablet → mobile, single-column stack
- 🚀 GPU-accelerated — only `transform` and `opacity` are animated
- 🧼 Zero JavaScript, zero layout shift, no overflow at any breakpoint

---

## CSS Custom Properties

All design tokens live in `:root` for easy theming:

| Property | Purpose |
|---|---|
| `--em-primary`, `--em-secondary`, `--em-accent` | Brand gradient colors |
| `--em-bg-start`, `--em-bg-mid`, `--em-bg-end` | Page background gradient stops |
| `--em-glass-bg`, `--em-glass-bg-strong`, `--em-glass-border`, `--em-glass-blur` | Glassmorphism surface tokens |
| `--em-radius-lg`, `--em-radius-md`, `--em-radius-sm` | Corner radii |
| `--em-shadow-soft`, `--em-shadow-hover` | Elevation shadows |
| `--em-easing-elegant` | Shared cubic-bezier easing curve |
| `--em-flip-duration` | Flip animation speed (`0.7s`) |
| `--em-float-duration` | Floating animation cycle (`6s`) |
| `--em-perspective` | 3D perspective depth (reduced on smaller screens) |
| `--em-space-xs` … `--em-space-lg` | Spacing scale |

Override any token in a parent scope to re-theme the component without
touching component rules.

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **Desktop** (`> 768px`) | Auto-fit grid, multiple cards per row, full perspective depth |
| **Tablet** (`≤ 768px`) | Grid tightens to `minmax(220px, 1fr)`, reduced perspective |
| **Mobile** (`≤ 480px`) | Single-column stack, reduced card padding & perspective, no horizontal overflow |

Card height is controlled via `min-height` on the scene/card/inner trio
so the flip never causes layout shift at any breakpoint.

---

## Accessibility Support

- Each `.popover-card` is a focusable element (`tabindex="0"`) with a
  descriptive `aria-label` summarizing both faces' purpose.
- Flip triggers on **hover, `:focus`, and `:focus-within`**, so keyboard
  users tabbing to the card (or into its CTA link) see the same reveal
  as mouse users.
- A visible `:focus-visible` ring (`box-shadow`) is provided — focus is
  never suppressed.
- The CTA button has its own `:focus-visible` outline independent of
  the card's.
- Decorative icons are marked `aria-hidden="true"`.
- Under `prefers-reduced-motion: reduce`, the 3D rotation is replaced
  with a simple opacity cross-fade, and the floating/gradient
  animations are disabled entirely.

---

## Browser Compatibility

Uses standard, well-supported CSS: `perspective`, `transform-style:
preserve-3d`, `backface-visibility`, `backdrop-filter`, CSS Grid, and
CSS custom properties.

| Browser | Support |
|---|---|
| Chrome / Edge (Chromium) | ✅ Full |
| Firefox | ✅ Full |
| Safari (macOS/iOS) | ✅ Full (`-webkit-backdrop-filter` included) |
| Opera | ✅ Full |
| IE11 | ❌ Not supported (no custom properties / 3D transforms parity) |

---

## Usage Instructions

1. Copy `style.css` into your project (or import its rules into your
   EaseMotion CSS bundle).
2. Copy the markup structure from `demo.html`:
   ```html
   <div class="popover-scene em-float">
     <div class="popover-card" tabindex="0" aria-label="...">
       <div class="popover-inner">
         <div class="popover-face popover-front"> ... </div>
         <div class="popover-face popover-back"> ... </div>
       </div>
     </div>
   </div>
   ```
3. Replace icon SVGs, title, description, feature list items, and the
   CTA `href` with your own content.
4. Wrap multiple instances in `.em-grid` (or your own grid/flex layout)
   to build a showcase section.
5. Open `demo.html` directly in a browser — no build step required.

---

## Animation Explanation

- **Floating:** `.em-float` applies a 6s `translateY` keyframe loop to
  the outer `.popover-scene` wrapper, independent from the flip layer,
  so the card gently bobs at rest. Each card in the demo gets a
  staggered `animation-delay` so they don't move in unison.
- **3D Flip:** `.popover-scene` establishes `perspective`; `.popover-inner`
  holds `transform-style: preserve-3d` and rotates `rotateY(180deg)` on
  hover/focus. Both `.popover-front` and `.popover-back` use
  `backface-visibility: hidden` so only one face is ever visible, and
  the back face is pre-rotated 180° so it lands right-side-up.
- **Easing:** All transitions share `--em-easing-elegant`
  (`cubic-bezier(0.22, 1, 0.36, 1)`), an "ease-out-expo"-style curve
  that gives the flip a smooth, premium deceleration — kept consistent
  across the flip, shadow, and CTA hover transitions.
- **Performance:** Only `transform` and `opacity` are animated (plus a
  purely decorative `background-position` shift on the page background),
  so animations stay on the GPU compositor thread. `will-change:
  transform` hints the browser ahead of time on the elements that move.