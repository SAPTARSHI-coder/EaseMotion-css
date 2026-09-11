# ease-card-rotate-on-hover

Cards that rotate slightly on hover with a 3D perspective effect. Each card uses a perspective parent, and the inner container rotates on the Y-axis on hover.

## Features

- Subtle Y-axis rotation on hover
- 3D perspective for realistic depth
- Backface hidden for clean rendering
- Customizable via CSS custom properties
- Smooth cubic-bezier transition

## Usage

Wrap content in `.rot-inner` inside `.rot-card`:

```html
<div class="rot-card">
  <div class="rot-inner">
    <h2>Title</h2>
    <p>Description</p>
  </div>
</div>
```

Customize via `:root` variables:

```css
--card-rot-duration: 0.4s;
--card-rot-degree: 8deg;
--card-rot-bg: #ffffff;
--card-rot-shadow: 0 4px 20px rgba(0,0,0,0.08);
--card-rot-radius: 16px;
```

## Accessibility

Prefers reduced motion is respected -- rotation is disabled.
