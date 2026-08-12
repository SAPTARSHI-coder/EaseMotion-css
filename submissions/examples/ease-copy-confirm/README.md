# Ease Copy Confirm

A lightweight, modern copy-to-clipboard confirmation button component built with pure CSS and minimal JavaScript. Features a smooth state transition and keyframe bounce animation.

## 🚀 Features

- **Smooth Transition:** Text and icons seamlessly slide and fade between "Copy" and "Copied!" states.
- **Bounce Animation:** Uses a performant scale-based `@keyframes` animation for immediate click feedback, providing an engaging user experience.
- **Minimal JavaScript:** JS is only used to toggle the `.success` class and set an automatic reset timeout. All styling and animations are handled strictly by CSS.
- **Accessibility:** Uses semantic HTML (`<button>`) and `focus-visible` styling for keyboard navigation, plus SVG icons for crisp visuals.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. 

```html
<button class="copy-confirm" aria-label="Copy to clipboard">
    <span class="copy-state">Copy</span>
    <span class="success-state">Copied!</span>
</button>
```

Add the minimal script included in `demo.html` to handle adding and removing the `.success` class on click.

### State Animation
The confirmation animation is triggered simply by adding the `.success` class to the `.copy-confirm` button:

```css
.copy-confirm.success {
    animation: copySuccess .35s ease;
}
```

## 📁 Files Included
- `demo.html`: Functional demonstration showing the component layout and JS logic.
- `style.css`: Contains all visual styles, hover states, transitions, and the `copySuccess` keyframes.
- `README.md`: Component documentation.
