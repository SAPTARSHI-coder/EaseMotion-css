# CSS Jello-Hover Popover

A purely CSS-animated popover interaction utilizing a bouncy Jello-Hover transition, tailored specifically for Responsive Dashboard interface aesthetics. This component relies exclusively on the EaseMotion CSS variables and keyframes standard.

## Features

- **Pure CSS**: No JavaScript required for interactions or animations. Leverages `:hover` and `:focus-within` on the container to trigger the animation.
- **Jello-Hover Effect**: Uses custom keyframes combining scale manipulation (`scale3d`) to create a satisfying, jelly-like wobble as it enters the view.
- **Dashboard Aesthetics**: Structured data presentation, smaller font sizes (`var(--ease-text-xs)`), and clean grid-based stats layouts optimized for dense information environments.
- **Accessibility**: Keyboard accessible via `:focus-within`, supports `aria-haspopup="dialog"` and `role="dialog"`, and respects `prefers-reduced-motion`.
- **Customizable**: Exposes animation variables (`--jello-duration`, `--jello-easing`) via standard CSS properties.

## Usage

Include the CSS in your project, then wrap your trigger (e.g., a status badge) and the popover content in the container:

```html
<div class="ease-popover-container">
  <!-- Trigger -->
  <button class="status-badge" aria-haspopup="dialog">Optimal</button>
  
  <!-- Popover Content -->
  <div class="ease-popover-content" role="dialog">
    <p>Dashboard analytics and metrics go here.</p>
  </div>
</div>
```

## CSS Custom Properties

Customize the animation and styling by tweaking these variables on the `:root` or the `.ease-popover-container` element:

```css
:root {
  --jello-duration: var(--ease-speed-slow, 800ms);
  --jello-easing: var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
  --popover-offset-y: var(--ease-space-2, 0.5rem);
}
```

## Demo

Open `demo.html` in your browser to interact with the component.
