# ease-pagination

A CSS-only pagination component with page numbers, active/disabled/ellipsis states, alignment, sizes, color themes, layout variants, responsive visibility, and dark mode.

## What

Flexible pagination navigation built with flexbox, CSS custom properties, and semantic class modifiers. Uses `<nav>` with `<a>` elements for page links.

## How

1. Include `style.css`.
2. Use `<nav class="ease-pagination">` as the wrapper.
3. Add `.ease-pagination__item` to each page link/button.
4. Apply `.ease-pagination__item--active`, `.ease-pagination__item--disabled`, or `.ease-pagination__item--ellipsis` as needed.
5. Add modifier classes to the `<nav>` for size, color, alignment, layout.

## Why

Provides a lightweight, reusable, accessible pagination system that works with any JavaScript framework (pairs with client-side or server-side state management).

## Modifiers

### Sizes
| Class | Description |
|---|---|
| `ease-pagination--sm` | Small (1.75rem) |
| _(default)_ | Medium (2.25rem) |
| `ease-pagination--lg` | Large (2.75rem) |

### Color Themes
| Class | Description |
|---|---|
| `ease-pagination--primary` | Blue (default) |
| `ease-pagination--secondary` | Gray |
| `ease-pagination--success` | Green |
| `ease-pagination--danger` | Red |
| `ease-pagination--warning` | Amber |
| `ease-pagination--dark` | Dark background scheme |

### Alignment
| Class | Description |
|---|---|
| _(default)_ | Flex-start |
| `ease-pagination--centered` | Center |
| `ease-pagination--end` | Flex-end |
| `ease-pagination--between` | Space-between |

### Layout Variants
| Class | Description |
|---|---|
| `ease-pagination--no-border` | Removes borders from all items |
| `ease-pagination--outline` | Active item has outline style (transparent bg) |
| `ease-pagination--compact` | Zero gap, segmented button group style |
| `ease-pagination--stretched` | Equal-width items |
| `ease-pagination--with-icons` | Larger font for prev/next icons |

### Rounded
| Class | Description |
|---|---|
| `ease-pagination--rounded-none` | Square |
| _(default)_ | 0.375rem |
| `ease-pagination--rounded-sm` | 0.25rem |
| `ease-pagination--rounded-lg` | 0.5rem |
| `ease-pagination--rounded-xl` | 0.75rem |
| `ease-pagination--rounded-full` | Pill shape |

### Behavior
| Class | Description |
|---|---|
| `ease-pagination--responsive` | Hides middle page items on small screens |
| `ease-pagination--animated` | Adds transition and click scale effect |
| `ease-pagination--sticky` | Sticky bottom positioning |

## Sub-components

- `.ease-pagination__item` — Page link/button
- `.ease-pagination__item--active` — Current page state
- `.ease-pagination__item--disabled` — Non-interactive state
- `.ease-pagination__item--ellipsis` — Separator span
- `.ease-pagination__item--prev` — Previous button
- `.ease-pagination__item--next` — Next button
- `.ease-pagination__item--page` — Numbered page
- `.ease-pagination__info` — Page count label

## Accessibility

- Wrapped in `<nav>` with `aria-label`.
- `:focus-visible` ring on all interactive items.
- Use `aria-current="page"` on the active item.
- Disabled items use `pointer-events: none` and reduced opacity.
