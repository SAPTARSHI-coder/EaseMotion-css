# CSS Jello-Hover Popover for Interactive Interface Layouts

A pure CSS, JavaScript-free animated popover featuring a fun and engaging "Jello" hover interaction. Designed specifically for Interactive Interface aesthetics, it is fully responsive and keyboard accessible.

## Features

- **Pure CSS**: Uses `:hover` and `:focus-within` for seamless state management without requiring any JavaScript.
- **Interactive Aesthetics**: Incorporates engaging jello keyframe animations, vibrant pill-shaped buttons, and prominent shadows utilizing EaseMotion tokens.
- **Custom Keyframes**: Features a custom `@keyframes ease-kf-jello-popover` implemented using EaseMotion's standard animation naming convention, which scales and skews the popover organically.
- **Customizable**: Exposes custom parameters like timing and spacing via CSS custom properties.
- **Responsive**: Adapts gracefully to smaller screens ensuring content doesn't overflow the viewport (caps at `90vw`).
- **Keyboard Accessible**: Fully accessible via standard keyboard navigation (`Tab` to focus on the trigger).

## Usage

1. Include the standard EaseMotion core CSS (`easemotion.css`) in your project.
2. Include the `style.css` from this directory.
3. Use the following HTML structure:

```html
<div class="popover-container">
  <button class="popover-trigger" aria-haspopup="true">
    Hover For Jello
  </button>
  <div class="popover-content" role="tooltip">
    <div class="popover-header">Title</div>
    <div class="popover-body">Content goes here.</div>
  </div>
</div>
```

## Customization

You can customize the popover behavior by overriding the following CSS custom properties (either globally in `:root` or locally on `.popover-container`):

```css
.popover-container {
  --popover-animation-timing: 0.9s;
  --popover-animation-easing: both;
  --popover-bg: var(--ease-color-surface);
  --popover-border: var(--ease-color-neutral-200);
  --popover-shadow: var(--ease-shadow-lg);
  --popover-radius: var(--ease-radius-xl);
  --popover-padding: var(--ease-space-5);
  --popover-offset-y: var(--ease-space-3);
}
```

## Demo

Open `demo.html` in your browser to see the live jello-hover interaction.
