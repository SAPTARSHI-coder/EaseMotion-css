# Morphing Footer Usage

## Issue

EaseMotion CSS issue #78792.

## Overview

This guide documents a responsive footer pattern where grouped content can transition between a compact and expanded arrangement.

## Basic structure

Keep footer content semantic and grouped by purpose:

```html
<footer class="morphing-footer">
  <section>
    <h2>Product</h2>
    <a href="#docs">Documentation</a>
  </section>
  <section>
    <h2>Company</h2>
    <a href="#about">About</a>
  </section>
</footer>
```

## Responsive behavior

Use grid or flexbox to arrange columns on larger screens and switch to a single-column layout at a suitable breakpoint. The content order should remain logical when the layout changes.

## Motion

A morphing effect can use transforms, opacity, or grid/flex transitions. Keep the animation subtle so footer content remains easy to scan.

## Accessibility

Use real headings and links rather than clickable decorative containers. Maintain visible keyboard focus and do not communicate important information through animation alone.

## Reduced motion

Disable decorative transitions under `prefers-reduced-motion: reduce` while retaining the final readable layout.
