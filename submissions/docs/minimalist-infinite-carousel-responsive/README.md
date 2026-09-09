# Minimalist Infinite Carousel (Responsive Breakpoints Layout)

This guide documents how to create a fluid, responsive layout for the Minimalist Infinite Carousel. It covers adjusting item width, gap, and animation speed across different screen sizes to maintain a visually appealing scroll speed.

## Responsive Configuration via CSS Variables

The easiest and most maintainable way to make the infinite carousel responsive is by redefining its core CSS variables inside media queries, specifically targeting the `.infinite-carousel--responsive` modifier class.

### CSS Implementation

```css
:root {
    /* Base Mobile Variables (Small Screens) */
    --carousel-speed: 15s;
    --carousel-gap: 1rem;
    --carousel-item-width: 150px;
}

/* 
 * RESPONSIVE BREAKPOINTS MODIFIER
 */
.infinite-carousel--responsive {
    
    /* Tablet Breakpoint */
    @media (min-width: 768px) {
        --carousel-speed: 20s;
        --carousel-gap: 2rem;
        --carousel-item-width: 200px;
    }

    /* Desktop Breakpoint */
    @media (min-width: 1024px) {
        --carousel-speed: 25s; /* Slower speed for wider screens to maintain smooth reading pace */
        --carousel-gap: 3rem;
        --carousel-item-width: 250px;
    }
}
```

## HTML Markup Example

Apply the `.infinite-carousel--responsive` class to the main container.

```html
<!-- Added the responsive modifier class -->
<div class="infinite-carousel infinite-carousel--responsive" role="region" aria-roledescription="carousel" aria-label="Partner Logos">
    <div class="carousel-track">
        <!-- Original Items -->
        <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="1 of 4">
            <div class="card">Brand 1</div>
        </div>
        <!-- ... -->
        
        <!-- Duplicated Items -->
        <div class="carousel-item" aria-hidden="true">
            <div class="card">Brand 1</div>
        </div>
        <!-- ... -->
    </div>
</div>
```

## Keyboard Navigation & Accessibility

Ensure the responsive layouts do not break the fundamental accessibility rules established for the component:

1. **Pause Controls**: The animation must still pause on `:hover` and `:focus-within`. Ensure the Javascript toggle button remains accessible (using `aria-pressed`) on mobile devices.
2. **Reduced Motion**: The `@media (prefers-reduced-motion: reduce)` query should override the responsive breakpoints, forcing `animation: none` regardless of screen size.
3. **Touch Targets**: The base mobile variables use a minimum item width (`150px`) and gap (`1rem`) that ensure comfortable tap targets (minimum 44x44px per WCAG guidelines) if the cards contain links.

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
