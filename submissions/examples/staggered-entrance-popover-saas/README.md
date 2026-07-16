# CSS Staggered Entrance Popover – SaaS Showcase

## What does this do?
This is a premium, pure HTML + CSS interactive Popover component utilizing a smooth Staggered Entrance transition, styled for modern SaaS Showcase landing pages and dashboards.

It features a multi-item content layout that reveals sequentially with customizable spring easing, scaling, and fading. It uses zero lines of JavaScript, relying on a native checkbox overlay mechanism for opening and closing.

## How is it used?
Include the CSS class definitions and structure your HTML as follows:

```html
<div class="ease-stagger-popover">
  <!-- Invisible state controller checkbox -->
  <input type="checkbox" id="popover-toggle" class="ease-popover__checkbox" aria-haspopup="true" />
  
  <!-- Sibling trigger visual button -->
  <label for="popover-toggle" class="ease-popover__trigger" aria-hidden="true">
    Explore Platform
  </svg>
  </label>
  
  <!-- Backdrop overlay for light-dismiss (click outside to close) -->
  <label for="popover-toggle" class="ease-popover__backdrop" aria-hidden="true"></label>
  
  <!-- The popover menu container -->
  <div class="ease-popover__container" role="dialog">
    <div class="ease-popover__content">
      <!-- Close Button -->
      <label for="popover-toggle" class="ease-popover__close" role="button" tabindex="0" aria-label="Close popover">×</label>
      
      <!-- Staggered Items (Header, grid cards, footers) -->
      <div class="ease-popover__item" style="--stagger-index: 1;">
        Header details
      </div>
      
      <div class="ease-popover__grid">
        <div class="ease-popover__card ease-popover__item" style="--stagger-index: 2;">
          Card Item 1
        </div>
        <div class="ease-popover__card ease-popover__item" style="--stagger-index: 3;">
          Card Item 2
        </div>
      </div>
      
      <div class="ease-popover__footer ease-popover__item" style="--stagger-index: 4;">
        Footer details
      </div>
    </div>
  </div>
</div>
```

### Customization Variables
You can customize the staggered reveal timing, easing curve, scaling factor, translate distance, blur intensity, and backdrop opacity by overriding the following CSS custom properties defined on `:root` or inside `.ease-stagger-popover`:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-stagger-duration` | `0.5s` | Entrance transition duration for reveal items. |
| `--ease-stagger-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bezier spring easing curve for entrance. |
| `--ease-stagger-delay` | `0.08s` | Increment delay between subsequent items. |
| `--ease-stagger-scale-factor` | `0.93` | Starting scale factor of items prior to reveal. |
| `--ease-stagger-translate-y` | `24px` | Distance items slide up during reveal. |
| `--ease-stagger-blur` | `10px` | Blur intensity before fading focus. |
| `--ease-stagger-bg-opacity` | `0.82` | Opacity level of the glassmorphic slate popover card. |
| `--ease-stagger-radius` | `24px` | Corner radius of the popover content wrapper. |
| `--ease-stagger-glow-strength` | `50px` | Shadow/glow size centered on the popover. |

## Why is it useful?
- **Zero JavaScript Overhead**: Relies entirely on native browser features for UI toggling, rendering the application extremely fast, lightweight, and free from JS bundle sizes.
- **Modern SaaS Presentation Aesthetic**: Tailored with glassmorphic slate background styling, glowing gradient highlight shadows, vibrant icons, and smooth micro-interactions.
- **Sleek Mobile Bottom Sheet Adaptation**: Automatically shifts from a dropdown layout on desktop/tablets to an elegant bottom sheet on mobile screens (viewport width <= 640px) with a dimmed overlay backdrop.
- **Sequential Animation Control**: Allows developers to easily re-order or adjust delay parameters using a simple, inline `--stagger-index` custom property.
- **Robust Accessibilities**: Uses `aria-*` tags for screen readers, supports native focus-visible styling for keyboard tab navigation, and respects user preferences for motion (disabling animation instantly if `prefers-reduced-motion: reduce` is detected).

## Tech Stack
- HTML5 (semantic markup & ARIA annotations)
- CSS3 (Variables, transitions, CSS grid, Flexbox, media queries, backdrop filters)
- No JavaScript

## Preview
Open `demo.html` directly in your browser of choice to test the interactive component.
