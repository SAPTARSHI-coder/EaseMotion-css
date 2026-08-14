# Demo Back Button

## 1. What does this do?

Adds a responsive and accessible back button that allows users to navigate to the previous page. If no previous page exists, it redirects users to the homepage, providing a smoother navigation experience.

---

## 2. How is it used?

Include the button in your HTML and attach the back navigation function.

```html
<button class="back-button" onclick="goBack()">
    ← Back
</button>
```

Example JavaScript:

```javascript
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "/";
    }
}
```

---

## 3. Why is it useful?

This component improves usability by providing users with a clear and intuitive way to return to the previous page without relying on browser controls. It enhances accessibility, works across different screen sizes, and aligns with EaseMotion CSS's philosophy of providing simple, reusable, and user-friendly UI components.

---

## Features

- Responsive design for desktop and mobile devices.
- Accessible focus states for keyboard navigation.
- Smooth hover interaction.
- Automatically falls back to the homepage when browser history is unavailable.
- Lightweight and self-contained implementation.
- Requires no external libraries or frameworks.

---

## Demo Structure

```
demo-back-button-rj/
├── demo.html
├── style.css
└── README.md
```

---

## Preview

```html
<button class="back-button">
    ← Back
</button>
```

The button appears at the top-left corner of the page and provides quick backward navigation while maintaining a clean and familiar interface.

---

## Philosophy

This component follows EaseMotion CSS principles by:

- Keeping the implementation simple and self-contained.
- Improving user experience with minimal code.
- Encouraging accessibility and responsive design.
- Providing a reusable navigation pattern that can be standardized into framework components.