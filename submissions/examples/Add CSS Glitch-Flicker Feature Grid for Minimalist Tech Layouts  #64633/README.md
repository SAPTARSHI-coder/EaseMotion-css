# CSS Glitch-Flicker Feature Grid

A minimalist, tech-inspired feature grid showcasing pure CSS glitch and flicker animations. Designed for modern web applications, portfolios, and landing pages with a cyberpunk or high-tech aesthetic.

## 🚀 Features

- **Pure CSS / HTML:** No external JavaScript frameworks or libraries required.
- **Glitch Text Animation:** Smooth and engaging glitch effect using `clip-path` and pseudo-elements.
- **Flicker Interaction:** Cyberpunk-style hover flicker effect on card icons.
- **Glassmorphism Elements:** Subtle background blur and semi-transparent cards.
- **Fully Responsive:** Adapts seamlessly to desktop, tablet, and mobile screens.
- **Accessible:** Includes `prefers-reduced-motion` support for users who are sensitive to animations.

## 📂 File Structure

- `demo.html`: The showcase HTML layout.
- `style.css`: All CSS styling and keyframe animations.
- `README.md`: Documentation detailing usage and customization.

## 🎨 CSS Custom Properties (Variables)

You can easily customize the theme by modifying the CSS variables in the `:root` selector:

```css
:root {
    --bg-color: #0f172a;           /* Main background color */
    --text-main: #f8fafc;          /* Primary text color */
    --text-muted: #94a3b8;         /* Secondary/muted text color */
    --accent-glow: #38bdf8;        /* Main accent and glow color */
    --accent-glitch-1: #ef4444;    /* First glitch color layer */
    --accent-glitch-2: #3b82f6;    /* Second glitch color layer */
    --card-bg: rgba(30, 41, 59, 0.5); /* Card background (supports backdrop filter) */
    --card-border: #334155;        /* Card border color */
    --font-mono: 'Courier New', Courier, monospace;
    --font-sans: 'Inter', system-ui, sans-serif;
}
```

## 🛠 Usage

1. Copy the HTML structure from `demo.html` into your project.
2. Include the CSS from `style.css`.
3. Apply the `.glitch-text` class to any text you want to glitch (remember to set the `data-text` attribute to match the text content).
4. Use the `.glitch-flicker` class on icons or text inside interactive elements for a hover flicker effect.

## ♿ Accessibility

This component respects the user's OS-level motion preferences. If a user has `prefers-reduced-motion` enabled, all glitching, flickering, and sliding animations will automatically be disabled to prevent discomfort.
