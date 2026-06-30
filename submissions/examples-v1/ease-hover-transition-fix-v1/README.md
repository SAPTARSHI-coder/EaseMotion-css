# ease-hover-transition-fix

## Problem
All `ease-hover-*` classes in `animations.css` used `transition: all` which:
- Overrides any transitions the user has set on the element
- Causes performance issues (browser animates every property)

## Fix
Replaced `transition: all` with specific property names:

| Class | Before | After |
|-------|--------|-------|
| `ease-hover-grow` | `transition: all 0.3s ease` | `transition: transform 0.3s ease` |
| `ease-hover-shrink` | `transition: all 0.3s ease` | `transition: transform 0.3s ease` |
| `ease-hover-fade` | `transition: all 0.3s ease` | `transition: opacity 0.3s ease` |
| `ease-hover-brighten` | `transition: all 0.3s ease` | `transition: filter 0.3s ease` |
| `ease-hover-dim` | `transition: all 0.3s ease` | `transition: filter 0.3s ease` |
| `ease-hover-color` | `transition: all 0.3s ease` | `transition: color 0.3s ease, background-color 0.3s ease` |

## How to Test
Open `demo.html` in a browser and hover over each box.

## Files
- `style.css` — fixed transition classes
- `demo.html` — live demo
- `README.md` — this file