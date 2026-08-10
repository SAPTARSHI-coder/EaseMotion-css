# Ease Search Chip

## What does this do?

A removable search/filter chip that displays a label with an × button for removing the selected filter.

---

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="search-chip">
    <span class="chip-label">JavaScript</span>

    <button class="remove-btn" aria-label="Remove JavaScript filter">
        ×
    </button>
</div>
```

### Features

- Rounded chip design
- Label support
- Remove button
- Hover animation
- Smooth removal animation
- Responsive layout

---

## Why is it useful?

Search and filter chips are commonly used in search interfaces, dashboards, product filters, and result pages. This component provides a lightweight and reusable way to display and remove active filters while following the animation-first philosophy of EaseMotion CSS.