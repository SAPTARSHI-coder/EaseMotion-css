# Feature Tour — CSS-only Parallax Variant

A premium, production-quality, responsive feature tour component built with pure **HTML5** and **CSS3**. This component guides users through core product features (onboarding steps) using a fluid, hardware-accelerated ambient parallax background and a modern glassmorphism interface—with **zero JavaScript dependencies**.

It is designed to be highly reusable, easily customizable, and suitable for direct inclusion in open-source CSS component libraries.

---

## 📸 Preview

![Preview](preview.png)

---

## 🚀 Features

- **Pure HTML5 & CSS3**: 100% lightweight markup and stylesheet. Zero JavaScript, frameworks, or external libraries.
- **Glassmorphism Design**: High-end semi-transparent cards using CSS `backdrop-filter`, radial transparency gradients, and glowing outer borders.
- **Ambient 6-Layer Parallax**: Uses independent 3D sways, rotations, pulses, and scaling to create depth in background layers (`.parallax-layer`).
- **Horizontal & Vertical Layouts**: Automatic layout adjustments from horizontal timeline columns on desktop to vertical timeline flow on mobile.
- **Accessible & Performance-optimized**: Proper semantic tagging, keyboard focus states, ARIA compliance, and strict `@media (prefers-reduced-motion)` constraints.
- **Clean Variable Management**: All colors, fonts, borders, and transitions are centrally managed using native CSS custom properties.

---

## 📂 Folder Structure

```text
EaseMotion/
└── submissions/
    └── examples/
        └── parallax-feature-tour-aman/
            ├── demo.html # HTML5 markup containing structure, semantic sections, and SVG icons.
            ├── style.css  # CSS3 stylesheet containing variables, resets, layout grids, and animations.
            └── README.md # Comprehensive documentation and customization guide.
---

## 💻 Usage Instructions

To include this feature tour component in your project:

1. **HTML Structure**:
   Copy the `<header>`, `<main>`, and decorative background elements from `demo.html` into your project template.
2. **Link the Stylesheet**:
   Add the stylesheet reference inside your `<head>` tags:
   ```html
   <link rel="stylesheet" href="path/to/style.css">
   ```
3. **Customize Content**:
   Update the steps and text descriptions within the `<article class="timeline-item">` nodes to match your product flow.

---

## 🎨 Customization Guide

All visual assets and layout details are configured via CSS variables inside the `:root` block of [style.css](file:///C:/Users/ASUS/.gemini/antigravity/scratch/Gssoc/style.css):

### Colors
```css
:root {
  /* Main Dark Background */
  --bg-dark: hsl(240, 24%, 6%);
  
  /* Neon Accents */
  --color-purple: hsl(270, 95%, 65%);
  --color-blue: hsl(195, 95%, 55%);
  --color-cyan: hsl(180, 95%, 50%);
  --color-pink: hsl(325, 95%, 60%);
}
```

### Transparencies & Glass Settings
```css
:root {
  --glass-bg: hsla(240, 20%, 10%, 0.45);   /* Card opacity */
  --glass-border: hsla(0, 0%, 100%, 0.08); /* Card border transparency */
}
```

---

## ♿ Accessibility (A11y)

- **Semantic Markups**: Standard structural components such as `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` are used to ensure clarity for screen readers.
- **Aria Hidden**: All decorative background circles, rings, grids, and floating particles are contained within a parent container configured with `aria-hidden="true"`.
- **Keyboard Navigation**: Distinct glowing focus rings are provided for screen readability and active keyboard tab targeting:
  ```css
  a:focus-visible, button:focus-visible {
    outline: 2.5px solid var(--color-cyan);
    outline-offset: 4px;
  }
  ```
- **Reduced Motion Support**: When user settings dictate reduced motion (`prefers-reduced-motion: reduce`), the background parallax movements, scaling, rotations, sways, and interactive card transitions are fully disabled:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .parallax-layer, .particle, .cta-glow {
      animation: none !important;
      transform: none !important;
    }
  }
  ```

---

## 📱 Responsive Behavior

- **Desktop (Width > 1024px)**: Standard horizontal layout. The steps sit side-by-side on a single line connecting through a central horizontal line indicator.
- **Tablet (Width 768px - 1024px)**: Retains horizontal rendering but scales down gap sizes, typography, and card paddings to fit medium-width screens.
- **Mobile (Width < 768px)**: Stacks cards vertically in a list view. The timeline connector line and step indicator markers slide to the left edge to form a vertical indicator.

---

## 🌐 Browser Support

This component works out-of-the-box on modern web browsers supporting backdrop filters, custom variables, and keyframe animations:
- Chrome 76+
- Safari 13+
- Edge 79+
- Firefox 103+ (with standard backdrop filter flags)
