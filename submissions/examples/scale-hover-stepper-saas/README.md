# Scale-Hover Stepper - SaaS Showcase

A **CSS Scale-Hover Stepper** built with **pure HTML and CSS** for SaaS onboarding layouts. Hovering over any step scales it up with a glowing border effect, giving users a clear visual cue at each stage.

## Features

- Pure CSS, no JavaScript
- Scale-hover interaction on each step
- Completed and active step states
- Gradient connector lines between steps
- CSS Custom Properties for easy theming
- Fully responsive across desktop, tablet, and mobile
- Accessible with `prefers-reduced-motion` support

## Folder Structure

```text
scale-hover-stepper-saas/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a browser.
2. Keep `style.css` in the same directory.
3. Hover over any step card to see the scale effect.
4. Override CSS variables to match your brand.

## CSS Custom Properties

```css
:root{
    --bg:#0f172a;
    --surface:#1e293b;

    --primary:#3b82f6;
    --success:#22c55e;

    --text:#f8fafc;
    --muted:#94a3b8;
    --inactive:#334155;

    --hover-scale:1.12;
    --transition:.35s ease;
}
```

## Steps Included

1. **Create Account** - Sign up and set organization details
2. **Invite Team** - Add members and assign roles
3. **Connect Integrations** - Link third-party tools
4. **Deploy Project** - Push to production

## Animations

- Scale-up hover effect on step cards
- Glowing border on hover
- Smooth transitions between states
- Connector glow on completion

## Responsive Breakpoints

- Desktop: horizontal layout with connectors
- Tablet (<=900px): tighter spacing
- Mobile (<=700px): vertical stacked layout

## Accessibility

- `prefers-reduced-motion` disables all animations and transforms
- Semantic HTML elements
- High-contrast text and UI

## Browser Support

Chrome, Firefox, Edge, Safari, Opera

## License

Showcase example for the **EaseMotion CSS** project using pure HTML and CSS.
