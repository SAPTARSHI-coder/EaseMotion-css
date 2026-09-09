# Minimalist Infinite Carousel (Accessibility Setup Guide)

This guide documents the strict accessibility requirements necessary for implementing an infinite CSS carousel. Infinite animations can cause motion sickness and severe distraction for users with cognitive disabilities, so it is critical to configure them correctly.

## Accessibility Requirements & Keyboard Navigation

### 1. Motion Controls
To comply with WCAG 2.2 Success Criterion 2.2.2 (Pause, Stop, Hide), users must have a way to pause any auto-updating or auto-scrolling content that lasts longer than 5 seconds.

- **Pause on Interaction**: You must pause the animation when the carousel receives mouse hover (`:hover`) or keyboard focus (`:focus-within`).
- **Dedicated Pause Button**: A dedicated UI button must be provided for users to manually pause the animation via JavaScript (`animation-play-state`). Use `aria-pressed="true|false"` to announce the state.
- **`prefers-reduced-motion`**: You must respect the OS-level reduced motion preference. When enabled, disable the animation completely, allow the items to wrap naturally in a flex container, and hide the duplicated items.

### 2. Screen Reader Navigation (ARIA)
Because CSS infinite carousels require duplicating DOM nodes, you must hide the duplicated nodes from screen readers to prevent double-announcing content.

- **Container Roles**: Use `role="region"` and `aria-roledescription="carousel"` on the main container. Ensure it has an `aria-label` or `aria-labelledby`.
- **Item Roles**: Use `role="group"` and `aria-roledescription="slide"` on the *original* items.
- **Duplicated Items**: Apply `aria-hidden="true"` to all duplicated items. Also, apply `tabindex="-1"` to any interactive elements inside the duplicates to prevent keyboard traps.

## HTML Markup Example

```html
<section class="carousel-section" aria-labelledby="carousel-title">
    <h2 id="carousel-title" class="sr-only">Featured Brands</h2>
    
    <!-- Crucial Accessibility Control -->
    <div class="carousel-controls">
        <button id="motion-toggle" class="motion-toggle-btn" aria-pressed="false">
            <span class="sr-only">Toggle</span> Pause Animation
        </button>
    </div>
    
    <div class="infinite-carousel" role="region" aria-roledescription="carousel" aria-label="Featured Brands">
        <div class="carousel-track">
            <!-- Original Interactive Items -->
            <div class="carousel-item" role="group" aria-roledescription="slide" aria-label="1 of 3">
                <a href="#" class="card" aria-label="Visit Brand X">Brand X</a>
            </div>
            <!-- ... other original items ... -->
            
            <!-- Duplicated Decorative Items (Hidden from assistive tech) -->
            <div class="carousel-item" aria-hidden="true">
                <a href="#" tabindex="-1" class="card">Brand X</a>
            </div>
            <!-- ... other duplicated items ... -->
        </div>
    </div>
</section>
```

## CSS Overrides for Accessibility

```css
/* Ensure focus outlines are highly visible */
.card:focus-visible,
.motion-toggle-btn:focus-visible {
    outline: 3px solid #005fcc;
    outline-offset: 4px;
}

/* Pause on hover AND focus-within */
.infinite-carousel:hover .carousel-track,
.infinite-carousel:focus-within .carousel-track {
    animation-play-state: paused;
}

/* Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
    .carousel-track {
        animation: none !important;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .carousel-item[aria-hidden="true"] {
        display: none !important;
    }
    
    .motion-toggle-btn {
        display: none;
    }
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
