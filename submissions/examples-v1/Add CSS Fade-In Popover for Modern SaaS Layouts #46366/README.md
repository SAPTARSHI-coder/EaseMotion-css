# CSS Fade-In Popover for Modern SaaS Layouts

A pure CSS popover implementation designed for Modern SaaS interfaces (e.g., User Profile Menus in a navbar), demonstrating a smooth fade-in animation using modern CSS transitions and `@starting-style`.

## Features
- **Pure CSS**: Zero JavaScript required for the interaction or animation.
- **Smooth Fade-In**: Utilizes CSS transitions mapping to EaseMotion tokens with a slight scale effect for an elegant entrance, originating from the top-right to match standard navbar profile behaviors. Incorporates a slightly custom springy cubic-bezier often found in SaaS apps.
- **SaaS Aesthetic**: Styled to fit seamlessly within a modern web application, featuring soft shadows, clean typography, badge indicators, and distinct interactive states for menu links.
- **Responsive**: Adapts smoothly and integrates seamlessly with navigation bars.
- **Keyboard Accessible**: Leverages `:focus-within` to remain open and accessible when navigating the profile menu via keyboard.
- **Customizable**: Exposes custom parameters (`--popover-fade-duration`, `--popover-fade-easing`, `--popover-scale-start`, `--popover-offset-y`) to easily tweak the motion feel.

## Usage

Include the `easemotion.css` framework and the local `style.css`. The animation relies on standard CSS transitions combined with the new CSS `@starting-style` rule for animating elements from `display: none`.

```html
<div class="popover-container">
  <button class="profile-trigger" aria-expanded="false" aria-controls="profile-popover">
    <!-- Avatar Image -->
  </button>
  
  <div class="popover-wrapper" id="profile-popover" role="dialog" aria-label="User Profile Menu">
    <div class="popover-content">
      <!-- User Info & Nav Links Goes Here -->
    </div>
  </div>
</div>
```
