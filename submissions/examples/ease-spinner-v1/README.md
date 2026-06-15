# ease-spinner

Submission for Issue #3848

## What this adds

CSS component for circular loading spinners using CSS border
and rotate animation. Zero JavaScript required.

## Classes

### Base
| Class | Description |
|---|---|
| `ease-spinner` | Base circular spinner (32px, green) |

### Size Variants
| Class | Size |
|---|---|
| `ease-spinner--xs` | 14px |
| `ease-spinner--sm` | 20px |
| `ease-spinner` | 32px (default) |
| `ease-spinner--lg` | 48px |
| `ease-spinner--xl` | 64px |

### Color Variants
| Class | Color |
|---|---|
| `ease-spinner--primary` | Green |
| `ease-spinner--white` | White |
| `ease-spinner--dark` | Dark slate |
| `ease-spinner--success` | Green (#22c55e) |
| `ease-spinner--danger` | Red |
| `ease-spinner--accent` | Blue |

### Special Variants
| Class | Description |
|---|---|
| `ease-spinner--dual` | Dual counter-rotating rings |
| `ease-spinner--fast` | 0.4s spin speed |
| `ease-spinner--slow` | 1.4s spin speed |

## Usage

```html
<!-- Default -->
<span class="ease-spinner ease-spinner--primary"></span>

<!-- Large dual ring -->
<span class="ease-spinner ease-spinner--dual ease-spinner--lg"></span>

<!-- Small white spinner (e.g. inside a button) -->
<span class="ease-spinner ease-spinner--sm ease-spinner--white"></span>
```

## Accessibility

Respects `prefers-reduced-motion` — spin animation falls back
to a gentle opacity pulse with no rotation.

## Theme Support

Supports `data-theme="neon"`, `data-theme="dracula"`, `data-theme="dark"`.
