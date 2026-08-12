# CSS Animated Trophy Icon

A pure CSS trophy icon featuring an animated shine sweep and celebratory star-burst effects. This component is ideal for achievements, rewards, leaderboards, gamification systems, and success states.

## Features

- Pure CSS implementation
- Animated trophy shine effect
- Star-burst celebration animation
- Responsive layout
- Accessible markup
- CSS custom properties for theming
- Light and dark mode support
- No JavaScript required

## Files

```text
css-animated-trophy-icon/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Add the component:

```html
<div class="trophy-icon" role="img" aria-label="Achievement Trophy">
  ...
</div>
```

## Customization

Modify CSS variables inside `:root`:

```css
:root {
  --gold: #f7c948;
  --gold-dark: #d9a623;
}
```

You can easily adjust:

- Trophy colors
- Shine speed
- Burst animation timing
- Component size
- Background theme

## Accessibility

- Uses `role="img"`
- Includes descriptive `aria-label`
- Works without JavaScript
- Maintains visibility in light and dark themes

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Why It Fits EaseMotion CSS

This component demonstrates reusable CSS animation techniques using keyframes, transforms, and pseudo-elements. It provides a visually engaging achievement indicator while remaining lightweight, responsive, and dependency-free, making it a strong addition to the EaseMotion CSS component library.