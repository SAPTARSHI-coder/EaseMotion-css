# Vertical Timeline with Scroll Animation

A responsive vertical timeline that reveals each milestone with a smooth fade-and-slide animation as it scrolls into view.

## What it does

- Displays milestones along a vertical connecting line.
- Each timeline dot and content card animates in (fade + slide up) as it enters the viewport.
- Fully responsive — line and spacing adjust on smaller screens.
- Uses a minimal `IntersectionObserver` script only to detect scroll visibility; all animation/styling is CSS-driven.

## How to use

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.
3. Duplicate a `.timeline-item` block for each milestone and edit the date, title, and description.

## Why it fits EaseMotion CSS

- Styling and animation logic live entirely in `style.css`; the tiny inline script only toggles a class, it contains no animation logic itself.
- Beginner-friendly: clear class names (`timeline-item`, `timeline-dot`, `timeline-content`).
- Meets all requirements from issue #47328: responsive timeline, animated dots, smooth reveal effects.