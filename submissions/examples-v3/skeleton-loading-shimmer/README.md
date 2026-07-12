# Skeleton Loading Shimmer

## Description
A loading skeleton animation that provides a smooth left-to-right shimmer effect on placeholder elements. It gives users visual feedback that content is actively loading, rather than just showing a static gray box.

## Usage
Simply apply the `skeleton-shimmer` class to any block-level element that you want to act as a placeholder. Be sure to specify its dimensions (width and height) or use utility classes/inline styles for layout.

```html
<div class="skeleton-shimmer" style="width: 250px; height: 150px; border-radius: 8px;"></div>
```

## Why is this useful for EaseMotion CSS?
This fits the animation-first philosophy by bringing life to otherwise static loading states. It's highly composable—developers can add it to any block-level element (cards, avatars, text placeholders) simply by applying the class.
