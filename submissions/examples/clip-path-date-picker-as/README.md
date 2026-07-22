# Clip Path Date Picker

A modern **Clip Path Date Picker** component built for **EaseMotion CSS**. The component combines the native HTML date input with a smooth CSS `clip-path` reveal animation, providing an elegant and reusable UI element without requiring JavaScript.

---

## Features

- ✨ Pure CSS implementation
- 🎬 Smooth `clip-path` reveal animation
- 📅 Native HTML date picker
- ♿ Accessible keyboard focus states
- 📱 Responsive layout
- 🎨 Uses EaseMotion CSS variables and design tokens
- 🚫 No JavaScript required

---

## Files

```
clip-path-date-picker-as/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include EaseMotion CSS first, then the component stylesheet.

```html
<link rel="stylesheet" href="../../../easemotion.css">
<link rel="stylesheet" href="style.css">
```

Example:

```html
<label class="ease-date-picker">
  <span class="ease-date-icon">📅</span>
  <input type="date">
</label>
```

---

## Accessibility

- Uses the native HTML `<input type="date">`
- Keyboard accessible
- Visible `:focus-within` outline
- Responsive across desktop, tablet, and mobile devices

---

## Responsive

The component automatically adapts to smaller screen sizes and expands to the available width on mobile devices.

---

## Why it fits EaseMotion CSS

The component follows EaseMotion CSS's animation-first philosophy by combining a familiar UI pattern with subtle motion using CSS `clip-path`. It is lightweight, reusable, human-readable, and works without JavaScript.

---

## Author

Created as a GSSoC'26 contribution for **EaseMotion CSS**.