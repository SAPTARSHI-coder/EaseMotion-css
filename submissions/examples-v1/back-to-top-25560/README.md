# Back-to-Top Button Component

Floating button that appears on scroll past a threshold and smoothly scrolls to top on click.

## Files

- `style.css` — Component styles
- `script.js` — Scroll listener with show/hide
- `demo.html` — Live demo

## Classes

| Class                                           | Purpose                                   |
| ----------------------------------------------- | ----------------------------------------- |
| `.ease-back-to-top`                             | Fixed floating button (hidden by default) |
| `.ease-visible`                                 | Revealed when scrolled past threshold     |
| `.ease-back-to-top-sm` / `.ease-back-to-top-lg` | Size variants                             |
| `.ease-back-to-top-outline`                     | Outline variant                           |
| `.ease-back-to-top-secondary`                   | Secondary color variant                   |
| `.ease-back-to-top-raised`                      | Extended offset from edges                |

## JS

- Default scroll threshold: 400px
- Smooth scroll via `scrollTo({ behavior: 'smooth' })`
- Respects `prefers-reduced-motion`
- Passive scroll listener
