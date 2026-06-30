# ease-divider

Submission for Issue #3831

## What this adds

CSS utility classes for styled and animated horizontal/vertical
divider lines using border and pseudo-elements. Zero JavaScript.

## Classes

| Class                    | Description                       |
| ------------------------ | --------------------------------- |
| `ease-divider`           | Base horizontal divider           |
| `ease-divider--gradient` | Gradient fade on both ends        |
| `ease-divider--label`    | Text label divider via inner text |
| `ease-divider--vertical` | Vertical divider                  |
| `ease-divider--animate`  | Animated draw-in on load          |
| `ease-divider--thin`     | 1px thickness                     |
| `ease-divider--medium`   | 2px thickness                     |
| `ease-divider--thick`    | 4px thickness                     |
| `ease-divider--primary`  | Green accent color                |
| `ease-divider--accent`   | Blue accent color                 |
| `ease-divider--danger`   | Red accent color                  |

## Usage

```html
<!-- Base horizontal -->
<hr class="ease-divider" />

<!-- Gradient fade -->
<hr class="ease-divider ease-divider--gradient" />

<!-- Text label -->
<div class="ease-divider ease-divider--label">OR</div>

<!-- Vertical -->
<span class="ease-divider ease-divider--vertical"></span>

<!-- Animated draw-in -->
<hr class="ease-divider ease-divider--animate" />

<!-- Combined -->
<hr
  class="ease-divider ease-divider--gradient ease-divider--animate ease-divider--medium"
/>
```

## Accessibility

Respects `prefers-reduced-motion` — draw-in animation falls back
to a simple fade with no transform.

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
