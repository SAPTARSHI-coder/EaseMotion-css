# Rotating Circular Text Badge / Stamp

## What is this?

A CSS-first circular text badge component that bends typography along an SVG circle path and rotates it continuously. It supports center content injection (icons or graphics) and interactive hover overrides.

## How does it work?

The text wrap is powered by SVG `<path>` and `<textPath>` elements:

1. An invisible circle path is defined using arc coordinates.
2. The `<textPath>` element binds the text content to this circular path.
3. CSS `@keyframes` applies an infinite rotation transform (`transform: rotate(360deg)`) to the SVG element.
   CSS variables are exposed to customize the speed, color, letter-spacing, and badge sizes. It also includes support for hover interactions (pause, reverse, speed boost) and is accessible via `@media (prefers-reduced-motion: reduce)`.

## Why is it useful?

Circular rotating badges are a popular visual stamp used on modern creative portfolios and product landing pages to draw user attention to interactive elements (e.g. "Scroll to Explore" badges or circular logo stamps). Implementing this cleanly using pure CSS and lightweight SVG paths removes the need for canvas rendering or heavy mathematical JS libraries.
