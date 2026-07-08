# Light Mode Visibility Demo
## What does this do?
This demo improves the visibility of the loading indicator and active tab in Light Mode by using high-contrast colors while maintaining a consistent appearance in Dark Mode.

---

## How is it used?
Open `demo.html` directly in any modern web browser. Click the **Switch Theme** button to toggle between Light and Dark modes and observe the improved visibility of the active tab and loading indicator.

Example HTML:

```html
<div class="tabs">
    <button class="tab active">Active Tab</button>
    <button class="tab">Profile</button>
    <button class="tab">Settings</button>
</div>
<button class="loading-btn" disabled>
    <span class="spinner"></span>
    Loading...
</button>
```

---

## Why is it useful?
This demo demonstrates how proper color contrast and theme-aware styling improve accessibility and user experience. It ensures that important interactive UI elements remain clearly visible in both Light and Dark themes while following EaseMotion CSS's goal of creating clean, reusable, and responsive UI components.

---

## Files Included
- `demo.html` – Demonstrates the Light/Dark mode visibility improvements.
- `style.css` – Contains all styles for the tabs, loading button, spinner, and theme switching.
- `README.md` – Documentation explaining the feature and its usage.