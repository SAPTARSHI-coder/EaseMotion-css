# Glitter Loader

A polished, SaaS-dashboard inspired loading component for EaseMotion CSS, built with pure CSS (no JavaScript).

## Required Questions

1. **What does this do?**
   It provides a set of five reusable, glitter-themed loading indicators (ring, burst, shimmer bar, orb, and grid) that communicate an in-progress state with a premium, polished motion feel.

2. **How is it used?**
   Drop the relevant class onto a container element and add the expected child markup. Examples:

   ```html
   <!-- Rotating glitter ring -->
   <div class="glitter-ring" role="status" aria-label="Loading">
     <span class="core">LOAD</span>
   </div>

   <!-- Radial sparkle burst -->
   <div class="glitter-burst" role="status" aria-label="Loading">
     <span></span><span></span><span></span><span></span>
     <span></span><span></span><span></span><span></span>
   </div>

   <!-- Indeterminate shimmer bar -->
   <div class="glitter-shimmer" role="progressbar" aria-label="Loading progress"></div>

   <!-- Breathing orb with floating specks -->
   <div class="glitter-orb" role="status" aria-label="Loading">
     <span class="orb"></span>
     <span></span><span></span><span></span><span></span>
   </div>

   <!-- Twinkling dot grid -->
   <div class="glitter-grid" role="status" aria-label="Loading">
     <span></span> <!-- repeat 25 times -->
   </div>
   ```

3. **Why is it useful?**
   Loaders are among the most commonly needed UI elements. A well-crafted Glitter variant gives contributors a polished, drop-in building block that follows EaseMotion's motion-first philosophy, uses framework-style variables and keyframes, and stays accessible and responsive without any JavaScript.

## Features

- **Five distinct variants** — ring, burst, shimmer bar, orb, and grid — covering different loading contexts (full-screen, inline, progress, data tables).
- **Pure CSS** — no JavaScript, no external libraries, no CDN dependencies.
- **Responsive** — sizes are driven by CSS custom properties and scale gracefully.
- **Accessible** — uses `role="status"` / `role="progressbar"`, `aria-label`, and a visually-hidden helper; honors `prefers-reduced-motion`.
- **Themeable** — all colors and speeds are exposed as CSS variables so the maintainer can swap in `--ease-color-*` and `--ease-speed-*` tokens.
- **Self-contained** — `demo.html` works by opening directly in a browser.

## Variants Overview

| Variant | Best for | Motion |
|---------|----------|--------|
| `.glitter-ring` | Buttons / cards while fetching | Rotating conic ring + comet spark |
| `.glitter-burst` | Center-of-screen loading | Radial sparkle pulse |
| `.glitter-shimmer` | Indeterminate progress | Sliding glitter sweep |
| `.glitter-orb` | Hero / splash loading | Breathing orb + floating specks |
| `.glitter-grid` | Data / table loading | Staggered twinkle grid |

## Accessibility Notes

- Each loader exposes an ARIA role and label so screen readers announce the loading state.
- A `.sr-only` paragraph provides a human-readable fallback message.
- Under `prefers-reduced-motion: reduce`, all animations are neutralized to a static, visible state.

## Customization

Override the CSS variables defined at the top of `style.css`:

```css
.glitter-ring {
  --size: 120px;   /* larger ring */
  --thick: 10px;   /* thicker stroke */
}
```

Or change the palette globally:

```css
:root {
  --glit-accent: #ff7ad9;
  --glit-accent-2: #7afcff;
}
```

## How to Preview

Open `demo.html` directly in any modern browser — no build step or server required.
