# SCSS Subgrid Layout Helper Mixins

Responsive SCSS helper mixins for creating consistent CSS Grid layouts with native `subgrid` support and graceful fallbacks.

## Features

- Column subgrid helper
- Row subgrid helper
- Combined row and column subgrid helper
- Responsive subgrid helper
- Customizable column and row counts
- Customizable gaps
- Graceful fallback for browsers without subgrid support
- CSS `@supports` integration
- Responsive mobile layouts
- Lightweight and dependency-free
- Works with standard CSS Grid

## Available Mixins

### `ease-subgrid-columns`

Creates a configurable column grid with native subgrid support when available.

    @use "mixins";

    .container {
      @include mixins.ease-subgrid-columns(12, 1rem);
    }

### `ease-subgrid-rows`

Creates configurable rows with native row subgrid support when available.

    @use "mixins";

    .container {
      @include mixins.ease-subgrid-rows(3, 1rem);
    }

### `ease-subgrid`

Creates a layout supporting both column and row subgrid behavior.

    @use "mixins";

    .container {
      @include mixins.ease-subgrid(12, 2, 1rem);
    }

### `ease-subgrid-item`

Allows a child element to span a specific range of grid columns.

    @use "mixins";

    .item {
      @include mixins.ease-subgrid-item(1, -1);
    }

### `ease-subgrid-responsive`

Creates a responsive subgrid layout and switches to a single-column layout below the specified breakpoint.

    @use "mixins";

    .container {
      @include mixins.ease-subgrid-responsive(12, 1rem, 768px);
    }

## Usage

Import the mixins using the Sass module system:

    @use "mixins";

    .layout {
      @include mixins.ease-subgrid-columns(12, 1rem);
    }

    .layout-item {
      @include mixins.ease-subgrid-item(1, -1);
    }

## Customization

The mixins accept configurable values for columns, rows, gaps, and breakpoints.

    @use "mixins";

    .gallery {
      @include mixins.ease-subgrid-columns(4, 1.5rem);
    }

    .content {
      @include mixins.ease-subgrid-responsive(6, 1rem, 900px);
    }

## Browser Support

The mixins use CSS `@supports` to detect native subgrid support.

When subgrid is unavailable, a regular CSS Grid fallback is provided so the layout remains usable.

    @supports (grid-template-columns: subgrid) {
      .layout {
        grid-template-columns: subgrid;
      }
    }

## Responsive Behavior

The responsive helper can switch to a single-column layout at a chosen breakpoint.

    @use "mixins";

    .cards {
      @include mixins.ease-subgrid-responsive(3, 1rem, 768px);
    }

On smaller screens, the layout falls back to:

    grid-template-columns: 1fr;

## Demo

Open `demo.html` directly in a browser to view examples of:

- Column subgrid
- Row subgrid
- Responsive subgrid
- Full-width subgrid items

No server or JavaScript is required.

## Why It Fits EaseMotion CSS

These helpers follow the EaseMotion philosophy of keeping styling utilities simple, readable, reusable, and easy to integrate.

They provide a lightweight SCSS abstraction over CSS Grid while preserving native CSS behavior and providing practical fallbacks for browsers without `subgrid` support.

## Accessibility

The mixins only control layout and do not introduce additional interactive behavior. Semantic HTML and accessible content can therefore be used normally with the generated layouts.

## License

This contribution is part of EaseMotion CSS and follows the repository's existing license and contribution guidelines.