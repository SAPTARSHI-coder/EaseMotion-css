# User Select Utilities

An overview and guide for using CSS `user-select` utility classes to customize text selection behaviors in web interfaces.

## Core Questions

### What does this do?

These utility classes map CSS `user-select` properties to determine whether and how text can be highlighted and selected by the user.

### How is it used?

Apply the utility classes directly to elements whose selection behavior needs modification:

```html
<!-- Single-click copyable code block -->
<pre class="user-select-all">
  npm install easemotion-css
</pre>
```

### Why is it useful?

It improves the user experience by blocking accidental text selection on interactive widgets (like buttons, accordion headers, or custom sliders) while facilitating text copy operations on read-only items (like code blocks, invoice numbers, or API keys).

---

## Utility Classes

| Class                  | CSS Declaration         | Description / Use Case                                                          |
| :--------------------- | :---------------------- | :------------------------------------------------------------------------------ |
| `.user-select-auto`    | `user-select: auto;`    | Relies on default browser selection logic. Text remains selectable.             |
| `.user-select-none`    | `user-select: none;`    | Prevents text highlighting entirely. Ideal for buttons, icons, and menus.       |
| `.user-select-text`    | `user-select: text;`    | Forces text selection. Useful inside elements that inherit `user-select: none`. |
| `.user-select-all`     | `user-select: all;`     | Single-clicking anywhere in the element highlights all its content at once.     |
| `.user-select-contain` | `user-select: contain;` | Limits selection boundary to the element. Prevents highlight spillover.         |

_Note: The utilities declare vendor prefixes (`-webkit-`, `-moz-`, and `-ms-`) to guarantee compatibility across Chromium, Firefox, WebKit, and Legacy Microsoft engines._

---

## What is `user-select` & Best Practices

The `user-select` property regulates user highlighting, but it is important to follow standard usability guidelines:

- **Do Not Lock Content**: Avoid disabling text selection on long reading articles or general content blocks (`user-select: none`). Users frequently highlight text to quote, search, translate, or use screen readers. Locking content breaks these workflows and degrades accessibility.
- **Accidental Highlight Prevention**: Double-clicking interactive controls (like buttons, navigation links, sliders, or expand tabs) often triggers accidental text selection on adjacent elements. Applying `.user-select-none` on these controls makes interfaces feel solid and native.

---

## Usage Examples

### 1. Brand Action Button (None Selection)

Prevent accidental text highlighting when double-clicking buttons quickly:

```html
<button class="btn user-select-none">Click Action</button>
```

### 2. Single-Click API Key Copy Block (All Selection)

```html
<div class="api-token-container user-select-all">sk_live_51Nx82...</div>
```

### 3. Isolated Block Notes (Contain Selection)

Keep selection boundaries isolated within sidebar widgets:

```html
<aside class="sidebar-notes user-select-contain">
  <p>Copyable instructions here...</p>
</aside>
```

---

## Accessibility Notes

- **Assistive Technologies**: Even if an element is styled with `user-select: none`, screen readers can still read the text. It does not hide text from accessibility trees.
- **Selectable Inputs**: Never apply `user-select: none` to inputs or editable elements, as it blocks text entry and cursor insertion.

---

## Browser Compatibility Notes

CSS `user-select` is widely supported by modern desktop and mobile rendering engines:

- Chrome 54+ (prefixed before v54)
- Edge 12+ (prefixed before v79)
- Firefox 69+ (prefixed before v69)
- Safari 3+ (fully supported with `-webkit-` prefixes)
- iOS Safari & Android Browser (Fully supported)
