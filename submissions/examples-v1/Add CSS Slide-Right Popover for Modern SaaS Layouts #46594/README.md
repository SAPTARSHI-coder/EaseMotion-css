# CSS Slide-Right Popover for Modern SaaS Layouts

A pure CSS, JavaScript-free animated popover utilizing a smooth slide-right interaction transition. Designed for Modern SaaS interface aesthetics, fully responsive, and keyboard accessible.

## Features

- **Pure CSS**: Uses `:hover` and `:focus-within` for state management without requiring any JavaScript.
- **Modern SaaS Aesthetics**: Implements glassmorphism, soft shadows, and clean typography using EaseMotion design tokens.
- **Customizable**: Exposes custom parameters like timing, easing, and scale factors via standard CSS custom properties.
- **Responsive**: Automatically adjusts to a slide-down animation on smaller screens to prevent horizontal overflow outside the viewport.
- **Keyboard Accessible**: Fully accessible via keyboard navigation (`Tab` to focus).

## Usage

1. Include the standard EaseMotion core CSS (`easemotion.css`) in your project.
2. Include the `style.css` from this directory.
3. Use the following HTML structure:

```html
<div class="popover-container">
  <button class="popover-trigger" aria-haspopup="true">
    Hover or Focus Me
  </button>
  <div class="popover-content" role="tooltip">
    <div class="popover-header">Title</div>
    <div class="popover-body">Content goes here.</div>
  </div>
</div>
```

## Customization

You can customize the popover behavior by overriding the following CSS custom properties (either in `:root` or locally on the `.popover-container`):

```css
.popover-container {
  --popover-transition-timing: var(--ease-speed-medium);
  --popover-transition-easing: var(--ease-ease-bounce);
  --popover-scale-factor: 0.95;
  --popover-offset-x: -16px;
  --popover-backdrop-blur: 12px;
}
```

## Demo

Open `demo.html` in your browser to see the live demonstration.
