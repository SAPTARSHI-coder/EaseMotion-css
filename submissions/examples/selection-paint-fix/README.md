# Sandbox Layout Fix: Typography Selection Repaint Lag and Anti-Aliasing Optimization

## Overview
A performance rendering fix for text-heavy layouts and typography channels to eliminate mouse highlighting stutters, lower high CPU core execution usage, and prevent global repaint passes on modern web engines.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive presentation container hosting text blocks with heavy selection styles to verify rapid highlighting fluidity.
* `style.css` — Scoped layout sheet establishing isolated hardware paint boundaries linked back to shared global tokens.

## 🐛 The Bug Resolved
Previously, applying deep custom styles to user selection matrices via the `::selection` pseudo-element (such as bold background transformations or color shifts) triggered severe performance bugs on Chromium (Blink) engines. On text-dense pages, dragging the cursor rapidly to highlight blocks forced the layout engine to continuously calculate sub-pixel text anti-aliasing paths. This caused constant main-thread layout repaints on every mouse move event, resulting in noticeable visual stutter and temporary system freezes.

## 🛠️ The Solution
The canvas painting channels are optimized. By injecting `contain: paint;` onto the parent text wrapper container, you instruct the rendering engine to halt outer document tracking loops. Coupling this boundary with `backface-visibility: hidden;` promotes the entire layout block to its own hardware-accelerated GPU composition layer. The browser can then process the selection overlay drawing steps independently on the graphics card, ensuring liquid-smooth text interaction feedback.
