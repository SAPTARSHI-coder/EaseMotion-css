# Scale-Hover Badge — Fintech Dashboard

A pure CSS/HTML EaseMotion component featuring smooth scale-on-hover animations for fintech dashboard badge layouts. Three badge variants (KPI metric, transaction row, alert) share a unified motion language: spring-eased scale transforms, glow box-shadows keyed to semantic color, shimmer sweeps, and responsive micro-interactions on the icon and value sub-elements.

---

## Files

```
submissions/examples/scale-hover-badge/
├── demo.html   — Full fintech dashboard showcase
├── style.css   — All styles & animations
└── README.md   — This file
```

---

## Usage

Add `style.css` to your page and apply the classes below. No JavaScript needed.

```html
<link rel="stylesheet" href="style.css" />

<!-- KPI Metric Badge -->
<div class="em-badge em-badge--green">
  <div class="em-badge__header">
    <span class="em-badge__label">Total Revenue</span>
    <span class="em-badge__icon em-badge__icon--green">💰</span>
  </div>
  <div class="em-badge__value">$2.41M</div>
  <span class="em-badge__delta em-badge__delta--up">▲ 12.4%</span>
</div>

<!-- Transaction Row Badge -->
<div class="em-tx-badge">
  <div class="em-tx-avatar">💳</div>
  <div class="em-tx-info">
    <div class="em-tx-name">Stripe Inc.</div>
    <div class="em-tx-meta">Wire Transfer · Aug 5</div>
    <span class="em-tx-status em-tx-status--cleared">Cleared</span>
  </div>
  <div class="em-tx-amount em-tx-amount--credit">+$12,400</div>
</div>

<!-- Alert Badge -->
<div class="em-alert-badge em-alert-badge--warning">
  <div class="em-alert-icon">⚠️</div>
  <div>
    <div class="em-alert-title">Unusual Activity</div>
    <div class="em-alert-body">3 transactions flagged for review.</div>
  </div>
</div>
```

---

## CSS Custom Properties

Override any token at `:root` or on a scoped parent to theme the component.

| Property | Default | Description |
|---|---|---|
| `--em-bg` | `#0D1117` | Page background |
| `--em-surface` | `#161B22` | Card/badge surface |
| `--em-surface-raised` | `#1C2333` | Hovered surface |
| `--em-border` | `#21262D` | Default border color |
| `--em-border-lit` | `#30363D` | Hover border color |
| `--em-text-primary` | `#E6EDF3` | Primary text |
| `--em-text-secondary` | `#8B949E` | Labels and metadata |
| `--em-text-muted` | `#484F58` | Section labels, footer |
| `--em-accent-green` | `#2EA043` | Positive / success |
| `--em-accent-red` | `#DA3633` | Negative / danger |
| `--em-accent-blue` | `#1F6FEB` | Info / primary |
| `--em-accent-amber` | `#D29922` | Warning |
| `--em-accent-purple` | `#8957E5` | Neutral metric |
| `--em-duration-fast` | `140ms` | Icon micro-interactions |
| `--em-duration-base` | `220ms` | Card hover transition |
| `--em-duration-slow` | `380ms` | Alert icon rotation |
| `--em-ease-spring` | `cubic-bezier(0.34,1.56,0.64,1)` | Overshoot spring |
| `--em-ease-out` | `cubic-bezier(0.16,1,0.3,1)` | Smooth exit |
| `--em-badge-scale` | `1.08` | KPI & alert scale amount |
| `--em-badge-scale-sm` | `1.06` | Transaction row scale |
| `--em-badge-lift` | `-3px` | KPI card Y lift on hover |

### Example: light-mode override

```css
:root {
  --em-bg:           #F6F8FA;
  --em-surface:      #FFFFFF;
  --em-surface-raised:#F0F2F4;
  --em-border:       #D0D7DE;
  --em-border-lit:   #B0B7C0;
  --em-text-primary: #1F2328;
  --em-text-secondary:#636C76;
  --em-text-muted:   #9EA7B3;
}
```

---

## Component Classes

### `em-badge` — KPI Metric Card

| Class | Role |
|---|---|
| `em-badge` | Base card with scale-hover |
| `em-badge--green/red/blue/amber/purple` | Accent color on hover (glow + border) |
| `em-badge__header` | Flex row: label + icon |
| `em-badge__label` | Metric name |
| `em-badge__icon` | Colored icon container |
| `em-badge__icon--{color}` | Matches accent variant |
| `em-badge__value` | Large numeric value |
| `em-badge__delta` | Change pill |
| `em-badge__delta--up/down/flat` | Direction semantics |
| `em-sparkline` | Inline SVG mini-chart wrapper |
| `em-sparkline__line` | Stroke path |
| `em-sparkline__area` | Gradient fill polygon |

### `em-tx-badge` — Transaction Row

| Class | Role |
|---|---|
| `em-tx-badge` | Row with scale + X-translate hover |
| `em-tx-avatar` | Leading icon/emoji cell |
| `em-tx-info` | Flexible middle column |
| `em-tx-name` | Counterparty name |
| `em-tx-meta` | Type and date |
| `em-tx-status` | Status pill |
| `em-tx-status--cleared/pending/failed` | Semantic color |
| `em-tx-amount` | Trailing amount |
| `em-tx-amount--credit/debit` | Green or white |

### `em-alert-badge` — System Alert

| Class | Role |
|---|---|
| `em-alert-badge` | Card with scale hover |
| `em-alert-badge--warning/info` | Accent border/glow on hover |
| `em-alert-icon` | Rotating icon cell |
| `em-alert-title` | Bold alert headline |
| `em-alert-body` | Supporting detail text |

---

## Animation Details

**Scale-hover (`.em-badge`):**
Cards lift `3px` and scale to `1.08×` on hover using a spring easing (`cubic-bezier(0.34,1.56,0.64,1)`) that produces a slight overshoot for a physical feel. Pressing (`:active`) snaps down to `0.97×` before releasing.

**Shimmer sweep (`.em-badge::after`):**
A skewed gradient sweeps across the card on hover — 0.55 s ease-out, triggered by the same hover state. No JavaScript required.

**Icon rotation (`.em-badge__icon`, `.em-alert-icon`):**
Sub-elements animate independently within the card, so they don't fight the parent scale: the KPI icon scales and rotates `−4°`; the alert icon rotates `+8°`.

**Value letter-spacing (`.em-badge__value`):**
On hover, tracking relaxes from `−0.8px` to `−0.4px` — a subtle typographic cue that the card is "opening."

**Sparkline stroke weight:**
Line stroke thickens from `1.5px` to `2px` and area fill opacity increases from `0.12` to `0.22` on hover, drawing the eye to the trend.

**Transaction row (`.em-tx-badge`):**
Uses `translateX(3px)` instead of a pure scale to convey a directional "slide to inspect" affordance, reinforcing that rows are tappable/clickable items in a list.

---

## Accessibility

- All interactive badges carry `tabindex="0"` and `role="button"` with descriptive `aria-label` values.
- Sparklines are marked `aria-hidden="true"` — they are decorative.
- All transforms and animations are suppressed under `prefers-reduced-motion: reduce`. No layout or content is lost; cards remain fully functional, just static.
- Color is never the sole indicator of status — labels and icons provide parallel meaning.

---

## Browser Support

All features use standard CSS Transforms, Transitions, and SVG — no prefixes required for modern browsers.

| Feature | Support |
|---|---|
| CSS `transform: scale()` | All modern browsers |
| CSS `transition` | All modern browsers |
| CSS Custom Properties | Chrome 49+, Firefox 31+, Safari 9.1+ |
| `prefers-reduced-motion` | Chrome 74+, Firefox 63+, Safari 10.1+ |
| SVG inline | All modern browsers |

---

## Difficulty

`level:intermediate`

---

## License

Part of the EaseMotion CSS open-source component library.