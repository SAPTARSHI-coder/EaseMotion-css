# Hover Preview Card Delay Timeout Check - Edge Case Assertions

A comprehensive Vitest test suite and demo for **Hover Preview Card Delay Timeout Check** edge cases.

## Features

- ⏱ Early mouseleave cancellation before showDelay timeout
- ⚡ 0ms immediate execution threshold handling
- 🛡 Fallback to default 300ms delay on negative input values
- 🔄 Debounced rapid hover/leave toggling prevention
- 🧹 Complete timer cleanup on instance destruction

---

## Files

```
submissions/examples/hover-preview-delay-edge-case-86411/
├── demo.html
├── style.css
├── test.js
└── README.md
```

---

## Test Execution

Run the Vitest test suite locally:

```bash
npx vitest run submissions/examples/hover-preview-delay-edge-case-86411/test.js
```
