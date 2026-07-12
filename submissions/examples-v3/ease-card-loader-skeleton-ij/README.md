# ease-card-loader-skeleton

A card skeleton loader with shimmer sweep animation. Card-shaped placeholders (avatar, title, text lines) animate with a gradient shimmer effect.

## Features

- Shimmer sweep animation via gradient background-position
- Avatar circle, title, and text line placeholders
- JavaScript toggle to show/hide skeleton state
- Customizable via CSS custom properties

## Usage

Click "Toggle Loaded" to switch between skeleton loading and loaded state.

Customize via `:root` variables:

```css
--skel-duration: 1.6s;
--skel-base-color: #e2e8f0;
--skel-shimmer-color: #f8fafc;
--skel-radius: 12px;
```

## Accessibility

Prefers reduced motion is respected -- animations are disabled when the user's system setting is active.
