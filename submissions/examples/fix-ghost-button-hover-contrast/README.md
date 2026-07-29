# Ghost Button Hover Contrast Fix

## Overview

This example demonstrates an accessible hover state for the Ghost button variant.

The original issue occurs when the button background changes to white while the text also remains white, making the label unreadable.

This showcase resolves the issue by changing the text color to a dark shade whenever the hover background becomes white.

---

## Features

- Pure HTML & CSS
- Responsive layout
- Accessible hover state
- Keyboard focus support
- No JavaScript
- Lightweight implementation

---

## Usage

```html
<button class="ghost-button">
    Ghost
</button>
```

Hovering or focusing the button automatically updates the text color to maintain proper contrast.

---

## Example CSS

```css
.ghost-button:hover,
.ghost-button:focus-visible{
    background:#ffffff;
    color:#0f172a;
}
```

---

## Why this fix?

Maintaining sufficient contrast improves:

- Accessibility
- Readability
- User experience
- WCAG compliance

Instead of displaying white text on a white background, the button uses a dark foreground color during hover.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## Files

```
demo.html
style.css
README.md
```

---

## License

Example submission for EaseMotion CSS.