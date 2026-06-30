# Stand-Up Comedian Personal Brand Landing Page

Closes #24823 — Full personal brand site for stand-up comedian Marcus Bell.
Bold, humorous personality aesthetic built with EaseMotion CSS classes.

## Sections

| Section | Content |
|---------|---------|
| Hero | Spotlight effect, mic visual with animated laugh meter |
| Tour Dates | 6 shows with availability badges and ticket links |
| Videos | 3 clip cards with hover play overlay and view counts |
| About | Split layout with portrait, bio, credits, stats |
| Press | 3 media quote cards with star ratings |
| Merch | 4 product cards with new/signed badges |
| Newsletter | Email signup with audience count |
| Footer | Quote tagline, links, copyright |

## EaseMotion Classes Used

| Class | Where |
|-------|-------|
| ease-fade-in | Hero tag, buttons, mic visual |
| ease-slide-up | Hero headline |
| ease-slide-left | About portrait |
| ease-slide-right | About text block |
| ease-zoom-in | Mic laugh-meter visual |
| ease-on-scroll | All below-fold sections |
| ease-delay-1 to 6 | Staggered grid and list entrances |
| ease-hover-lift | Video cards, press cards, merch cards |
| ease-hover-scale | Nav CTA, primary buttons, subscribe button |
| ease-hover-glow | Tour items, mic visual |

## Files
- demo.html — self-contained landing page, no build step
- style.css  — EaseMotion utilities + all page styles
- README.md  — this file

## Features
- Spotlight cone effect in hero (pure CSS)
- Animated laugh-meter bars under mic icon
- Tour availability badges (Sold Out / Few Left / Available)
- Video cards with hover play overlay
- Signed/New badges on merch cards
- IntersectionObserver scroll-triggered entrances
- Fully responsive, realistic copy, prefers-reduced-motion respected