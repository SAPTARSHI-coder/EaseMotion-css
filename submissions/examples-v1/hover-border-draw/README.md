# Border Draw on Hover

**What does this do?**
Draws a border around an element on hover by expanding `::before` and
`::after` pseudo-elements across all four sides in sequence.

**How is it used?**
```html
<!-- Basic usage -->
<div class="ease-hover-border-draw">Hover me</div>

<!-- Custom color -->
<div class="ease-hover-border-draw"
     style="--ease-border-color: #f97316;">
  Orange border
</div>

<!-- Custom speed -->
<div class="ease-hover-border-draw"
     style="--ease-border-color: #10b981; --ease-border-speed: 0.6s;">
  Slow green border
</div>
```

**CSS Custom Properties:**

| Property | Default | Description |
|---|---|---|
| `--ease-border-color` | `#6366f1` | Border color |
| `--ease-border-speed` | `0.3s` | Speed of each side drawing |

**Why is it useful?**
Border draw effects are widely used on cards, buttons, and interactive
elements to add motion feedback without JavaScript. Pure CSS using
`::before` and `::after` pseudo-elements fits EaseMotion CSS's
animation-first, zero-JS philosophy perfectly.

---

Submitted by: @bh462007
Date: 2026-06-01