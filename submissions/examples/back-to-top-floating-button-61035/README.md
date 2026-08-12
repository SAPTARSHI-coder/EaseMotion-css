# Back-to-Top Floating Button (ease-back-to-top)

A premium, keyboard-accessible circular Back-to-Top button that floats at the bottom-right of the viewport. Designed to fit seamlessly into any modern webpage layout, it fades and scales in using a custom physics spring transition when scrolled past 300px.

---

## Features

- **Spring-Like Animations**: Custom `cubic-bezier` timing curve for bouncy, natural movement.
- **Tactile Hover/Active Feedback**: Scales up slightly on hover and compresses down on click for interactive micro-feedback.
- **A11y (Accessibility) Built-in**: Focus rings for keyboard-only navigation, correct `aria-label`, and interactive button tags.
- **System Preference Detection**: Full support for `prefers-reduced-motion` to immediately toggle states and fallback to default scrolling when system animations are disabled.
- **CSS Custom Properties**: Controlled fully via CSS variables for sizing, background/border colors, glow intensities, and timing durations.
- **No External Frameworks**: 100% vanilla CSS/HTML and minimal helper JS for scroll position detection.

---

## Folder Structure

```text
submissions/examples/back-to-top-floating-button-61035/
├── demo.html    # Long-scrolling layout with multiple visual sections
├── style.css    # Typography, page layouts, and floating button styles
└── README.md    # Documentation (this file)
```

---

## Installation

Simply copy the stylesheet (`style.css`) and structure into your project workspace.

```bash
cp submissions/examples/back-to-top-floating-button-61035/style.css path/to/your/styles/
```

---

## Usage

### 1. HTML Structure
Add the `<button>` element inside the `<body>` of your document, preferably near the footer:

```html
<!-- Circular Back-to-Top Floating Button -->
<button 
  id="backToTopBtn" 
  class="ease-back-to-top" 
  aria-label="Back to top" 
  title="Back to top"
  tabindex="0"
>
  <svg class="ease-back-to-top-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 5V19M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>
```

### 2. CSS Custom Properties
Customize the button variables inside your stylesheet or `:root` declaration:

| Custom Property | Description | Default Value |
| :--- | :--- | :--- |
| `--btt-size` | Sizing dimensions (width/height) of the button circle | `56px` |
| `--btt-bg` | Default background color (glassmorphic tint) | `rgba(20, 24, 40, 0.75)` |
| `--btt-bg-hover` | Background color when hovered | `rgba(30, 36, 60, 0.9)` |
| `--btt-color` | SVG glyph color | `#ffffff` |
| `--btt-color-hover` | SVG glyph color on hover | `#00f2fe` |
| `--btt-border` | Default border outline | `rgba(255, 255, 255, 0.15)` |
| `--btt-border-hover` | Border outline on hover | `#00f2fe` |
| `--btt-shadow` | Shadow styling under default button | `0 8px 32px rgba(0, 0, 0, 0.4)` |
| `--btt-shadow-hover` | Atmospheric neon shadow glow on hover | `0 0 20px rgba(0, 242, 254, 0.4)` |
| `--btt-duration` | Velocity timing of scaling transition | `0.4s` |
| `--btt-ease` | Easing curve curve representing bounce-out spring | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

### 3. JavaScript Helper
Add this minimal JavaScript helper inside your codebase to monitor scrolling and perform smooth scrolling:

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn');
  const scrollThreshold = 300;

  const toggleVisibility = () => {
    if (window.scrollY >= scrollThreshold) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();
});
```

---

## Accessibility

- **Semantic Tagging**: Uses a native `<button>` element rather than non-interactive container blocks, ensuring native navigation features out of the box.
- **Screen Reader Support**: Provides an `aria-label="Back to top"` description, explaining the element's purpose to screen readers.
- **Focus Rings**: Employs high-contrast focus rings (`focus-visible`) for clear visual representation during keyboard navigation (using Space or Enter).
- **Reduced Motion Friendly**: Integrates media queries mapping to `prefers-reduced-motion` to immediately toggle visibility without translation slide/spring scaling effects, and respects global browser smooth scrolling preferences.

---

## Browser Support

- Chrome / Chromium Edge (v80+)
- Firefox (v75+)
- Safari / iOS Safari (v13.4+)
- Opera (v67+)
