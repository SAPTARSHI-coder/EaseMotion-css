# Fix: Prevent Dropdown from Closing When Interacting with Scrollbar

**Resolves issue [#55657](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55657)**

---

## 1. What does this do?

Demonstrates why a scrollable CSS-only dropdown closes unexpectedly when the scrollbar is clicked, and provides two pure-CSS fixes plus one JavaScript guidance pattern that eliminate the problem.

---

## 2. How is it used?

### Fix 1 — `<details>` / `<summary>` (recommended for CSS-only)

The browser's native `<details>` element is not closed by scrollbar interaction — only by clicking `<summary>` again.

```html
<details class="dropdown-details">
  <summary>
    Open Menu <span class="chevron" aria-hidden="true">▼</span>
  </summary>

  <div class="dropdown-panel" role="listbox" tabindex="-1">
    <div class="menu-item" role="option" tabindex="0">Item 1</div>
    <div class="menu-item" role="option" tabindex="0">Item 2</div>
    <!-- … more items … -->
  </div>
</details>
```

```css
/* Remove default marker */
details.dropdown-details summary { list-style: none; }
details.dropdown-details summary::-webkit-details-marker { display: none; }

/* Panel is always in the DOM; [open] controls visibility natively */
.dropdown-details .dropdown-panel {
  position: absolute;
  max-height: 200px;
  overflow-y: auto;
  overscroll-behavior: contain;   /* ← keeps scroll inside panel */
}
```

### Fix 2 — `:focus-within` + `tabindex="-1"` on the panel

Adding `tabindex="-1"` makes the panel itself a focusable element. When the scrollbar is clicked the focus moves to the panel (not out of the container), so `:focus-within` on the wrapper remains `true` and the menu stays open.

```html
<div class="dropdown-focusguard">
  <button class="dropdown-btn" aria-haspopup="listbox">Open Menu</button>

  <!-- tabindex="-1" is the key fix -->
  <div class="dropdown-panel" role="listbox" tabindex="-1">
    <div class="menu-item" role="option" tabindex="0">Item 1</div>
    <!-- … -->
  </div>
</div>
```

```css
.dropdown-focusguard {
  position: relative;
  contain: paint;               /* ← new stacking context, no overflow:hidden */
}

.dropdown-focusguard .dropdown-panel {
  display: none;
  overscroll-behavior: contain; /* ← scroll stays inside */
}

/* Panel shown while wrapper or any child (including panel) has focus */
.dropdown-focusguard:focus-within .dropdown-panel {
  display: block;
}
```

### Fix 3 — JS-driven dropdowns: use `mousedown` outside, not `blur`

```js
// ❌ WRONG — fires on scrollbar click, closes the menu
toggle.addEventListener('blur', () => menu.hidden = true);

// ✅ CORRECT — only fires when click lands outside the container
document.addEventListener('mousedown', (e) => {
  if (!container.contains(e.target)) {
    menu.hidden = true;
  }
});
```

---

## 3. Why is it useful?

### Root cause

CSS-only dropdowns that use `:focus-within` to show/hide a menu panel rely on focus staying inside the container. When a user clicks the scrollbar track or drags the scrollbar thumb:

1. The browser fires a `mousedown` on the scrollbar.
2. The browser also fires a `blur` (or focus-change) on the previously focused element (the toggle button).
3. This removes `:focus-within` from the container **before the scroll completes**.
4. The dropdown panel collapses mid-scroll.

The same problem affects checkbox-hack patterns — `mousedown` on the scrollbar can uncheck the hidden input before `mouseup` fires.

### Why the fixes work

| Fix | Mechanism |
|---|---|
| **`<details>`** | Browser-native toggle — scrollbar interaction is treated as an internal scroll event, never a close trigger. No CSS workaround needed. |
| **`tabindex="-1"` on panel** | Focus moves from button → panel (still inside `:focus-within`). The dropdown stays open. `overscroll-behavior: contain` prevents scroll from propagating upward. |
| **`mousedown` outside** | JS close fires only when the click target is genuinely outside the container. The scrollbar's `mousedown` target is the panel itself — `container.contains(scrollbar) === true`. |

### Critical CSS properties

```css
/* Applied to the panel in both CSS fixes */
overscroll-behavior: contain;   /* scroll stays inside panel, no focus leak */

/* Applied to wrapper in Fix 2 */
contain: paint;                  /* new stacking context without overflow:hidden */
```

These satisfy the expected behaviour from the issue:
> "The dropdown should remain open while the user interacts with its scrollbar, allowing smooth scrolling and item selection."
