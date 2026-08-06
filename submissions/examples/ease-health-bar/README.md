# Health Bar · Deplete & Regenerate

A sleek, interactive health bar component with depletion and regeneration mechanics. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Dynamic Health Bar** – visually fills and empties with smooth transitions.
- **Deplete & Regenerate** – buttons to reduce or increase health by fixed amounts.
- **Low Health Warning** – bar pulses red when health drops to 25% or below.
- **Keyboard Shortcuts** – quick actions without touching the mouse.
- **Clamped Values** – health stays within 0–100 range.

## How to Use

1. Open `index.html` in your browser.
2. Use the buttons:
   - **Deplete 15** – lowers health by 15 points.
   - **Regen 10** – raises health by 10 points.
   - **Reset** – restores health to 100.
3. Or use keyboard shortcuts:
   - `D` – Deplete 15
   - `R` – Regenerate 10
   - `X` – Reset

## Files

- `index.html` – main page with embedded JavaScript logic.
- `style.css` – all visual styling for the health bar and layout.
- `README.md` – project documentation (this file).

## Customization

You can adjust the depletion/regeneration amounts by modifying the values in the JavaScript:

```javascript
deplete(15);   // change 15 to any number
regenerate(10); // change 10 to any number