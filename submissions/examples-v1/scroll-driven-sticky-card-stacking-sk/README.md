# Scroll-Driven Sticky Card Stacking Component

A modern, high-performance storytelling roadmap component built using **pure HTML and CSS**. It utilizes native `position: sticky` logic paired with custom CSS custom properties to scale, stack, and overlay timeline cards dynamically as the user scrolls down the page—without a single line of JavaScript.

---

## 1. What does this do?

This component provides a vertical storytelling deck representing project phases or roadmap stages. 

### Key Animations & Visual Features
1. **Sticky Cascade Stacking**: As the user scrolls, each card slides up until it reaches its designated sticky position threshold, locking into place. Subsequent cards slide up and stack neatly underneath, forming a cascading card deck.
2. **Depth Scaling**: Cards are scaled using custom multipliers relative to their index. Pinned cards scale down slightly as new cards stack on top of them, creating a 3D depth-of-field perspective.
3. **Pulsing Connecting Nodes**: Each card is linked to a sidebar timeline path by an accent node that expands and glows when hovered.
4. **Independent Hover Elevation**: Cards lift slightly on focus/hover and highlight with matching theme borders.

---

## 2. How is it used?

### HTML Setup
Create a timeline column container. Add card items, specifying an inline CSS `--index` property matching their position (from `1` to `5`):

```html
<main class="stack-container">
  
  <!-- Card 1 (Index 1) -->
  <article class="card-item card-indigo" style="--index: 1;">
    <div class="card-inner">
      <div class="card-meta-row">
        <span class="card-number">01</span>
        <span class="card-tag">Research</span>
      </div>
      <h2 class="card-title">Discovery</h2>
      <p class="card-desc">...</p>
    </div>
  </article>

  <!-- Card 2 (Index 2) -->
  <article class="card-item card-emerald" style="--index: 2;">
    <!-- ... -->
  </article>

</main>
```

### CSS Sticky Calculation
The stacking layout is governed by calculations using the card's `--index` value to place card tops at unique offset layers:

```css
.card-item {
  position: sticky;
  /* Top threshold scales with index */
  top: calc(100px + var(--index) * 36px);
  z-index: var(--index);
  
  /* Creates space to scroll before stacking */
  margin-bottom: 25vh; 
  width: 100%;
  
  /* Subtle size compression based on scale formulas */
  transform: scale(calc(1 - (5 - var(--index)) * 0.015));
  transform-origin: top center;
}
```

---

## 3. Why is it useful?

1. **No JavaScript Scroll Listeners**: By using native CSS sticky mechanisms, the browser handles position triggers inside the rendering thread. This avoids layout thrashing or lagging animations caused by JS scroll handlers.
2. **Responsive Mobile Tiering**: Top thresholds and spacing scale down on smaller viewports. This prevents cards from clipping or stacking too far down the screen on mobile devices.
3. **Dynamic Staggered Layout**: Spacing margin rules (`margin-bottom: 25vh`) allow the user to read each card's content completely before the next card enters and overlays it.
4. **Clean Categorization**: Uses scoped theme variables (`--card-accent`, `--card-accent-light`, etc.) to easily change styles across individual cards.
