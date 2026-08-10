# CSS Float-Drift Drawer for SaaS Showcase Layouts 🚀

A modern, lightweight, pure **CSS/HTML Float-Drift Drawer** side panel component designed for SaaS showcase layouts and web application dashboard interfaces. Part of the **EaseMotion CSS** animation library.

---

## 🌟 Overview

The **Float-Drift Drawer** provides a floating glassmorphic side navigation panel that smoothly slides into view and gently drifts with organic CSS keyframe floating motion. It operates without any JavaScript framework dependencies, using the pure CSS checkbox state pattern.

---

## ✨ Features

- **100% Pure HTML5 & CSS3**: No JavaScript or third-party JS libraries required.
- **Floating Drift Keyframe Animation**: Gentle continuous vertical floating drift motion while open.
- **Glassmorphism Panel Aesthetics**: Translucent surface background with `backdrop-filter: blur(24px)` and glowing borders.
- **Pure CSS Checkbox Toggle Hack**: Accessible open/close state controller using standard HTML checkboxes.
- **User Profile Card**: Built-in SaaS avatar profile card with online status indicator and PRO tier badge.
- **Ripple Hover Interactions**: Radial gradient hover ripple expansion on navigation menu items.
- **Accessible & Responsive**: Includes `@media (prefers-reduced-motion: reduce)` support and adapts from full-width mobile viewports to desktop drawers.

---

## 📂 Folder Structure

```text
submissions/examples/css-float-drift-drawer/
├── demo.html    # HTML5 showcase page using standard EaseMotion classes
├── style.css    # Pure CSS stylesheet with float-drift keyframes & design system tokens
└── README.md    # Complete component documentation
```

---

## 📖 Usage

1. **Include the Stylesheet**:
   Link `style.css` in the `<head>` of your document:
   ```html
   <link rel="stylesheet" href="style.css">
   ```

2. **Add HTML Controller and Drawer Markup**:
   Include the checkbox controller, overlay label, and `<aside>` panel:
   ```html
   <!-- Checkbox State Controller -->
   <input type="checkbox" id="em-drawer-toggle" class="em-drawer-checkbox">

   <!-- Overlay Backdrop -->
   <label for="em-drawer-toggle" class="em-drawer-overlay"></label>

   <!-- Drawer Panel -->
   <aside class="em-drawer-panel">
     <div class="em-drawer-header">
       <h3>EaseMotion</h3>
       <label for="em-drawer-toggle" class="em-drawer-close">&times;</label>
     </div>
     <!-- Navigation Items -->
   </aside>

   <!-- Trigger Button -->
   <label for="em-drawer-toggle" class="em-drawer-trigger-btn">
     Open Drawer
   </label>
   ```

---

## 🎨 CSS Custom Properties (Variables)

Override the following CSS variables in `:root` to customize colors and animation timings:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--em-primary` | `#6366f1` | Primary accent color (Indigo) |
| `--em-secondary` | `#06b6d4` | Secondary accent color (Cyan) |
| `--em-accent` | `#ec4899` | Highlight badge color (Pink) |
| `--em-bg-drawer` | `rgba(17, 24, 39, 0.82)` | Glassmorphism background color |
| `--em-drawer-width` | `380px` | Desktop drawer panel width |
| `--em-drift-duration` | `6s` | Duration of continuous floating drift keyframes |
| `--em-shadow-drawer` | `-15px 0 50px rgba(...)` | Elevation shadow for open drawer |

---

## ♿ Accessibility

- **Keyboard Focus**: Focus ring outlines (`:focus-visible`) on interactive elements.
- **Reduced Motion**: Disables heavy floating drift keyframes and slide transitions when `@media (prefers-reduced-motion: reduce)` is enabled by user system preferences.
- **Semantic HTML**: Uses semantic elements (`<aside>`, `<nav>`, `<header>`, `<main>`, `<label>`).

---

## 📱 Responsive Behavior

- **Desktop & Tablet (`> 768px`)**: Fixed `380px` width side drawer sliding in from the right edge with floating drift.
- **Mobile (`<= 768px`)**: Automatically expands to `100%` viewport width for mobile-friendly navigation drawer view.

---

## 🌐 Browser Compatibility

Compatible with all modern evergreen web browsers:
- Chrome / Edge (v88+)
- Firefox (v85+)
- Safari (v14+)
- Opera (v74+)

---

## 📜 License

Released under the **MIT License**. Created for EaseMotion CSS (GSSoC 2026).
