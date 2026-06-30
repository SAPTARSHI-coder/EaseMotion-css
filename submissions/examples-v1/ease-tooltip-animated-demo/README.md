# Tooltip Component (`ease-tooltip-animated-demo`)

A pure CSS tooltip component that leverages `::before` and `::after` pseudo-elements along with the `aria-label` attribute to display accessible, animated tooltips.

## 🚀 Features & EaseMotion Showcase

- **Zero HTML Clutter**: Because it uses pseudo-elements, you don't need to wrap your button text or inject extra spans. Just add the class and the `aria-label`.
- **Directional Animations**: Includes `.ease-tooltip--top`, `--bottom`, `--left`, and `--right` modifiers. The transform animations seamlessly slide out and fade in from the respective directions.
- **CSS Arrow**: The directional pointer is achieved purely through the `border-color` trick on `::before`.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

### Basic Structure
```html
<button class="ease-tooltip ease-tooltip--top" aria-label="I am the tooltip text!">
  Hover Me
</button>
