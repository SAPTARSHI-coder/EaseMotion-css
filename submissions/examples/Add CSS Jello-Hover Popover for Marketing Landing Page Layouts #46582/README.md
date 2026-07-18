# CSS Jello-Hover Popover for Marketing

A purely CSS-animated popover interaction utilizing a bouncy Jello-Hover transition, tailored specifically for Marketing Landing Page interface aesthetics. This component relies exclusively on the EaseMotion CSS variables and keyframes standard.

## Features

- **Pure CSS**: No JavaScript required for interactions or animations. Leverages `:hover` and `:focus-within` on the container to trigger the animation.
- **Jello-Hover Effect**: Uses custom keyframes combining scale manipulation (`scale3d`) to create an attention-grabbing jelly-like wobble as it enters the view.
- **Marketing Aesthetics**: Designed with generous padding (`var(--ease-space-6)`), large corner radiuses (`var(--ease-radius-xl)`), and prominent drop shadows to create a premium, floating, high-converting look.
- **Accessibility**: Keyboard accessible via `:focus-within`, supports `aria-haspopup="dialog"` and `role="dialog"`, and respects `prefers-reduced-motion`.
- **Customizable**: Exposes animation variables (`--jello-duration`, `--jello-easing`) via standard CSS properties.

## Usage

Include the CSS in your project, then wrap your trigger (e.g., an info icon in a pricing table) and the popover content in the container:

```html
<div class="ease-popover-container">
  <!-- Trigger -->
  <button class="feature-trigger" aria-haspopup="dialog">Info</button>
  
  <!-- Popover Content -->
  <div class="ease-popover-content" role="dialog">
    <p>Premium feature details go here to upsell the user!</p>
  </div>
</div>
```

## CSS Custom Properties

Customize the animation and styling by tweaking these variables on the `:root` or the `.ease-popover-container` element:

```css
:root {
  --jello-duration: var(--ease-speed-slow, 800ms);
  --jello-easing: var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
  --popover-offset-y: var(--ease-space-3, 0.75rem);
}
```

## Demo

Open `demo.html` in your browser to interact with the component.
