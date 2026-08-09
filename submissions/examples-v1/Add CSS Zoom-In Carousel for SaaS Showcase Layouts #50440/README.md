# Zoom-In Carousel (SaaS Showcase)

A pure CSS animated carousel featuring an immersive Zoom-In interaction transition, styled meticulously for SaaS (Software as a Service) showcase sections.

## Features
- **Pure CSS State Matrix**: Fully functional state management without JavaScript utilizing visually hidden radio inputs. It uses a hardcoded CSS logic matrix to determine dimensional scaling.
- **Z-Axis Depth Transition**: Creates a feeling of traversing forwards through a tunnel of features. When advancing, the exiting slide scales *up* (`1.25`) to simulate moving past the viewer, while the incoming slide scales up from a smaller state (`0.75`) in the distance to `1`.
- **SaaS Aesthetics**: Built with high-converting SaaS design principles: crisp white cards, large diffuse drop shadows, high-contrast dark buttons, clean typography (`Inter`), and abstract visual representations of UI concepts (Sync, Scale, Security).
- **Responsive & Accessible**: Features a robust flexbox layout that elegantly collapses to a column on mobile devices. Fully keyboard navigable via standard `Tab` focus management on the pagination controls.

## Customization
Adjust the depth transition scaling factors and timing by tweaking the variables in `:root`:

```css
:root {
    --crsl-duration: 0.7s;
    --crsl-easing: cubic-bezier(0.25, 1, 0.3, 1);
    
    /* Scale logic for Z-axis depth simulation */
    
    /* Exiting forward (towards the viewer) */
    --crsl-scale-past: 1.25; 
    
    /* Waiting in back (away from viewer) */
    --crsl-scale-future: 0.75; 
}
```
