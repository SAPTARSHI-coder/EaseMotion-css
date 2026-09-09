# Typing Speed Test Demo

## What does this do?
An interactive typing speed test that measures WPM, accuracy, and characters typed over a 60-second countdown. Demonstrates combining multiple EaseMotion CSS features into a single interactive demo.

## How is it used?
Open `demo.html` in a browser and click **Start Test**. Type the displayed prompt as quickly and accurately as possible. Stats update in real time: WPM (count-up animation), accuracy percentage, and a circular progress timer. Results panel animates in on completion.

## Framework features showcased
- `ease-card`, `ease-card-shadow` — card component
- `ease-btn`, `ease-btn-primary`, `ease-btn-lg`, `ease-btn-pill` — button variants
- `ease-fade-in` — entrance animation
- `ease-flex`, `ease-grid`, `ease-grid-cols-3` — layout utilities
- `ease-text-*`, `ease-font-bold`, `ease-text-muted` — typography
- `ease-input` — form input styling
- `--ease-color-*` tokens — design token usage
- `prefers-reduced-motion` support

## File structure
| File | Purpose |
|------|---------|
| `demo.html` | Main page with stats bar, prompt, input, start button, results panel |
| `style.css` | Imports framework, custom styles for prompt highlighting, timer ring, results animation |
| `script.js` | Timer, input matching, WPM/accuracy calculation, count-up display |
| `README.md` | This file |

## Accessibility
- Respects `prefers-reduced-motion` (disables animations)
- Works on touch devices
- Proper focus management on start
