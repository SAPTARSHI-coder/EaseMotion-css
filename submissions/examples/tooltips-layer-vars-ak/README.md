Tooltips Layer Vars AK

What does this do?

Demonstrates CSS custom properties for managing tooltip z-index layers, ensuring tooltips render above other UI elements.

---

How is it used?

.tooltip {
  z-index: var(--layer-tooltip, 100);
}

Set `--layer-tooltip` at a higher scope to adjust tooltip stacking context.

---

Why is it useful?

Provides a consistent layering system for tooltips across the application, preventing z-index conflicts with modals, dropdowns, and sticky headers.

Features

- Custom property based z-index layering
- Sensible default fallback values
- Easy global override via :root
- Prevents z-index stacking conflicts
- Works with any tooltip implementation
- Clear documentation of layering strategy
