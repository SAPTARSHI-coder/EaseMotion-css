# Smooth Scroll Anchor Position Calc - Edge Case Assertions

A comprehensive Vitest test suite and demo for **Smooth Scroll Anchor Position Calc** edge cases.

## Features

- 🎯 Cumulative offsetTop calculation across nested parent containers
- 📐 Sticky/fixed header offset height subtraction
- 🛡 Page bottom max scroll clamping (`scrollHeight - clientHeight`)
- 🚫 Safe handling of missing, null, or invalid target selectors

---

## Files

```
submissions/examples/smooth-scroll-anchor-edge-case-86373/
├── demo.html
├── style.css
├── test.js
└── README.md
```

---

## Test Execution

Run the Vitest test suite locally:

```bash
npx vitest run submissions/examples/smooth-scroll-anchor-edge-case-86373/test.js
```
