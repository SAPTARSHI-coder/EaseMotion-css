# CSS Zoom-In Feature Grid for SaaS Showcase Layouts

A responsive CSS-only feature grid built for SaaS product showcases. Cards scale up on hover with a radial glow appearing from the top, and the icon zooms in for extra emphasis.

## Features

- Pure HTML and CSS, no JavaScript
- Zoom-in scale effect on hover
- Radial glow backdrop on hover
- Icon zoom animation
- CSS Custom Properties for easy theming
- Fully responsive across desktop, tablet, and mobile
- Accessible with `prefers-reduced-motion` and `focus-within` support
- Semantic HTML structure

## Folder Structure

```text
zoom-in-feature-grid-saas/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern browser.
2. Keep `style.css` in the same directory.
3. Hover over any card to see the zoom-in effect.
4. Override CSS variables to match your brand.

## CSS Custom Properties

```css
:root{
    --zi-bg:#0c1222;
    --zi-surface:#141d30;
    --zi-surface-hover:#1a2640;
    --zi-text:#f1f5f9;
    --zi-muted:#94a3b8;
    --zi-accent:#38bdf8;
    --zi-border:rgba(255,255,255,.08);
    --zi-radius:20px;
    --zi-gap:1.2rem;
    --zi-transition:400ms cubic-bezier(.2,.8,.2,1);
}
```

## Features Included

1. **Sprint Planning** - Drag-and-drop story mapping
2. **Code Review** - Inline comments and approvals
3. **CI/CD Pipelines** - Automated builds and deploys
4. **Error Tracking** - Real-time alerts with stack traces
5. **Feature Flags** - Toggle features without redeploy
6. **Team Insights** - Velocity and burndown reports

## Animations

- Zoom-in scale effect on card hover
- Radial glow appears from top on hover
- Icon scales up on hover
- Link arrow slides on hover

## Responsive Breakpoints

- Desktop: 3-column grid
- Tablet (<=900px): 2-column grid
- Mobile (<=600px): single column stack

## Accessibility

- `prefers-reduced-motion` disables all transforms and transitions
- `focus-within` provides the same hover effect for keyboard users
- Focus-visible outline on links
- Semantic HTML elements

## Browser Support

Chrome, Firefox, Edge, Safari, Opera

## License

Showcase example for the **EaseMotion CSS** project using pure HTML and CSS.
