# Active Navigation Highlighting

## What does this do?

This example demonstrates automatic active-state highlighting for documentation navigation links. As users scroll through different sections of a page, the corresponding navigation item is highlighted to indicate the current location within the documentation.

## How is it used?

### HTML Structure

```html
<nav class="sidebar-nav">
  <a href="#getting-started">Getting Started</a>
  <a href="#components">Components</a>
  <a href="#utilities">Utilities</a>
</nav>

<section id="getting-started">
  ...
</section>

<section id="components">
  ...
</section>

<section id="utilities">
  ...
</section>
```

### JavaScript

The example uses the Intersection Observer API to detect which section is currently visible and automatically applies the `.active` class to the matching navigation link.

### Active State Styling

```css
.sidebar-nav a.active {
  font-weight: 600;
  border-left: 3px solid currentColor;
  padding-left: 8px;
}
```

## Why is it useful?

Documentation pages often contain multiple sections and long-form content. Active navigation highlighting helps users understand where they are within the page, improves navigation, and creates a more intuitive browsing experience.

This aligns with EaseMotion CSS's goal of providing polished, user-friendly interface patterns that improve usability with minimal implementation effort.

## Features

* Automatic active-state detection while scrolling
* Smooth section navigation
* Lightweight implementation using Intersection Observer
* No external dependencies
* Responsive documentation-style layout

## Browser Support

This example relies on the Intersection Observer API, which is supported by all modern browsers.
