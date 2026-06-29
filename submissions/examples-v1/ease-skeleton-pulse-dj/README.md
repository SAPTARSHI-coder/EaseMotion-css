# Skeleton Pulse Animation (`ease-skeleton-pulse-dj`)

A CSS-only skeleton loading utility class that applies a continuous, smooth shimmering gradient animation to block elements to simulate a loading state. 

It is designed to be lightweight, performant, and fully accessible (includes fallback for `prefers-reduced-motion`).

## Features
- **Pure CSS**: No JavaScript required.
- **Performant**: Uses `background-position` for smooth, low-cost animation.
- **Accessible**: Respects the user's system preferences for reduced motion by falling back to a subtle opacity pulse.
- **Responsive**: Inherits the dimensions of the parent or customized classes.

## Usage

Include `style.css` in your project and add the `ease-skeleton-pulse-dj` class to any empty block element where you want to show a loading state.

### Customization Tips
The skeleton inherits its shape and size from the CSS applied to it. You must specify the `width` and `height`, and you can use `border-radius` to create different shapes (like circles for avatars).

```html
<!-- Avatar Skeleton (Circle) -->
<div class="ease-skeleton-pulse-dj" style="width: 48px; height: 48px; border-radius: 50%;"></div>

<!-- Standard Line Skeleton -->
<div class="ease-skeleton-pulse-dj" style="width: 100%; height: 16px; border-radius: 4px;"></div>
```

*Note: Instead of inline styles, it's recommended to create utility classes for your standard skeleton shapes in your own CSS.*

## Demo

Open `demo.html` in your browser to see various skeleton loading animation examples (avatar, headings, card layout) in action!
