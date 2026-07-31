# Animated Breadcrumbs

A pure CSS animated breadcrumb navigation component for EaseMotion CSS.

## Features

- Staggered entrance animation
- Smooth hover effects
- Animated underline
- Animated separators
- Keyboard accessible
- Responsive design
- No JavaScript required
- Reduced-motion support

## Usage

Add the following structure:

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
        <li>
            <a href="#">Home</a>
        </li>

        <li>
            <a href="#">Products</a>
        </li>

        <li>
            <a href="#">Documentation</a>
        </li>

        <li aria-current="page">
            Current Page
        </li>
    </ol>
</nav>