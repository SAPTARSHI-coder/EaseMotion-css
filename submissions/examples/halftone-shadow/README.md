# Retro Comic-Style Halftone Shadow Utility

## Description
This submission resolves Issue #68970 by adding a trendy "neo-brutalism" / comic-book aesthetic utility class that replaces standard solid box-shadows with a dotted halftone pattern.

## Features
- Pure CSS implementation without images or SVG backgrounds.
- Uses `radial-gradient` to generate a repeatable dotted (halftone) pattern.
- Implemented via a `::before` pseudo-element to avoid interfering with the parent element's own background or borders.
- Smooth CSS transitions to easily support dynamic hover effects (like the element lifting up while the shadow expands).
- Inherits border radius automatically via `border-radius: inherit`.

## Usage
Add the `.ease-halftone-shadow` class to any block or inline-block element (like a card or button). Ensure the parent has a solid background (e.g., `background-color: white;`) so the shadow pattern behind it doesn't bleed through the front.

```html
<div class="ease-halftone-shadow" style="background-color: white; border: 2px solid black; padding: 20px;">
  My Comic Card
</div>

<button class="ease-halftone-shadow" style="background-color: #ff7675; border: 2px solid black; padding: 10px 20px;">
  Click Me
</button>
```

You can customize the offset and spacing by overriding `.ease-halftone-shadow::before` or adding hover states:
```css
.ease-halftone-shadow:hover {
  transform: translate(-5px, -5px);
}
.ease-halftone-shadow:hover::before {
  top: 15px;
  left: 15px;
}
```
