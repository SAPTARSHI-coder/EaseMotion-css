# CSS Line Clamp — Text Truncation Utility

**Issue:** #15571  
**Folder:** `submissions/examples/line-clamp-text/`  
**Type:** Feature — new utility  
**Label:** `good first issue` `GSSoC-26`

---

## What this adds

A pure CSS multi-line text truncation utility using `-webkit-line-clamp`.
Zero JavaScript. Dark mode via CSS tokens. Widely supported across all
modern browsers (Chrome 14+, Firefox 68+, Safari 5+, Edge 17+).

---

## Classes

| Class | Lines shown |
|---|---|
| `ease-clamp-1` | 1 line |
| `ease-clamp-2` | 2 lines |
| `ease-clamp-3` | 3 lines |
| `ease-clamp-4` | 4 lines |
| `ease-clamp-5` | 5 lines |
| `ease-clamp-6` | 6 lines |
| `ease-clamp` | Reads `--ease-clamp-lines` token (default: 3) |
| `ease-clamp--custom` | Set any count via inline `--ease-clamp-lines` |

---

## Usage

```html
<!-- Fixed line counts -->
<p class="ease-clamp-2">Long text truncated to 2 lines...</p>
<p class="ease-clamp-3">Long text truncated to 3 lines...</p>

<!-- Base class — uses :root token -->
<p class="ease-clamp">Uses --ease-clamp-lines (default 3)...</p>

<!-- Custom count via inline variable -->
<p class="ease-clamp--custom" style="--ease-clamp-lines: 7">
  Truncated to 7 lines...
</p>

<!-- Pure CSS Read More toggle — no JavaScript -->
<div class="ease-clamp-expand">
  <input type="checkbox" id="expand-1" class="ease-clamp-toggle" />
  <p class="ease-clamp-3 ease-clamp-content">Long text here...</p>
  <label for="expand-1" class="ease-clamp-btn"></label>
</div>
```

> ⚠️ **Toggle HTML order matters** — `input`, `p.ease-clamp-content`,
> and `label.ease-clamp-btn` must be siblings in that exact order for
> the CSS `~` sibling selector to work.

---

## How It Works

Three CSS properties must always appear together to enable line clamping:

```css
.ease-clamp-3 {
  overflow: hidden;               /* clips overflowing text */
  display: -webkit-box;           /* enables line-clamp box model */
  -webkit-box-orient: vertical;   /* stacks lines vertically */
  -webkit-line-clamp: 3;          /* sets the line limit */
  line-clamp: 3;                  /* standard property alongside vendor */
}
```

The "Read More" expand toggle uses a hidden `<input type="checkbox">`
as a pure CSS state holder. When checked, the sibling selector
`~ .ease-clamp-content` removes the clamp:

```css
.ease-clamp-toggle:checked ~ .ease-clamp-content {
  display: block;
  -webkit-line-clamp: unset;
  line-clamp: unset;
  overflow: visible;
}
```

---

## Dark Mode

All colors use CSS custom properties that auto-switch via
`@media (prefers-color-scheme: dark)`:

```css
:root {
  --ease-color-surface:    #ffffff;
  --ease-color-text:       #1e293b;
  --ease-color-text-muted: #64748b;
  --ease-color-border:     #e2e8f0;
  --ease-color-primary:    #6c63ff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --ease-color-surface:    #1e1e2e;
    --ease-color-text:       #cdd6f4;
    --ease-color-text-muted: #a6adc8;
    --ease-color-border:     #313244;
  }
}
```

---

## Files

| File | Purpose |
|---|---|
| `style.css` | All clamp utility classes + tokens + expand toggle |
| `demo.html` | Live demo — all 6 fixed classes, expand toggle, custom variant |
| `README.md` | Documentation |

---

## Acceptance Criteria

- [x] `ease-clamp-1` through `ease-clamp-6` utility classes
- [x] Base `ease-clamp` class using `--ease-clamp-lines` token
- [x] `ease-clamp--custom` for any line count via inline variable
- [x] Pure CSS "Read More / Show Less" expand toggle
- [x] Standard `line-clamp` alongside `-webkit-line-clamp`
- [x] Dark mode via CSS tokens
- [x] Zero JavaScript
- [x] No `core/` or `components/` files modified