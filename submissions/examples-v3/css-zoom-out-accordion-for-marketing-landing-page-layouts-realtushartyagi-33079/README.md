# CSS Zoom-Out Accordion for Marketing Pages

A pure CSS accordion component built on native `<details>` and `<summary>` HTML elements. Designed specifically for Marketing Landing Pages (e.g., FAQ sections), it features a sophisticated "Zoom-Out" interaction pattern. When a user clicks to expand a section, the entire accordion card subtly scales down (`scale(0.98)`) and its shadow flattens, drawing the user's focus inward to the newly revealed content. 

## Files
- `demo.html` – A standalone demonstration page featuring a mocked marketing FAQ layout with three interactive accordion sections.
- `style.css` – The heavily-commented stylesheet containing the custom `cubic-bezier` zoom logic, the CSS Grid trick for height transitions, and the animated SVG chevron.

## How it works
1. **Semantic Foundation**: Relies entirely on the native HTML5 `<details>` and `<summary>` tags, providing built-in accessibility and keyboard navigation out of the box.
2. **The Zoom-Out Effect**: The `.ease-zoom-accordion` container serves as the anchor. Upon entering the `[open]` state, the container transitions to `transform: scale(0.98)` and its box-shadow is reduced. This creates a psychological "pressed" or "focused" effect that feels deeply tactile.
3. **Height Transitions via CSS Grid**: Native `<details>` elements do not animate their height by default. This stylesheet uses the modern CSS Grid trick (`grid-template-rows: 0fr` to `1fr`) on the `.ease-zoom-content` wrapper to gracefully slide the content open.
4. **Animated Chevron**: The toggle indicator rotates 180 degrees using the same timing function to remain perfectly synced with the zoom effect.

## Usage

You can copy the HTML structure and CSS variables directly into your landing page layouts.

```html
<details class="ease-zoom-accordion" name="marketing-faq">
    <summary class="ease-zoom-summary">
        <h3>Your Question Here?</h3>
        <div class="ease-zoom-indicator">
            <!-- SVG Chevron Here -->
        </div>
    </summary>
    <div class="ease-zoom-content">
        <div class="ease-content-inner">
            <p>Your detailed answer goes here.</p>
        </div>
    </div>
</details>
```

### Customizing the Zoom Physics
The physics are governed by standard CSS Custom Properties defined in `:root`, making it trivial to adjust the scale factor and timing for your brand:

```css
:root {
  --ease-zoom-transition-time: 0.4s;
  
  /* An ease-out curve feels snappy on click and settles gently */
  --ease-zoom-easing: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* How much it shrinks (1 = 100%, 0.98 = 98%) */
  --ease-zoom-scale-factor: 0.98; 
}
```

## Accessibility (prefers-reduced-motion)
Because it uses `<details>` and `<summary>`, screen readers naturally understand the expanded/collapsed state without needing manual `aria-expanded` ARIA attributes. A strict `@media (prefers-reduced-motion: reduce)` block is included to instantly strip away the zoom transforms, grid animations, and content fades for users who are sensitive to motion.

## Why it fits EaseMotion CSS
EaseMotion advocates for high-fidelity micro-interactions that don't rely on heavy JavaScript. Marketing pages need to load fast and perform flawlessly. While many modern landing pages rely on bloated JS libraries to achieve tactile "scale" and "accordion" effects, this component proves you can achieve a deeply interactive, 60fps physics-based experience entirely within the browser's native CSS rendering engine.
