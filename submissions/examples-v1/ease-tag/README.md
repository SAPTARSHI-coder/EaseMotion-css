# ease-tag

Animated tag/chip component with color, size, removable, and entrance animation variants. Zero JavaScript required for styling.

## Usage

```html
<!-- Basic tag -->
<span class="ease-tag">Label</span>

<!-- Colored tag -->
<span class="ease-tag ease-tag-primary">Primary</span>

<!-- With status dot -->
<span class="ease-tag ease-tag-success">
  <span class="ease-tag-dot"></span>Online
</span>

<!-- Removable tag -->
<span class="ease-tag ease-tag-primary">
  CSS
  <button class="ease-tag-remove" aria-label="Remove">✕</button>
</span>
```

## Color Variants

| Class | Description |
|---|---|
| `ease-tag` | Default (gray) |
| `ease-tag-primary` | Indigo |
| `ease-tag-success` | Green |
| `ease-tag-danger` | Red |
| `ease-tag-warning` | Amber |
| `ease-tag-info` | Blue |
| `ease-tag-dark` | Dark slate |

## Style Variants

| Class | Description |
|---|---|
| `ease-tag-outline` | Transparent background, colored border |
| `ease-tag-sm` | Small size |
| `ease-tag-lg` | Large size |
| `ease-tag-clickable` | Adds pointer cursor + active press effect |

## Elements

| Class | Element | Description |
|---|---|---|
| `ease-tag-dot` | `<span>` | Colored status dot prefix |
| `ease-tag-remove` | `<button>` | Animated remove button |

## Remove Animation (minimal JS)

```js
function removeTag(btn) {
  const tag = btn.closest('.ease-tag');
  tag.classList.add('is-removing');
  tag.addEventListener('animationend', () => tag.remove(), { once: true });
}
```

## Staggered Entrance

Tags automatically stagger their entrance animation when placed as siblings — no extra classes needed. Up to 8 tags are staggered via `nth-child` delays.

## Submission

- **Author:** sudha09-git
- **Issue:** #3849
- **Files:** `style.css`, `demo.html`
