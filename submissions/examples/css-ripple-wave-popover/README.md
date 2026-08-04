# CSS Ripple-Wave Popover for SaaS Showcase Layouts 🌊✨

A modern, lightweight, pure **CSS/HTML Ripple-Wave Popover** component designed for SaaS showcase layouts, notification panels, user quick menus, and dashboard interfaces. Part of the **EaseMotion CSS** animation library.

---

## 🌟 Overview

The **Ripple-Wave Popover** displays a floating glassmorphic popover card featuring smooth radial wave entrance animations, floating drift keyframes, and pointer arrows. It operates with zero JavaScript framework dependencies using CSS state controllers.

---

## ✨ Features

- **100% Pure HTML5 & CSS3**: No JavaScript required.
- **Ripple-Wave Animation**: Radial gradient wave expansion on trigger hover/focus.
- **Fade + Scale Entrance**: Hardware-accelerated smooth scale and opacity transition (`scale(0.92)` -> `scale(1)`).
- **Glassmorphism Styling**: Translucent surface panel with `backdrop-filter: blur(24px)` and soft glowing borders.
- **Floating Keyframes**: Gentle continuous floating drift motion while the popover remains open.
- **Multiple Positioning Options**: Supports center alignment, `align-left`, and `align-right` positioning with pointer arrows.
- **Templates Included**: Pre-built Notification list and User Profile quick access templates.
- **Accessible & Responsive**: Full keyboard focus states, `@media (prefers-reduced-motion: reduce)` support, and mobile adaptation.

---

## 📂 Folder Structure

```text
submissions/examples/css-ripple-wave-popover/
├── demo.html    # HTML5 showcase page using standard EaseMotion classes
├── style.css    # Pure CSS stylesheet with ripple-wave keyframes & design system tokens
└── README.md    # Complete documentation
```

---

## 📖 Usage

1. **Include the Stylesheet**:
   Link `style.css` in the `<head>` of your HTML file:
   ```html
   <link rel="stylesheet" href="style.css">
   ```

2. **Add Popover Markup**:
   Use standard EaseMotion popover wrapper and card markup:
   ```html
   <div class="em-popover-wrapper">
     <input type="checkbox" id="my-popover-toggle" class="em-popover-toggle">
     
     <label for="my-popover-toggle" class="em-popover-trigger">
       Toggle Popover
     </label>

     <div class="em-popover-card align-right">
       <div class="em-popover-arrow"></div>
       <div class="em-popover-header">
         <h3 class="em-popover-title">Popover Title</h3>
       </div>
       <p>Popover content goes here...</p>
       <a href="#" class="em-popover-cta">Action Button</a>
     </div>
   </div>
   ```

---

## 🎨 CSS Custom Properties (Variables)

Customize colors, timing, and dimensions by overriding the following CSS variables in `:root`:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--em-primary` | `#6366f1` | Primary brand color (Indigo) |
| `--em-secondary` | `#06b6d4` | Secondary accent color (Cyan) |
| `--em-accent` | `#a855f7` | Tertiary highlight color (Violet) |
| `--em-bg-popover` | `rgba(17, 24, 39, 0.88)` | Translucent glassmorphism background |
| `--em-popover-width` | `340px` | Desktop popover card width |
| `--em-shadow-popover` | `0 20px 45px -10px ...` | Elevation shadow with glow accent |

---

## 🛠️ Customization

- **Alignment**: Add `.align-left` or `.align-right` classes to `.em-popover-card` to align the popover card relative to its trigger button.
- **Trigger Aura**: Customize `--em-primary-glow` to alter the expanding radial ripple wave aura on trigger hover.

---

## ♿ Accessibility

- **Keyboard Focus**: Interactive triggers support `:focus-visible` outline rings for keyboard navigation.
- **Reduced Motion**: Disables heavy floating drift keyframes and scale transitions when `@media (prefers-reduced-motion: reduce)` is enabled.
- **Semantic Structure**: Uses standard semantic HTML5 elements (`<header>`, `<main>`, `<dialog>`, `<label>`, `<button>`).

---

## 📱 Responsive Behavior

- **Desktop & Tablet (`> 768px`)**: Displays floating `340px` popover card with directional pointer arrow.
- **Mobile (`<= 768px`)**: Automatically resizes popover cards to fit small viewports seamlessly (`290px`).

---

## 🌐 Browser Compatibility

Compatible with all modern web browsers:
- Chrome / Edge (v88+)
- Firefox (v85+)
- Safari (v14+)
- Opera (v74+)

---

## 📜 License

Released under the **MIT License**. Created for EaseMotion CSS (GSSoC 2026).
