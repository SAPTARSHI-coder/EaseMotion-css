# CSS Ripple-Wave Navbar for SaaS Showcase Layouts 🌊✨

A modern, lightweight, pure **CSS/HTML Ripple-Wave Navbar** component designed for SaaS showcase layouts and modern web application landing pages. Part of the **EaseMotion CSS** animation library.

---

## 🚀 Features

- **100% Pure HTML5 & CSS3**: Zero JavaScript framework dependencies required.
- **Ripple-Wave Animation**: Smooth radial hover expansion and animated SVG wave background.
- **Glassmorphism Design**: Floating navbar container with `backdrop-filter: blur()`, glowing borders, and dark mode aesthetic.
- **Pure CSS Responsive Drawer**: Interactive mobile hamburger menu using the CSS checkbox state pattern.
- **Active Link Wave Morph**: Morphing animated underline indicator for current navigation item.
- **Accessibility Ready**: Built-in support for `@media (prefers-reduced-motion: reduce)`, high contrast, and keyboard focus states.

---

## 📂 File Structure

```text
submissions/examples/css-ripple-wave-navbar/
├── demo.html    # Clean HTML5 showcase page using standard EaseMotion classes
├── style.css    # Pure CSS stylesheet with performant keyframe animations
└── README.md    # Documentation detailing features, custom properties & usage
```

---

## 🛠️ Quick Start & Usage

1. **Include the Stylesheet**:
   Link `style.css` in the `<head>` of your HTML document:
   ```html
   <link rel="stylesheet" href="style.css">
   ```

2. **Add Navbar Markup**:
   Use standard EaseMotion classes (`.em-navbar-wrapper`, `.em-navbar`, `.em-nav-link`, `.em-btn-ripple`):
   ```html
   <header class="em-navbar-wrapper">
     <nav class="em-navbar">
       <a href="#" class="em-brand">Ease<span>Motion</span></a>
       <ul class="em-nav-menu">
         <li><a href="#" class="em-nav-link active">Overview</a></li>
         <li><a href="#" class="em-nav-link">Features</a></li>
       </ul>
       <div class="em-nav-actions">
         <a href="#" class="em-btn-ripple">Get Started</a>
       </div>
     </nav>
   </header>
   ```

3. **Open `demo.html`**:
   Launch `demo.html` directly in any standard browser to view the complete SaaS showcase page.

---

## 🎨 CSS Custom Properties (Design Tokens)

You can easily customize themes, colors, and animation speeds by overriding the following CSS variables in `:root`:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--em-primary` | `#6366f1` | Primary brand accent color (Indigo) |
| `--em-primary-glow` | `rgba(99, 102, 241, 0.4)` | Radial glow color for ripples |
| `--em-secondary` | `#06b6d4` | Secondary gradient accent (Cyan) |
| `--em-accent` | `#a855f7` | Tertiary highlight color (Violet) |
| `--em-bg-dark` | `#0b0f19` | Main page background color |
| `--em-bg-surface` | `#131b2e` | Card / Surface background |
| `--em-wave-speed` | `12s` | Speed of continuous SVG wave animation |
| `--em-nav-height` | `80px` | Height of navbar container |
| `--em-border-glass` | `rgba(255, 255, 255, 0.12)` | Glassmorphism border stroke |

---

## ♿ Accessibility (`prefers-reduced-motion`)

The component respects users' motion preferences. When `prefers-reduced-motion: reduce` is detected, heavy background keyframes and infinite wave animations are automatically disabled and replaced with clean static visuals.

---

## 📜 License

Released under the **MIT License**. Created for EaseMotion CSS (GSSoC 2026).
