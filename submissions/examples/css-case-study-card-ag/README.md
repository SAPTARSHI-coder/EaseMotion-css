# CSS Case Study Card

A clean, professional portfolio case study card designed to prominently display a client project alongside its key result metrics.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes native CSS transitions for all interaction states.
- **Micro-Interactions**: Hovering or focusing on the card triggers a synchronized suite of animations: the card elevates (`translateY` and `box-shadow`), the hero image gently scales up (`scale`), and a call-to-action arrow slides into view from the right side.
- **Metric Highlighting**: Key performance indicators (KPIs) are cleanly separated at the bottom of the card, making the business impact of the case study immediately scannable.
- **Accessible & Responsive**: The entire card functions as a single unified `<a>` tag, maximizing click area and ensuring perfect keyboard navigability. It includes an `aria-label` for screen readers and respects user preferences by gracefully disabling transitions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your portfolio grid layout.

```html
<a href="#" class="case-study-card" aria-label="...">
  <div class="card-image-wrapper">
    <span class="client-badge">Client Name</span>
    <img class="card-image" src="..." alt="..." />
  </div>
  <div class="card-content">
    <h3 class="card-title">Project Title</h3>
    <p class="card-desc">Project description...</p>
    <div class="card-metrics">...</div>
  </div>
  <div class="card-arrow" aria-hidden="true">...</div>
</a>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--card-bg`: The card background color (default: `#ffffff`)
- `--text-primary`: Color for headings and primary text (default: `#0f172a`)
- `--metric-color`: Highlight color for the KPI values (default: `#10b981`)
- `--accent-color`: Background color for the hover arrow (default: `#3b82f6`)

## Browser Support
Works beautifully in all modern browsers (Chrome, Firefox, Safari, Edge).
