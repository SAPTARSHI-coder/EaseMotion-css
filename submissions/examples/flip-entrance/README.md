# ease-flip-x / ease-flip-y

Perspective flip entrance animations using `rotateX` / `rotateY` keyframes. Zero JavaScript required.

## Usage

```html
<!-- Horizontal flip-in (from left) -->
<div class="ease-flip-x">Content</div>

<!-- Vertical flip-in (from top) -->
<div class="ease-flip-y">Content</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-flip-x` | Flip in horizontally from left (rotateY) |
| `ease-flip-x-right` | Flip in horizontally from right (rotateY) |
| `ease-flip-y` | Flip in vertically from top (rotateX) |
| `ease-flip-y-down` | Flip in vertically from bottom (rotateX) |
| `ease-flip-fast` | 0.3s duration |
| `ease-flip-slow` | 1s duration |

## Delay Variants

| Class | Delay |
|---|---|
| `ease-delay-100` | 100ms |
| `ease-delay-200` | 200ms |
| `ease-delay-300` | 300ms |
| `ease-delay-400` | 400ms |
| `ease-delay-500` | 500ms |

## Staggered Example

```html
<div class="ease-flip-x">First</div>
<div class="ease-flip-x ease-delay-200">Second</div>
<div class="ease-flip-x ease-delay-400">Third</div>
```

## Submission

- **Author:** sudha09-git
- **Issue:** #3878
- **Files:** `style.css`, `demo.html`
