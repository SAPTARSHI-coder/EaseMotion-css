# CSS Environment Badge

A collection of highly visible, animated environment indicator badges (Development, Staging, Production) to prevent deployment accidents and improve developer awareness.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes native CSS keyframes to create continuous alerting animations perfectly suited for fixed-position development overlays.
- **Micro-Interactions & Alerts**: 
  - **Dev**: Features a subtle pulsating dot using a scaled `::after` pseudo-element.
  - **Staging**: Implements a continuous, seamless "barber pole" striped animation using `repeating-linear-gradient` and `background-position` shifting.
  - **Production**: Emits an aggressive, pulsating red `box-shadow` to ensure the highest level of visual caution.
- **Accessible & Responsive**: Fully semantic structure with `aria-label`s for screen readers. Respects user preferences by gracefully freezing all continuous animations and transitions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your application's root layout, and use CSS `position: fixed` to pin it to a corner (e.g., `bottom: 16px; right: 16px; z-index: 9999;`).

```html
<!-- For a Staging environment -->
<div class="env-badge staging" style="position: fixed; bottom: 16px; right: 16px;">
  <svg>...</svg>
  <span>Staging</span>
</div>
```

## CSS Custom Properties
Easily customize the environment colors using the root variables in `style.css`:
- `--env-dev`: Development status color (default: `#10b981` / Emerald)
- `--env-staging`: Staging status color (default: `#f59e0b` / Amber)
- `--env-prod`: Production status color (default: `#ef4444` / Red)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). The `repeating-linear-gradient` is fully supported across all engines.
