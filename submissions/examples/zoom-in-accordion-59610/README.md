# CSS Zoom-In Accordion

A modern, pure CSS accordion component designed for SaaS showcase layouts. It features a unique "zoom-in" micro-interaction where the active panel pops out slightly, and its content zooms smoothly into view.

## Features

- **Pure CSS & HTML**: No JavaScript required. Relies on the hidden radio button hack and CSS Grid.
- **Zoom-In Animation**: Uses `transform: scale()` paired with a custom `cubic-bezier` for a bouncy, satisfying expansion.
- **Accessible**: Hidden inputs remain focusable via keyboard (`Tab` and `Space`), and a visible focus state is provided.
- **Responsive**: Flexbox and relative units ensure it adapts seamlessly to any screen size.
- **Prefers Reduced Motion**: Automatically disables animations for users who have requested reduced motion at the OS level.

## Files

- `demo.html`: The HTML structure for the showcase.
- `style.css`: The stylesheet containing the custom properties, layout, and animations.

## Usage

1. Open `demo.html` in your browser.
2. Click on the accordion headers to see the smooth grid-based expansion and the zoom-in effect.
3. Integrate the HTML and CSS into your project by customizing the CSS variables located in the `:root` pseudo-class.

## Customization (CSS Variables)

You can easily theme the accordion by tweaking these variables in `style.css`:

```css
:root {
  --bg: #09090b;
  --panel-bg: #18181b;
  --panel-bg-hover: #27272a;
  --text-main: #f4f4f5;
  --text-muted: #a1a1aa;
  --accent: #60a5fa;
  --border: #3f3f46;
  --transition-speed: 0.4s;
  --easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

Enjoy building beautiful interfaces!
