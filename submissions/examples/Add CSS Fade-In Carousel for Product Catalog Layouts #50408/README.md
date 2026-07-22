# CSS Fade-In Carousel for Product Catalog Layouts 

A pure CSS, JavaScript-free animated carousel specifically designed for premium product catalogs. It utilizes smooth fade-in transitions, scale effects, and backdrop blurs to showcase products elegantly.

## Features

- **Pure CSS**: Completely zero JavaScript. It uses the `radio` input and `:checked` pseudo-class technique for state management.
- **Accessible**: Keyboard navigable out of the box. Users can tab into the carousel and use Left/Right arrows to move between slides. The indicator dots receive focus outlines when operated via keyboard.
- **Glassmorphic Details**: Product information cards use `backdrop-filter: blur()` over large feature images, making text readable while maintaining a premium aesthetic.
- **Responsive Design**: Adapts flawlessly from large desktop layouts down to mobile vertical orientations.
- **Staggered Animations**: Content fades in slightly after the main image to provide a high-end feel.

## Customization

The carousel exposes several CSS variables (custom properties) in the `:root` pseudo-class. These can be adjusted to immediately tweak the interaction timings and visual style without needing to modify complex CSS selectors.

```css
:root {
  /* Interaction Settings */
  --carousel-fade-duration: 0.8s;
  --carousel-easing: cubic-bezier(0.16, 1, 0.3, 1);
  
  /* Scale Effects */
  --carousel-scale-start: 0.95;
  --carousel-scale-end: 1;
  --carousel-scale-inactive: 1.05;
  
  /* Blur Start */
  --carousel-blur-start: 8px;
  
  /* Navigation Indicators */
  --indicator-size: 10px;
  --indicator-active-width: 32px;
  --indicator-color: rgba(0, 0, 0, 0.2);
  --indicator-active-color: #000000;
}
```

## How It Works

The structure relies on native `<input type="radio">` tags being placed sequentially before the content slides (`.carousel-item`).
When a specific radio is checked, the CSS `~` (general sibling combinator) targets the corresponding slide to become visible and animates it in:

```css
#slide-1:checked ~ .carousel-content #item-1 {
  opacity: 1;
  visibility: visible;
  transform: scale(var(--carousel-scale-end));
  filter: blur(0);
}
```

## Usage Instructions

1. Open `demo.html` in your web browser.
2. Click on the navigation arrows or the bottom indicator dots to switch products.
3. Test accessibility by pressing the `Tab` key to focus the invisible inputs and utilizing the `ArrowLeft` and `ArrowRight` keys to navigate natively.

## Browser Support

Works efficiently on all modern browsers supporting CSS variables, CSS transitions/transforms, and `backdrop-filter`.
