# ease-card-visual

Enhanced card component with modern visual effects, hover states, and multiple style variants.

## Issue
[#64998](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64998)

## Feature Overview
Advanced card component with glassmorphism, gradient borders, shadow depth, hover lift effects, and accent color variants. Provides multiple visual styles suitable for dashboards, galleries, and content grids.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--card-bg` | `rgba(30,41,59,0.7)` | Card background |
| `--card-border` | `rgba(255,255,255,0.08)` | Border color |
| `--card-text` | `#f1f5f9` | Title text color |
| `--card-muted` | `#94a3b8` | Body text color |
| `--card-accent` | `#a855f7` | Accent color |
| `--card-radius` | `16px` | Border radius |
| `--card-padding` | `24px` | Inner padding |
| `--card-shadow` | `0 4px 24px rgba(0,0,0,0.3)` | Default shadow |
| `--card-shadow-hover` | `0 12px 48px rgba(0,0,0,0.5)` | Hover shadow |
| `--card-transition` | `0.35s cubic-bezier(0.4,0,0.2,1)` | Transition timing |

## Variants

| Class | Description |
|---|---|
| `.glass` | Glassmorphism with backdrop blur |
| `.gradient-border` | Animated gradient border on hover |
| `.depth-sm` | Light shadow |
| `.depth-lg` | Heavy shadow |
| `.depth-xl` | Extra heavy shadow |
| `.glow` | Glowing box shadow on hover |
| `.accent-border` | Left accent border |
| `.accent-purple` | Purple accent |
| `.accent-cyan` | Cyan accent |
| `.accent-emerald` | Emerald accent |
| `.accent-rose` | Rose accent |
| `.accent-amber` | Amber accent |
| `.flat` | Flat design, no shadows |
| `.size-sm` | Small card (16px padding) |
| `.size-lg` | Large card (32px padding) |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<div class="card glass gradient-border">
  <div class="card-icon">*</div>
  <h3 class="card-title">Card Title</h3>
  <p class="card-body">Card description text goes here.</p>
  <div class="card-footer">Action link</div>
</div>
```

## Accessibility
- Respects `prefers-reduced-motion` (hover effects disabled)
- Sufficient color contrast in all theme variants
- Semantic HTML structure with proper heading hierarchy
