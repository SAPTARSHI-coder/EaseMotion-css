# CSS Glitch-Flicker Stepper (Glassmorphism)

A cyberpunk-inspired, lightweight UI stepper built entirely with pure HTML/CSS. It combines a clean glassmorphism backdrop with an erratic, keyframed glitch-flicker animation to signify the active state.

## 🎯 Features
- **Pure CSS/HTML:** Zero JavaScript overhead.
- **Glassmorphism Theme:** Utilizes CSS `backdrop-filter` and semi-transparent properties for a modern, frosted glass look.
- **Glitch-Flicker Animation:** Custom `@keyframes` that manipulate `transform`, `text-shadow`, and `opacity` to create a synthetic rendering error effect.
- **Fully Responsive:** Automatically stacks into a vertical timeline configuration on mobile viewports.
- **Accessible:** Respects `@media (prefers-reduced-motion: reduce)`.

## 📁 Files Included
```text
demo.html
style.css
README.md
# CSS Glitch-Flicker Stepper

A futuristic stepper component with a glitch flicker animation for active steps, designed for creative portfolio layouts.

## Features

- Pure HTML & CSS
- Glitch flicker animation
- Responsive design
- CSS Custom Properties
- Lightweight
- Accessible using `prefers-reduced-motion`

## Folder Structure

```
glitch-flicker-stepper/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<div class="step active">
    <div class="circle">1</div>
</div>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## CSS Variables

```css
--bg
--card
--primary
--inactive
--text
--duration
```

## Browser Support

- Chrome
- Firefox
- Edge
- Safari
