# CSS Sci-Fi HUD: Velvet Smooth Transition Variation

A luxurious, high-end sci-fi interface element that abandons glitchy, abrupt cyberpunk aesthetics in favor of deeply dampened, ultra-smooth cubic-bezier transitions.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript or heavy Canvas libraries.
- **Velvet Smooth Interactions**: Employs a custom `cubic-bezier(0.16, 1, 0.3, 1)` easing curve across all hover states (`transform`, `box-shadow`, `letter-spacing`, and `opacity`). This creates a frictionless, "springy but dampened" velvet feel where concentric rings elegantly glide into their new rotational offsets.
- **Corporate Sci-Fi Aesthetic**: Recreates the sleek, high-fidelity holograms often seen in luxury futuristic environments (e.g., luxury spaceships, AI cores). Features deep purple velvet glows, fine hair-lines, and elegant typography.
- **Micro-Interactions**: Incorporates a continuous, slow ambient vertical drift using a soft `cubic-bezier` keyframe, which seamlessly pauses (`animation-play-state: paused`) upon hover to allow the crisp scale and rotation transitions to take center stage.
- **Accessible & Responsive**: Built on a semantic `<button>` tag for perfect keyboard navigability. Explicitly respects user preferences by gracefully disabling all ambient drifting and rotational transitions via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure directly into your application layout. The component automatically scales its pseudo-rings based on the relative container size.

```html
<button class="velvet-hud">
  <div class="velvet-ring ring-outer"></div>
  <div class="hud-content">
    <!-- Data -->
  </div>
</button>
```

## CSS Custom Properties
Easily customize the theme colors using the root variables in `style.css`:
- `--bg-color`: The deep space background color (default: `#0b0c10`)
- `--velvet-glow`: The primary ambient box-shadow color (default: `rgba(139, 92, 246, 0.4)`)
- `--velvet-accent`: The sharp, opaque ring border color (default: `#c4b5fd`)

## Browser Support
Works flawlessly in all modern browsers (Chrome, Firefox, Safari, Edge). 
