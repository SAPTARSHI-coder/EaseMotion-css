# Fluid Responsive Typography Utilities

## Overview

This example introduces a collection of fluid typography utility classes powered by CSS `clamp()`. The utilities automatically scale text between configurable minimum and maximum sizes without relying on responsive breakpoints or media queries.

The implementation also exposes reusable CSS custom properties, allowing developers to create their own fluid typography utilities while maintaining a consistent API.

---

## Features

- Responsive typography powered by CSS `clamp()`
- No JavaScript required
- No breakpoint-based font scaling
- Utility classes from `.ease-fluid-xs` to `.ease-fluid-xxl`
- Heading utilities from `.ease-fluid-h1` to `.ease-fluid-h6`
- Customizable through:
  - `--ease-fluid-min`
  - `--ease-fluid-pref`
  - `--ease-fluid-max`
- Mobile-first and fully responsive
- Lightweight and dependency-free
- Works with any layout or design system

---

## Tech Stack

- HTML5
- CSS3
- CSS Custom Properties
- CSS `clamp()`

---

## Usage

### Body Text Utilities

```html
<p class="ease-fluid-xs">Extra Small Text</p>
<p class="ease-fluid-sm">Small Text</p>
<p class="ease-fluid-md">Medium Text</p>
<p class="ease-fluid-lg">Large Text</p>
<p class="ease-fluid-xl">Extra Large Text</p>
<p class="ease-fluid-xxl">Double Extra Large Text</p>
```

### Heading Utilities

```html
<h1 class="ease-fluid-h1">Heading One</h1>

<h2 class="ease-fluid-h2">Heading Two</h2>

<h3 class="ease-fluid-h3">Heading Three</h3>

<h4 class="ease-fluid-h4">Heading Four</h4>

<h5 class="ease-fluid-h5">Heading Five</h5>

<h6 class="ease-fluid-h6">Heading Six</h6>
```

### Creating Custom Fluid Typography

Override the exposed CSS variables to create your own responsive text scale.

```css
.custom-heading{

    --ease-fluid-min:1.5rem;
    --ease-fluid-pref:3vw + 0.75rem;
    --ease-fluid-max:3rem;

    font-size:clamp(
        var(--ease-fluid-min),
        var(--ease-fluid-pref),
        var(--ease-fluid-max)
    );

}
```

```html
<h2 class="custom-heading">
    Custom Fluid Heading
</h2>
```

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Edge | ✅ |
| Firefox | ✅ |

