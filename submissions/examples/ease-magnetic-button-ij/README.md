# Magnetic Button

Buttons that magnetically pull toward the cursor on hover, with a smooth spring-back effect when the mouse leaves.

## Features

- Magnetic pull effect toward cursor within a configurable radius
- Smooth spring-back animation on mouse leave
- Click pulse feedback
- Multiple button variants (solid, outline, sizes)
- Customizable via CSS custom properties

## Usage

```html
<button class="magnetic-btn" data-strength="0.3" data-radius="150">Click Me</button>
```

```css
:root {
  --mb-duration: 0.4s;
  --mb-btn-color: #3b82f6;
  --mb-btn-hover: #2563eb;
  --mb-magnetic-radius: 150px;
  --mb-shadow: 0 4px 14px rgba(59, 130, 246, 0.35);
  --mb-radius: 12px;
}
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--mb-duration` | `0.4s` | Spring-back transition duration |
| `--mb-btn-color` | `#3b82f6` | Default button background |
| `--mb-btn-hover` | `#2563eb` | Hover background color |
| `--mb-magnetic-radius` | `150px` | Radius of magnetic effect |
| `--mb-shadow` | `...` | Button box shadow |
| `--mb-radius` | `12px` | Button border radius |

## Data Attributes

| Attribute | Default | Description |
|---|---|---|
| `data-strength` | `0.3` | How strongly the button follows the cursor |
| `data-radius` | `150` | Detection radius in pixels |
