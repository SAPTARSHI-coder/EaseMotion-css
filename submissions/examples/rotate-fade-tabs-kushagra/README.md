# CSS Rotate-Fade Tabs for Creative Portfolios

A CSS-only tabbed navigation component designed for creative portfolio layouts and web applications. Built with HTML5 and CSS3, it features a 3D perspective rotation and blur-fade panel transition managed without JavaScript.

---

## 🚀 Features

- **Pure CSS State Management**: Uses hidden `<input type="radio">` controls and general sibling combinators (`~`) to toggle content panels without JavaScript.
- **3D Rotate-Fade Animation**: Content panels enter with a CSS `@keyframes` transition combining `perspective()`, 3D `rotateX()`, scaling, and `filter: blur()`.
- **Glassmorphism & Fallback Support**: Uses `backdrop-filter: blur()` with solid color fallback for browsers that do not support backdrop blur.
- **System Font Stack**: Uses native system font tokens (`system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`) for offline capability without external CDN dependencies.
- **CSS Custom Properties**: Parameterized using `:root` design tokens for colors, rotation angles, animation duration, and radii.
- **Responsive Layout**: Adapts across mobile, tablet, and desktop viewports using CSS Grid and Flexbox.
- **Accessibility & Motion Compliance**:
  - Focus indicators (`:focus-visible`) for keyboard navigation.
  - Reduced motion fallback via `@media (prefers-reduced-motion: reduce)`.
  - Windows High-Contrast mode support via `@media (forced-colors: active)`.
  - Print optimization via `@media print`.

---

## 📁 Folder Structure

```text
submissions/examples/rotate-fade-tabs-kushagra/
├── demo.html    # HTML demo showcasing projects, skills, experience, and contact sections
├── style.css    # CSS tokens, glassmorphism UI rules, keyframe animations, and media queries
└── README.md    # Component documentation and usage guide
```

---

## 🛠️ Usage

1. Open `demo.html` directly in any web browser without an internet connection, web server, or build step.
2. Select tabs (Projects, Skills, Experience, Contact) to observe panel transitions.
3. Incorporate the HTML structure and CSS rules into your application.

### HTML Markup Example

```html
<div class="tabs-container">
    <!-- Radio Controls (Visually Hidden) -->
    <input type="radio" id="tab-1" name="portfolio-tabs" class="tab-radio" checked aria-controls="panel-1">
    <input type="radio" id="tab-2" name="portfolio-tabs" class="tab-radio" aria-controls="panel-2">

    <!-- Tab Navigation Bar -->
    <nav class="tab-bar" aria-label="Portfolio Sections">
        <label for="tab-1" class="tab-btn" id="label-1">Projects</label>
        <label for="tab-2" class="tab-btn" id="label-2">Skills</label>
    </nav>

    <!-- Content Panels -->
    <div class="tab-panels">
        <section id="panel-1" class="tab-panel panel-1" aria-labelledby="label-1" tabindex="0">...</section>
        <section id="panel-2" class="tab-panel panel-2" aria-labelledby="label-2" tabindex="0">...</section>
    </div>
</div>
```

---

## 🎨 CSS Custom Properties (Design Tokens)

Adjust parameters in `style.css` via `:root` custom properties:

| Variable | Default Value | Description |
|---|---|---|
| `--em-bg-dark` | `#070a12` | Dark background color |
| `--em-bg-surface` | `rgba(15, 23, 42, 0.65)` | Glass container surface color |
| `--em-font-sans` | `system-ui, -apple-system, ...` | Offline native system font stack |
| `--em-accent-purple` | `#8b5cf6` | Primary accent color |
| `--em-accent-cyan` | `#06b6d4` | Secondary accent color |
| `--em-glass-blur` | `blur(16px)` | Backdrop blur intensity |
| `--em-rotate-perspective` | `1000px` | 3D perspective depth |
| `--em-rotate-angle` | `-16deg` | 3D RotateX entrance angle |
| `--em-rotate-duration` | `0.45s` | Animation duration |
| `--em-rotate-timing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing timing function |

---

## ♿ Accessibility

- **Keyboard Navigation**: Native radio controls support standard keyboard tabbing and arrow key interaction.
- **Focus Rings**: Explicit `:focus-visible` outlines ensure keyboard focus remains visible.
- **Touch Targets**: Tab buttons enforce a minimum 44px height for mobile touch targets.
- **Reduced Motion**: Bypasses 3D rotation, scaling, and keyframe animations when `prefers-reduced-motion: reduce` is detected.
- **Forced Colors**: Applies `CanvasText` and `Highlight` system colors in Windows High-Contrast mode.

---

## 🌐 Browser Support

- Chrome / Edge 88+
- Firefox 85+
- Safari 14+

---

## 💡 Why It Fits EaseMotion CSS

EaseMotion CSS provides reusable, zero-dependency CSS animation primitives and UI patterns. This component demonstrates how CSS sibling combinators, 3D transforms, and custom properties can create interactive tabbed interfaces without JavaScript.
