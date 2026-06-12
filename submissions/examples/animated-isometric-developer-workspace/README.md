# Animated Isometric Developer Workspace

## Description

A premium, pure CSS "Animated Isometric Developer Workspace" component for **EaseMotion CSS**. It depicts a stylized developer setup — laptop, browser window, code editor, terminal, and floating tech icons (HTML, CSS, JS, Git) — arranged in an isometric layout over a glassmorphic, gradient-driven background. Built entirely with HTML and CSS, the component combines layered floating animations, fade-ins, slide-ups, glow pulses, and hover lift effects to create a modern AI-startup-style landing hero.

## Features

- Responsive — adapts cleanly across desktop, tablet, and mobile breakpoints
- CSS Only — no JavaScript, no frameworks, no external libraries
- Glassmorphism — frosted, translucent panels with blur and soft borders
- Floating Animations — independent floating rhythms for icons and panels
- Isometric Layout — layered desk, laptop, and windows with depth and perspective
- Staggered Entrance — fade-in and slide-up sequencing on page load
- Glow & Hover Effects — pulsing laptop glow, lift-on-hover panels and icons
- CSS Variables — centralized design tokens for colors, spacing, radius, and motion
- Reduced Motion Support — respects `prefers-reduced-motion`

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Ensure `style.css` is linked in the `<head>` of your HTML file:

```html
<link rel="stylesheet" href="style.css" />
```

3. Drop the `.hero` and `.workspace-wrap` sections into any page — they are self-contained and require no additional markup or scripts.
4. Customize colors, spacing, and motion timing via the CSS variables defined at the top of `style.css` under `:root`.

```css
:root {
  --color-primary: #6c5ce7;
  --color-accent: #4d9fff;
  --radius-lg: 24px;
  --transition-base: 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
```

## Why it fits EaseMotion CSS

This component embodies EaseMotion CSS's core philosophy:

- **Animation-first** — every element enters with purpose (fade-in, slide-up, staggered delays) and lives with ambient motion afterward (floating icons, glowing screen, drifting background blobs), all powered exclusively by CSS keyframes and transitions.
- **Human-readable** — class names like `.fade-in`, `.slide-up`, `.float`, `.float-rev`, and `.delay-1` through `.delay-5` describe exactly what they do, making the markup self-documenting and easy to remix.
- **Composable** — animation classes are modular utilities that can be mixed and matched onto any element (panels, icons, badges, buttons), and design tokens via CSS variables let consumers re-skin the component without touching structural code.

## Folder Structure

```
animated-isometric-developer-workspace/
├── demo.html
├── style.css
└── README.md
```