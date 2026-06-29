# Sandbox Layout Fix: Continuous Text Marquee Conveyor Jitter and CPU Overload Resolution

## Overview
A high-performance structural rendering patch for continuous scrolling typography marquee banners to completely eliminate horizontal text vibration, stop main-thread layout thrashing, and stabilize frame rates across high-refresh-rate viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Infinite presentation conveyor track hosting duplicated log metrics loops to check alignment and scroll tolerances.
* `style.css` — Scoped layout modifier asset layer specifying native layer isolation property variables linked back to global tokens.

## 🐛 The Bug Resolved
Previously, grouping infinite linear text animations inside a header bar module using standard horizontal translations triggered critical performance decay flaws on high-refresh-rate monitors ($120\text{Hz}$+). Because the rendering engine attempts to constantly compute text anti-aliasing profiles and rasterize glyph vector maps during movement on fractional coordinates, it forces expensive CPU painting cycles. This calculation lag drops animation frames, loads the processor heavily, and creates an un-polished jittery text vibration effect.

## 🛠️ The Solution
The canvas composition pathways are optimized. By injecting an explicit layer acceleration statement (`will-change: transform;`) straight onto the active moving text track ribbon, you command the browser to capture a static texture snapshot of the element and promote it straight to a dedicated GPU hardware layer. Shifting visual translation calculations onto the graphics card allows the text marquee to stream perfectly at any frame rate threshold with zero sub-pixel rendering stutters.
