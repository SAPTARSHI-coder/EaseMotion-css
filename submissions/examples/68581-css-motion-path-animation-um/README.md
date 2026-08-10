# CSS Motion Path Animation

A lightweight component illustrating how to move layout elements along winding vectors using the modern CSS `offset-path` layout specification.

## Features

- Custom vector paths mapping (`offset-path: path(...)`)
- Automatic pointer tangent alignment (`offset-rotate: auto`)
- Synchronized SVG path highlight guideline overlays
- Native CSS state checks mapping play/pause controls without JS
- Responsive layouts utilizing canvas bounds mapping
- Accessible defaults respecting `prefers-reduced-motion` settings
- Zero Javascript dependencies

## Files

- `demo.html` — presentation layout showing guide curves and the moving vector arrow element
- `style.css` — dimensions, offsets, animations, guide states, and overrides

## Usage

```html
<div class="motion-stage">
  <!-- Guideline track SVG -->
  <svg class="motion-svg" viewBox="0 0 800 450">
    <path class="motion-track" d="M 50 150 Q 200 50 350 150 T 650 150 T 750 250" />
  </svg>

  <!-- The moving element -->
  <div class="ease-motion-runner">
    <!-- Inner design components -->
  </div>
</div>
```

## CSS Custom Properties

```css
:root {
  --path-color:     #3b82f6; /* Glow line track color */
  --runner-color:   #facc15; /* Traveling node dot color */
  --anim-speed:     6s;      /* Cycle loop length */
}
```

## Issue

EaseMotion CSS issue #68581.
