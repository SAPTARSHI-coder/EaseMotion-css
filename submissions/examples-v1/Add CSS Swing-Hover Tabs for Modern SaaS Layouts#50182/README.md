# CSS Swing-Hover Tabs - SaaS Aesthetic

A polished, pure CSS tab component featuring a playful yet professional "Swing-Hover" interaction, designed to seamlessly fit into Modern SaaS (Software as a Service) dashboards.

## Features

- **Swing-Hover Animation**: Hovering over any tab triggers a subtle, pendulum-like swing animation (`@keyframes swingHover`). The tab gently rotates back and forth from a top-center origin before settling, giving the UI a lively, responsive feel.
- **Pure CSS State**: The active tab and visible panel are managed entirely via visually hidden radio buttons (`:checked`), meaning absolutely no JavaScript is required.
- **Modern SaaS Aesthetics**: The UI is styled with clean lines, soft rounded corners, subtle drop shadows, and a sophisticated Indigo color palette typical of modern web apps (e.g., Stripe, Vercel, Tailwind UI).
- **Accessible & Usable**: The underlying radio inputs use the accessible `clip` method to remain hidden without sacrificing keyboard navigability. Active focus rings are custom styled via `:focus-visible`.
- **Responsive**: The tab navigation flexes and stacks naturally on smaller mobile devices.
- **Mock Dashboards**: Includes pure CSS mockup layouts (Analytics charts, User lists, Settings forms) to demonstrate real-world SaaS contextual usage.

## Custom Properties

You can customize the physics of the swing animation and the theme colors by overriding the CSS variables in the `:root` pseudo-class inside `style.css`:

```css
:root {
  /* Swing Animation Parameters */
  --swing-duration: 0.7s;
  --swing-easing: cubic-bezier(0.25, 1, 0.5, 1);
  --swing-angle: 8deg; /* Adjust how intense the swing is */
  --swing-origin: top center;
  
  /* Colors */
  --saas-primary: #6366f1; /* Indigo */
  --saas-active-bg: #eff6ff;
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Hover your mouse over the tabs to see the "Swing" effect in action, and click them to navigate the mock SaaS dashboard panels.
