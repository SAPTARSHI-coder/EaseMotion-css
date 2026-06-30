# Position, Inset, and Overflow Utility Classes

## What does this do?

Adds fundamental layout utility classes to EaseMotion CSS for `position` (static, relative, absolute, fixed, sticky), `inset`/`top`/`right`/`bottom`/`left` zero-positioning, and `overflow` control (auto, hidden, visible, scroll, with x/y variants) — eliminating the need for manual CSS for common layout patterns.

## How is it used?

**Sticky header:**

```html
<header class="ease-sticky ease-top-0">Sticky navigation</header>
```

**Modal overlay with scroll:**

```html
<div class="ease-fixed ease-inset-0 ease-overflow-auto">
  <div class="modal-content">...</div>
</div>
```

**Scrollable container:**

```html
<div class="ease-overflow-x-auto" style="max-width: 100%;">
  <table>
    ...
  </table>
</div>
```

## Why is it useful?

Positioning, overflow, and zero-inset classes are among the most commonly used layout utilities in any CSS framework. Developers currently have to write `position: relative;` or `overflow: hidden;` manually every time. These single-class utilities streamline layout work and align with the utility-first philosophy already established by the framework's spacing, flex, and grid classes.
