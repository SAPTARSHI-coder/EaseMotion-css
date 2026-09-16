# Minimalist Infinite Carousel (Theming Configuration)

This guide documents the setup, HTML markup, CSS modifier classes, and accessibility requirements for implementing a purely CSS-driven infinite marquee/carousel.

## HTML Markup Example

To achieve a seamless infinite effect, duplicate your set of items exactly once and mark the duplicates with `aria-hidden="true"`.

```html
<section class="carousel-section" aria-labelledby="carousel-title">
    <h2 id="carousel-title" class="sr-only">Our Partners</h2>
    
    <!-- Motion Control Toggle -->
    <button id="motion-toggle" aria-pressed="false">Pause Animation</button>
    
    <div class="infinite-carousel" role="region" aria-roledescription="carousel" aria-label="Partner Logos">
        <div class="carousel-track">
            <!-- Original Items -->
            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="1 of 3">
                <div class="card">Brand A</div>
            </div>
            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="2 of 3">
                <div class="card">Brand B</div>
            </div>
            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="3 of 3">
                <div class="card">Brand C</div>
            </div>
            
            <!-- Duplicated Items (Hidden from screen readers) -->
            <div class="carousel-item" aria-hidden="true">
                <div class="card">Brand A</div>
            </div>
            <div class="carousel-item" aria-hidden="true">
                <div class="card">Brand B</div>
            </div>
            <div class="carousel-item" aria-hidden="true">
                <div class="card">Brand C</div>
            </div>
        </div>
    </div>
</section>
```

## CSS Custom Properties & Modifiers

The carousel is controlled by CSS custom properties and can be configured dynamically without JavaScript.

### Default Variables

```css
:root {
    --carousel-speed: 20s;
    --carousel-gap: 2rem;
    --carousel-item-width: 200px;
    --carousel-direction: normal; /* normal = left, reverse = right */
    --carousel-fade-width: 100px; /* Size of the edge fade mask */
}
```

### Modifier Classes

You can append the following classes to `.infinite-carousel` to change the behavior:

**Fast Speed**
```css
.infinite-carousel--fast {
    --carousel-speed: 10s;
}
```

**Slow Speed**
```css
.infinite-carousel--slow {
    --carousel-speed: 30s;
}
```

**Reverse Direction**
```css
.infinite-carousel--reverse {
    --carousel-direction: reverse;
}
```

## Accessibility Requirements

Infinite carousels can be distracting and must adhere to motion sensitivity guidelines.

### Motion Controls
- **Pause on Hover/Focus**: The CSS includes `:hover` and `:focus-within` states to automatically pause the animation when the user interacts with it.
- **Prefers Reduced Motion**: Ensure your CSS respects the user's OS-level motion settings using `@media (prefers-reduced-motion: reduce)`. When triggered, the animation must stop and duplicated items must be hidden.
- **Pause Button**: A dedicated button (as shown in the markup) must be provided to allow users to manually pause the animation via JS `animation-play-state`. It must use `aria-pressed` to indicate its state.

### Keyboard Navigation & ARIA
- Use `role="region"` and `aria-roledescription="carousel"` on the container.
- Use `role="group"` and `aria-roledescription="slide"` on the original items.
- Provide clear `aria-label`s for the slides (e.g. "1 of X").
- Ensure all duplicated elements have `aria-hidden="true"` so screen readers don't read them twice.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
