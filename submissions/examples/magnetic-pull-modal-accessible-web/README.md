# CSS Magnetic Pull Modal for Accessible Web Layouts

A lightweight, responsive **pure CSS Magnetic Pull Modal** created for Accessible Web layouts. The modal animates with a smooth magnetic pull effect, requires **no JavaScript**, and is easy to customize using CSS custom properties.

## Features

- 🎯 Pure HTML & CSS (No JavaScript)
- 🧲 Smooth Magnetic Pull entrance animation
- ♿ Keyboard-friendly and accessible structure
- 📱 Fully responsive design
- 🎨 Easily customizable using CSS variables
- ⚡ Lightweight and reusable
- 🌐 Works in all modern browsers

## Files

```
submissions/examples/css-magnetic-pull-modal-accessible-web/

├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` directly in any modern browser.
2. Click the **Open Accessible Modal** button.
3. Close the modal using the close (`×`) button or by clicking the backdrop.

## Customization

Modify the CSS variables in `style.css`:

```css
:root{
    --duration: .55s;
    --easing: cubic-bezier(.22,1,.36,1);
    --pull-distance: 55px;
    --scale: .82;
    --modal-width: 440px;
}
```

These variables allow developers to customize:

- Animation duration
- Animation easing
- Pull distance
- Initial scale
- Modal width

## Accessibility

- Semantic `role="dialog"` and `aria-modal="true"`
- Keyboard-focusable controls
- Responsive layout for desktop and mobile
- High contrast buttons for better readability

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## Why it fits EaseMotion CSS

This component follows the EaseMotion philosophy by providing a clean, reusable, animation-first CSS component that delivers a modern interaction with zero JavaScript dependency while remaining simple to integrate into any project.

## License

Created for the **EaseMotion CSS** project as a GSSoC 2026 contribution.