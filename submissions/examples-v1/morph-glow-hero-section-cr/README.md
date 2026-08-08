# Morph-Glow Hero Section

A modern, premium hero section for personal portfolios, developer websites, startup landing pages and creative agencies. Built with pure HTML5 and CSS3 — no JavaScript, no frameworks, and no external assets.

## Overview

The Morph-Glow Hero pairs a continuously morphing glow background with a glassmorphism content card and a CSS-only avatar illustration. Radial gradient blobs drift and morph behind the content, decorative shapes float in the foreground, and the copy reveals with a soft fade-up-and-deblur animation on load. Everything is theme-driven through CSS custom properties, so the whole look can be re-skinned by editing a single `:root` block.

## Folder Structure

```
morph-glow-hero-section-cr/
├── demo.html
├── style.css
└── README.md
```

## Features

- Large heading with a gradient-highlighted keyword
- Descriptive subtitle and a metrics row
- Primary and secondary CTA buttons with a hover lift
- Glassmorphism content card with a soft glowing border
- CSS-only avatar illustration placeholder (no images)
- Three morphing, drifting glow blobs
- Floating decorative shapes (ring, dot, square)
- Continuously animated background gradient
- Content reveal animation (opacity + translateY + blur)
- Pulsing glow elements
- Fully responsive, mobile-first layout
- `prefers-reduced-motion` support and keyboard-friendly focus states

## CSS Variables

All theming is centralized in the `:root` block for quick customization.

| Variable | Purpose |
| --- | --- |
| `--primary` | Primary brand color used in gradients and accents |
| `--secondary` | Secondary brand color for gradients and hover states |
| `--background` | Base page background color |
| `--surface` | Translucent glass surface color |
| `--text` | Primary text color |
| `--glow-color` | Color of the soft glow and card shadow |
| `--hero-radius` | Corner radius of the glass card |
| `--hero-shadow` | Depth shadow of the glass card |
| `--animation-speed` | Base duration driving the morph and drift animations |
| `--blur-strength` | Blur radius applied to the glow blob layer |

Additional helper tokens (`--accent`, `--surface-strong`, `--border`, `--text-muted`, `--radius-pill`, `--ease`, `--font`, `--space`) are also exposed for finer control.

## Responsive Behavior

The layout is mobile-first and adapts across three ranges:

- **Desktop (≥ 900px):** two-column grid with the copy beside the glass card.
- **Tablet (641px – 899px):** single-column stack with fluid spacing.
- **Mobile (≤ 640px):** single column with centered copy, CTAs and metrics.

Typography and spacing scale fluidly with `clamp()`, and blobs use viewport units so the glow adapts to any screen size.

## Accessibility

- Semantic landmarks (`main`, `section`, `article`) structure the content.
- Decorative layers are marked `aria-hidden` so assistive tech ignores them.
- Text and background colors meet accessible contrast ratios.
- All interactive elements expose a clear `:focus-visible` outline.
- `@media (prefers-reduced-motion: reduce)` disables morphing, floating, spinning and transitions.

## Browser Support

Works in all current versions of Chrome, Edge, Firefox and Safari. The glass card uses `backdrop-filter` with a `-webkit-` prefix for Safari; where `backdrop-filter` is unsupported, the card falls back to a solid translucent surface. No build step, framework or JavaScript is required.

## Usage

1. Copy the `morph-glow-hero-section-cr` folder into your project.
2. Open `demo.html` directly in any modern browser — no server needed.
3. To reuse in an existing page, link the stylesheet and drop in the `.hero` markup:

```html
<link rel="stylesheet" href="style.css">
```

4. Edit the heading, subtitle, buttons and card content, then adjust the `:root` variables to match your brand.

## Screenshot

_Add a screenshot of the rendered hero here (e.g. `screenshot.png`)._

```
+------------------------------------------------------+
|  [ Morphing glow blobs + floating shapes ]           |
|                                                      |
|  CREATIVE DEVELOPER & DESIGNER                        |
|  Build bold digital work that GLOWS with motion.     |
|  Short portfolio description...           +--------+ |
|  [ View My Work ]  [ Let's Talk ]         | Glass  | |
|  8+   120   30                            | Card   | |
|                                           +--------+ |
+------------------------------------------------------+
```
