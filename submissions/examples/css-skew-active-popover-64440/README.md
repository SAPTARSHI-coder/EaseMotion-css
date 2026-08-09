# CSS Skew-Active Popover for Minimalist Tech Layouts

A lightweight, pure HTML5 and CSS3 showcase component implementing dynamic skew-active popover interactions designed for high-tech developer portals, cloud analytics, and minimalist dashboards.

---

## 1. Overview

The **CSS Skew-Active Popover** provides an interactive, glassmorphism overlay dialog powered by pure CSS transitions and keyframe transform animations. It introduces a subtle 3D skew entrance trajectory (`skewX(-6deg)`) that settles into a pristine axis-aligned focus state upon activation. Built without any JavaScript dependencies, it fits seamlessly into the **EaseMotion CSS** animation philosophy.

---

## 2. Features

- **Pure HTML5 & CSS3**: Zero JavaScript or external framework dependencies.
- **Dynamic Skew-Active Motion**: Spring-eased entrance trajectory featuring subtle skew transformation angles.
- **Glassmorphism Styling**: Backdrop blur glass effect, gradient border highlights, and dark-mode color palette.
- **Pure CSS Interactivity**: Seamless state toggling using accessibility-friendly `:focus-within` and `:checked` input states.
- **Accessibility Ready**: Comprehensive `prefers-reduced-motion` fallbacks, keyboard navigation focus visible states, and semantic ARIA labeling.
- **Fully Responsive**: Fluid adaptation across desktop, tablet, and mobile viewports.

---

## 3. Folder Structure

```text
submissions/examples/css-skew-active-popover-64440/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Complete CSS styles with custom design tokens
└── README.md    # Documentation and usage guide
```

---

## 4. Usage

To integrate the **CSS Skew-Active Popover** into your web application:

1. Include `style.css` in your HTML file's `<head>`.
2. Wrap your trigger element and target popover inside a container block (`.popover-wrapper`).
3. Link the checkbox input ID with the label `for` attribute for pure CSS click/tap toggling.

---

## 5. HTML Example

```html
<article class="popover-wrapper">
  <!-- Hidden Checkbox State Controller -->
  <input type="checkbox" id="popover-toggle-1" class="popover-checkbox" aria-hidden="true">
  
  <div class="card-base">
    <label for="popover-toggle-1" class="btn-popover-trigger" tabindex="0" role="button" aria-controls="popover-card-1">
      <span>Manage API Keys</span>
    </label>
  </div>

  <!-- Skew-Active Popover Overlay -->
  <div id="popover-card-1" class="skew-active-popover" role="dialog" aria-labelledby="pop1-title">
    <div class="popover-sheen" aria-hidden="true"></div>
    <div class="popover-header">
      <h3 id="pop1-title" class="popover-title">API Authentication Token</h3>
      <label for="popover-toggle-1" class="popover-close-btn" tabindex="0" role="button">✕</label>
    </div>
    <div class="popover-body">
      <p>Configure API token parameters and rotation policies.</p>
    </div>
    <div class="popover-footer">
      <label for="popover-toggle-1" class="btn-secondary" tabindex="0" role="button">Cancel</label>
      <button type="button" class="btn-primary">Rotate Token</button>
    </div>
  </div>
</article>
```

---

## 6. CSS Custom Properties

Customization is straightforward using standard `:root` design tokens:

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#07090e` | Main page background color |
| `--bg-popover` | `rgba(21, 29, 46, 0.92)` | Popover background color with backdrop opacity |
| `--accent-cyan` | `#00f0ff` | Primary glowing cyan accent color |
| `--accent-emerald` | `#10b981` | Secondary emerald status color |
| `--accent-purple` | `#a855f7` | Tertiary purple status color |
| `--skew-angle-inactive` | `-6deg` | Starting skew angle prior to activation |
| `--skew-angle-active` | `0deg` | Axis-aligned active skew angle |
| `--skew-hover-shift` | `-2deg` | Hover skew interaction angle |
| `--transition-spring` | `0.4s cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic bounce curve for popover reveal |

---

## 7. Customization

To modify the skew intensity or theme colors, override the CSS custom properties in your project stylesheet:

```css
.popover-wrapper {
  --accent-cyan: #ff0055;
  --skew-angle-inactive: -10deg;
  --transition-spring: 0.3s ease-out;
}
```

---

## 8. Accessibility

- **Keyboard Focus**: Interactive elements include visible focus indicators via `:focus-visible`.
- **Screen Reader Support**: Uses standard ARIA attributes (`role="dialog"`, `aria-labelledby`, `aria-controls`).
- **Reduced Motion**: Disables skew transformation and bounce keyframes when `@media (prefers-reduced-motion: reduce)` is preferred.

---

## 9. Responsive Behaviour

- **Desktop (>= 769px)**: Popover floats dynamically below the trigger card with absolute positioning.
- **Mobile (<= 768px)**: Popover adjusts fluidly to match mobile width and stacking layout.

---

## 10. Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
