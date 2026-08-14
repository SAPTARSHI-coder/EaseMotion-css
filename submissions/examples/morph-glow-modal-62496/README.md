# EaseMotion CSS: Morph-Glow Modal (E-Commerce Checkout Layouts)

A premium, interactive e-commerce checkout confirmation modal featuring a frosted glassmorphism card layout, interactive billing/order panels, a visually-appealing dark mode design, and a pure CSS morphing fluid background overlay accompanied by a glowing shifting radial color animation.

---

## Overview

The **Morph-Glow Modal** provides a modern, high-end e-commerce interface option for checking out, order confirmation, and payment authorization steps. This component uses the standard CSS checkbox-hack technique to remain 100% dependency-free and pure CSS.

When active, the modal opens with a smooth scale-up zoom and slide-up transition, backed by a large, blurred backdrop bubble that morphs organically like a liquid drop (`morph`) and cycles colors (`glow`) to draw attention.

---

## Features

- **Pure CSS Toggle**: Uses the checkbox hack to coordinate modal visibility and overlay backdrop transitions without JavaScript.
- **Morphing Backdrop Bubble**: Shifting organic shape animations built with CSS `@keyframes` changing the `border-radius` corners.
- **Shifting Glow Overlay**: Embedded continuous hue-rotation filters and blur properties cycle colors automatically.
- **Frosted Glassmorphism**: Blended translucent background panels using `backdrop-filter: blur(...)` and thin bright border highlights.
- **Fully Responsive**: Automatically adapts layout structure from dual-columns on desktops to stacked columns on mobile devices.
- **Accessible & Keyboards Support**: Label button triggers support keyboard interaction (`tabindex="0"`, focus rings, space/enter triggers), with proper ARIA attributes and roles.
- **Reduced Motion Settings**: Built-in support to suppress animation loops and scale changes when `prefers-reduced-motion: reduce` is detected.

---

## Folder Structure

```text
morph-glow-modal-62496/
├── README.md   # Documentation and developer instructions
├── demo.html   # Main HTML demonstration markup
└── style.css   # Component stylesheet and animation systems
```

---

## Usage

1. Include the stylesheet in your document `<head>`:
   ```html
   <link rel="stylesheet" href="style.css">
   ```

2. Implement the checkbox toggle trigger and overlay hierarchy:
   ```html
   <!-- Hidden Input Trigger -->
   <input type="checkbox" id="modal-trigger" class="modal-toggle">

   <!-- Action Label Trigger Button -->
   <label for="modal-trigger" class="btn-checkout" role="button" tabindex="0">
     Proceed to Checkout
   </label>

   <!-- Modal overlay container -->
   <div class="modal-overlay">
     <label for="modal-trigger" class="modal-dismiss-target" aria-label="Close modal overlay"></label>

     <!-- Morphing liquid glowing backdrop bubble element -->
     <div class="morph-glow-backdrop" aria-hidden="true"></div>

     <!-- Main Glassmorphic Card -->
     <div class="modal-card" role="dialog" aria-modal="true">
       <div class="modal-header">
         <h3 class="modal-title">Complete Checkout</h3>
         <label for="modal-trigger" class="modal-close-btn">&times;</label>
       </div>
       <div class="modal-body">
         <p>Checkout summary here...</p>
       </div>
     </div>
   </div>
   ```

---

## CSS Variables

Branding and styling properties are fully configurable using CSS Variables:

| CSS Variable | Default Value | Description |
|---|---|---|
| `--bg-primary` | `#0a0b10` | Page backdrop canvas color |
| `--bg-surface` | `rgba(20, 22, 37, 0.6)` | Translucent panel frosted background |
| `--primary` | `#a855f7` | Purple brand accent color |
| `--accent` | `#ec4899` | Pink brand highlight color |
| `--transition-entrance`| `0.65s cubic-bezier(...)`| Custom curve for modal zoom/slide entry |
| `--transition-morph` | `12s infinite ease-in-out`| Shifting speed for the morph blob |

---

## Customization

You can change the morphing blob speed or shape keyframes inside `style.css` by adjusting the `@keyframes morph-blob` values:

```css
@keyframes morph-blob {
  0% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
  50% { border-radius: 60% 40% 50% 50% / 50% 50% 50% 50%; }
  100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
}
```

---

## Accessibility

- **Semantics**: Structured with standard layout tags like `<main>`, `<section>`, and interactive `<label>` buttons.
- **Focus Indicators**: Staged outline states visible on tab navigation.
- **Keyboard Support**: Interactive controls use native HTML form controls and labels, requiring no JavaScript.
- **Reduced Motion Support**: Shifting glow is disabled, the morph bubble is rounded and static, and transitions scale to `0.01ms` when prefers-reduced-motion is active.

---

## Responsive Behaviour

- **Desktop Viewport**: Sidebar visual panels with Checkout forms on the left and Summary metrics on the right.
- **Tablet / Mobile Viewport**: Stacked rows with responsive margin offsets.

---

## Browser Compatibility

- Google Chrome (Latest)
- Mozilla Firefox (Latest)
- Apple Safari (Latest)
- Microsoft Edge (Latest)
- Mobile browsers (WebKit engine)
