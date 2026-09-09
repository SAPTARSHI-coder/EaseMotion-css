## Overview

The Magnetic Hover Interaction Utilities introduce a set of premium, agency-style hover effects to EaseMotion CSS. This includes both pure CSS utilities for smooth vertical lifts and scales, as well as a lightweight, optional JavaScript-assisted true 2D magnetic tracking effect.

These utilities are perfect for modern portfolios, SaaS landing pages, and interactive product showcases where elements appear to naturally attract toward the user's cursor.

## Features

* **`ease-mag-lift`**: A clean, CSS-only vertical lift with smooth drop-shadow expansion.
* **`ease-mag-scale`**: A CSS-only premium card effect combining a slight scale and lift.
* **`ease-mag-icon`**: A playful, spring-based (custom cubic-bezier) pop effect for icons.
* **`ease-mag-track`**: A true 2D magnetic tracking class that seamlessly pulls the element towards the user's cursor (requires the included 15-line JS snippet).
* **Accessibility**: Full support for `prefers-reduced-motion` to disable animations for users who prefer static interfaces.

## How to Use

### 1. Pure CSS Interactions (Zero JS Required)

Simply apply the base class `ease-mag-base` along with your desired variant:

```html
<button class="ease-mag-base ease-mag-lift">Submit</button>

<div class="ease-mag-base ease-mag-scale">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>

<div class="ease-mag-base ease-mag-icon">★</div>

<a href="#" class="ease-mag-track">
  <span class="ease-mag-track-content">Get Started</span>
</a>


## Why it fits EaseMotion CSS ? 

Human-readable: Class names like ease-mag-lift and ease-mag-track clearly describe the intended behavior.

Lightweight: Relies on native CSS transitions and a tiny, vanilla JS snippet without pulling in heavy animation libraries like GSAP.

Animation-focused: Uses modern, carefully crafted easing functions (cubic-bezier) out of the box.

Easy integration: Completely modular and customizable via CSS variables.
