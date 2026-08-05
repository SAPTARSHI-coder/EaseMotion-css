# Pulse Animation

A versatile and reusable Pulse animation implementation for the EaseMotion CSS library. This example demonstrates how to apply various pulse effects to standard UI elements such as buttons, cards, icons, notifications, and badges to draw user attention effectively.

## Feature Overview

The pulse animation consists of four distinct utility classes to cater to different UI scenarios:
- `.ease-pulse`: A standard scaling and shadow pulse effect, excellent for main Calls to Action (CTAs).
- `.ease-pulse-subtle`: A gentle scale effect without shadows, suited for notifications and softer elements.
- `.ease-pulse-slow`: A longer duration pulse designed for larger elements like feature cards or banners.
- `.ease-pulse-ring`: An expanding ring effect generated via pseudo-elements, perfect for small badges and status indicators.

These animations are fully responsive and include media queries to respect `prefers-reduced-motion`, ensuring an accessible experience.

## Installation Instructions

1. **Copy Styles**: Copy the CSS keyframes and utility classes from `style.css` into your project's stylesheet.
2. **Link the CSS**: Alternatively, you can include `style.css` directly in your HTML `<head>`.

```html
<link rel="stylesheet" href="path/to/pulse/style.css">
```

## Usage Examples

Apply the desired utility class to any HTML element you wish to animate.

### Button Example
```html
<button class="btn ease-pulse">Upgrade Now</button>
```

### Notification Example
```html
<div class="notification ease-pulse-subtle">
    You have a new message!
</div>
```

### Badge Example
For the badge ring, the utility class relies on the `::before` pseudo-element and inheritance, so apply it to the badge itself.
```html
<div class="badge-container">
    <div class="bell-icon">🔔</div>
    <div class="badge ease-pulse-ring"></div>
</div>
```

## Customization Guidance

You can easily customize the pulse animation by adjusting the CSS variables or overriding the properties in the keyframes:
- **Duration**: Modify the time in the `animation` shorthand (e.g., change `2s` to `1s` for a faster pulse).
- **Easing**: Tweak the `cubic-bezier` values for a bouncier or smoother feel.
- **Shadow Colors**: In `@keyframes ease-pulse`, update the `rgba()` values to match your brand's primary color scheme.
- **Scale Range**: Adjust the `transform: scale()` values in the keyframes to increase or decrease the pulsing magnitude.
