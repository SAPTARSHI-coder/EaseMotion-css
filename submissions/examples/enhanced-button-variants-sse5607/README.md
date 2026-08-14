# Enhanced Button Variants

> Submission for issue [#5607](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5607)

## What does this do?

Adds five new reusable button variants — **Secondary**, **Warning**, **Info**, **Gradient**, and **Soft** — along with optional hover and size modifiers, expanding the EaseMotion button system with more visual options while keeping the API simple and composable.

## How is it used?

Apply the base button class together with any variant class on a `<button>` (or `<a>`) element. You can optionally stack a hover modifier and a size modifier on top.

```html
<!-- Variants -->
<button class="ease-btn-sse ease-btn-secondary-sse">Secondary</button>
<button class="ease-btn-sse ease-btn-warning-sse">Warning</button>
<button class="ease-btn-sse ease-btn-info-sse">Info</button>
<button class="ease-btn-sse ease-btn-gradient-sse">Gradient</button>
<button class="ease-btn-sse ease-btn-soft-sse">Soft</button>

<!-- With hover modifier -->
<button class="ease-btn-sse ease-btn-gradient-sse ease-btn-hover-sse">Hover Me</button>

<!-- With size modifiers -->
<button class="ease-btn-sse ease-btn-gradient-sse ease-btn-sm-sse">Small</button>
<button class="ease-btn-sse ease-btn-gradient-sse ease-btn-lg-sse">Large</button>
<button class="ease-btn-sse ease-btn-gradient-sse ease-btn-xl-sse">X-Large</button>
```

### Class Reference

| Class | Purpose |
|---|---|
| `ease-btn-sse` | Base button styles (required) |
| `ease-btn-secondary-sse` | Dark neutral variant |
| `ease-btn-warning-sse` | Amber warning variant |
| `ease-btn-info-sse` | Cyan informational variant |
| `ease-btn-gradient-sse` | Violet to cyan gradient variant |
| `ease-btn-soft-sse` | Subtle tinted variant |
| `ease-btn-hover-sse` | Adds lift + shadow on hover |
| `ease-btn-sm-sse` | Small size |
| `ease-btn-lg-sse` | Large size |
| `ease-btn-xl-sse` | Extra-large size |

## Why is it useful?

These additions fit the EaseMotion CSS philosophy of being **expressive, composable, and beginner-friendly**. Developers can build a richer button system simply by stacking modifier classes — no custom CSS required. The variants cover the most common UI intents (neutral, warn, info, hero, subtle) so projects can express the right tone without writing styles from scratch, while staying visually consistent with the rest of the framework. The design also respects `prefers-reduced-motion` for better accessibility.

## Notes for the Maintainer

- All classes use a `-sse` suffix per the contribution guidelines to avoid naming collisions with parallel submissions.
- The maintainer may freely rename them to the canonical `ease-btn-*` form during integration.
- Demo styles in `style.css` (`.demo-wrapper`, `.demo-section`, etc.) are only for `demo.html` preview and are not part of the proposed framework additions.