# Appearance None Utility

This submission implements a form component customization sandbox demonstrating the visual behavior of the `ease-appearance-none` resets class.

---

## Technical Overview

Browser native styling defaults limit visual flexibility on key form components (like selectors, inputs, and toggles). The utility class resets these styles:

```css
.ease-appearance-none {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
```

This clears default arrows, border-shadows, and background layouts, allowing developers to build custom overlays and arrows.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the **Default Browser Input** — notice the native layout, system colors, and system arrow indicators.
3. Observe the **Custom Styling** input — verify that all native indicators have been cleared, presenting a clean border with a custom chevron indicator.
