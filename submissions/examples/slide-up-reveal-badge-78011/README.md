# Slide-Up Reveal Badge

## What does this do?
This component creates a small, clean badge that smoothly reveals itself from below using a short vertical translation and opacity fade-in.

## How is it used?
Apply the `ease-reveal-badge` class to any inline element (like a `<span>`) to create the badge:

```html
<span class="ease-reveal-badge">New</span>
```

You can customize its appearance (background color, text color) with inline styles or utility classes. For staggered reveals, simply add an `animation-delay`:

```html
<span class="ease-reveal-badge" style="animation-delay: 0.2s;">Important</span>
```

## Why is it useful?
Badges are frequently used to communicate small pieces of contextual information like status labels, categories, or notifications. A reusable reveal animation adds subtle motion that draws attention without requiring complex interaction or being overly distracting, aligning perfectly with EaseMotion's philosophy of simple and effective UI feedback.
