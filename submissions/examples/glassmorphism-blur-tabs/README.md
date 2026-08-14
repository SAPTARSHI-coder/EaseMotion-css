# CSS Glassmorphism Blur-Entrance Tabs

A stunning, modern tabbed interface styled with the highly requested "Glassmorphism" UI trend. It features a translucent, frosted glass aesthetic combined with a smooth blur-entrance transition for content panels. Built 100% with pure CSS and HTML.

## 🚀 Features

- **Pure CSS State Management:** Utilizes hidden `<input type="radio">` tags and CSS sibling combinators to handle active tab routing seamlessly without JavaScript.
- **Glassmorphism Aesthetic:** Leverages `backdrop-filter: blur()`, RGBA background colors, and semi-transparent borders to create a beautiful frosted glass effect over vibrant backgrounds.
- **Blur-Entrance Animation:** When a tab is selected, the panel enters with a custom `@keyframes` animation blending `filter: blur()`, `opacity`, and scaling for a premium app-like feel.
- **Accessible & Responsive:** Adapts to mobile screens by stacking tabs vertically. Fully keyboard navigable using `tabindex="0"` with clear `:focus-visible` styling, and respects `@media (prefers-reduced-motion: reduce)` by bypassing the animation.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and the styles from `style.css`. For the glass effect to be visible, ensure the component is placed over a colorful or patterned background.

### CSS Custom Properties
Tweak the frosted glass intensity and animation timings in the `:root` pseudo-class:

```css
:root {
    --em-glass-bg: rgba(255, 255, 255, 0.15); /* Base glass opacity */
    --em-glass-blur: 16px;                    /* Background blur amount */
    --em-entrance-blur: 20px;                 /* Panel animation blur intensity */
    --em-transition-timing: 0.5s;             /* Animation speed */
}
