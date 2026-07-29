# CSS Swing-Hover Popover

A purely CSS-animated popover interaction utilizing a 3D Swing-Hover transition, tailored specifically for E-Commerce Checkout interface aesthetics. This component relies exclusively on the EaseMotion CSS variables and keyframes standard.

## Features

- **Pure CSS**: No JavaScript required for interactions or animations. Leverages `:hover` and `:focus-within` on the container to trigger the animation.
- **Swing-Hover Effect**: Uses custom keyframes (`rotateX`) with `perspective` to create a smooth, sign-like swinging animation into place.
- **E-Commerce Aesthetics**: Clean borders, readable typography, and structured spacing tailored for checkout flows, tooltips, or order summaries.
- **Accessibility**: Keyboard accessible via `:focus-within`, supports `aria-haspopup` and `role="dialog"`, and respects `prefers-reduced-motion`.
- **Customizable**: Exposes animation variables (`--swing-duration`, `--swing-easing`, `--swing-origin`) via standard CSS properties.

## Usage

Include the CSS in your project, then wrap your trigger (e.g., an info icon) and the popover content in the container:

```html
<div class="ease-popover-container">
  <!-- Trigger -->
  <button class="info-trigger" aria-haspopup="dialog">?</button>
  
  <!-- Popover Content -->
  <div class="ease-popover-content" role="dialog">
    <p>Shipping info details go here.</p>
  </div>
</div>
```

## CSS Custom Properties

Customize the animation and styling by tweaking these variables on the `:root` or the `.ease-popover-container` element:

```css
:root {
  --swing-duration: var(--ease-speed-slow, 800ms);
  --swing-easing: var(--ease-ease-out, cubic-bezier(0, 0, 0.2, 1));
  --swing-origin: top center;
  --popover-offset-y: var(--ease-space-2, 0.5rem);
}
```

## Demo

Open `demo.html` in your browser to interact with the component.
