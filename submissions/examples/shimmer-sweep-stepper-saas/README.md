# CSS Shimmer-Sweep Stepper for SaaS Showcase Layouts

A modern, responsive SaaS onboarding stepper built entirely with HTML and CSS. The active stage features a continuous shimmer-sweep animation that visually signals ongoing processing.

## Features

- Pure HTML and CSS, no JavaScript
- Shimmer-sweep animation on the active step
- Completed, active, and upcoming step states
- Animated progress bar on the current step
- Gradient connectors between stages
- CSS Custom Properties for easy theming
- Fully responsive across desktop, tablet, and mobile
- Accessible with `prefers-reduced-motion` support
- Semantic HTML structure

## Folder Structure

```text
shimmer-sweep-stepper-saas/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a modern browser.
2. Keep `style.css` in the same directory.
3. The active step automatically plays the shimmer-sweep animation.
4. Override CSS variables to match your brand.

## CSS Custom Properties

```css
:root{
    --ss-bg:#0c1222;
    --ss-surface:#151d30;

    --ss-primary:#6366f1;
    --ss-success:#22c55e;

    --ss-text:#f1f5f9;
    --ss-muted:#94a3b8;

    --ss-radius:18px;
}
```

## Steps Included

1. **Create Workspace** - Set up organization profile and billing
2. **Invite Team Members** - Send invites and assign roles
3. **Connect Integrations** - Link Slack, GitHub, Jira
4. **Configure Settings** - Adjust notifications and permissions
5. **Launch Project** - Deploy and start collaborating

## Animations

- Shimmer-sweep gradient on the active step
- Progress bar shimmer on current stage
- Connector grow animation
- Indicator pulse on active dot
- Intro fade-in for header content

## Responsive Breakpoints

- Desktop: full vertical stepper layout
- Tablet (<=700px): tighter spacing, smaller markers
- Mobile (<=500px): compact typography

## Accessibility

- `prefers-reduced-motion` disables all animations
- ARIA `role="progressbar"` with value attributes
- Semantic HTML elements
- High-contrast text and UI

## Browser Support

Chrome, Firefox, Edge, Safari, Opera

## License

Showcase example for the **EaseMotion CSS** project using pure HTML and CSS.
