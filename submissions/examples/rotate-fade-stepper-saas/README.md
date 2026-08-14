# Rotate-Fade Stepper - SaaS Showcase

A **CSS Rotate-Fade Stepper** built with **pure HTML and CSS** for SaaS showcase layouts. This component guides users through a four-step onboarding flow with smooth rotate-and-fade hover animations, gradient connectors, and a fully responsive layout.

---

## Features

- SaaS-themed stepper component
- Rotate + fade hover animation
- Gradient glowing connectors
- Active step highlighting
- CSS Custom Properties for easy theming
- Fully responsive across desktop, tablet, and mobile
- Accessibility support with `prefers-reduced-motion`
- Pure HTML & CSS (No JavaScript)

---

## Folder Structure

```text
rotate-fade-stepper-saas/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Keep `style.css` in the same directory.
3. Hover over step cards to see the rotate-and-fade effect.
4. Adjust CSS variables to match your brand.

---

## CSS Custom Properties

```css
:root{
    --bg:#0c1222;
    --bg-card:#141d33;

    --primary:#3b82f6;
    --secondary:#8b5cf6;
    --success:#22c55e;

    --text:#f1f5f9;
    --muted:#94a3b8;

    --glass:rgba(255,255,255,.06);
    --border:rgba(255,255,255,.1);

    --radius:20px;
}
```

---

## Steps Included

### 1. Create Workspace
Set up your organization and configure basic settings.

### 2. Invite Team
Add collaborators and assign roles.

### 3. Connect Tools
Integrate your favorite apps and streamline workflows.

### 4. Go Live
Deploy your project and start shipping.

---

## Animations

- Rotate + fade hover effect on step cards
- Rotating step number indicators
- Gradient connector glow
- Smooth hover transitions

---

## Responsive Breakpoints

- Desktop: side-by-side layout with connectors
- Tablet (<=1100px): connectors hidden, cards wrap
- Mobile (<=600px): stacked layout, smaller typography

---

## Accessibility

- `prefers-reduced-motion` disables all animations
- Semantic HTML structure
- High-contrast text and UI elements

---

## Browser Support

- Chrome, Firefox, Edge, Safari, Opera

---

## License

Created as a showcase example for the **EaseMotion CSS** project using pure HTML and CSS.
