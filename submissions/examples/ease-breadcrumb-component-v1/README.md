# Ease Breadcrumb Component

## What does this do?

A modern, responsive **Breadcrumb Component** designed to render secondary navigation paths showing current page hierarchies. It supports 10 design variants (Minimal, Pill, Rounded, Shadow, Primary, Gradient, etc.), 4 CSS-configurable separator choices, prefix SVG icon slots, text overflow ellipsis truncation (with smooth hover expansion), and multi-level directory nesting.

## How is it used?

Include `style.css` in your project and structure your HTML following these classes:

### 1. Basic Breadcrumb

Wrap your list inside a `<nav>` tag, apply the `ease-breadcrumb` class, and set a separator modifier (e.g. `sep-slash`):

```html
<nav aria-label="Breadcrumb">
  <ol class="ease-breadcrumb sep-slash">
    <li class="ease-breadcrumb-item"><a href="#">Home</a></li>
    <li class="ease-breadcrumb-item"><a href="#">Projects</a></li>
    <li class="ease-breadcrumb-item ease-active" aria-current="page">
      Overview
    </li>
  </ol>
</nav>
```

### 2. Configurable Separators

You can configure separators dynamically by applying these helper classes:

- `.sep-slash` (`/`)
- `.sep-chevron` (`›`)
- `.sep-arrow` (`→`)
- `.sep-dot` (`•`)

### 3. Container & Shape Variants

Modify structural framing using these wrapper classes:

- `.ease-breadcrumb-minimal` (Transparent, no padding)
- `.ease-breadcrumb-underlined` (Underlines slide-in on link hover)
- `.ease-breadcrumb-rounded` (Contained in a single light pillbox)
- `.ease-breadcrumb-pill` (Encases each individual link in a pill block)
- `.ease-breadcrumb-shadow` (Floating block with drop shadow)

Example of pill format:

```html
<ol class="ease-breadcrumb sep-chevron ease-breadcrumb-pill">
  <li class="ease-breadcrumb-item"><a href="#">Dashboard</a></li>
  <li class="ease-breadcrumb-item ease-active" aria-current="page">Settings</li>
</ol>
```

### 4. Color Themes & Gradients

Apply themed highlights using:

- `.ease-breadcrumb-primary` (Solid brand color theme)
- `.ease-breadcrumb-gradient` (Indigo-pink linear gradient theme)

### 5. Text Overflow Truncation

For deep folder hierarchies, apply `.ease-breadcrumb-truncate`. This prevents long folders from breaking layout bounds by truncating names with an ellipsis, then smoothly expands the text container on hover:

```html
<ol class="ease-breadcrumb sep-slash ease-breadcrumb-truncate">
  <li class="ease-breadcrumb-item"><a href="#">Cabinet</a></li>
  <li class="ease-breadcrumb-item">
    <a href="#" title="ExtremelyLongFolderDirectoryTitle"
      >ExtremelyLongFolderDirectoryTitle</a
    >
  </li>
</ol>
```

### 6. Multi-level Nested Menus

To include dots menu (`...`) dropdown directory nodes:

```html
<li class="ease-breadcrumb-item ease-breadcrumb-nested">
  <button class="nested-trigger-btn" aria-expanded="false">•••</button>
  <ul class="nested-dropdown-list">
    <li><a href="#">Shared Resources</a></li>
    <li><a href="#">Configuration Templates</a></li>
  </ul>
</li>
```

## Features

- **Separator Independence**: Separator characters are driven via CSS variables (`--breadcrumb-separator`) matching parent class states.
- **Micro-animations**: Link hover underlines slide smoothly, pills lift, and shadow blocks float.
- **Ellipsis Folding**: Long titles compress gracefully and slide open on hover.
- **Icon Support**: Pre-styled spacing fits inline SVGs inside anchors.
- **Nesting Framework**: Standard class hooks position custom nested dropdown folder menus.

## Tech Stack

- HTML
- CSS (Flexbox wrapping, CSS variables, hover transition curves, text truncation)

## Preview

Open `demo.html` directly in your browser to inspect interactive underlines, test multi-level dropdowns, test overflow truncation expanding transitions, and view layout scaling!

## Contribution Notes

- Class naming was handled by the contributor.
- Maintainer will rename to ease-\* convention before merging.
