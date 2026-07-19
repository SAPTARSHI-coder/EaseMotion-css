# CSS Spring Physics Accordion for Product Catalogs

A pure CSS accordion component built on native `<details>` and `<summary>` HTML elements. Designed specifically for e-commerce and product catalogs, it features a snappy "Spring Physics" interaction pattern: when the accordion expands, the content reveals itself using a bouncy, custom `cubic-bezier` timing function, providing satisfying tactile feedback reminiscent of premium native mobile shopping apps.

## Files
- `demo.html` – A standalone demonstration page featuring a mocked product detail layout with a gallery, pricing, and three interactive accordion sections (Description, Specs, Shipping).
- `style.css` – The heavily-commented stylesheet containing the custom `cubic-bezier` spring logic, the CSS Grid trick for height transitions, and the animated plus/minus indicator.

## How it works
1. **Semantic Foundation**: Relies entirely on the native HTML5 `<details>` and `<summary>` tags, providing built-in accessibility and keyboard navigation out of the box.
2. **Spring Physics via CSS Grid**: Native `<details>` elements do not animate their height by default. This stylesheet uses the modern CSS Grid trick (`grid-template-rows: 0fr` to `1fr`) on the `.ease-spring-content` wrapper. The secret sauce is the `--ease-spring-easing` variable (`cubic-bezier(0.175, 0.885, 0.32, 1.1)`), which slightly overshoots the target height and settles back into place rapidly.
3. **Cascading Content Animation**: To amplify the effect, the inner `.accordion-body` block features a secondary `transform: scale(0.98) translateY(-4px)` and opacity fade. When the accordion opens, this content springs down and scales up into place, creating a fluid, multi-layered cascade effect.
4. **Animated Plus/Minus**: The toggle indicator is built from two absolute `<span>` lines forming a plus icon. When opened, the vertical line rotates to form a minus sign, utilizing the exact same snappy spring curve.

## Usage

You can copy the HTML structure and CSS variables directly into your product detail layouts.

```html
<details class="ease-spring-accordion" name="product-details">
    <summary class="ease-spring-summary">
        <h3>Product Description</h3>
        <div class="ease-spring-indicator">
            <span class="indicator-line horizontal"></span>
            <span class="indicator-line vertical"></span>
        </div>
    </summary>
    <div class="ease-spring-content">
        <div class="ease-content-inner">
            <div class="accordion-body">
                <p>Your product information goes here.</p>
            </div>
        </div>
    </div>
</details>
```

### Customizing the Spring Physics
The physics are governed by standard CSS Custom Properties defined in `:root`, making it trivial to adjust the "snappiness" for your brand:

```css
:root {
  --ease-spring-transition-time: 0.5s; /* Duration of the spring */
  
  /* 
    The Y-value of 1.1 is what causes the slight "overshoot". 
    Increase it for more bounce, decrease towards 1.0 for a flatter transition.
  */
  --ease-spring-easing: cubic-bezier(0.175, 0.885, 0.32, 1.1);
}
```

## Accessibility (prefers-reduced-motion)
Because it uses `<details>` and `<summary>`, screen readers naturally understand the expanded/collapsed state without needing manual `aria-expanded` ARIA attributes. A strict `@media (prefers-reduced-motion: reduce)` block is included to instantly strip away the spring bezier transforms, grid animations, and content fades for users who are sensitive to motion.

## Why it fits EaseMotion CSS
EaseMotion advocates for zero-JavaScript UI patterns whenever possible. High-end e-commerce animations are typically built using bloated React/Vue state libraries or heavy JS physics engines just to achieve snappy accordion transitions. By combining the native `<details>` element with modern CSS Grid height transitions and a custom overshoot cubic-bezier, this component delivers a deeply interactive, 60fps physics-based experience entirely within the browser's CSS rendering engine.
