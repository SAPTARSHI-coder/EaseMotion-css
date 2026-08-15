# Pastel Pagination — Advanced Styling

A customizable pastel-style pagination component with responsive design, CSS variable overrides, keyboard-friendly focus states, and accessibility support.

## Features

* Pastel visual design
* Advanced CSS customization
* Active and disabled states
* Previous and next controls
* Responsive layout
* Keyboard focus support
* Reduced-motion support
* CSS custom properties
* Semantic pagination navigation

## Basic HTML

```html
<nav
  class="pastel-pagination"
  aria-label="Pagination"
>
  <a class="pastel-pagination__item" href="#">1</a>

  <a
    class="pastel-pagination__item pastel-pagination__item--active"
    href="#"
    aria-current="page"
  >
    2
  </a>

  <a class="pastel-pagination__item" href="#">3</a>
</nav>
```

## Class Naming Convention

The component follows a block-element-modifier naming pattern.

### Block

```text
pastel-pagination
```

The main pagination container.

### Element

```text
pastel-pagination__item
```

Represents an individual pagination control.

### Modifiers

```text
pastel-pagination__item--active
pastel-pagination__item--disabled
pastel-pagination__item--previous
pastel-pagination__item--next
pastel-pagination--rounded
```

Modifiers change the appearance or behavior of the component.

## Advanced Styling

The rounded modifier can be added to the pagination container:

```html
<nav class="pastel-pagination pastel-pagination--rounded">
```

This changes the pagination items to a pill-shaped appearance.

## CSS Variable Overrides

The component can be customized using CSS custom properties.

```css
.pastel-pagination {
  --pagination-bg: #f0f8ff;
  --pagination-text: #4a5568;
  --pagination-hover: #d9f0ff;
  --pagination-active: #7db7e8;
  --pagination-active-text: #ffffff;
  --pagination-border: #b9d9f2;
  --pagination-radius: 16px;
  --pagination-gap: 10px;
}
```

### Available Variables

| Variable                   | Purpose                |
| -------------------------- | ---------------------- |
| `--pagination-bg`          | Background color       |
| `--pagination-text`        | Text color             |
| `--pagination-hover`       | Hover background       |
| `--pagination-active`      | Active page background |
| `--pagination-active-text` | Active page text       |
| `--pagination-border`      | Border color           |
| `--pagination-shadow`      | Item shadow            |
| `--pagination-radius`      | Border radius          |
| `--pagination-gap`         | Space between items    |

## Accessibility

Use a semantic `<nav>` element with an accessible label:

```html
<nav aria-label="Pagination">
```

The current page should use:

```html
aria-current="page"
```

Example:

```html
<a
  class="pastel-pagination__item pastel-pagination__item--active"
  href="#"
  aria-current="page"
>
  2
</a>
```

Previous and next controls should have accessible names:

```html
<a
  class="pastel-pagination__item pastel-pagination__item--previous"
  href="#"
  aria-label="Previous page"
>
  &laquo;
</a>
```

## Keyboard Interaction

Pagination links are naturally keyboard accessible because they use `<a>` elements.

Users can:

* Press `Tab` to move between pagination controls.
* Press `Shift + Tab` to move backward.
* Press `Enter` to activate a focused link.

The `:focus-visible` style provides a visible focus indicator.

```css
.pastel-pagination__item:focus-visible {
  outline: 3px solid #9b7bb5;
  outline-offset: 3px;
}
```

## Reduced Motion

The component respects users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .pastel-pagination__item {
    transition: none;
  }
}
```

## Responsive Design

On smaller screens, pagination controls become smaller while remaining usable.

```css
@media (max-width: 600px) {
  .pastel-pagination__item {
    min-width: 36px;
    height: 36px;
  }
}
```

## Recommended Structure

```text
pastel-pagination-advanced/
├── index.html
├── style.css
└── README.md
```

## Usage

1. Copy `index.html`.
2. Copy `style.css`.
3. Link the stylesheet in your HTML.
4. Add the pagination markup.
5. Customize the CSS variables as required.

## Accessibility Checklist

* Use `<nav>` for pagination navigation.
* Provide an `aria-label`.
* Mark the current page with `aria-current="page"`.
* Give previous/next controls accessible labels.
* Keep visible keyboard focus indicators.
* Avoid removing focus outlines.
* Respect `prefers-reduced-motion`.

## Browser Support

The component uses standard HTML and CSS features and works in modern browsers.
