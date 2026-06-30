# Fix: Overlapping Avatar Group Initials Background & Dark Mode Borders

**Fixes:** [#26276](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26276)

---

## 🐛 Bug Description

In `components/avatar.css`, the `.ease-avatar-group-item` class is missing a `background-color` definition. When developers create text-based or initials-only avatars (e.g. `<div class="ease-avatar-group-item">JD</div>`), the text has `color: #fff` but the background is transparent. On a standard light page, this white text is completely invisible.

Additionally, the avatar group uses several hardcoded color values:

- `border: 2px solid white` on `.ease-avatar-group .ease-avatar`
- `border: 2px solid white` on `.ease-avatar-group-count`
- `background: #e2e8f0; color: #475569;` on `.ease-avatar-group-count`
- `border: 2px solid #fff` on `.ease-avatar-group-item`

In dark mode, these borders remain bright white (creating harsh, un-themed lines against dark backgrounds) and the count badge retains its light-gray background.

---

## ✅ Fix

Replace the hardcoded colors with the framework's existing design tokens and specify a default background color for the group items:

```css
/* ✅ Fixed — uses design tokens and adds default background */
.ease-avatar-group .ease-avatar {
  border: 2px solid var(--ease-color-surface, #ffffff);
}

.ease-avatar-group-count {
  background: var(--ease-color-neutral-200, #e2e8f0);
  color: var(--ease-color-text, #475569);
  border: 2px solid var(--ease-color-surface, #ffffff);
}

.ease-avatar-group-item {
  background: var(--ease-color-neutral-200, #e2e8f0);
  color: var(--ease-color-text, #1e293b);
  border: 2px solid var(--ease-color-surface, #ffffff);
}
```

---

## 📁 Submission Contents

| File        | Purpose                                                                             |
| ----------- | ----------------------------------------------------------------------------------- |
| `demo.html` | Interactive side-by-side demonstration of the bug vs. the fix in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout                               |
| `README.md` | This documentation file                                                             |
