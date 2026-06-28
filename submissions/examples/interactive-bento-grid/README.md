# Interactive Bento Grid Dashboard

## What does this do?

This is a premium, glassmorphic bento grid dashboard layout. The grid widgets load with staggered fade-in animations on page load, and individual cards contain interactive details drawer panels that slide up from the bottom when clicked.

## How is it used?

1. Add the bento layout structure. Use grid spanning classes (`ease-span-2x2`, `ease-span-2x1`, `ease-span-1x2`, `ease-span-1x1`) to define card sizes:

```html
<div class="ease-bento-grid">
  <!-- Double width, double height widget -->
  <div class="ease-bento-card ease-span-2x2">
    <div class="card-title">Main Core</div>

    <!-- Inline details drawer -->
    <div class="ease-bento-details">
      <button class="ease-bento-close-btn">
        <svg viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <h4>Extended Details</h4>
      <p>More metrics, configurations, and logs...</p>
    </div>
  </div>

  <!-- Double width, single height widget -->
  <div class="ease-bento-card ease-span-2x1">
    <!-- Card Face Content -->
  </div>
</div>
```

2. Link the stylesheet to your page:

```html
<link rel="stylesheet" href="style.css" />
```

3. Toggle active card states using a simple JavaScript handler. Remember to stop propagation on the close button to prevent the event from bubbling back up to the card:

```javascript
const cards = document.querySelectorAll(".ease-bento-card");
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (e.target.closest(".ease-bento-close-btn")) return;
    card.classList.toggle("ease-active");
  });

  const closeBtn = card.querySelector(".ease-bento-close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      card.classList.remove("ease-active");
    });
  }
});
```

## Why is it useful?

Most bento grids are static and serve purely visual layout functions. This dashboard component combines staggered CSS loading animations with dynamic inline drawers. This allows users to drill down into complex metrics and settings directly within each widget, preserving the layout integrity of the dashboard.

## Tech Stack

- HTML
- CSS (Grid layout, keyframe animations, custom properties)
- JavaScript (click toggles and propagation helper)

## Customization

Override these properties in your stylesheet to modify themes and card aesthetics:

- `--ease-bento-bg`: Card backdrop surface color (default: `rgba(30, 41, 59, 0.45)`).
- `--ease-bento-border`: Outlines border color (default: `rgba(255, 255, 255, 0.08)`).
- `--ease-bento-primary`: Core theme color (default: `#6c63ff`).
- `--ease-bento-success`: Online node status indicator (default: `#22c55e`).

## Preview

Open `demo.html` directly in your browser to see the layout in action.

## Contribution Notes

- Class naming was handled by the contributor (prefixed with `ease-`)
- Maintainer will review and standardize before merging
