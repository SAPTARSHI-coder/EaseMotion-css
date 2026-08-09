# Responsive User Activity Feed Dashboard

A pure HTML and CSS demo that showcases EaseMotion CSS animation utilities through a polished, production-quality SaaS activity feed UI.

## Overview

This demo renders a dark-gradient dashboard panel containing six activity cards arranged in a vertical timeline feed. Every entrance animation is powered exclusively by EaseMotion CSS utility classes — no custom `@keyframes`, no JavaScript. The staggered delay chain creates a natural cascade as cards animate into view, communicating recency and hierarchy at a glance.

## Features

- **Six unique activity cards** — each with a distinct user, action, description, and timestamp.
- **Circular avatar initials** — color-coded per user using a curated six-color palette.
- **Colored status indicators** — green (completed), blue (active), and amber (pending) dots with a soft glow.
- **Category badges** — pill-shaped labels for Document, Code Review, Onboarding, Milestone, Design, and Planning.
- **Timeline connector** — a vertical line links avatars into a continuous activity thread.
- **Hover elevation** — cards lift subtly on hover using CSS `transition` only.
- **Glassmorphism panel** — the outer feed panel uses `backdrop-filter: blur` for depth without custom animations.
- **CSS custom properties** — all design tokens are defined in `:root` for easy theming.
- **Fully responsive** — adapts cleanly across desktop, tablet, and mobile viewports.
- **Accessible semantics** — uses `main`, `header`, `section`, `ol`, `article`, `time`, and `aria-*` attributes.
- **Reduced-motion safe** — hover transitions are suppressed via `prefers-reduced-motion`.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Semantic markup for the activity feed dashboard. |
| `style.css` | Responsive layout, design tokens, card styles, and hover effects. |
| `README.md` | Usage notes and implementation summary. |

## How to Run

1. Clone or download the repository.
2. Open `submissions/examples/activity-feed-dashboard/demo.html` in any modern browser.
3. No build step or local server is required.

## EaseMotion CSS Classes Used

| Class | Applied to | Effect |
|-------|-----------|--------|
| `ease-fade-in` | `<header>`, feed meta bar, all six activity cards | Fades in from transparent on page load |
| `ease-slide-up` | Feed panel, all six activity cards | Slides up from below into final position |
| `ease-delay-100` | Feed panel, card 1 | 100 ms entrance delay |
| `ease-delay-200` | Feed meta bar, card 2 | 200 ms entrance delay |
| `ease-delay-300` | Card 3 | 300 ms entrance delay |
| `ease-delay-400` | Card 4 | 400 ms entrance delay |
| `ease-delay-500` | Card 5 | 500 ms entrance delay |
| `ease-delay-600` | Card 6 | 600 ms entrance delay |

The delay chain produces a smooth stagger effect where the header fades in first, the panel slides up, and each card follows in sequence — all driven by EaseMotion utilities with zero custom animation code.

## Responsive Behavior

| Viewport | Layout |
|----------|--------|
| Desktop (> 1023px) | Full-width panel, 48 px avatar column, generous card padding |
| Tablet (641px – 1023px) | Reduced vertical padding, tighter feed gutters |
| Mobile (≤ 600px) | 40 px avatar column, stacked card header (identity + badge), condensed padding, no horizontal overflow |