# CSS Wobble-Focus Tooltip (Glassmorphism)

A pure CSS tooltip component utilizing a smooth "Wobble-Focus" keyframe animation, paired with a modern Glassmorphism UI aesthetic. 

Resolves Issue: #34453

## ✨ Features
* **Zero JavaScript:** Driven entirely by CSS `:hover` and `:focus-visible` pseudo-classes.
* **Glassmorphism UI:** Implements `backdrop-filter`, semi-transparent backgrounds, and directional borders for a frosted glass effect.
* **Accessible:** Uses `aria-describedby` and responds perfectly to keyboard tabbing without trapping focus.
* **Customizable:** Uses CSS Custom Properties (`:root`) allowing easy tweaks to the wobble rotation, scaling, and duration.

## 🛠 Usage
Include the HTML structure in your layout and link the CSS file.

Customize the animation and look via the root variables in `style.css`:
```css
:root {
    --wobble-duration: 0.6s;
    --wobble-rotate-max: 4deg;
    --glass-blur: blur(12px);
}