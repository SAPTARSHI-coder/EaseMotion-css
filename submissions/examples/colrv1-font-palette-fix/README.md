# Sandbox Layout Fix: COLRv1 Vector Color Font `font-palette` Transition Snap & Flash Resolution

## Overview
A high-performance CSS Typed OM (`@property`) color interpolation patch for COLRv1 vector color fonts using the CSS `font-palette` property. It completely eliminates font color snapping, prevents mid-transition black/invisible text flashing, and enables hardware-accelerated palette transitions across theme state changes.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a COLRv1 multi-color vector headline and theme palette toggle trigger.
* `style.css` — Scoped layout modifier asset layer specifying `@property` typed color variables and `@font-palette-values` bindings.

## 🐛 The Bug Resolved
Previously, animating COLRv1 color fonts between dark and light themes using the CSS `font-palette` property (`font-palette: --dark-palette` $\rightarrow$ `font-palette: --light-palette`) caused font colors to snap abruptly without running a transition curve. In many browser engines, the text flashed solid black or invisible before snapping to the new palette. Browser graphics engines do not natively interpolate vector font color palettes via standard CSS transition threads unless explicitly declared using `@property` variable definitions.

## 🛠️ The Solution
The font palette color channels are registered using the CSS `@property` API (`syntax: '<color>'`). By referencing these registered typed properties inside an `@font-palette-values` rule and transitioning the underlying variable values on theme state changes, the browser's graphics engine interpolates the individual vector font colors frame-by-frame on hardware compositing threads.
