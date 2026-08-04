# content-visibility: auto — Lazy Rendering Demo

## Overview

Demonstrates `content-visibility: auto` for deferred off-screen rendering. This example features a 12-section long page where only visible sections render, dramatically reducing initial paint and layout time. Toggle content-visibility on/off via the control bar to compare scroll performance.

## Usage

Open `demo.html` in any Chromium-based browser (Chrome, Edge, Opera). The page loads with `content-visibility: auto` enabled. Scroll through the sections and observe the rendered count in the control bar. Uncheck the toggle to disable content-visibility and see how all sections render immediately. Use DevTools Performance panel to measure paint and layout time differences.

## Browser Support

`content-visibility` is supported in Chromium 85+ (Chrome, Edge, Opera, Samsung Internet). Firefox and Safari do not support it yet. The page degrades gracefully — without support, all sections render normally with no visual difference.
