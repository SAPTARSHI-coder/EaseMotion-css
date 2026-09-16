# Vitest Unit Spec — Local Storage Dark Mode Preference

A comprehensive Vitest unit specification for **Local Storage Dark Mode Preference**.

## Features

- 💾 `localStorage.getItem('theme')` & `localStorage.setItem('theme')` preference management
- 🌓 OS `prefers-color-scheme` fallback when storage is uninitialized
- 🛡 Safe exception handling for restricted/disabled browser storage
- 🧹 Event listener detachment on destroy()

---

## Files

```
submissions/examples/vitest-local-storage-dark-mode-86367/
├── demo.html
├── style.css
├── test.js
└── README.md
```

---

## Test Execution

Run the Vitest test suite locally:

```bash
npx vitest run submissions/examples/vitest-local-storage-dark-mode-86367/test.js
```
