# Scratch Reveal Interactive Card

Gamified UI elements are excellent for user engagement. This component mimics a lottery "scratch-off" card to reveal a hidden prize or coupon code when hovered.

### Usage
```html
<div class="ease-scratch-container">
    <!-- The underlying layer (the prize) -->
    <div class="ease-scratch-prize">
        <h2>🎉 You Won! 🎉</h2>
        <div class="prize-code">EASE-PRO-50</div>
    </div>
    
    <!-- The overlay layer that gets "scratched" away -->
    <div class="ease-scratch-overlay ease-hover-lift">
        <div class="overlay-content">
            <h3>Hover to Reveal</h3>
        </div>
    </div>
</div>
```

### Why is it useful?
True cursor-based "scratching" requires complex HTML5 `<canvas>` setups, JavaScript event listeners for mouse coordinates, and heavy re-rendering. This component achieves a brilliant approximation natively in CSS. By using CSS `mask-image: radial-gradient` coupled with a `@keyframes` animation that rapidly shifts the gradient's center coordinates on hover, we create a highly performant, dependency-free scratch-off illusion.
