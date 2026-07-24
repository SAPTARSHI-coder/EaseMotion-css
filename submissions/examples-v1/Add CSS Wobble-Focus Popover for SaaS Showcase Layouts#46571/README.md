# CSS Wobble-Focus Popover

A purely CSS-animated popover interaction utilizing a smooth Wobble-Focus transition, tailored specifically for SaaS showcase interface aesthetics. This component relies exclusively on the EaseMotion CSS variables and keyframes standard.

## Features

- **Pure CSS**: No JavaScript required for interactions or animations. Uses `:focus` and `:focus-within` combined with the adjacent sibling combinator.
- **Wobble-Focus Effect**: Uses custom keyframes incorporating `var(--ease-ease-bounce)` and custom properties to scale, rotate, and wobble into place for a playful yet premium feel.
- **SaaS Aesthetics**: Incorporates EaseMotion's glassmorphism variables, soft shadows (`var(--ease-shadow-xl)`), and smooth corner radiuses (`var(--ease-radius-lg)`).
- **Accessibility**: Includes `aria-haspopup` and `role="dialog"` support, and responds to `prefers-reduced-motion` to disable animations for accessibility.
- **Customizable**: Exposes animation variables (`--wobble-duration`, `--wobble-scale-peak`, `--wobble-rotate-peak`) allowing developers to fine-tune the interaction seamlessly.

## Usage

Include the CSS in your project, then structure your HTML with a container, a trigger, and the popover content:

```html
<div class="ease-popover-container">
  <!-- The trigger must come immediately before the content -->
  <button class="ease-popover-trigger" aria-haspopup="true">Focus Me</button>
  
  <!-- Popover Content -->
  <div class="ease-popover-content" role="dialog">
    <p>Your beautiful SaaS content here!</p>
  </div>
</div>
```

## CSS Custom Properties

You can customize the wobble animation by tweaking these variables in your root or on the `.ease-popover-container` element:

```css
:root {
  --wobble-duration: var(--ease-speed-slow, 600ms);
  --wobble-easing: var(--ease-ease-bounce, cubic-bezier(0.34, 1.56, 0.64, 1));
  --wobble-scale-peak: 1.05;
  --wobble-rotate-peak: 3deg;
  --popover-offset-y: var(--ease-space-4, 1rem);
}
```

## Demo

Open `demo.html` in your browser to interact with the component.
