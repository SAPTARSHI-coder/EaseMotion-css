# Card Stack (`ease-card-stack`)

A Tinder-style stacked card UI with CSS-powered depth offsets and buttery-smooth swipe/dismiss animations. Built for the EaseMotion-css framework.

## 🚀 Features

- **CSS Variable Architecture**: The depth, scale, and positioning of each card in the stack are driven entirely by a single `--card-index` CSS variable feeding into a `calc()` formula.
- **Hardware Accelerated**: The animations strictly utilize `transform` and `opacity`, ensuring perfectly smooth 60fps frame rates even on mobile devices.
- **Dynamic Reordering**: When the top card is dismissed, JavaScript simply decrements the `--card-index` variable of the remaining cards, and CSS automatically handles the complex bouncy transitions to slide the next card to the front.

## 🛠️ Usage

Wrap your cards in an `.ease-card-stack` container. You must assign each `.ease-card` a `--card-index` style property. Index `0` is the top, largest card. Index `1` is the card behind it, and so on.

```html
<div class="ease-card-stack" id="my-stack">
  <!-- Place cards in reverse order so the index 0 card renders on top -->
  <div class="ease-card" style="--card-index: 2;"> Card 3 </div>
  <div class="ease-card" style="--card-index: 1;"> Card 2 </div>
  <div class="ease-card" style="--card-index: 0;"> Card 1 </div>
</div>
