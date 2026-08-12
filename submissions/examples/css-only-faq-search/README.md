# CSS-only FAQ Search

A responsive **CSS-only FAQ Search and Filter** component built with HTML5 and modern CSS. It uses native radio controls and the CSS `:has()` relational selector to filter FAQ categories without JavaScript.

## ✨ Features

* Pure HTML5 and CSS3
* No JavaScript required
* CSS `:has()` based filtering
* FAQ category filtering
* All, General, Animation, and Accessibility categories
* Responsive desktop, tablet, and mobile layouts
* Keyboard-accessible controls
* Visible `:focus-visible` states
* Semantic HTML structure
* CSS Custom Properties
* `prefers-reduced-motion` support
* Lightweight and dependency-free

## 📂 Folder Structure

```text
css-only-faq-search/
├── demo.html
├── style.css
└── README.md
```

## 🚀 Usage

1. Open `demo.html` in a modern browser.
2. Select one of the category filters:

   * All
   * General
   * Animation
   * Accessibility
3. The FAQ list automatically filters using CSS.
4. No JavaScript or external library is required.

## 🔎 How CSS Filtering Works

The component uses hidden radio buttons to represent the selected filter.

For example:

```html
<input
    type="radio"
    name="faq-filter"
    id="filter-animation"
>
```

FAQ items contain a category:

```html
<article
    class="faq-item"
    data-category="animation"
>
```

The CSS `:has()` selector then checks which filter is selected:

```css
.faq-controls:has(#filter-animation:checked)
    .faq-item:not([data-category="animation"]) {
    display: none;
}
```

This allows the FAQ to filter dynamically without JavaScript.

## 🎨 CSS Custom Properties

The component uses CSS Custom Properties for easy customization.

| Variable          | Description               |
| ----------------- | ------------------------- |
| `--bg`            | Page background color     |
| `--surface`       | FAQ card background       |
| `--surface-hover` | Question hover background |
| `--primary`       | Primary accent color      |
| `--primary-soft`  | Soft accent background    |
| `--text`          | Main text color           |
| `--muted`         | Secondary text color      |
| `--border`        | Border color              |
| `--radius`        | FAQ card border radius    |
| `--transition`    | Transition duration       |
| `--shadow`        | Card shadow               |

### Example

```css
:root {
    --primary: #2563eb;
    --primary-soft: #eff6ff;
    --radius: 18px;
    --transition: 0.3s ease;
}
```

## ⌨️ Accessibility

The example includes:

* Semantic `<main>`, `<section>`, `<article>`, and heading elements
* Native HTML form controls for filtering
* Keyboard-accessible filter controls
* Keyboard-accessible FAQ buttons
* Visible `:focus-visible` outlines
* Descriptive `aria-label` attributes
* `prefers-reduced-motion` support

## 📱 Responsive Design

The FAQ adapts to different screen sizes.

### Desktop

Filter controls appear in a horizontal layout with a spacious FAQ list.

### Tablet

The component reduces spacing while maintaining comfortable touch targets.

### Mobile

Filter controls use a two-column layout and switch to a single column on very small screens.

## ⚡ Performance

The component has no JavaScript dependencies and uses native CSS selectors and animations.

The filtering operation is handled directly by the browser's CSS engine.

## 🌐 Browser Support

The `:has()` selector requires a modern browser.

Supported current versions of:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

For older browsers without `:has()` support, the filtering functionality will not work as intended.

## ♿ Reduced Motion

Users who prefer reduced motion are supported through:

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

This disables non-essential animations and transitions.

## 📄 License

This example follows the same license as the EaseMotion CSS project.
