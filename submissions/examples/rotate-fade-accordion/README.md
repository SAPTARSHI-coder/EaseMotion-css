# CSS Rotate-Fade Accordion

A clean, modern, pure HTML/CSS responsive accordion component engineered for product catalog layouts, built natively for **EaseMotion CSS**.

## Features
- **Zero JavaScript**: Runs entirely on native HTML radio inputs and CSS sibling combinators.
- **Rotate-Fade Animation**: Smooth compound 3D hardware-accelerated transformation (`rotateX` combined with vertical translation and opacity fade).
- **Responsive Design**: Auto-adjusts seamlessly to mobile, tablet, and desktop display viewports.
- **Accessibility Friendly**: Includes full support for `prefers-reduced-motion` settings.

## File Architecture
```text
submissions/examples/rotate-fade-accordion/
├── demo.html
├── style.css
└── README.md
```

## CSS Custom Properties
Customize the component theme variables directly inside `:root`:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--em-bg` | `#0f172a` | Root background styling |
| `--em-card-bg` | `#1e293b` | Main accordion wrapper background |
| `--em-accent` | `#38bdf8` | Focus state and active icon accents |
| `--em-duration` | `0.5s` | Transform timeline speed |
| `--em-timing` | `cubic-bezier(...)` | Fluid hardware easing curve |
