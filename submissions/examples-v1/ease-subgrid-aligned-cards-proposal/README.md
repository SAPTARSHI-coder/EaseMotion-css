# Subgrid Aligned Card Layout (`ease-subgrid-aligned-cards`)

This proposal introduces a modern CSS layout solution for perfectly aligned card grids using `subgrid`.

## 📌 Feature Overview

One of the most persistent problems in web design is keeping elements within a grid of cards (like headers, bodies, and footers) vertically aligned with each other when the content lengths vary. This component solves this entirely in CSS using the `subgrid` feature.

Features:
- Parent container defines repeating row structures using `grid-auto-rows: min-content 1fr min-content`.
- Cards span 3 rows and inherit them with `grid-template-rows: subgrid`.
- Result: Every card in a row automatically perfectly matches the height of the tallest header, the tallest content area, and the tallest footer in that specific row.
- Fallback included for older browsers using standard flex/grid behaviors (`@supports not (grid-template-rows: subgrid)`).
- Dark mode compatibility.

Included classes:
- `.ease-card-grid`
- `.ease-subgrid-card`
- `.ease-subgrid-card__header`
- `.ease-subgrid-card__content`
- `.ease-subgrid-card__footer`

## ⚙️ How to Use

To test this feature locally, open the `demo.html` file in your web browser. The styles are contained in `style.css`. Resize the browser to see how the alignment adapts as cards wrap to new rows.

Example structure:

```html
<div class="ease-card-grid">
  <!-- Card 1 -->
  <article class="ease-subgrid-card">
    <header class="ease-subgrid-card__header"><h3>Plan A</h3></header>
    <div class="ease-subgrid-card__content"><p>Short.</p></div>
    <footer class="ease-subgrid-card__footer"><button>Buy</button></footer>
  </article>

  <!-- Card 2 -->
  <article class="ease-subgrid-card">
    <header class="ease-subgrid-card__header"><h3>Plan B</h3></header>
    <div class="ease-subgrid-card__content"><p>A very long description that expands the content area for all cards in this row.</p></div>
    <footer class="ease-subgrid-card__footer"><button>Buy</button></footer>
  </article>
</div>
```

*Note: As per the contributing guidelines, this proposal is implemented inside a unique `submissions/examples/ease-subgrid-aligned-cards-proposal/` directory to avoid directly modifying core files and causing zero deletions.*

## 🔗 Related Issue
Closes Issue #8793
