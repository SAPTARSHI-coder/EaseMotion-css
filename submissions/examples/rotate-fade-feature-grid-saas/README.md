# CSS Rotate-Fade Feature Grid for SaaS Showcase Layouts

A responsive CSS-only feature grid built for SaaS product showcases. Each card rotates and fades on hover with a glowing radial backdrop, giving a modern interactive feel.

## Features

- Pure HTML and CSS, no JavaScript
- Rotate + fade hover effect on feature cards
- Radial glow backdrop on hover
- Rotating icon animation
- CSS Custom Properties for easy theming
- Fully responsive across desktop, tablet, and mobile
- Accessible with `prefers-reduced-motion` and `focus-within` support
- Semantic HTML structure

## Folder Structure

```text
rotate-fade-feature-grid-saas/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern browser.
2. Keep `style.css` in the same directory.
3. Hover over any card to see the rotate-fade interaction.
4. Override CSS variables to match your brand.

## CSS Custom Properties

```css
:root{
    --rf-bg:#0c1222;
    --rf-card:#141d30;
    --rf-card-hover:#1a2640;
    --rf-text:#f1f5f9;
    --rf-muted:#94a3b8;
    --rf-accent:#818cf8;
    --rf-border:rgba(255,255,255,.08);
    --rf-radius:20px;
    --rf-gap:1.2rem;
    --rf-transition:420ms cubic-bezier(.2,.8,.2,1);
}
```

## Features Included

1. **Workspace Setup** - Create org and invite teammates
2. **Team Collaboration** - Real-time editing and comments
3. **API Integrations** - REST and webhook endpoints
4. **Usage Analytics** - Track adoption and performance
5. **Role Permissions** - Granular access control
6. **Billing & Plans** - Flexible pricing tiers

## Animations

- Rotate + fade hover effect on cards
- Radial glow backdrop appears on hover
- Icon rotates and scales on hover
- Link arrow slides on hover

## Responsive Breakpoints

- Desktop: 3-column grid
- Tablet (<=900px): 2-column grid
- Mobile (<=600px): single column stack

## Accessibility

- `prefers-reduced-motion` disables all animations and transforms
- `focus-within` provides the same hover effect for keyboard users
- Focus-visible outline on links
- Semantic HTML elements

## Browser Support

Chrome, Firefox, Edge, Safari, Opera

## License

Showcase example for the **EaseMotion CSS** project using pure HTML and CSS.
