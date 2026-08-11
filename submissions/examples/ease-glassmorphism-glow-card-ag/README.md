# CSS Glassmorphism Glow Card

A modern, highly aesthetic card component combining glassmorphism with an interactive, animated glowing orb. It's built entirely in CSS and HTML without any JavaScript, fitting perfectly into the EaseMotion CSS philosophy.

## Features

- **Pure CSS**: Zero JavaScript. Uses advanced CSS techniques for interactive states.
- **Glassmorphism**: Leverages `backdrop-filter: blur()` and subtle transparent borders to create a premium frosted glass effect.
- **Dynamic Glow Orb**: A hidden gradient orb that smoothly reacts on hover by scaling and changing opacity, illuminating the card from behind.
- **Micro-Animations**: A sweeping light reflection passes over the card on hover using pseudo-elements and skewing.
- **Accessible & Responsive**: Fully supports the `prefers-reduced-motion` and `prefers-color-scheme` media queries to automatically adapt to user preferences.

## Usage

Simply copy the HTML structure from `demo.html` and the CSS from `style.css` into your project. 

```html
<div class="glass-card">
    <div class="glow-orb"></div>
    <div class="glass-content">
        <!-- Your content here -->
    </div>
</div>
```

## CSS Variables

Easily tweak the colors, glow effects, and transitions by modifying the variables at the root of the file:

```css
:root {
    --ease-bg: #0f172a;
    --ease-glass: rgba(255, 255, 255, 0.05);
    --ease-glass-border: rgba(255, 255, 255, 0.1);
    --ease-text: #f8fafc;
    --ease-text-muted: #94a3b8;
    --ease-glow-1: #8b5cf6;
    --ease-glow-2: #3b82f6;
}
```
