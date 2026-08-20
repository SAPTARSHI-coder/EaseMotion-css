# CSS Blur In Hero

A responsive hero section with a smooth blur-in entrance animation
created entirely with HTML and CSS.

## Features

- Pure CSS implementation
- Hero content starts completely blurred
- Smooth blur-to-sharp entrance
- Fade and upward movement during entrance
- Decorative glowing background elements
- Responsive layout
- Accessible keyboard focus styles
- Reduced-motion support
- No JavaScript required

## Files

- `demo.html` - Hero markup and content
- `style.css` - Styling, layout, and animations

## Usage

Open `demo.html` in a modern browser.

## Animation

The hero uses the CSS `filter: blur()` property together with
`opacity` and `transform` to create a smooth entrance.

The animation starts with:

- High blur
- Low opacity
- Slight downward offset
- Slight scale increase

It ends with:

- No blur
- Full opacity
- Normal position
- Normal scale

## Accessibility

Interactive links include visible `:focus-visible` indicators.

The `prefers-reduced-motion` media query disables decorative
animations for users who prefer reduced motion.

## Browser Support

Works in modern browsers supporting:

- CSS animations
- CSS filters
- CSS transforms
- CSS gradients
- CSS media queries