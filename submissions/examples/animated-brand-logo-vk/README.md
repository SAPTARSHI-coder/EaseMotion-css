# CSS Animated Brand Logo

A simple animated brand logo built using pure HTML and CSS.

The logo draws its outline on page load and then smoothly fills with color.

## Features

- Pure HTML and CSS
- No JavaScript
- SVG logo animation
- Smooth draw and fill effect
- Responsive design
- Hover glow effect
- Supports prefers-reduced-motion

## Usage

Add the logo SVG inside your HTML and link the style.css file.

Example:

    <div class="brand-logo">
      <svg class="brand-logo__svg" viewBox="0 0 200 200">
        <!-- Logo paths -->
      </svg>
    </div>

    <link rel="stylesheet" href="style.css">

## Customization

You can customize the logo color using the --logo-color CSS variable.

    :root {
      --logo-color: #6366f1;
    }

You can also adjust the animation speed using --draw-duration.

    :root {
      --draw-duration: 2.2s;
    }

## Browser Tested

- Microsoft Edge

## Accessibility

The animation supports prefers-reduced-motion so users who prefer reduced motion can view the logo without animation.

## License

This example follows the license of the EaseMotion CSS repository.