# Blur-Entrance Carousel (`ease-blur-entrance-carousel-ksk`)

1. What does this do?  
An interactive stacked carousel where slides transition in from a blurred, scaled-down state (`filter: blur(18px) scale(0.92)`) to clear full-scale size, matching frosted glassmorphic card designs. Directional arrow labels and dot indicator pills navigate through the deck.

2. How is it used?  
Define three radio inputs named `carousel-group` (`#carousel-1`, `#carousel-2`, `#carousel-3`) immediately before the card `.carousel-card`. Set up `<label>` elements pointing to the radio IDs for arrows and dots. Customize transition properties using variables:

```css
.carousel-card {
  --ease-carousel-blur:     18px;          /* initial blur distance   */
  --ease-carousel-scale:    0.92;          /* initial scale offset    */
  --ease-carousel-duration: 0.55s;         /* speed of transition     */
  --ease-carousel-easing:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-carousel-accent:   #3b82f6;       /* category theme color    */
}
```

3. Why is it useful?  
Instead of traditional slide-in translations, the blur-entrance transition creates a clean focal fade effect. Perfect for glassmorphic product highlights, portfolio decks, features spotlights, and Spatial UI mockups. Fully responsive and operates 100% without JavaScript.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #50515.*
