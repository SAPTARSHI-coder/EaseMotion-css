# Hardware-Accelerated Sticky Glass Header

## Overview
A performance-optimized sticky navigation header featuring a high-diffusion backdrop blur (glassmorphism). This component is engineered to maintain high frame rates during scroll events by forcing the browser to offload composite repaints from the main thread to the GPU.

## Features
* **GPU-Accelerated Rendering:** Uses `will-change` and `translateZ(0)` to prevent main-thread layout thrashing and scroll jitter.
* **Cross-Browser Compatibility:** Includes native `-webkit-sticky` and `-webkit-backdrop-filter` fallbacks specifically targeted for iOS Safari support.
* **Accessible Interactions:** Includes proper `:hover` and `:focus` states for navigation links.
* **Scoped Architecture:** Utilizes isolated `.alm-` prefix classes to guarantee zero conflicts with the core framework.

## Visual Indicators
* The navigation header firmly pins to the top edge of the viewport as the user scrolls down the page.
* Content and layout elements passing beneath the header are smoothly obscured by a frosted glass blur effect (`blur(12px)`).
* Zero visual flickering, screen tearing, or lagging of the blur overlay during rapid scrolling.

## Why is it helpful?
When building modern web applications or PWAs, applying complex CSS filters like `backdrop-filter` to `position: sticky` elements frequently causes severe layout thrashing on mobile browsers. The browser engine struggles to recalculate and repaint the blur effect on every single scroll tick. By promoting the element to its own hardware-accelerated composite layer, this patch bypasses the main-thread bottleneck, ensuring a native-feeling, fluid scrolling experience.

## Implementation
To implement this component in a standard layout:

1. Ensure the core EaseMotion variables and utilities are imported into your stylesheet.
2. Apply the `.alm-sticky-header` class to your `<header>` or `<nav>` container.
3. Structure your internal navigation links using the included classes: `.alm-nav-logo`, `.alm-nav-menu`, and `.alm-nav-link`.
4. **Important:** Ensure that none of the header's parent or ancestor containers have `overflow: hidden` or `overflow: auto` applied, as this will immediately break the CSS sticky positioning context.
