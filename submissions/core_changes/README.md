# Modal Focus Trap: Hidden & Disabled Elements Fix

## Bug

The modal focus trap in `core/modal.js` selects all focusable elements without filtering out hidden or disabled ones. Pressing Tab can land focus on invisible elements, causing confusion.

## Fix

Updated `getFocusableElements()` to exclude:

- Elements with `display: none` or zero dimensions (`offsetWidth`/`offsetHeight` === 0)
- Elements with `visibility: hidden`
- Elements with `aria-hidden="true"`
- Elements with `disabled` attribute (handled by `:not([disabled])` selector)
- Elements with `tabindex="-1"` (handled by `:not([tabindex="-1"])` selector)

The filter uses `getBoundingClientRect()` and `getComputedStyle()` for reliable visibility checks.

## Filter function

```js
function getFocusableElements(container) {
  var selectors = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled]):not([type=\"hidden\"])",
    "textarea:not([disabled])",
    "select:not([disabled])",
    "[tabindex]:not([tabindex=\"-1\"])"
  ];
  var elements = container.querySelectorAll(selectors.join(","));
  return Array.from(elements).filter(function(el) {
    var rect = el.getBoundingClientRect();
    var style = window.getComputedStyle(el);
    return (
      el.offsetWidth > 0 &&
      el.offsetHeight > 0 &&
      style.visibility !== "hidden" &&
      el.getAttribute("aria-hidden") !== "true"
    );
  });
}
```

## Demo

Open the modal and press Tab repeatedly — focus only lands on visible, enabled, interactive elements. Hidden inputs, disabled checkboxes, `aria-hidden` items, `tabindex="-1"` elements, and `visibility: hidden` items are correctly skipped. First/last element wrapping works correctly.

Fixes #12457
