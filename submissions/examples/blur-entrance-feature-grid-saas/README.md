# CSS Blur-Entrance Feature Grid for SaaS Showcase Layouts

A responsive CSS-only feature grid built for SaaS product showcases. Cards animate in with a blur-entrance effect that fades and unblurs each element in a staggered sequence.

## Features

- Pure HTML and CSS, no JavaScript
- Blur-entrance animation on page load
- Staggered card entrance delays
- Hover lift effect on feature cards
- CSS Custom Properties for easy theming
- Fully responsive across desktop, tablet, and mobile
- Accessible with `prefers-reduced-motion` support
- Semantic HTML structure

## Folder Structure

```text
blur-entrance-feature-grid-saas/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern browser.
2. Keep `style.css` in the same directory.
3. Cards will animate in automatically on page load.
4. Override CSS variables to match your brand.

## CSS Custom Properties

```css
:root{
    --be-bg:#0b1120;
    --be-surface:#131c30;
    --be-primary:#6366f1;
    --be-text:#f1f5f9;
    --be-muted:#94a3b8;
    --be-border:rgba(255,255,255,.07);
    --be-radius:20px;
}
```

## Features Included

1. **Project Dashboard** - Centralized task and milestone view
2. **Real-Time Editing** - Collaborative document editing
3. **Version Control** - Branch comparisons and rollback
4. **Automated Testing** - Test suites on every commit
5. **Deployment Pipeline** - Staging and production deploys
6. **Team Analytics** - Velocity tracking and sprint reports

## Animations

- Blur-entrance fade-in on hero and section
- Staggered card entrance (180ms to 530ms delays)
- Hover lift with shadow on cards
- Link arrow slide on hover

## Responsive Breakpoints

- Desktop: 3-column grid
- Tablet (<=900px): 2-column grid
- Mobile (<=600px): single column stack

## Accessibility

- `prefers-reduced-motion` disables all animations
- Focus-visible outline on links
- Semantic HTML elements
- High-contrast text and UI

## Browser Support

Chrome, Firefox, Edge, Safari, Opera

## License

Showcase example for the **EaseMotion CSS** project using pure HTML and CSS.
