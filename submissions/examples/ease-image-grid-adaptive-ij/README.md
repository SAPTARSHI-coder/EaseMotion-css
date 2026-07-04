# Adaptive Image Grid

Responsive image gallery that rearranges on window resize. Items fade and scale into new positions. Filter by category and click for a lightbox preview.

## Features

- Auto-adaptive grid using `auto-fill` / `minmax`
- Items fade in with staggered delays on load and filter
- Filter buttons (All / Photos / Art) with smooth reveal
- Hover overlay with image zoom effect
- Lightbox preview on click
- Reposition animation hint on window resize

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--iga-duration` | `0.4s` | Transition and animation duration |
| `--iga-gap` | `12px` | Gap between grid items |
| `--iga-radius` | `8px` | Border radius for grid items |
| `--iga-item-bg` | `#1e293b` | Background behind images |
| `--iga-active-filter` | `#3b82f6` | Active filter button colour |

## Usage

Include `style.css`. Add `iga-item` elements inside `iga-grid` with a `data-category` attribute matching the filter value. The JavaScript handles filtering and lightbox.
