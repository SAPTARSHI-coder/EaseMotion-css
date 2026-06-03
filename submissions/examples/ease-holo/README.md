# Holographic Foil Hover

## What does this do?
It creates an iridescent, holographic foil sweep effect on elements when hovered, simulating a realistic light reflection that dynamically blends with the underlying content.

## How is it used?
Add the class `ease-holo` to any HTML element:

```html
<div class="card ease-holo">
  <h2>Rare Collectible</h2>
  <p>Hover to see the holographic foil shine!</p>
</div>
```

You can customize the intensity of the reflection by declaring the `--ease-holo-intensity` CSS variable:

```css
.card {
  /* Customize foil strength (between 0.0 and 1.0, defaults to 0.25) */
  --ease-holo-intensity: 0.35;
}
```

## Why is it useful?
It provides a premium, modern aesthetic designed for interactive cards, buttons, badges, and collectible drops (such as NFTs or gaming card interfaces). By using `mix-blend-mode: overlay`, the effect avoids looking like a cheap flat gradient and instead reacts dynamically to the colors, text, and imagery inside the container. It is pure CSS, highly performant, and fully respects `prefers-reduced-motion` settings.

## Tech Stack
- HTML
- CSS (no external dependencies, no required JavaScript)

## Preview
Open `demo.html` directly in your browser to interact with the demo.
