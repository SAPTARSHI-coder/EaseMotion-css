# Animated Button — Usage Documentation

## What this documents
This is a usage guide for EaseMotion CSS's animated button system: the base `ease-btn` class combined with color, shape, and motion modifier classes. This is documentation for the framework's existing button utilities, not a new component.

## Quick Start
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css/dist/easemotion.min.css">

<button class="ease-btn ease-btn-primary ease-btn-pill ease-hover-grow ease-fade-in ease-delay-200">
  Get Started →
</button>
```

## Composition guide

| Step | Class | What it does |
|---|---|---|
| 1 | `ease-btn` | **Required.** Base button styling (padding, font, border-radius) |
| 2 | `ease-btn-primary` | Accent color fill (optional — omit for the neutral default) |
| 3 | `ease-btn-pill` | Fully rounded, pill-shaped corners |
| 4 | `ease-hover-grow` | Scales up slightly on hover |
| 4 | `ease-hover-lift` | Lifts up with a shadow on hover (alternative to grow) |
| 5 | `ease-fade-in` | Fades the button in on page load/scroll into view |
| 5 | `ease-slide-up` | Slides up while fading in (alternative entrance to fade-in) |
| 6 | `ease-delay-100` / `200` / `300` | Staggers the entrance animation start, useful when multiple animated elements appear together |

Classes are additive — stack as many as needed. Only `ease-btn` is required; every other class is an optional modifier.

## Common patterns

**Simple primary CTA:**
```html
<button class="ease-btn ease-btn-primary">Submit</button>
```

**Pill-shaped hero CTA with entrance animation:**
```html
<button class="ease-btn ease-btn-primary ease-btn-pill ease-hover-grow ease-fade-in">
  Get Started →
</button>
```

**Staggered button group** (each button enters slightly after the previous):
```html
<button class="ease-btn ease-fade-in ease-delay-100">One</button>
<button class="ease-btn ease-fade-in ease-delay-200">Two</button>
<button class="ease-btn ease-fade-in ease-delay-300">Three</button>
```

## Accessibility
All entrance and hover animations respect `prefers-reduced-motion` — motion-sensitive users see buttons in their final state immediately, with hover feedback limited to non-motion cues (color/shadow) where the framework's core styles apply this.

## Files
- `demo.html` — interactive usage guide showing each composition step live, with copyable code snippets
- `style.css` — demo page styling, plus minimal illustrative versions of the documented classes (the real implementations ship in EaseMotion's core `easemotion.css`)
- `README.md` — this file