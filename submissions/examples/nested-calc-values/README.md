# 08 — Nested calc() Values

## Overview
Demonstrates deeply nested `calc()` expressions combining `min()`, `max()`, and `clamp()` to create fully fluid layouts without a single media query. Covers fluid typography, auto-filling grids, compound spacing, and real-time width calculation feedback.

## How It Works
Every sizing and spacing value is derived from combinations like `calc(clamp(1rem, 2.5vw, 3rem))`, `calc(min(25vw, 320px))`, and `calc(max(50%, 240px))`. Custom properties propagate these through the cascade. A live bar visualizes `calc(max(16px, min(4vw, 48px)) + clamp(0.5rem, 2cqi, 2rem) * 1.5)` in real time as the viewport changes.

## Usage
Open `demo.html` in any modern browser. Resize the window to see all elements fluidly adjust. No media queries are used anywhere — the layout, typography, and spacing respond entirely through nested `calc()` combinations.
