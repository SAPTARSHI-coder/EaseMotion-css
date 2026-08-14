# Dark Mode Tokens
A reusable dark mode token system using CSS variables with automatic theme switching via `prefers-color-scheme`.

---

## Features
- Automatic light and dark mode support
- CSS custom properties (design tokens)
- No JavaScript required
- Responsive layout
- Smooth color transitions
- Modern card and button styling
- Easy to customize and extend

---

## File Structure

```
dark-mode-tokens-arpita/
├── demo.html
├── style.css
└── README.md
```

---

## Usage
Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Example:
```html
<div class="card">
    <h2>Dashboard Card</h2>
    <p>This component automatically adapts to the user's system theme.</p>

    <button class="btn btn-primary">
        Primary Button
    </button>
</div>
```
---

## How it works

The component defines reusable CSS variables inside `:root` for the default (light) theme.

When the user's operating system is in dark mode, the `prefers-color-scheme: dark` media query automatically overrides these variables, updating the appearance without JavaScript.

---

## Why it fits EaseMotion CSS
This component demonstrates reusable design tokens that simplify theme management while keeping styles clean, scalable, and easy to maintain. It follows a CSS-first approach with responsive layouts and subtle motion effects.

---

## Browser Support
- Chrome
- Edge
- Firefox
- Safari

---
## License

Created for the EaseMotion CSS contribution program.