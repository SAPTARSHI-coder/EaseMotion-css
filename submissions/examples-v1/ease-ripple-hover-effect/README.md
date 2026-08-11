# Ease Ripple Hover Effect

A smooth expanding ripple animation triggered on hover and click. The ripple originates from the interaction point and expands outward while fading away, creating an interactive and modern visual effect.

## Features

- **Pure CSS + minimal JS** — Lightweight implementation with smooth animations
- **Multiple color variants** — Primary, Success, Danger, Warning, Info, Purple, Pink, Dark, Light
- **Style variants** — Solid, Outline, Ghost, Soft
- **Size variants** — Small, Default, Large, Extra Large
- **Shape variants** — Rounded, Pill, Square
- **Component extensions** — Cards, Nav items, Icon buttons
- **Accessible** — Focus states and keyboard navigation support
- **60 FPS animation** — GPU-accelerated with transform and opacity

## Installation

Copy the `style.css` to your project and add the required HTML structure.

## Usage

### Basic Button

```html
<button class="ease-ripple" onclick="createRipple(event, this)">
  Click Me
</button>
```

### Required JavaScript

```javascript
function createRipple(event, element) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
    
    element.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}
```

## Color Variants

```html
<button class="ease-ripple ease-ripple-primary">Primary</button>
<button class="ease-ripple ease-ripple-success">Success</button>
<button class="ease-ripple ease-ripple-danger">Danger</button>
<button class="ease-ripple ease-ripple-warning">Warning</button>
<button class="ease-ripple ease-ripple-info">Info</button>
<button class="ease-ripple ease-ripple-purple">Purple</button>
<button class="ease-ripple ease-ripple-pink">Pink</button>
<button class="ease-ripple ease-ripple-dark">Dark</button>
<button class="ease-ripple ease-ripple-light">Light</button>
```

## Style Variants

### Outline
```html
<button class="ease-ripple ease-ripple-outline">Outline</button>
```

### Ghost
```html
<button class="ease-ripple ease-ripple-ghost">Ghost</button>
```

### Soft
```html
<button class="ease-ripple ease-ripple-soft">Soft</button>
```

## Size Variants

```html
<button class="ease-ripple ease-ripple-sm">Small</button>
<button class="ease-ripple">Default</button>
<button class="ease-ripple ease-ripple-lg">Large</button>
<button class="ease-ripple ease-ripple-xl">Extra Large</button>
```

## Shape Variants

```html
<button class="ease-ripple">Default</button>
<button class="ease-ripple ease-ripple-pill">Pill</button>
<button class="ease-ripple ease-ripple-square">Square</button>
```

## Component Examples

### Interactive Card
```html
<div class="ease-ripple-card" onclick="createRipple(event, this)">
    <h3>Card Title</h3>
    <p>Card description text goes here.</p>
</div>
```

### Navigation Item
```html
<div class="ease-ripple-nav active">Home</div>
<div class="ease-ripple-nav">About</div>
```

### Icon Button
```html
<button class="ease-ripple ease-ripple-icon">
    <svg>...</svg>
</button>
```

### Full Width Button
```html
<button class="ease-ripple ease-ripple-block">Full Width</button>
```

## CSS-Only Alternative

For a pure CSS approach without JavaScript (limited to hover-only):

```html
<button class="ease-ripple-cssonly ease-ripple-primary">
    CSS Only Ripple
</button>
```

## Customization

### Change Ripple Color
```html
<button class="ease-ripple">
    <span class="ripple-wave ripple-wave-dark"></span>
    Custom Color
</button>
```

### Animation Speed
```html
<button class="ease-ripple ease-ripple-slow">Slow</button>
<button class="ease-ripple ease-ripple-fast">Fast</button>
```

## Browser Support

Works in all modern browsers that support:
- CSS transforms
- CSS animations
- CSS custom properties (variables)

## Files

- `demo.html` — Interactive demo with all variants
- `style.css` — All ripple effect styles and utilities
- `README.md` — Documentation
