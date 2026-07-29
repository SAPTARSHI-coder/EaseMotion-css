# Scale-Hover Carousel - Creative Portfolio Layouts

A pure CSS interactive carousel featuring smooth scale-hover transitions, dynamic studio focus dimming, and vibrant cyberpunk/artistic aesthetics. Designed specifically for creative portfolio galleries, design studio archives, and visual case study showcases.

## Features

- **Pure CSS Navigation:** Utilizes the CSS "radio hack" (`:checked` paired with the general sibling combinator `~`) to smoothly translate between multi-card showcase slides without JavaScript dependencies.
- **Scale-Hover Elevation:** When hovering over any project card, it scales up (`transform: scale(1.07)`), elevates with a neon/artistic glowing drop shadow, and smoothly slides its project details overlay into focus.
- **Studio Focus Lighting:** When the cursor enters a carousel slide, all non-hovered sibling cards automatically dim and scale down slightly (`filter: grayscale(40%) brightness(0.65)`), creating an ultra-premium visual focus effect that highlights the active project.
- **Responsive & Accessible:** Adaptively shifts grid columns from 3 cards on desktop down to 1 card on small screens. Fully keyboard accessible with custom focus rings and built-in support for `prefers-reduced-motion`. (Note: A tiny 10-line script is included in the HTML *solely* to map Enter and Spacebar keys on pagination dots for keyboard accessibility).
- **Customizable Parameters:** Exposes standard CSS Custom Properties on `:root` for effortless control over transition durations, hover scaling factors, dimming opacity, and color palettes.

## Customization

The component exposes standard CSS custom variables on the `:root` pseudo-class for easy theming:

```css
:root {
    /* Carousel & Hover Transition Timing */
    --carousel-transition: 0.65s cubic-bezier(0.25, 1, 0.5, 1);
    --hover-transition: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    /* Scale & Elevation Factors */
    --card-scale-hover: 1.07;
    --card-scale-dim: 0.94;
    --card-dim-opacity: 0.55;
    
    /* Creative Portfolio Palette */
    --accent-cyan: #00f2fe;
    --accent-pink: #fe0979;
    --card-shadow-hover: 0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.35);
    /* ... see style.css for all variables */
}
```

## How to Use

1. Copy the HTML structure from `demo.html`, ensuring the hidden `<input type="radio">` elements remain siblings to `.carousel-viewport` and `.carousel-nav`.
2. Include `style.css` in your project.
3. Add your portfolio project cards inside the respective `.carousel-slide` containers.

```html
<!-- Core Structure Example -->
<div class="carousel-wrapper">
    <input type="radio" id="slide-1" name="carousel-slides" class="carousel-input" checked>
    <input type="radio" id="slide-2" name="carousel-slides" class="carousel-input">
    
    <div class="carousel-viewport">
        <div class="carousel-track">
            <div class="carousel-slide">
                <a href="#" class="carousel-card">...</a>
                <a href="#" class="carousel-card">...</a>
            </div>
            <div class="carousel-slide">...</div>
        </div>
    </div>
    
    <nav class="carousel-nav">
        <label for="slide-1" class="nav-dot" role="tab" tabindex="0"></label>
        <label for="slide-2" class="nav-dot" role="tab" tabindex="0"></label>
    </nav>
</div>
```
