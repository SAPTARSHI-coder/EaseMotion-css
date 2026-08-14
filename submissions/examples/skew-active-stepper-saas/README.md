# CSS Skew-Active Stepper for SaaS Showcase Layouts

A responsive CSS-only stepper built for SaaS onboarding flows. Active and completed steps are highlighted with a skew transform on hover, giving each stage a distinctive angled interaction.

## Features

- Pure HTML and CSS, no JavaScript
- Skew + scale hover effect on each step
- Completed, active, and upcoming states
- Gradient connectors between steps
- CSS Custom Properties for easy theming
- Fully responsive across desktop, tablet, and mobile
- Accessible with `prefers-reduced-motion` support
- Semantic HTML structure

## Folder Structure

```text
skew-active-stepper-saas/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern browser.
2. Keep `style.css` in the same directory.
3. Hover over any step to see the skew interaction.
4. Override CSS variables to match your brand.

## CSS Custom Properties

```css
:root{
    --bg:#0b1120;
    --surface:#141c2f;

    --primary:#8b5cf6;
    --success:#22c55e;

    --text:#f1f5f9;
    --muted:#94a3b8;

    --radius:18px;
    --transition:.4s cubic-bezier(.2,.8,.2,1);
}
```

## Steps Included

1. **Create Account** - Sign up and set organization profile
2. **Invite Members** - Add collaborators and assign roles
3. **Connect Tools** - Integrate existing workflow apps
4. **Go Live** - Deploy and start shipping

## Animations

- Skew + scale hover effect on step cards
- Smooth border and shadow transitions
- Connector glow on completion

## Responsive Breakpoints

- Desktop: horizontal layout with connectors
- Tablet (<=820px): connectors hidden, cards wrap
- Mobile (<=600px): vertical stacked layout

## Accessibility

- `prefers-reduced-motion` disables all transforms and transitions
- Semantic HTML elements
- High-contrast text and UI

## Browser Support

Chrome, Firefox, Edge, Safari, Opera

## License

Showcase example for the **EaseMotion CSS** project using pure HTML and CSS.
