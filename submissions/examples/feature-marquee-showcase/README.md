# CSS-Only Logo Marquee Showcase

A modern, infinitely scrolling logo marquee built entirely with CSS. Inspired by the clean aesthetics of Linear, Stripe, and Tailwind UI, this example provides a smooth and reusable component for displaying technology stacks, partner logos, sponsors, or brand cards.

## Features

- ✨ Infinite horizontal scrolling animation
- ⏸️ Pause animation on hover
- 🎨 Subtle accent colors for visual appeal
- 🌈 Gradient edge fade effect
- 📱 Responsive layout
- 🪄 Smooth hover interactions
- ⚡ No JavaScript required
- 🔧 Easy customization for speed, spacing, and card styles

## EaseMotion Classes Used

This example demonstrates the following EaseMotion utilities:

- `ease-flex`
- `ease-gap`
- `ease-card`
- `ease-center`
- `ease-transition`

These utilities help create a clean, composable, and animation-focused layout.

## Folder Structure

```txt
logo-marquee/
├── index.html
├── style.css
└── README.md
```

## Customization

### Animation Speed

Modify the CSS variable:

```css
:root {
  --speed: 24s;
}
```

### Card Spacing

```css
:root {
  --gap: 1.25rem;
}
```

### Accent Colors

Individual cards can have their own accent colors:

- React → Blue
- Vue → Green
- Angular → Red
- Node.js → Green
- Python → Blue

## Use Cases

This component is suitable for:

- Portfolio websites
- SaaS landing pages
- Startup websites
- Documentation pages
- Sponsor sections
- Technology stack showcases
- Partner and client logos

## Highlights

- Pure CSS implementation
- Lightweight and reusable
- Modern design inspired by contemporary web interfaces
- Smooth continuous motion without JavaScript
- Easily adaptable for logos, icons, or text cards

---

Built as an example for **EaseMotion CSS** to showcase practical motion patterns and reusable UI components.
