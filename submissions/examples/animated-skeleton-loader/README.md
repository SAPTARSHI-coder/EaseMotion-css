# Animated Skeleton Loader

A pure CSS animated skeleton loader component that provides loading placeholders with smooth shimmer (wave) and pulse effects. It is designed to improve the user experience while content is loading.

## Features

- Pure HTML and CSS (no JavaScript required)
- Shimmer (wave) loading animation
- Pulse animation variant
- Avatar, title, subtitle, image, text, and button placeholders
- Rounded modern UI
- Responsive layout
- Supports `prefers-reduced-motion` for accessibility

## Files

```
animated-skeleton-loader/
├── demo.html
├── style.css
├── script.js
└── README.md
```

## Usage

1. Open `demo.html` in any modern web browser.
2. The shimmer effect is enabled using the `wave` class.
3. The pulse effect is enabled using the `pulse` class.

## Accessibility

- Uses `aria-busy="true"` and `role="status"` for loading states.
- Respects `prefers-reduced-motion` by disabling animations when reduced motion is preferred.

## Technologies Used

- HTML5
- CSS3

## Author

Created as a contribution for the EaseMotion CSS open-source project.