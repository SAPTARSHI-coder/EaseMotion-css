# CSS File Upload Dropzone

A responsive file upload dropzone built with pure CSS featuring a dashed border, hover animations, floating upload icon, keyboard accessibility, and light/dark mode support.

## Features

- Pure CSS implementation
- Dashed drag-and-drop style area
- Hover and focus effects
- Floating upload icon animation
- Responsive design
- Keyboard accessible
- Light and dark mode support
- Easy customization using CSS variables

## Files

- `demo.html`
- `style.css`
- `README.md`

## Usage

```html
<div class="dropzone">
  <div class="upload-icon">📁</div>
  <h2>Drop files here</h2>
  <p>or click to browse</p>
  <input type="file">
</div>
```

## Customization

Update theme colors:

```css
:root {
  --primary: #4f46e5;
  --surface: #ffffff;
}
```

## Accessibility

- Keyboard focus support
- ARIA labels included
- Clear focus states

## Why it fits EaseMotion CSS

This component adds a commonly used file-upload UI pattern with modern styling and subtle motion effects while remaining lightweight and dependency-free.