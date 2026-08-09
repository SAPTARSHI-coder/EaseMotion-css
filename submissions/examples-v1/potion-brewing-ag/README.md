# Potion Brewing

A magical animated potion flask with bubbling liquid, color-changing
potions, rising steam, and sparkle bursts — a fully interactive
alchemy-themed loading/decorative component.

## Files
- `demo.html` — markup for the flask, readout, and controls
- `style.css` — glass/flask styling, bubble/steam/sparkle keyframes, glow effects

## Usage
Open `demo.html` in a browser. Use the controls to:
- **Brew** — triggers the cork pop, intensified bubbles, steam burst, and glow pulse
- **Change Color** — cycles through 8 potion colors (Purple, Blue, Green, Red, Gold, Pink, Cyan, Orange)
- **Reset** — returns to the starting purple potion at default speed
- **Speed slider** — controls how fast bubbles and steam animate

## Details
- 20 bubbles rising through the liquid with randomized size/timing
- 8 steam trails drifting upward with organic curl
- 10 sparkles bursting radially on every color change
- CSS custom properties (`--potion-color`, `--potion-glow`) drive theming
- Respects `prefers-reduced-motion` by disabling animations/transitions

## Customization
- Edit the `COLORS` array in `script.js` to add/remove potion hues
- Adjust bubble/steam counts by changing the loop counts in `buildBubbles()` / `buildSteam()`
- Change flask size by resizing `.potion-flask` / `.flask-glass` in `style.css`