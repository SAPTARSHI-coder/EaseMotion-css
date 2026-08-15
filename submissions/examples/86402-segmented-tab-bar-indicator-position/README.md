# Segmented Tab Bar Indicator Position

A simple example demonstrating a **Segmented Tab Bar** with a smooth animated indicator and an accompanying **Vitest unit test** for validating indicator position calculations.

## Features

- Animated segmented tab bar
- Smooth sliding indicator
- Interactive tab selection
- Responsive layout
- Accessibility support with `prefers-reduced-motion`
- Vitest unit tests for indicator position logic
- Pure HTML, CSS, and JavaScript

---

## Files

```
submissions/examples/86402-segmented-tab-bar-indicator-position/
├── demo.html
├── style.css
├── indicator.test.js
└── README.md
```

---

## Test Coverage

The included Vitest specification covers:

### Happy Path

- First tab indicator position
- Middle tab indicator position
- Last tab indicator position
- Different tab widths

### Edge Cases

- Large tab widths
- Single-pixel width
- Zero offset for the first tab

### Invalid Inputs

- Negative tab index
- Decimal tab index
- Zero tab width
- Negative tab width
- Non-numeric tab width

---

## Running the Demo

1. Open `demo.html` in a modern browser.
2. Click different tabs to observe the animated indicator.
3. The selected tab is highlighted and the preview updates.

---

## Running the Tests

Install dependencies:

```bash
npm install
```

Run Vitest:

```bash
npx vitest
```

Or run in watch mode:

```bash
npx vitest --watch
```

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Vitest

---

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## Notes

This example is a self-contained demonstration located entirely within:

`submissions/examples/86402-segmented-tab-bar-indicator-position/`

It showcases both the visual component and a corresponding Vitest unit specification without modifying any core project files.