# ease-form-validation

Pure CSS form-field validation powered by the `:has()` relational pseudo-class.  
**Zero JavaScript required.**

---

## 1. What does this do?

This component uses the CSS `:has()` pseudo-class to style a **parent** container (`.ease-input-group`) based on the **validity state of its child `<input>`**.

When a user types into an input field:

| Child state | Parent result |
|---|---|
| `input:focus` | Blue border — field is active |
| `input:invalid:not(:placeholder-shown)` | Red border + error message slides in |
| `input:valid:not(:placeholder-shown)` | Green border — input is valid |

The `:not(:placeholder-shown)` guard ensures styles only apply **after the user has started typing**, preventing a wall of red errors on first page load.

---

## 2. How is it used?

### HTML structure

```html
<div class="ease-input-group">
  <label for="email">Email Address</label>
  <input id="email" type="email" required placeholder="name@company.com" />
  <span class="ease-error-msg">Please enter a valid email address.</span>
</div>
```

### Key CSS selectors

```css
/* Error state — invalid AND user has typed something */
.ease-input-group:has(input:invalid:not(:placeholder-shown)) {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.05);
}

/* Toggle error message visibility */
.ease-input-group:has(input:invalid:not(:placeholder-shown)) .ease-error-msg {
  display: block;
  animation: slideDown 0.2s ease-out;
}

/* Success state — valid AND user has typed something */
.ease-input-group:has(input:valid:not(:placeholder-shown)) {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.05);
}
```

Wrap everything in a `.ease-form-wrapper` for the dark-themed card layout, then link `style.css`. Open `demo.html` to see it in action.

---

## 3. Why is this useful?

Traditionally, inline form validation requires JavaScript event listeners (`input`, `blur`, `change`) that manually toggle classes like `.has-error` or `.is-invalid` on parent `<div>` elements. This approach:

- Adds script weight and execution overhead.
- Requires keeping JS and CSS class names in sync.
- Introduces edge-case bugs (race conditions, missed events on autofill, etc.).

**`:has()` eliminates all of that.** The browser's own constraint-validation API (via `type`, `required`, `pattern`) determines validity, and `:has()` lets CSS react to it — no JS glue code, no class toggling, no event wiring. The result is a lighter, faster, and more maintainable validation UX.

---

## Browser Support

`:has()` is supported in all modern browsers (Chrome 105+, Firefox 121+, Safari 15.4+).  
See [caniuse.com/css-has](https://caniuse.com/css-has) for details.
