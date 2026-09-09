# Pastel Pagination – Accessibility Integration

A lightweight pastel-styled pagination component with accessible navigation, keyboard support, focus states, and responsive styling.

## Features

* Pastel visual design
* Semantic `<nav>` navigation
* Accessible page labels
* Current page indication
* Keyboard-friendly links
* Visible focus state
* Disabled previous/next state
* Responsive layout
* Reduced-motion support
* Customizable CSS variables

## Basic Usage

Add the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then use the pagination markup:

```html
<nav class="pagination" aria-label="Pagination">

  <a
    class="pagination__link pagination__link--disabled"
    href="#"
    aria-disabled="true"
    tabindex="-1"
  >
    Previous
  </a>

  <a class="pagination__link" href="?page=1" aria-label="Page 1">
    1
  </a>

  <a
    class="pagination__link pagination__link--active"
    href="?page=2"
    aria-current="page"
    aria-label="Page 2, current page"
  >
    2
  </a>

  <a class="pagination__link" href="?page=3" aria-label="Page 3">
    3
  </a>

  <a class="pagination__link" href="?page=4" aria-label="Page 4">
    4
  </a>

  <a class="pagination__link" href="?page=3" aria-label="Next page">
    Next
  </a>

</nav>
```

## Class Naming

The component uses BEM-style naming.

### `.pagination`

The main pagination container.

### `.pagination__link`

Represents an individual pagination link.

### `.pagination__link--active`

Modifier for the currently selected page.

### `.pagination__link--disabled`

Modifier for an unavailable navigation action such as Previous or Next.

## Modifier Classes

Active page:

```html
<a
  class="pagination__link pagination__link--active"
  href="?page=2"
  aria-current="page"
>
  2
</a>
```

Disabled link:

```html
<a
  class="pagination__link pagination__link--disabled"
  href="#"
  aria-disabled="true"
  tabindex="-1"
>
  Previous
</a>
```

## Custom CSS Variables

The component can be customized without changing the component styles.

```css
:root {
  --pagination-bg: #fff7fb;
  --pagination-text: #5f5368;
  --pagination-hover: #f3d8e8;
  --pagination-active: #d9b4d0;
  --pagination-border: #ead8e4;
  --pagination-focus: #8d5c86;
  --pagination-radius: 10px;
  --pagination-gap: 8px;
}
```

### Available Variables

| Variable              | Purpose                |
| --------------------- | ---------------------- |
| `--pagination-bg`     | Background color       |
| `--pagination-text`   | Text color             |
| `--pagination-hover`  | Hover background       |
| `--pagination-active` | Active page background |
| `--pagination-border` | Border color           |
| `--pagination-focus`  | Keyboard focus outline |
| `--pagination-radius` | Corner radius          |
| `--pagination-gap`    | Space between links    |

## Accessibility

The component uses semantic navigation:

```html
<nav aria-label="Pagination">
```

This allows screen-reader users to identify the pagination controls.

### Current Page

Use `aria-current="page"` on the active page:

```html
<a
  class="pagination__link pagination__link--active"
  href="?page=2"
  aria-current="page"
>
  2
</a>
```

### Accessible Labels

Page links should have meaningful labels:

```html
<a href="?page=3" aria-label="Page 3">
  3
</a>
```

Navigation controls should also be descriptive:

```html
<a href="?page=3" aria-label="Next page">
  Next
</a>
```

## Keyboard Interaction

Pagination links are native `<a>` elements, so they are keyboard accessible by default.

Users can:

* Press `Tab` to move between pagination links.
* Press `Shift + Tab` to move backward.
* Press `Enter` to activate the selected link.

The component does not add unnecessary JavaScript keyboard handlers.

## Focus State

A visible `:focus-visible` outline is provided for keyboard users:

```css
.pagination__link:focus-visible {
  outline: 3px solid var(--pagination-focus);
  outline-offset: 3px;
}
```

## Disabled State

The disabled navigation item uses:

```html
aria-disabled="true"
tabindex="-1"
```

This prevents an unavailable control from receiving keyboard focus.

## Reduced Motion

The component respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .pagination__link {
    transition: none;
  }
}
```

## Responsive Design

The pagination automatically wraps on smaller screens and reduces spacing for mobile devices.

## File Structure

```text
pastel-pagination-accessibility/
├── index.html
├── style.css
└── README.md
```

## License

Part of the EaseMotion CSS project.
