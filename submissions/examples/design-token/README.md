````markdown
# Animated Offcanvas Drawer with Dark Mode

A responsive animated offcanvas drawer built using pure HTML and CSS.

This implementation is designed around EaseMotion-style CSS variables
and design tokens, with accessibility and responsive behavior in mind.

---

## ✨ Features

- Pure CSS implementation
- Zero JavaScript dependencies
- Smooth drawer animation
- Dark mode support
- Responsive design
- Mobile, tablet and desktop support
- Backdrop overlay
- CSS-only open and close interaction
- `prefers-reduced-motion` support
- Accessible labels
- No external libraries required

---

## 📁 Project Structure

```text
submissions/
└── examples/
    ├── demo.html
    ├── style.css
    └── README.md
````

---

## 🚀 Running the Demo

No installation or build process is required.

Open the following file in a browser:

```text
demo.html
```

The component will work directly in the browser.

---

## 🎨 Dark Mode

Dark mode is implemented using the CSS:

```css
@media (prefers-color-scheme: dark)
```

The component automatically follows the user's operating-system
light/dark mode preference.

Example:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --em-color-background: #0f1115;
        --em-color-surface: #181b21;
        --em-color-text: #f5f5f5;
    }
}
```

---

## ✨ Animation

The drawer uses CSS transforms and transitions.

Initial state:

```css
.drawer {
    transform: translateX(100%);
}
```

When opened:

```css
#drawer-toggle:checked ~ .drawer {
    transform: translateX(0);
}
```

The transition is controlled by EaseMotion-style tokens:

```css
--em-motion-duration: 350ms;

--em-motion-easing:
    cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🚫 No JavaScript

The component does not use JavaScript.

A hidden checkbox is used as the state controller:

```html
<input
    type="checkbox"
    id="drawer-toggle"
>
```

The CSS `:checked` selector controls the drawer:

```css
#drawer-toggle:checked ~ .drawer {
    transform: translateX(0);
}
```

This keeps the component dependency-free.

---

## 📱 Responsive Design

The drawer supports different screen sizes.

### Mobile

The drawer uses approximately 88% of the viewport width.

### Tablet

The drawer uses a fixed maximum width while the page
content becomes a single-column layout.

### Desktop

The drawer uses a width of approximately 340px.

The drawer width is controlled using:

```css
--em-drawer-width: 340px;
```

---

## ♿ Accessibility

The component includes accessibility considerations such as:

* Semantic `<aside>` element
* Navigation landmark
* `aria-label` attributes
* Descriptive close and backdrop labels
* Reduced-motion support

---

## Reduced Motion

Users who have enabled reduced motion receive minimal animation.

```css
@media (prefers-reduced-motion: reduce) {
    * {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
    }
}
```

This helps reduce unnecessary motion for users who are sensitive
to animation.

---

## 🎯 Design Tokens

The component uses CSS custom properties for consistent styling.

Examples:

```css
--em-color-background
--em-color-surface
--em-color-text
--em-color-border
--em-color-primary
--em-drawer-width
--em-motion-duration
--em-motion-easing
```

This makes the component easier to customize and maintain.

---

## 🧪 Testing

The component should be tested on:

* Mobile
* Tablet
* Desktop
* Light mode
* Dark mode
* Reduced-motion mode

### Browser Testing

Recommended browsers:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari

---

## ✅ Acceptance Criteria

| Requirement                  | Status |
| ---------------------------- | ------ |
| Pure CSS implementation      | ✅      |
| EaseMotion CSS variables     | ✅      |
| Design tokens                | ✅      |
| Smooth state transitions     | ✅      |
| Responsive layout            | ✅      |
| Mobile support               | ✅      |
| Tablet support               | ✅      |
| Desktop support              | ✅      |
| Zero JS dependencies         | ✅      |
| Reduced motion support       | ✅      |
| Accessibility considerations | ✅      |
| Cross-browser support        | ✅      |

---

## 📦 Dependencies

No dependencies.

The component uses only:

* HTML
* CSS
* CSS custom properties
* CSS media queries

---

## 📝 Implementation Notes

The drawer is initially positioned outside the viewport using:

```css
transform: translateX(100%);
```

When the checkbox is checked, the drawer moves into view:

```css
transform: translateX(0);
```

A backdrop is displayed at the same time to provide visual
separation between the drawer and the page content.

The implementation avoids JavaScript entirely.

---

## 🔀 Pull Request

### Title

```text
feat: add animated offcanvas drawer with dark mode
```

### Summary

Implemented a responsive animated offcanvas drawer using pure CSS,
with dark mode, EaseMotion-style design tokens, smooth transitions,
responsive layouts and reduced-motion accessibility support.

### Acceptance Criteria

All requested acceptance criteria have been addressed.

---

## 👤 Author

EaseMotion Component Submission

```
```
