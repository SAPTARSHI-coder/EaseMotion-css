# Skew Hover Button Utility

A lightweight HTML/CSS utility that applies a subtle skew animation to buttons on hover. The effect enhances interaction while remaining reusable and easy to customize.

## Features

- Smooth skew hover animation
- Responsive design
- Lightweight HTML & CSS only
- Keyboard focus support
- Supports reduced-motion preferences
- Easy to integrate into any project

## Folder Structure

```text
submissions/examples/feature-skew-hover-button-utility-ds/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in any modern browser.

Use the utility class:

```html
<button class="skew-hover-button-ds">
  Hover Me
</button>
```

## Accessibility

- Uses `:focus-visible` for keyboard navigation.
- Respects:

```css
@media (prefers-reduced-motion: reduce)
```

to minimize animation for users who prefer reduced motion.

## Use Cases

- Call-to-action buttons
- Landing pages
- Dashboard interfaces
- Forms
- Portfolio websites

## Customization

You can easily modify:

- Button colors
- Border radius
- Hover angle
- Animation duration
- Shadow intensity
