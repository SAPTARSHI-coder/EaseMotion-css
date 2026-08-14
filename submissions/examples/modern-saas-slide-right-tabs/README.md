# CSS Slide-Right Tabs (Modern SaaS)

A highly polished, purely CSS-driven tabbed interface designed for modern SaaS dashboards. Features a smooth, professional "slide-right" entrance animation for content panels.

## 🚀 Features

- **Pure CSS Architecture:** Utilizes the invisible `<input type="radio">` pattern combined with CSS sibling selectors (`~`) to handle all tab routing. Zero JavaScript required.
- **Slide-Right Animation:** Employs a custom `@keyframes` sequence that smoothly translates content from a leftward offset (`-30px`) to its natural position while fading in, giving a slick, native-app feel.
- **Modern SaaS UI:** Styled with system fonts, subtle borders, soft box-shadows, and a clean primary color layout typical of enterprise dashboards.
- **Responsive & Accessible:** Converts standard horizontal tabs into touch-friendly vertical blocks on mobile devices. Supports `prefers-reduced-motion` and includes robust keyboard focus states (`tabindex="0"` and `:focus-visible`).

## 🛠️ Usage

Copy the HTML from `demo.html` and the styles from `style.css`.

### CSS Custom Properties
Adjust the animation behavior and color scheme in the `:root` pseudo-class:

```css
:root {
    --em-primary: #2563eb;         /* Main brand color */
    --em-slide-offset: -30px;      /* Starting position for the slide animation */
    --em-transition-timing: 0.35s; /* Animation duration */
}
