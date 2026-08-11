# CSS Elastic Bounce Popover for Neumorphic Soft

A purely CSS-animated popover interaction utilizing a highly playful Elastic Bounce transition, tailored specifically for Neumorphic Soft interface aesthetics. This component relies exclusively on the EaseMotion CSS variables and keyframes standard.

## Features

- **Pure CSS**: No JavaScript required for interactions or animations. Leverages `:hover` and `:focus-within` on the container to trigger the animation.
- **Elastic Bounce Effect**: Uses custom keyframes combining aggressive `scale` manipulations to overshoot and rebound, creating a satisfying springy feel.
- **Neumorphic Soft Aesthetics**: Designed without hard borders, using layered inner and outer box shadows (`var(--neumorphic-shadow)`) that blend seamlessly into a light gray background (`var(--ease-color-neutral-200)`).
- **Accessibility**: Keyboard accessible via `:focus-within`, supports `aria-haspopup="dialog"` and `role="dialog"`, and respects `prefers-reduced-motion` by disabling the bouncy animation entirely when requested.
- **Customizable**: Exposes animation variables (`--bounce-duration`, `--bounce-easing`) via standard CSS properties on `:root`.

## Usage

Include the CSS in your project, then wrap your trigger (e.g., a settings button) and the popover content in the container:

```html
<div class="ease-popover-container">
  <!-- Trigger -->
  <button class="neu-btn" aria-haspopup="dialog">Settings</button>
  
  <!-- Popover Content -->
  <div class="ease-popover-content" role="dialog">
    <p>Neumorphic soft controls go here.</p>
  </div>
</div>
```

## CSS Custom Properties

Customize the animation and styling by tweaking these variables on the `:root` or the `.ease-popover-container` element:

```css
:root {
  --bounce-duration: var(--ease-speed-slow, 800ms);
  --bounce-easing: var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
  --popover-offset-y: var(--ease-space-4, 1rem);
}
```

## Demo

Open `demo.html` in your browser to interact with the component.
