# CSS Variable Support for Animation Customization

This feature introduces global CSS custom properties (`--em-duration`, `--em-delay`, `--em-easing`, `--em-iteration`) to allow developers to easily override animation states without editing the framework's source code or writing complex CSS override selectors.

## What does this do?
It maps the underlying CSS animation properties (`animation-duration`, `animation-delay`, etc.) in the framework's utility classes directly to CSS custom properties defined at the `:root` level. 

## How is it used?

### Global Configuration
You can set project-wide animation defaults in your main stylesheet:

```css
:root {
  --em-duration: 0.8s;        /* Make all animations slightly slower globally */
  --em-delay: 0.2s;           /* Add a global 200ms delay */
  --em-easing: ease-out;      /* Standardize the easing curve */
  --em-iteration: 1;
}
```

### Local Configuration (Inline Styles or Classes)
You can apply variables scoped to specific containers or components, completely overriding the global defaults without breaking specificity:

```html
<!-- This specific card will animate over 3 seconds, overriding the global 0.8s -->
<div class="ease-slide-up" style="--em-duration: 3s;">
  I am a slow card.
</div>
```

## Why is it useful?
Before this update, customizing a framework animation meant writing high-specificity CSS rules to override the `.ease-*` classes, which defeats the purpose of a utility-first framework. By exposing these CSS variables, we provide a clean, native CSS API for extreme flexibility, improving the overall developer experience.
