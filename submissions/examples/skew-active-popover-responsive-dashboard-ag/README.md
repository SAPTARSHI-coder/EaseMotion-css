# Pure CSS Animated Popover — Skew-Active Interaction

> Pure CSS skew-active animated Popover component styled for modern **Responsive Dashboard** user interfaces.

---

## 1. What does this do?
This component provides a pure HTML and CSS Popover that smoothly reveals content with a directional **Skew-Active transition** combining skew morphing, scaling, and organic cubic-bezier easing without any JavaScript dependencies.

---

## 2. How is it used?
Wrap any trigger button and popover container inside `.em-popover-wrapper` with a placement directional modifier (`.em-popover-wrapper--top`, `.em-popover-wrapper--bottom`, `.em-popover-wrapper--left`, or `.em-popover-wrapper--right`):

```html
<div class="em-popover-wrapper em-popover-wrapper--top">
  <button type="button" class="em-popover-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="user-menu">
    <span>Alex Rivera</span>
  </button>
  <div id="user-menu" class="em-popover" role="dialog">
    <div class="em-popover-header">
      <span class="em-popover-title">Account Settings</span>
    </div>
    <ul class="em-popover-menu">
      <li><a href="#profile" class="em-popover-item">Profile Overview <kbd>⌘P</kbd></a></li>
      <li><a href="#settings" class="em-popover-item">Team Settings <kbd>⌘S</kbd></a></li>
    </ul>
  </div>
</div>
```

---

## 3. Why is it useful?
It brings high-end interactive motion—commonly found in dashboard tools like Linear, Vercel, and Stripe—to pure HTML/CSS workflows. It removes JavaScript runtime overhead, provides instant keyboard accessibility, and integrates natively into the EaseMotion CSS ecosystem.

---

## Design Inspiration
Designed specifically for modern dashboard and admin application interfaces:
- **Linear & Vercel Dashboard**: Deep dark slate surfaces, crisp typography, subtle 1px borders, status dots, and keybinding indicators (`<kbd>`).
- **Minimal & Premium**: Subtle directional skew transitions without heavy gradients, excessive blur, or distracting animations.

---

## Features
- **Zero JavaScript**: Operates entirely through CSS pseudo-classes (`:hover`, `:focus-within`, `:popover-open`).
- **Skew-Active Motion**: Natural entry and exit motion with directional skewing (`skewX(-7deg)`), scale morphing (`scale(0.95)` → `scale(1)`), and smooth opacity fading.
- **Directional Placements**: Fully supported `.em-popover-wrapper--top`, `--bottom`, `--left`, and `--right` layout positioning with dynamic transform origins and arrows.
- **Configurable CSS Tokens**: Exposes fine-grained CSS custom properties for duration, easing, skew angle, scale, background, and shadows.
- **Accessibility Guard**: Includes screen-reader labels (`.em-sr-only`), visible focus rings (`:focus-visible`), forced-colors high-contrast support, and full `@media (prefers-reduced-motion: reduce)` compliance.

---

## Folder Structure
```
submissions/examples/skew-active-popover-responsive-dashboard-ag/
├── demo.html    # Standalone HTML showcase
├── style.css    # Pure CSS popover component & custom property tokens
└── README.md    # Documentation & usage guide
```

---

## Customization (CSS Custom Properties)

Custom values can be overridden globally on `:root` or locally per popover container:

| Variable | Default Value | Description |
|---|---|---|
| `--em-popover-duration` | `280ms` | Transition duration |
| `--em-popover-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Timing easing curve |
| `--em-popover-skew-angle` | `-7deg` | Initial skew angle on entrance |
| `--em-popover-scale` | `0.95` | Initial scale factor on entrance |
| `--em-popover-bg` | `#0f172a` | Popover surface background |
| `--em-popover-text` | `#f8fafc` | Popover text color |
| `--em-popover-border` | `rgba(255, 255, 255, 0.1)` | Surface border color |
| `--em-popover-radius` | `10px` | Surface border radius |
| `--em-popover-shadow` | `0 16px 36px -8px rgba(0,0,0,0.55)` | Elevation box shadow |

Example custom override:
```css
.em-popover-wrapper--custom {
  --em-popover-skew-angle: -12deg;
  --em-popover-duration: 350ms;
  --em-popover-bg: #1e1b4b;
}
```

---

## Accessibility Notes
- **Keyboard Navigation**: Fully triggerable via `Tab` and `Shift+Tab` focus. Visible focus rings are styled with high-contrast accent outlines (`:focus-visible`).
- **Screen Readers**: Semantic HTML elements with appropriate ARIA attributes (`aria-haspopup="dialog"`, `role="dialog"`, `role="tooltip"`).
- **Reduced Motion**: Under `@media (prefers-reduced-motion: reduce)`, directional skew and scale transforms are disabled, gracefully falling back to instant opacity transitions.
- **High Contrast**: Compatible with Windows High Contrast mode (`@media (forced-colors: active)`).

---

## EaseMotion CSS Integration
To use this component in your EaseMotion project:
1. Include `easemotion.min.css` in your HTML `<head>`.
2. Copy `style.css` or include its rules in your project stylesheet.
3. Apply the `.em-popover-wrapper` and `.em-popover` utility classes.
