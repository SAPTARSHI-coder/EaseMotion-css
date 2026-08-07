# CSS Swing-Hover Popover for Accessible Web

A purely CSS-animated popover interaction utilizing a smooth Swing-Hover transition, tailored specifically for Accessible Web interface aesthetics. This component relies exclusively on the EaseMotion CSS variables and keyframes standard.

## Features

- **Pure CSS**: No JavaScript required for interactions or animations. Leverages `:hover` and `:focus-within` on the container to trigger the animation.
- **Swing-Hover Effect**: Uses custom keyframes (`rotateX`) with `perspective` to create a smooth, sign-like swinging animation into place.
- **Accessible Aesthetics**: Designed with high-contrast borders, solid un-blurred drop shadows, large legible typography, and highly visible focus indicators (`outline` and `outline-offset`).
- **Accessibility & ARIA**: Keyboard accessible via `:focus-within`, supports `aria-haspopup="dialog"` and `role="dialog"`, and strictly respects `prefers-reduced-motion` by disabling the animation for users who request it.
- **Customizable**: Exposes animation variables (`--swing-duration`, `--swing-easing`, `--swing-origin`) via standard CSS properties.

## Usage

Include the CSS in your project, then wrap your trigger (e.g., an inline term definition button) and the popover content in the container:

```html
<span class="ease-popover-container">
  <!-- Trigger -->
  <button class="a11y-trigger" aria-haspopup="dialog">ARIA Attributes</button>
  
  <!-- Popover Content -->
  <span class="ease-popover-content" role="dialog">
    <p>Definition details go here.</p>
  </span>
</span>
```

## CSS Custom Properties

Customize the animation and styling by tweaking these variables on the `:root` or the `.ease-popover-container` element:

```css
:root {
  --swing-duration: var(--ease-speed-medium, 500ms);
  --swing-easing: var(--ease-ease-out, cubic-bezier(0, 0, 0.2, 1));
  --swing-origin: top center;
  --popover-offset-y: var(--ease-space-3, 0.75rem);
}
```

## Demo

Open `demo.html` in your browser to interact with the component.
