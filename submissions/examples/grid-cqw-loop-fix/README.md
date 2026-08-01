# Sandbox Layout Fix: CSS Auto-Fit Grid & Container Query Width Unit (`cqw`) Circular Oscillation Resolution

## Overview
A high-performance CSS layout patch for auto-fitting CSS Grid tracks (`repeat(auto-fit, ...)` ) hosting cards with container query width units (`cqw`). It completely eliminates layout reflow loops, stops 1-column to 2-column violent flickering, and stabilizes fluid responsive typography across viewport resize sweeps.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a horizontally resizable auto-fitting grid container with `cqw`-scaled text cards.
* `style.css` — Scoped layout modifier asset layer specifying `min()` clamped grid track minimums and child-only container query definitions.

## 🐛 The Bug Resolved
Previously, placing elements with container query width units (`font-size: clamp(1rem, 5cqw, 2rem)`) inside auto-fitting grid tracks (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) caused a violent layout oscillation loop when resizing the browser window near breakpoint boundaries. Because `cqw` units depend on the container's inline size, but the container's inline size depends on the grid's track calculations, a circular dependency formed. The browser layout engine alternated infinitely between 1-column and 2-column layouts on every frame.

## 🛠️ The Solution
The circular layout dependency chain is broken. By defining grid track minimums using a dynamic `min()` check (`grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr))`) and scoping `container-type: inline-size;` strictly to child card wrapper elements (never the parent grid container), container query units evaluate independently after grid track allocation completes.
