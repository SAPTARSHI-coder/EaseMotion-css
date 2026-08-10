# Avatar Stack

A reusable CSS-only overlapping avatar stack component with smooth hover interactions. Inspired by collaboration tools like Slack, Figma, and Notion.

## Features

- Pure HTML & CSS
- No JavaScript
- Overlapping circular avatars
- Smooth hover spread animation
- Responsive layout
- Accessible markup
- Easy to customize

## Files

```
ease-avatar-stack/
├── demo.html
├── style.css
└── README.md
```

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Create an avatar stack:

```html
<div class="avatar-stack">
    <img class="avatar-stack-item" src="avatar1.svg" alt="User 1">
    <img class="avatar-stack-item" src="avatar2.svg" alt="User 2">
    <span class="avatar-stack-item avatar-stack-more">+5</span>
</div>
```

Customize avatar size, overlap spacing, colors, and animation timing directly through CSS.

## Browser Support

Works in all modern browsers including:

- Chrome
- Firefox
- Edge
- Safari

## License

Part of the EaseMotion CSS project.