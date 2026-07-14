# ease-stopwatch-timer

Closes #39865

A CSS-first stopwatch/timer component for EaseMotion CSS, with Start / Stop / Reset controls and a pulsing "active" ring animation while the timer is running.

## Preview

Open `demo.html` directly in a browser — no build step required.

## What it demonstrates

- **ease-fade-in** — heading entrance
- **ease-slide-up** — component entrance animation
- **ease-hover-grow** — button hover feedback
- **ease-card / ease-card-shadow** — base container styling
- A custom @keyframes pulse (ease-stopwatch-pulse) that respects prefers-reduced-motion

## Features

- HH:MM:SS display with tabular numerals (no layout jitter as digits change)
- Start / Stop / Reset controls with disabled-state handling
- Pulsing ring animation while the stopwatch is actively running
- Reduced-motion users get a static (non-pulsing) ring automatically
- Pure vanilla JS — no dependencies

## Files

| File | Purpose |
|---|---|
| demo.html | Markup + stopwatch logic |
| style.css | Component styling, animation, responsive sizing |
| README.md | This file |