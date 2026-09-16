# CSS Skew-Active Tabs (Interactive Interface)

A high-density, highly interactive tabbed navigation component featuring a modern skewed (slanted) design. Built 100% with CSS and HTML, utilizing the robust invisible radio-button hack for state management without requiring any JavaScript.

## 🚀 Features

- **Zero-JS State Management:** Uses hidden `<input type="radio">` tags mapped to clickable `<label>` elements via the `for` attribute to toggle the active panels.
- **Dynamic Skew Geometry:** Implements `transform: skewX()` on the tabs to create a sharp, tech-forward aesthetic. The inner text receives an inverted skew to ensure it remains perfectly readable.
- **Interactive UI Styling:** Features subtle active-state glows and a smooth horizontal slide-and-fade animation for the content panels, tailored for interactive web apps.
- **Responsive & Accessible:** On viewports under `650px`, the skew is removed, and tabs stack vertically for optimal touch targets. Full keyboard support is included via `tabindex="0"` and `:focus-visible`, and animations are disabled for users preferring reduced motion.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the corresponding styles from `style.css`. 

### CSS Custom Properties
Customize the visual theme, timing, and skew intensity in the `:root` selector:

```css
:root {
    --em-tab-active: #8b5cf6; /* Accent color for active tab */
    --em-skew-angle: -20deg;  /* Intensity of the tab slant */
    --em-transition-speed: 0.35s; 
}
