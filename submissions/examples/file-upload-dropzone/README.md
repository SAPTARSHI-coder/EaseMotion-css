# File Upload Dropzone

## Component overview

This submission adds a reusable, zero-JavaScript drag-and-drop upload zone with polished hover states, active drag feedback, and several visual variants for modern UI patterns.

## Features

- Drag-and-drop upload surface
- Active drag state styling
- Hover and focus interactions
- Upload icon support
- File type hint text
- Smooth transitions and gentle motion
- Responsive layout
- Reduced-motion accessibility support

## Available classes

- `.ease-dropzone` — base upload component
- `.ease-dropzone-active` — highlights the zone while a file is being dragged over it
- `.ease-dropzone-dark` — dark theme variant
- `.ease-dropzone-glass` — glassmorphism styling
- `.ease-dropzone-hover` — stronger hover lift effect
- `.ease-dropzone-pulse` — gentle pulsing animation

## Customization options

The component uses CSS variables so the visuals can be tuned without changing the structure:

```css
:root {
  --ease-dropzone-bg: #f8fafc;
  --ease-dropzone-border: #cbd5e1;
  --ease-dropzone-active-border: #4f46e5;
  --ease-dropzone-active-bg: #eef2ff;
  --ease-dropzone-radius: 24px;
  --ease-dropzone-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
  --ease-dropzone-padding: 28px;
  --ease-dropzone-transition: 180ms ease;
}
```

## Example usage

```html
<label class="ease-dropzone" tabindex="0">
  <span class="dropzone-icon">⬆</span>
  <strong>Drop files here</strong>
  <span>PNG, JPG, PDF up to 25MB</span>
</label>
```

## Browser compatibility

The component uses standard CSS features such as flexbox, transforms, and backdrop filters, so it works well in current evergreen browsers. The reduced-motion and high-contrast fallbacks help preserve accessibility.

## Accessibility considerations

The dropzone includes visible keyboard focus styles, high-contrast support, and a reduced-motion override so users who prefer less animation can still use the component comfortably.
