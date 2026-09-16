# CSS-only Tabs with `:has()`

A responsive, lightweight tab component built entirely with **HTML5 and CSS3**. It uses native radio inputs and the modern CSS `:has()` relational selector to switch between tab panels without JavaScript.

## ✨ Features

* Pure HTML5 and CSS3
* No JavaScript required
* Uses the modern `:has()` selector
* Four example tabs
* Animated active-tab indicator
* Smooth panel transitions
* Responsive desktop, tablet, and mobile layouts
* Native keyboard-friendly radio controls
* Visible focus states
* CSS Custom Properties
* `prefers-reduced-motion` support
* No external dependencies

## 📂 Folder Structure

```text
css-only-tabs/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

1. Open `demo.html` in a modern browser.
2. Select a tab to display its corresponding content.
3. The selected state is controlled by a native radio input.
4. CSS `:has()` detects the selected input and displays the matching panel.
5. Customize the labels, content, colors, spacing, and animation in `style.css`.

## 🔧 How It Works

Each tab is associated with a radio input:

```html
<input
    type="radio"
    name="tabs"
    id="tab-features"
>
```

The corresponding panel uses a class:

```html
<article class="tab-panel panel-features">
    <h2>Modern CSS Features</h2>
    <p>
        The component uses modern CSS selectors
        without JavaScript.
    </p>
</article>
```

The `:has()` selector detects which radio input is checked:

```css
.tabs:has(#tab-features:checked)
    .panel-features {
    display: block;
}
```

This provides tab switching without JavaScript.

## 🎨 CSS Custom Properties

The component exposes several CSS variables for customization.

| Variable         | Description                   |
| ---------------- | ----------------------------- |
| `--bg`           | Page background               |
| `--surface`      | Main tab container background |
| `--surface-soft` | Secondary background          |
| `--primary`      | Main accent color             |
| `--primary-dark` | Dark accent color             |
| `--primary-soft` | Soft accent background        |
| `--text`         | Main text color               |
| `--muted`        | Secondary text color          |
| `--border`       | Border color                  |
| `--radius`       | Component border radius       |
| `--transition`   | Animation transition duration |
| `--shadow`       | Container shadow              |

### Example

```css
:root {
    --primary: #2563eb;
    --primary-dark: #1d4ed8;
    --primary-soft: #eff6ff;

    --radius: 18px;
    --transition: 0.3s ease;
}
```

## 🎯 Tab States

The component has four example tabs:

1. **Overview**
2. **Features**
3. **Usage**
4. **Accessibility**

Only the selected panel is displayed.

The active tab receives:

* Accent text color
* Active background
* Animated bottom indicator

## ✨ Active Indicator

The active indicator is created with a pseudo-element:

```css
.tab-list label::after {
    content: "";

    position: absolute;

    height: 3px;

    background: var(--primary);

    transform: scaleX(0);
}
```

When the corresponding tab is selected, the indicator expands:

```css
.tabs:has(#tab-features:checked)
    .tab-list label[for="tab-features"]::after {
    opacity: 1;
    transform: scaleX(1);
}
```

## 📱 Responsive Design

The tabs adapt to different viewport sizes.

### Desktop

Four tabs are displayed in a single horizontal row.

### Tablet

Tab spacing and typography are reduced while maintaining comfortable interaction areas.

### Mobile

The tabs switch to a two-column layout.

On very small screens, the tabs become a single-column list.

## ⌨️ Keyboard Interaction

The component uses native radio inputs, allowing the browser's built-in keyboard interaction to manage the selected tab state.

The interface also includes visible focus styling to make keyboard interaction easier to identify.

## ♿ Accessibility

Accessibility considerations include:

* Semantic `<main>`, `<section>`, `<header>`, and `<article>` elements
* Native radio controls
* Proper heading hierarchy
* Visible focus indicators
* Responsive touch targets
* Reduced-motion support
* No JavaScript dependency

The radio controls are visually hidden but remain available to assistive technologies and keyboard interaction.

## 🌙 Reduced Motion

The component respects the user's motion preference:

```css
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation: none !important;
        transition: none !important;
    }
}
```

This disables decorative animations and transitions while preserving the tab functionality.

## ⚡ Performance

The component requires:

* No JavaScript
* No external libraries
* No frameworks
* No external assets

All interaction and visual states are handled by the browser's native HTML and CSS capabilities.

## 🌐 Browser Support

The component requires a modern browser with support for CSS `:has()`.

Supported modern browsers include:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

Older browsers that do not support `:has()` may not display the tab panels correctly.

## 📄 License

This example follows the same license as the EaseMotion CSS project.
