# Sandbox Layout Fix: Fixed Aspect-Ratio Multi-Image Gallery Grid Layout Overlap Resolution

## Overview
A structural rendering patch for mesh gallery layouts that prevents image vertical overlap, layer collapse, and layout crashing across older Apple Safari viewports and mobile WebKit web-views.

## 📁 Sandbox Configuration Files
* `demo.html` — Dynamic picture grid viewport layout rendering mixed portrait and landscape images to confirm track alignment.
* `style.css` — Scoped layout sheet swapping implicit fractional row sizing hooks for hard explicit row constraints.

## 🐛 The Bug Resolved
Previously, nesting a mix of portrait and landscape assets inside a CSS Grid using implicit fractional row sizing rules (`grid-template-rows: repeat(auto-fill, minmax(200px, 1fr))`) broke rendering on older Safari instances. The browser's graphics framework got stuck in a calculation loop trying to combine text box fractions with uncropped image dimensions. This caused the layout tracks to collapse to $0\text{px}$, piling all your images awkwardly on top of each other.

## 🛠️ The Solution
The gallery track layout framework is stabilized. By replacing implicit row calculations with an explicit `grid-auto-rows: 200px;` height baseline, the rendering engine receives fixed pixel parameters upfront, preventing layout track collapse. Additionally, adding `object-fit: cover` to child images tells the browser to scale and mask bounding layout contents cleanly, maintaining cell structure across fluid viewport updates.
