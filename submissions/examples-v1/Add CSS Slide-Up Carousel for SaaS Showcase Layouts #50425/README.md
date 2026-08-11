# Slide-Up Carousel (SaaS Showcase)

A pure CSS animated carousel featuring an elegant, staggered Slide-Up interaction transition, styled meticulously for SaaS (Software as a Service) showcase sections.

## Features
- **Pure CSS State Matrix**: Fully functional state management without JavaScript utilizing visually hidden radio inputs. It uses a hardcoded CSS logic matrix to determine directional sliding natively.
- **Slide-Up Depth Animation**: Unlike generic horizontal sliders, this carousel utilizes `translateY()` to move slides along the vertical axis. Slides that are exiting move slightly upwards (`-60px`), while incoming slides move up from below (`+60px`). Combined with a slight scale down (`0.95`), it creates a stunning depth-of-field transition.
- **SaaS Aesthetics**: Built with high-converting SaaS design principles: crisp white cards, large diffuse drop shadows, vibrant gradient accent panels, clean typography (`Inter`), and interactive call-to-actions.
- **Responsive & Accessible**: Features a robust flexbox layout that elegantly collapses to a column on mobile devices. Fully keyboard navigable via standard `Tab` focus management on the pagination controls.

## Customization
Adjust the vertical transition distance, timing, and scale factors by tweaking the variables in `:root`:

```css
:root {
    --crsl-duration: 0.65s;
    --crsl-easing: cubic-bezier(0.25, 1, 0.5, 1);
    
    /* Distance the slide travels during transition */
    --crsl-slide-offset: 60px; 
    
    /* Scale of inactive slides */
    --crsl-scale-inactive: 0.95; 
}
```
