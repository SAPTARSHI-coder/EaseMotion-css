# Scroll-Driven Parallax

## What

A hero section with three parallax layers (sky, mountains, foreground) that move at different speeds while scrolling, creating a depth illusion. Each layer is a positioned `div` with its own scroll-driven animation using `animation-timeline: scroll()`.

## How

The `layer-sky`, `layer-mountains`, and `layer-foreground` classes each declare `animation-timeline: scroll()` and `animation-range: 0 100vh`. The animation moves each layer vertically by a different amount: sky by 15vh, mountains by 30vh, and foreground by 60vh. This differential movement simulates depth. When `prefers-reduced-motion: reduce` is set, all layer animations are disabled and the hero content becomes sticky.

## Why

Scroll-driven parallax is a classic visual technique for adding polish and narrative to landing pages. The CSS Scroll-Driven Animations spec (`animation-timeline`) makes this possible without a single line of JS or IntersectionObserver boilerplate. It is declarative, composable, and hardware-accelerated, making it ideal for performant storytelling interfaces.
