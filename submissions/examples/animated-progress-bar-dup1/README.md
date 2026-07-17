# Animated Progress Bar Component — EaseMotion CSS

Resolves #22827 — Adds a complete `ease-progress` component to EaseMotion CSS.

Open `demo.html` directly in any browser — no build step required.

---

## File Structure

```
submissions/examples/animated-progress-bar/
├── demo.html      ← Full interactive showcase
├── style.css      ← Component CSS (maps to components/progress.css)
└── README.md
```

The CSS in `style.css` is written as a drop-in for `components/progress.css`.

---

## Usage

```html
<!-- Basic -->
<div class="ease-progress ease-progress-primary">
  <div class="ease-progress-bar" style="width: 75%"></div>
</div>

<!-- With label -->
<div class="ease-progress-label">
  <span>Upload Progress</span>
  <span class="ease-progress-label-value">75%</span>
</div>
<div class="ease-progress ease-progress-success ease-progress-lg">
  <div class="ease-progress-bar" style="width: 75%"></div>
</div>

<!-- Indeterminate / loading -->
<div class="ease-progress ease-progress-primary ease-progress-indeterminate">
  <div class="ease-progress-bar"></div>
</div>

<!-- Striped + animated -->
<div class="ease-progress ease-progress-warning ease-progress-striped ease-progress-animated">
  <div class="ease-progress-bar" style="width: 60%"></div>
</div>
```

---

## Classes Reference

### Core
| Class | Description |
|---|---|
| `.ease-progress` | Track wrapper — full width, rounded, background |
| `.ease-progress-bar` | Animated fill — set width via inline style or JS |
| `.ease-progress-label` | Row above the bar: name left, value right |
| `.ease-progress-label-value` | Right-side value text in the label row |
| `.ease-progress-bar-text` | Label rendered inside the fill (use with `ease-progress-label-inside`) |

### Size Variants
| Class | Height |
|---|---|
| `.ease-progress-sm` | 6px |
| `.ease-progress` | 10px (default) |
| `.ease-progress-lg` | 16px |
| `.ease-progress-xl` | 24px |

### Color Variants
| Class | Color |
|---|---|
| `.ease-progress-primary` | Indigo `#4f46e5` |
| `.ease-progress-success` | Green `#16a34a` |
| `.ease-progress-danger` | Red `#dc2626` |
| `.ease-progress-warning` | Amber `#d97706` |
| `.ease-progress-info` | Sky `#0284c7` |
| `.ease-progress-purple` | Violet `#7c3aed` |
| `.ease-progress-pink` | Pink `#db2777` |

### Gradient Variants
| Class | Colors |
|---|---|
| `.ease-progress-gradient-ocean` | Sky → Cyan |
| `.ease-progress-gradient-sunset` | Orange → Pink |
| `.ease-progress-gradient-forest` | Green → Lime |
| `.ease-progress-gradient-royal` | Indigo → Violet |
| `.ease-progress-gradient-gold` | Amber → Yellow |

### State / Animation Variants
| Class | Behaviour |
|---|---|
| `.ease-progress-striped` | Diagonal stripe texture on fill |
| `.ease-progress-animated` | Stripes slide (combine with striped) |
| `.ease-progress-indeterminate` | Bouncing fill — unknown progress |
| `.ease-progress-glow` | Glowing box-shadow on fill |
| `.ease-progress-label-inside` | Enables `.ease-progress-bar-text` inside fill |
| `.ease-progress-tooltip` | Shows `data-value%` on hover |

### Stacked Bar
```html
<div class="ease-progress-stacked ease-progress-lg">
  <div class="ease-progress-segment" style="width:40%;background:#4f46e5"></div>
  <div class="ease-progress-segment" style="width:30%;background:#16a34a"></div>
  <div class="ease-progress-segment" style="width:20%;background:#d97706"></div>
</div>
```

### Circular Progress
SVG-based circular indicator with `ease-progress-circle`, `ease-progress-circle-track`, `ease-progress-circle-fill`, `ease-progress-circle-label`.

### Step Wizard
Step-by-step indicator using `ease-progress-steps`, `ease-progress-step`, `ease-step-done`, `ease-step-active`, `ease-progress-step-dot`, `ease-progress-step-label`.

---

## Accessibility

- `@media (prefers-reduced-motion: reduce)` — all transitions and animations disabled
- Semantic `width` values for screen readers
- Labels use visible text, not just colour
- Tooltip uses `data-value` attribute

---

## Demo Sections

1. Size variants (sm / default / lg / xl)
2. Color variants (7 solid colours)
3. Gradient variants (5 gradients)
4. States (striped, animated, glow, indeterminate)
5. Tooltip label on hover
6. Stacked / multi-segment bar
7. Circular progress (5 variants)
8. Step wizard with back/next buttons
9. Real-world: skill bars, file upload, rating breakdown
10. Interactive slider — live animated fill update