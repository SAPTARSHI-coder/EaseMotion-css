# CSS Wobble-Focus Popover for Minimalist Tech

A purely CSS-animated popover interaction utilizing a tight, mechanical Wobble-Focus transition, tailored specifically for Minimalist Tech interface aesthetics. This component relies exclusively on the EaseMotion CSS variables and keyframes standard.

## Features

- **Pure CSS**: No JavaScript required for interactions or animations. Leverages `:focus` and `:focus-within` on the container to trigger the animation.
- **Wobble-Focus Effect**: Uses custom keyframes combining precise `translateX` manipulations to create a rigid, mechanical vibrating effect as it enters the view, perfect for tech dashboards.
- **Minimalist Aesthetics**: Designed with sharp borders, minimal corner radiuses (`var(--ease-radius-sm)`), monochromatic color schemes, and monospace typography to emulate developer tools, CLIs, and dense data tables.
- **Accessibility**: Keyboard accessible via `:focus-within`, supports `aria-haspopup="dialog"` and `role="dialog"`, and respects `prefers-reduced-motion`.
- **Customizable**: Exposes animation variables (`--wobble-duration`, `--wobble-easing`, `--wobble-translate-peak`) via standard CSS properties.

## Usage

Include the CSS in your project, then wrap your trigger (e.g., a detail button in a table) and the popover content in the container:

```html
<div class="ease-popover-container">
  <!-- Trigger -->
  <button class="tech-trigger" aria-haspopup="dialog">details</button>
  
  <!-- Popover Content -->
  <div class="ease-popover-content" role="dialog">
    <p>Technical system details go here.</p>
  </div>
</div>
```

## CSS Custom Properties

Customize the animation and styling by tweaking these variables on the `:root` or the `.ease-popover-container` element:

```css
:root {
  --wobble-duration: 400ms;
  --wobble-easing: var(--ease-ease-bounce, cubic-bezier(0.34, 1.56, 0.64, 1));
  --wobble-translate-peak: 4px;
  --popover-offset-y: var(--ease-space-2, 0.5rem);
}
```

## Demo

Open `demo.html` in your browser to interact with the component.
