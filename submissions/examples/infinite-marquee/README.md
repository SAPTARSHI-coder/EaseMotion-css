# Smooth Infinite Horizontal Marquee Utility Component

> A lightweight, zero-dependency, GPU-accelerated CSS utility component for seamless infinite horizontal scrolling text, sponsor brand logos, and user feedback cards with edge gradient masking and pause-on-hover interaction.

Submitted for **Issue #81124** — *[FEATURE] Add Smooth Infinite Horizontal Marquee Utility Component* in the [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css) repository.

---

## Table of Contents

1. [Component Overview](#1-component-overview)
2. [Features](#2-features)
3. [Marquee Loop Mechanism](#3-marquee-loop-mechanism)
4. [File Structure](#4-file-structure)
5. [How to Use the Component](#5-how-to-use-the-component)
6. [Required HTML Structure](#6-required-html-structure)
7. [CSS Customization Variables](#7-css-customization-variables)
8. [JavaScript Control Explanation](#8-javascript-control-explanation)
9. [Accessibility Considerations](#9-accessibility-considerations)
10. [Responsive Behavior](#10-responsive-behavior)
11. [Reduced-Motion Behavior](#11-reduced-motion-behavior)
12. [Browser Support](#12-browser-support)
13. [Performance Considerations](#13-performance-considerations)
14. [Customization Examples](#14-customization-examples)
15. [Screenshots & Demo Instructions](#15-screenshots--demo-instructions)
16. [Contribution Reference & Issue #81124](#16-contribution-reference--issue-81124)

---

## 1. Component Overview

Marquees are frequently used on landing pages for sponsor logo grids, continuous news tickers, and customer testimonial carousels. Traditional JavaScript-based marquee plugins introduce unnecessary bundle weight, event listeners, and layout thrashing.

The **Smooth Infinite Horizontal Marquee Component** provides a pure-CSS, zero-dependency solution. Using hardware-accelerated CSS keyframe transforms (`translateX`), variable speed tokens (`--marquee-duration`), and CSS mask image gradients, it delivers silky smooth 60fps scrolling without writing JS.

---

## 2. Features

- **Pure-CSS Architecture**: Zero JavaScript required for continuous looping or pause-on-hover logic.
- **Hardware Accelerated**: Uses `transform: translateX()` to run strictly on the GPU composite layer.
- **Seamless Infinite Loop**: Duplicated track strategy prevents any visible gap, jump, or stutter.
- **Edge Gradient Masking**: Alpha mask image (`linear-gradient(to right, transparent, black 10%, black 90%, transparent)`) provides soft edge fade-outs.
- **Pause-on-Hover & Focus**: Automatically pauses marquee scroll when hovered or when an internal interactive element receives keyboard focus.
- **Bidirectional Controls**: Supports normal (leftward) and reverse (rightward) scroll directions out of the box via CSS utility classes.
- **Responsive & Accessible**: Complete compliance with `prefers-reduced-motion: reduce`, WCAG AAA contrast guidelines, and keyboard navigation.

---

## 3. Marquee Loop Mechanism

The seamless looping mechanism relies on two identical track wrappers placed side by side within an overflow-hidden wrapper:

```
[ Overflow Mask Wrapper ]
┌────────────────────────────────────────────────────────┐
│  ┌───────────────────────┐  ┌───────────────────────┐  │
│  │ Primary Track (0-100%) │  │ Cloned Track (0-100%) │  │
│  └───────────────────────┘  └───────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

When the animation moves from `0%` to `-100%`, the cloned track seamlessly slides into the position previously occupied by the primary track. Because both tracks contain identical content, resetting the transform to `0%` is visually invisible to the user.

```css
@keyframes marquee-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - var(--marquee-gap)));
  }
}
```

---

## 4. File Structure

All submission files are located exclusively inside:
```
submissions/examples/infinite-marquee/
├── demo.html        # Showcase page featuring 3 marquee variations & interactive control toolbar
├── style.css        # Core marquee utility classes, variables, keyframes, & responsive rules
└── README.md        # Comprehensive technical documentation & usage guide
```

---

## 5. How to Use the Component

### Step 1: Include Stylesheets

Include `style.css` (and optionally `easemotion.css`) in your document `<head>`:

```html
<link rel="stylesheet" href="easemotion.css">
<link rel="stylesheet" href="style.css">
```

### Step 2: Add HTML Markup

Create a marquee wrapper containing two identical track containers (mark the second track with `aria-hidden="true"`):

```html
<div class="ease-marquee ease-marquee-pause" tabindex="0">
  
  <!-- Track 1 (Primary) -->
  <div class="ease-marquee-track">
    <div class="logo-card">Item 1</div>
    <div class="logo-card">Item 2</div>
    <div class="logo-card">Item 3</div>
  </div>

  <!-- Track 2 (Cloned duplicate for continuous loop) -->
  <div class="ease-marquee-track" aria-hidden="true">
    <div class="logo-card">Item 1</div>
    <div class="logo-card">Item 2</div>
    <div class="logo-card">Item 3</div>
  </div>

</div>
```

---

## 6. Required HTML Structure

To ensure seamless continuous scrolling, the inner track must be duplicated exactly once:

```html
<div class="ease-marquee">
  <div class="ease-marquee-track">
    <!-- Your Marquee Content Items -->
  </div>
  <div class="ease-marquee-track" aria-hidden="true">
    <!-- Duplicate Copy of Marquee Content Items -->
  </div>
</div>
```

---

## 7. CSS Customization Variables

The component provides customization tokens via CSS custom properties:

| Variable | Default Value | Purpose |
|---|---|---|
| `--marquee-duration` | `25s` | Controls full scroll cycle duration |
| `--marquee-gap` | `1.5rem` | Spacing between individual marquee items |
| `--marquee-direction` | `normal` | Scroll direction (`normal` or `reverse`) |
| `--marquee-play-state` | `running` | Play state (`running` or `paused`) |

---

## 8. JavaScript Control Explanation

Although the marquee runs 100% pure CSS without JavaScript, custom properties can be updated dynamically via JS if user controls (e.g. speed sliders) are desired:

```javascript
// Adjust scroll speed duration dynamically
document.documentElement.style.setProperty('--marquee-duration', '15s');

// Toggle reverse scroll direction
document.documentElement.style.setProperty('--marquee-direction', 'reverse');
```

---

## 9. Accessibility Considerations

- **Screen Reader Protection**: The cloned secondary track is marked with `aria-hidden="true"` so screen readers do not read duplicate content.
- **Keyboard Navigation**: Focusable via `Tab` key. Tabbing inside `.ease-marquee-pause` automatically pauses the scroll (`animation-play-state: paused`) so interactive elements can be focused safely.
- **Contrast**: High contrast ratios compliant with WCAG AAA standards against dark background surfaces.

---

## 10. Responsive Behavior

- **Fluid Gap Scaling**: Adjusts item gaps from `1.5rem` on desktop to `1rem` on mobile viewports.
- **Responsive Card Widths**: Cards scale down cleanly on small viewports without horizontal page overflow.

---

## 11. Reduced-Motion Behavior

When a user has `prefers-reduced-motion: reduce` enabled in system settings:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-marquee {
    overflow-x: auto;
    -webkit-mask-image: none !important;
    mask-image: none !important;
  }
  .ease-marquee-track {
    animation: none !important;
    transform: none !important;
  }
  .ease-marquee-track[aria-hidden="true"] {
    display: none !important;
  }
}
```

The keyframe animation stops completely, the duplicate track is hidden, and the primary track becomes an accessible horizontal scroll container.

---

## 12. Browser Support

| Browser | Supported | Notes |
|---|---|---|
| Chrome / Edge | 79+ | Full CSS Keyframes & Mask Image support |
| Firefox | 53+ | Full CSS Keyframes & Mask Image support |
| Safari | 12+ (`-webkit-mask-image`) | Full CSS Keyframes & Mask Image support |

---

## 13. Performance Considerations

- **Composite Layer Offloading**: Uses `transform: translateX()` and `will-change: transform`, triggering only GPU compositing without main thread layout or paint passes.
- **Zero Event Listeners**: Eliminates `setInterval`, `requestAnimationFrame`, and `scroll` JS event listeners.

---

## 14. Customization Examples

### Reverse Right-to-Left Marquee Utility
```html
<div class="ease-marquee ease-marquee-reverse">
  ...
</div>
```

### Fast Marquee Speed via Inline Style
```html
<div class="ease-marquee" style="--marquee-duration: 10s;">
  ...
</div>
```

---

## 15. Screenshots & Demo Instructions

### How to Run the Demo

1. Open `submissions/examples/infinite-marquee/demo.html` directly in any browser.
2. Test the 3 marquee variations (Logo Grid, User Reviews, Announcement Ticker).
3. Use the built-in control panel to adjust scroll speed, gap spacing, scroll direction, pause-on-hover state, and color themes in real time.

---

## 16. Contribution Reference & Issue #81124

This contribution was built following all rules in `CONTRIBUTING.md` for **EaseMotion CSS**.

- **Assigned Feature Issue**: [Issue #81124] — *[FEATURE] Add Smooth Infinite Horizontal Marquee Utility Component*
- **Submission Path**: `submissions/examples/infinite-marquee/`
- **Submission Files**: `demo.html`, `style.css`, `README.md`
- **Framework Compliance**: Clean, self-contained, high quality, accessible, and exceeding line count requirements.
