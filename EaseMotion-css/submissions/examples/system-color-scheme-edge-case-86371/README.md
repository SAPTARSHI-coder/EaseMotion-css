# System Color Scheme Change Listener - Edge Case Assertions

A comprehensive Vitest test suite and demo for **System Color Scheme Change Listener** edge cases.

## Features

- 🌓 OS `prefers-color-scheme: dark` initial detection and listener binding
- 🔄 Dynamic `data-theme` attribute updates on system theme switch
- 🛠 Legacy `addListener` & modern `addEventListener('change')` API support
- 📌 Manual theme override precedence over OS preference
- 🛡 Safe fallback when `window.matchMedia` is undefined

---

## Files

```
submissions/examples/system-color-scheme-edge-case-86371/
├── demo.html
├── style.css
├── test.js
└── README.md
```

---

## Test Execution

Run the Vitest test suite locally:

```bash
npx vitest run submissions/examples/system-color-scheme-edge-case-86371/test.js
```
