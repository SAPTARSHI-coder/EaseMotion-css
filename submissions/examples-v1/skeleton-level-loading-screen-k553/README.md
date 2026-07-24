# Animated Skeleton Loading Screens

A collection of reusable shimmer-animated skeleton loaders for common UI layouts, shown before real content loads.

## Features
- Profile skeleton (avatar + text lines)
- Card skeleton (thumbnail + text lines)
- Article skeleton (title + paragraph lines)
- Product skeleton (thumbnail + name + price)
- Smooth CSS-only shimmer animation via `background-position` keyframes
- Fully responsive layout
- Toggle button to preview skeleton vs. loaded state

## Files
- `demo.html` — Markup, skeleton/real content pairs, and toggle logic
- `style.css` — Styling and shimmer animation

## Usage
1. Open `demo.html` in your browser.
2. Click **"Toggle Loaded / Loading"** to switch between the skeleton placeholders and the real content, simulating a page load.
3. Reuse the `.skeleton`, `.skeleton-line`, `.skeleton-avatar`, and `.skeleton-thumb` classes in your own layouts.

## Customization
Adjust shimmer speed via the `animation` duration on `.skeleton`, or change skeleton colors in the `background` gradient.