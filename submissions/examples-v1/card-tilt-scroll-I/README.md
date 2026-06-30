# Card Tilt on Scroll

Cards tilt based on scroll position — rotateX mapped to viewport center with smooth perspective effect.

## Files

- demo.html - Interactive demo
- style.css - Card tilt styles
- README.md - Documentation

## Features

- 🎯 Each card's rotateX mapped to viewport position
- 📐 JS updates `--ease-card-tilt` var per card
- ✨ Smooth perspective effect on scroll
- 🎨 Works with any card layout

## Usage

```html
<div class="tilt-card" data-index="0">
  <div class="card-content">
    <h3>Card Title</h3>
    <p>Card content</p>
  </div>
</div>

<script>
  function updateCardTilts() {
    const cards = document.querySelectorAll(".tilt-card");
    const center = window.innerHeight / 2;
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const offset = ((cardCenter - center) / center) * 15;
      card.style.setProperty("--ease-card-tilt", `${-offset}deg`);
    });
  }
  window.addEventListener("scroll", updateCardTilts);
</script>
```
