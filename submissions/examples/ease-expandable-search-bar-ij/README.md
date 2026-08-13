# Expandable Search Bar

A search bar that collapses to a compact icon and expands to a full input field on click. Clicking outside collapses the bar. Includes a submit button that fades in on expand.

## Features

- Smooth width transition between collapsed and expanded states
- Icon color shifts on focus
- Input and submit button fade in with staggered delays
- Click-outside or Escape key to collapse
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property                   | Default  | Description                  |
|----------------------------|----------|------------------------------|
| `--search-duration`        | `0.35s`  | Expand/collapse duration     |
| `--search-width-collapsed` | `52px`   | Width when collapsed         |
| `--search-width-expanded`  | `320px`  | Width when expanded          |
| `--search-bg`              | `#ffffff`| Background color             |
| `--search-border-color`    | `#d1d5db`| Default border color         |
| `--search-focus-color`     | `#6366f1`| Expanded/focus border color  |
| `--search-radius`          | `26px`   | Container border-radius      |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- include demo.html markup -->
```

Customise in your `:root`:

```css
:root {
  --search-width-expanded: 400px;
  --search-focus-color: #0ea5e9;
}
```
