# CSS Skew-Active Tabs (Creative Portfolio)

A bold, highly stylistic tabbed interface featuring sharp skewed headers and vibrant active states. Designed specifically to complement the striking aesthetics of creative developer or designer portfolios, built 100% with pure CSS.

## 🚀 Features

- **Zero-JS State Management:** Utilizes hidden `<input type="radio">` elements mapped to clickable `<label>` tags to route active panel states without any JavaScript payload.
- **Bold Skew Geometry:** Applies `transform: skewX()` to create sharp, aggressive angles on the tabs, while applying an inverted skew to the text to maintain perfect typography.
- **Creative Portfolio Styling:** Features large, uppercase typography, striking accent colors (hot pink default), and a built-in responsive portfolio grid layout within the panels.
- **Responsive & Accessible:** Fluidly adapts to mobile viewports by removing the skew and stacking tabs vertically for massive touch targets. Fully keyboard accessible (`tabindex="0"`) with a clear focus ring, and honors `@media (prefers-reduced-motion: reduce)`.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the corresponding styles from `style.css`. The component relies on matching the `for` attribute in the labels to the `id` of the radio buttons.

### CSS Custom Properties
Customize the visual theme, accent colors, and skew angles in the `:root` selector:

```css
:root {
    --em-tab-active: #ff3366; /* Vibrant accent color */
    --em-skew-angle: -15deg;  /* Intensity of the tab slant */
    --em-transition-speed: 0.4s; 
}
