# EaseMotion Sticky Header

A high-performance, hardware-accelerated sticky navigation header featuring a modern glass-morphism aesthetic. It is specifically engineered to maintain a stable layout even when handling dynamic or unusually long, unbroken text content.

## Overview
The `alm-sticky-header` component provides a polished, fixed-top navigation bar. By leveraging GPU-accelerated CSS properties and intelligent flexbox constraints, it ensures that long project titles or brand names do not disrupt the header layout or push navigation items off-screen.

## Features
* **Hardware-Accelerated:** Utilizes `will-change` and `translateZ(0)` to offload scrolling and filter rendering to the GPU, eliminating main-thread jank.
* **Glass-Morphism:** Built-in backdrop blur support for a modern, translucent depth effect.
* **Overflow Protection:** Robust handling of long, unbroken strings using text-ellipsis patterns.
* **Layout Integrity:** The navigation menu maintains its intended structure and prevents squashing, regardless of logo length.

## Implementation Details
The component solves layout breakage by explicitly managing the flex-shrink behavior of its children:

```css
.alm-nav-logo {
  /* Enforce ellipsis */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* CRITICAL: Allows this flex item to shrink below its content width */
  min-width: 0;
}

.alm-nav-menu {
  /* Prevents the menu from being squashed by the long logo */
  flex-shrink: 0;
}
