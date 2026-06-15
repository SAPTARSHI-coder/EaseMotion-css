# animated-skill-bars

Animated skill bar component for portfolio and resume pages.

## Usage

```html
<div class="ease-skill">
  <div class="ease-skill-header">
    <span class="ease-skill-label">JavaScript</span>
    <span class="ease-skill-percent">85%</span>
  </div>
  <div class="ease-skill-track">
    <div class="ease-skill-bar" style="width:85%"></div>
  </div>
</div>
```

## Custom Color

```html
<div class="ease-skill-bar" style="--skill-color:#10b981; width:78%"></div>
```

## Variants

```html
<!-- Striped -->
<div class="ease-skill-striped">...</div>

<!-- Thick -->
<div class="ease-skill-thick">...</div>
```

## Classes

| Class | Description |
|---|---|
| `ease-skill` | Skill row wrapper |
| `ease-skill-header` | Label + percent row |
| `ease-skill-label` | Skill name |
| `ease-skill-percent` | Percentage text |
| `ease-skill-track` | Background track |
| `ease-skill-bar` | Animated fill bar |
| `ease-skill-striped` | Striped bar variant |
| `ease-skill-thick` | Thicker bar variant |

## Features
- Fills from 0% to target on page load
- Staggered delays for each skill
- Custom color via --skill-color CSS variable
- Striped and thick variants
- Respects prefers-reduced-motion