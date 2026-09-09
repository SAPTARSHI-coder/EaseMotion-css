# Vitest Unit Spec — FAQ Accordion Multi Open State Flag

A comprehensive Vitest unit specification for **FAQ Accordion Multi Open State Flag**.

## Features

- 📂 Multi-open flag state behavior testing (`multiOpen: true` vs `multiOpen: false`)
- 🔒 Auto-collapse of non-active accordion items in single-open mode
- ♿ ARIA accessibility attribute synchronization (`aria-expanded`, `aria-hidden`)
- 🧹 Complete event listener detachment on destroy()

---

## Files

```
submissions/examples/vitest-faq-accordion-multi-open-86400/
├── demo.html
├── style.css
├── test.js
└── README.md
```

---

## Test Execution

Run the Vitest test suite locally:

```bash
npx vitest run submissions/examples/vitest-faq-accordion-multi-open-86400/test.js
```
