# Bento Grid Layout Component

A modular, asymmetrical grid layout with staggered entrance animations
and hover micro-interactions — built for EaseMotion CSS.

## Classes

| Class | Description |
|---|---|
| `ease-bento-grid` | Grid wrapper — 3-column asymmetric layout |
| `ease-bento-card` | Base card with hover lift micro-interaction |
| `ease-bento-card-wide` | Card spanning 2 columns |
| `ease-bento-card-tall` | Card spanning 2 rows |
| `ease-bento-card-large` | Card spanning 2 columns + 2 rows |
| `ease-bento-card-primary` | Card with primary color background |
| `ease-bento-card-success` | Card with success color background |
| `ease-bento-content` | Content wrapper inside a card |

## Usage

```html
<div class="ease-bento-grid">
  <div class="ease-bento-card ease-bento-card-wide ease-slide-up">
    <div class="ease-bento-content">
      <h3>Analytics</h3>
      <p>Real-time metrics.</p>
    </div>
  </div>

  <div class="ease-bento-card ease-slide-up ease-delay-100">
    <div class="ease-bento-content">
      <h3>Activity</h3>
    </div>
  </div>
</div>
```

## Features

- Follows EaseMotion `ease-` naming convention
- Uses EaseMotion CSS design tokens (`--ease-*` variables)
- Staggered entrance using existing `ease-slide-up` + `ease-delay-*` classes
- Hover lift micro-interaction (translateY + box-shadow)
- Dark mode via `prefers-color-scheme`
- Fully responsive (3 col → 2 col → 1 col)

## How it differs from similar submissions

- Full `ease-` prefix compliance (EaseMotion naming rules)
- Uses `--ease-*` CSS variables instead of hardcoded values
- Dark mode support built in
- Composable with existing EaseMotion animation classes