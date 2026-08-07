# Sliding Pill Tabs

A reusable tab navigation component featuring a pill-shaped indicator that smoothly slides to the active tab. Built with pure HTML and CSS, it provides modern navigation animations without requiring JavaScript.

## Features

* 🎯 Smooth sliding pill animation
* ↔️ Horizontal sliding tabs
* ↕️ Vertical sliding tabs
* 🏀 Bounce easing animation
* ⚡ Instant snap (no animation) variant
* 🎨 Fully customizable using CSS variables
* 📱 Responsive and lightweight
* 🚫 No JavaScript required

---

## Installation

Include the stylesheet in your project:

```html
<link rel="stylesheet" href="style.css">
```

---

## Basic Usage

```html
<div class="ease-pill-tabs horizontal">
  <input type="radio" name="tabs" id="daily" checked>
  <input type="radio" name="tabs" id="weekly">
  <input type="radio" name="tabs" id="monthly">

  <div class="pill"></div>

  <label for="daily">Daily</label>
  <label for="weekly">Weekly</label>
  <label for="monthly">Monthly</label>
</div>
```

---

## Variants

### Horizontal

```html
<div class="ease-pill-tabs horizontal">
  ...
</div>
```

Smooth horizontal sliding indicator.

---

### Vertical

```html
<div class="ease-pill-tabs vertical">
  ...
</div>
```

Perfect for settings pages, side navigation, and dashboards.

---

### Bounce

```html
<div class="ease-pill-tabs bounce">
  ...
</div>
```

Uses a spring-like easing effect for a more playful interaction.

---

### Snap

```html
<div class="ease-pill-tabs snap">
  ...
</div>
```

Moves the indicator instantly without animation.

---

## Customization

The component is designed around CSS custom properties.

| Variable        | Description                  | Default   |
| --------------- | ---------------------------- | --------- |
| `--pill-bg`     | Active pill background color | `#2563eb` |
| `--pill-radius` | Pill border radius           | `999px`   |
| `--tab-bg`      | Container background         | `#f3f4f6` |
| `--text-color`  | Inactive tab text color      | `#374151` |
| `--active-text` | Active tab text color        | `#ffffff` |
| `--padding-x`   | Horizontal tab padding       | `1.4rem`  |
| `--padding-y`   | Vertical tab padding         | `0.8rem`  |
| `--gap`         | Space between tabs           | `0.4rem`  |
| `--duration`    | Animation duration           | `0.35s`   |
| `--easing`      | Animation timing function    | `ease`    |

Example:

```css
:root {
  --pill-bg: #7c3aed;
  --active-text: #fff;
  --duration: 0.45s;
  --easing: ease-in-out;
  --pill-radius: 20px;
}
```

---

## Use Cases

* Dashboard section switchers
* Settings page navigation
* Pricing plan toggles
* Filter category selectors
* Analytics dashboards
* Mobile navigation components

---

## Browser Support

Works in all modern browsers that support:

* CSS Grid
* CSS Custom Properties
* CSS Transforms
* CSS Transitions

---

## License

Released as part of the **EaseMotion CSS** component library.
