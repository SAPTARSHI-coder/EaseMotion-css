# CSS Slide-Right Tabs (Accessible Web Layouts)

A highly legible, WCAG-conscious tabbed interface engineered specifically for accessible web applications. It utilizes high-contrast color pairings, thick borders, pronounced focus states, and a smooth, non-disruptive slide-right animation.

## 🚀 Features

- **Zero JavaScript:** Built entirely using HTML state management via hidden radio inputs.
- **Accessibility First Aesthetic:** 
  - Uses WCAG AAA compliant contrast ratios (e.g., `#111111` text on `#ffffff` backgrounds).
  - Base font size increased (`112.5%`) to establish a highly readable baseline.
  - Active tabs use thick `4px` borders to prevent reliance on color alone for state indication.
  - Interactive buttons feature explicit underlines.
- **Ultra-Clear Focus States:** Employs a high-visibility orange (`#ff6b00`) `4px` outline with a `4px` offset on `:focus-visible` to ensure keyboard navigators never lose track of their position.
- **Responsive & Motion Safe:** Automatically converts to a stacked block layout on mobile viewports. Natively disables the slide-right animation if `@media (prefers-reduced-motion: reduce)` is detected.

## 🛠️ Usage

Copy the HTML from `demo.html` and link the styles from `style.css`. 

### CSS Custom Properties
Adjust the primary colors and animation timing via the `:root` pseudo-class while ensuring contrast remains high:

```css
:root {
    --em-acc-text-main: #111111;   /* High contrast black */
    --em-acc-primary: #0056b3;     /* Accessible blue for actions */
    --em-acc-focus: #ff6b00;       /* High-visibility focus ring color */
    --em-slide-offset: -40px;      /* Distance of the slide reveal */
}
