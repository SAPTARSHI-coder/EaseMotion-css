# Fix: `.ease-card-stat .ease-stat-value` uses `2.5em` — unpredictable scaling when nested

**Issue:** [#14086](https://github.com/saptarshi-coder/easemotion-css/issues/14086)

---

## 1. What does this do?

Fixes `.ease-stat-value` and `.ease-stat-label` by replacing `em` units with `rem`/token-based units so the stat card renders consistently regardless of which parent component it is nested inside.

---

## 2. How is it used?

No HTML changes needed. The fix is purely in CSS:

```html
<!-- Usage unchanged -->
<div class="ease-card ease-card-stat">
  <div class="ease-stat-value">1,240</div>
  <div class="ease-stat-label">Total Users</div>
</div>
```

**Proposed fix for `components/cards.css`:**

```css
/* BEFORE (buggy) */
.ease-card-stat .ease-stat-value {
  font-size: 2.5em;   /* compounds with inherited parent font-size */
}
.ease-card-stat .ease-stat-label {
  font-size: 0.875em; /* same issue */
}

/* AFTER (fixed) */
.ease-card-stat .ease-stat-value {
  font-size: 2.5rem;  /* always root-relative — 40px regardless of nesting */
}
.ease-card-stat .ease-stat-label {
  font-size: var(--ease-text-sm, 0.875rem); /* uses existing rem-based token */
}
```

---

## 3. Why is it useful?

The `em` unit is relative to the **current element's inherited font-size**, not the root. When `.ease-card-stat` is nested inside components that set their own `font-size` (modals, sidebars, hero sections, utility classes like `ease-text-sm`), `2.5em` compounds on top of that inherited value — producing stat values wildly different from the intended `40px`.

| Context | Parent font-size | `2.5em` result | Expected |
|---|---|---|---|
| Standalone | 16px | 40px ✅ | 40px |
| Hero section | 22px | 55px ⚠️ | 40px |
| Sidebar | 13px | 32.5px ⚠️ | 40px |

Switching to `rem` makes `.ease-stat-value` always resolve to `40px` (assuming standard 16px root), regardless of nesting depth or parent font-size — which is the predictable, component-safe behavior.
