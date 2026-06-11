# Animated Activity Feed Timeline Component

A modern, motion-first activity feed timeline for dashboards and collaboration UIs.

## What it includes

- Timeline markers (dots) + vertical connectors between events
- Activity cards with **title**, **description**, and **timestamp**
- Staggered reveal animations (stagger via `--af-delay`)
- Smooth hover micro-interactions (card lift/shift, connector glow, icon drift)
- Responsive layout (stays clean on mobile)
- Keyboard accessibility: cards are focusable and show a visible focus ring
- `prefers-reduced-motion` support

## Files

- `demo.html` – complete HTML demo
- `style.css` – all styling + animations (pure CSS)

## Usage

```html
<link rel="stylesheet" href="../../../easemotion.css" />
<link rel="stylesheet" href="./style.css" />

<section class="ease-af"> ... </section>
```

## Why this fits EaseMotion CSS

EaseMotion CSS is about motion-enhanced readability. This component demonstrates how timeline structure + subtle animation improves scanning of user actions and system updates—without adding JavaScript or heavy dependencies.
