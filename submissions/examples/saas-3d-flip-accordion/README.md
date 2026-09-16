# CSS 3D-Flip Accordion (SaaS Layout)

A modern, highly-polished accordion component designed for SaaS FAQ sections. It utilizes 3D CSS transforms to create a "card flip" entrance for the content, giving the UI a premium, interactive feel without requiring JavaScript.

## 🚀 Features

- **Zero JavaScript:** Utilizes the CSS hidden-radio hack (`input type="radio"`) to act as an exclusive accordion (opening one panel automatically closes the others).
- **3D Flip Animation:** Applies `perspective: 1000px` to the wrapper and `transform: rotateX(-90deg)` to the inner content. As the grid expands, the content swings down on a custom `cubic-bezier` spring easing curve.
- **Modern Grid Height Transition:** Uses the `grid-template-rows: 0fr` to `1fr` method for flawlessly smooth height animation.
- **SaaS Aesthetics:** Features soft drop shadows, subtle border color transitions on hover, and an elegant circular indicator icon that morphs from a `+` to a `-`.
- **Accessible & Responsive:** fully keyboard navigable (`tabindex="0"`, `:focus-visible`). Adjusts font sizes and padding gracefully on mobile viewports. Implements `@media (prefers-reduced-motion: reduce)` to disable the 3D transforms for users who prefer static reveals.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. The markup relies on matching the `id` of the radio inputs with the `for` attribute of the labels.

To convert this from a single-open accordion to a multi-open accordion, change all `<input type="radio">` tags to `<input type="checkbox">` and remove the shared `name` attribute.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-saas-primary: #3b82f6;       /* Main brand color */
    --em-flip-speed: 0.5s;            /* Speed of the flip animation */
    --em-easing: cubic-bezier(...);   /* Spring physics curve */
}
