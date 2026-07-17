# Filter Image Gallery

A filter image gallery with staggered card transition animations — CSS + JS.

## Features
- Category filter buttons with active state
- Staggered card entrance animation when filtering
- Smooth scale + opacity transition for cards
- Fully customizable via CSS custom properties

## CSS Custom Properties
| Property | Default | Description |
|---|---|---|
| `--card-bg` | #1a1a1a | Background of gallery cards |
| `--card-border` | #2a2a2a | Border color of gallery cards |
| `--filter-duration` | 0.4s | Duration of card filter transition |
| `--stagger-delay` | 0.06s | Delay between each staggered card |

## Usage
```html
<div class="filter-controls">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="art">Art</button>
</div>
<div class="gallery-grid" style="--card-bg: #1a1a1a; --card-border: #2a2a2a; --filter-duration: 0.4s; --stagger-delay: 0.06s;">
  <div class="gallery-card" data-category="art">Art</div>
</div>
```

## Browser Support
- Chrome 49+, Firefox 31+, Safari 9+

## Tech Stack
- HTML + CSS + JavaScript
