# Flex-Center & Responsive Gap Utility

## What does this do?

Adds a "smart" centering utility `ease-flex-center` that shorthand centers items both horizontally and vertically using flexbox. It integrates seamlessly with the repository's existing responsive `gap` and spacing utilities.

---

## How is it used?

### Basic Centering

```html
<div class="ease-flex-center ease-gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Responsive Gap Control

```html
<!-- Small gap on mobile, grows significantly on large screens -->
<div class="ease-flex-center ease-gap-2 ease-md-gap-8 ease-lg-gap-16">
  <div class="ease-card">A</div>
  <div class="ease-card">B</div>
</div>
```

### Responsive Centering

```html
<!-- Standard block on mobile, centered flex on medium screens and up -->
<div class="ease-block ease-md-flex-center">
  <span>Centered only on tablet/desktop</span>
</div>
```

---

## Technical Details

- **Base Class:** `.ease-flex-center` (`display: flex; align-items: center; justify-content: center;`)
- **Integration:** Works seamlessly with the framework's existing `ease-gap-*` utilities and `--ease-space-*` tokens.
- **Breakpoints:** Supports `sm`, `md`, `lg`, and `xl` prefixes using standard `min-width` media queries (640px, 768px, 1024px, 1280px).

## Why is it useful?

Centering is the most common layout task in web development. Instead of writing multiple lines of CSS repeatedly (`display`, `align-items`, `justify-content`), developers can use one human-readable class. Combined with the existing responsive gap system, it provides a powerful shorthand for building flexible, perfectly centered layouts.

---

_Submitted for Issue #6652_
