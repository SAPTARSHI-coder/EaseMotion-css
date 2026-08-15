# Animated Empty State

A collection of animated empty state card components with four distinct variants for different scenarios. Built with pure CSS — no JavaScript required.

## Variants

- **No Results** — Shown when a search returns no matches
- **No Data** — Displayed when a data source is empty
- **Error** — Appears when something goes wrong
- **Empty Cart** — Indicates an empty shopping cart

## Features

- Pure CSS — zero JavaScript dependencies
- Custom properties for easy themeing
- Card-style containers with subtle hover lift effect
- Soft pulse animation on icon circles
- Staggered fade-in entrance animation
- BEM naming convention
- Fully responsive (auto-fit grid)
- Dark theme by default

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="empty-state">
  <div class="empty-state__grid">
    <div class="empty-state__card empty-state__card--no-results">
      <div class="empty-state__icon-circle">
        <!-- icon -->
      </div>
      <h3 class="empty-state__title">No Results Found</h3>
      <p class="empty-state__description">Description text here.</p>
      <button class="empty-state__button">Action</button>
    </div>
  </div>
</div>
```

## Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--empty-state-bg` | `#0f172a` | Page background |
| `--empty-state-card-bg` | `#1e293b` | Card background |
| `--empty-state-card-border` | `#334155` | Card border color |
| `--empty-state-text` | `#f1f5f9` | Primary text color |
| `--empty-state-text-secondary` | `#94a3b8` | Secondary text color |
| `--empty-state-radius` | `16px` | Card border radius |
| `--empty-state-transition` | `0.3s ease` | Default transition |

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 13.1+
- Edge 79+

---

Created by **@saurabhhhcodes**
