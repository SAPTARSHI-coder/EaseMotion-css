# Curtain Split Animation (`ease-curtain-split`)

A dramatic reveal animation where two solid covers part from the center to the sides, revealing the content underneath. This is a pure CSS implementation using pseudo-elements, making it extremely lightweight and easy to drop onto any container.

## Features
- **Pure CSS**: Uses `::before` and `::after` pseudo-elements.
- **Customizable**: Color and delay can be customized via CSS variables (`--ease-curtain-color`, `--ease-curtain-delay`).
- **Responsive**: Adapts perfectly to the size of the container.
- **Accessible**: Fully respects the `prefers-reduced-motion` media query by disabling the animation and instantly showing the content.

## Usage

To use this animation, simply add the classes `.ease-curtain-wrapper` and `.ease-curtain-split` to your target container.

```html
<div class="ease-curtain-wrapper ease-curtain-split">
  <h2>Revealed Content</h2>
  <p>This content was hidden behind a splitting curtain.</p>
</div>
```

### Customization via CSS Variables

You can easily theme the curtain or stagger the animations by setting these CSS variables on the container:

```css
.my-custom-curtain {
  --ease-curtain-color: var(--ease-color-success); /* Defaults to primary */
  --ease-curtain-delay: 0.5s; /* Defaults to 0.2s */
}
```

```html
<div class="ease-curtain-wrapper ease-curtain-split my-custom-curtain">
  <!-- Content -->
</div>
```

## Files Included
- `style.css`: The core CSS definitions and keyframes.
- `demo.html`: A working demo showcasing default and custom variations.
- `README.md`: This documentation.

## Related Issue
Resolves #11108
