# Sandbox Layout Fix: Webkit Scrollbar Theme Customization Main-Thread Repaint Lag Resolution

## Overview
A performance rendering fix for scrollable layout blocks and text containers to completely eliminate custom scrollbar thumb micro-stutters, stop gradient repaint loops, and lower CPU core execution peaks across Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user workspace layout hosting dense text paragraphs and customized gradient scrollbars to verify high-velocity scroll fluidity.
* `style.css` — Scoped layout sheet establishing isolated hardware paint boundaries linked back to global tokens.

## 🐛 The Bug Resolved
Previously, applying deep custom theme properties to user scrollbar paths via vendor extensions (`::-webkit-scrollbar-thumb`)—such as bright multi-stop background gradients or complex borders—triggered severe visual micro-stutters on Google Chrome and Microsoft Edge. As users scroll through heavy layout text blocks, each wheel increment forces the Blink layout engine to continuously invalidate repaint layers and re-evaluate gradient bounding calculations. This process thrashes the main thread alongside typography rendering, causing noticeable frame drops and sluggish tracking feedback.

## 🛠️ The Solution
The canvas painting channels are optimized. By injecting `contain: paint;` directly onto the scrolling container wrapper element (`overflow-y: auto;`), you instruct the browser's rendering engine to halt outer document tracking loops. This establishes a strict layout containment barrier, prompting the browser to isolate custom scrollbar drawing updates onto an independent hardware-accelerated composition layer. The graphics card handles the rapid thumb pixel relocations smoothly, ensuring liquid-smooth scroll interaction performance.
