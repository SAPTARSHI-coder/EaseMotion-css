# CSS Fade-In Popover for Dashboard Analytics Layouts

A pure CSS popover implementation designed for Dashboard Analytics interfaces (e.g., options menus on metric cards), demonstrating a smooth fade-in animation using modern CSS transitions and `@starting-style`.

## Features
- **Pure CSS**: Zero JavaScript required for the interaction or animation.
- **Smooth Fade-In**: Utilizes CSS transitions mapping to EaseMotion tokens with a slight scale effect for an elegant entrance, originating from the top-right to match standard dropdown behaviors.
- **Dashboard Aesthetic**: Styled to fit seamlessly within a data-heavy analytics interface, featuring clean dividers, categorized menu items, and distinct hover states (e.g., destructive actions).
- **Responsive**: Adapts smoothly to various card sizes.
- **Keyboard Accessible**: Leverages `:focus-within` to remain open and accessible when navigating the options menu via keyboard.
- **Customizable**: Exposes custom parameters (`--popover-fade-duration`, `--popover-fade-easing`, `--popover-scale-start`) to easily tweak the motion feel.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with the new CSS `@starting-style` rule for animating elements from `display: none`.

```html
<div class="popover-container">
  <button class="icon-btn" aria-expanded="false" aria-controls="analytics-popover">
    <!-- Icon -->
  </button>
  
  <div class="popover-wrapper" id="analytics-popover" role="dialog" aria-label="Options Menu">
    <div class="popover-content">
      <!-- Menu Items -->
    </div>
  </div>
</div>
```
