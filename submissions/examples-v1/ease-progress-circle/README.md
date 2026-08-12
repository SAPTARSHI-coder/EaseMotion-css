# Ease Progress Circle

A lightweight, responsive circular progress indicator built with **SVG** and **pure CSS**. The component uses CSS custom properties to control the progress value, color, size, and animation duration, making it easy to customize without JavaScript.

---

## Features

- 🎯 Pure CSS + SVG implementation
- 🎨 Customizable using CSS variables
- ⚡ Smooth progress animation on page load
- 📊 Center percentage label
- 🌙 Dark mode compatible
- 📱 Responsive layout
- 🚫 No JavaScript required

---

## Demo

Open **demo.html** in any modern browser.

The demo includes three examples:

- Project Completion (75%)
- CPU Usage (50%)
- Storage Usage (92%)

Each example demonstrates different colors, values, and animation durations.

---

## Folder Structure

```
submissions/
└── examples/
    └── ease-progress-circle/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## Usage

```html
<div
    class="ease-progress-circle"
    style="
        --ease-progress-value:75;
        --ease-progress-color:#3b82f6;
        --ease-progress-size:180px;
        --ease-progress-duration:2s;
">

    <svg viewBox="0 0 120 120">

        <circle
            class="track"
            cx="60"
            cy="60"
            r="52">
        </circle>

        <circle
            class="progress"
            cx="60"
            cy="60"
            r="52">
        </circle>

    </svg>

    <span class="label">75%</span>

</div>
```

---

## CSS Variables

| Variable | Description | Default |
|----------|-------------|----------|
| `--ease-progress-value` | Progress percentage (0–100) | `75` |
| `--ease-progress-color` | Progress stroke color | `#3b82f6` |
| `--ease-progress-size` | Component width and height | `180px` |
| `--ease-progress-duration` | Animation duration | `2s` |

---

## How It Works

The component uses an SVG circle with a fixed circumference. The visible progress is created by animating the `stroke-dashoffset` property from the full circumference to the calculated progress value.

```css
stroke-dasharray: var(--circumference);

stroke-dashoffset: calc(
    var(--circumference) -
    (var(--circumference) * var(--ease-progress-value) / 100)
);
```

This produces a smooth filling animation without JavaScript.

---

## Customization

Change the progress value:

```css
--ease-progress-value:90;
```

Change the color:

```css
--ease-progress-color:#10b981;
```

Change the size:

```css
--ease-progress-size:220px;
```

Change the animation speed:

```css
--ease-progress-duration:3s;
```

---

## Accessibility

- Semantic HTML structure
- Percentage displayed in the center
- High contrast colors
- Responsive sizing
- Motion limited to a single smooth animation

---

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## Why It Fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing:

- Human-readable class names
- Lightweight animations
- Utility-style customization with CSS variables
- Smooth, reusable motion effects
- Zero JavaScript dependency

It can be used in dashboards, analytics panels, portfolio skill sections, profile pages, statistics cards, and reporting interfaces.

---

## License

Created as an example contribution for the EaseMotion CSS examples library.