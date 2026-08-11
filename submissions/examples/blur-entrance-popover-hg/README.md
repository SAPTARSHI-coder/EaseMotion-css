# Blur Entrance Popover

## What does this do?

A modern SaaS-style popover that enters with a smooth blur, fade, scale, and upward motion using only HTML and CSS. It showcases an elegant glassmorphism interface suitable for product announcements, feature highlights, and dashboard interactions.

## How is it used?

```html
<input class="popover-toggle" type="checkbox" id="announcement-toggle">

<label class="trigger trigger-primary" for="announcement-toggle">
  Show product update
</label>

<div class="popover popover-announcement">
  <div class="popover-body">
    <h2 class="popover-title">Focus Streaks</h2>
    <p class="popover-text">
      Track consecutive days of deep work automatically.
    </p>
  </div>
</div>
```

## CSS Custom Properties

The component can be customized using CSS variables, including:

```css
--em-popover-duration
--em-popover-blur
--em-popover-scale
--em-popover-travel
--em-popover-radius
--em-popover-shadow
```

## Features

- Pure HTML and CSS implementation
- Blur entrance animation
- Glassmorphism popover design
- Responsive SaaS showcase layout
- Accessible structure
- Supports `prefers-reduced-motion`
- No external JavaScript framework required

## Why is it useful?

Blur entrance animations help direct user attention toward newly displayed content while keeping transitions smooth and unobtrusive. This pattern is useful for SaaS dashboards, onboarding flows, notifications, feature announcements, and modern landing pages.