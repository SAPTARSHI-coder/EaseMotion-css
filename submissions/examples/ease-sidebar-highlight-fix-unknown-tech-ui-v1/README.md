# ease-sidebar-highlight-fix

## 1. What does this do?
Demonstrates and fixes the broken sidebar active link highlighting in EaseMotion CSS docs, where the `#animations` and `#contributing` sections never triggered the purple highlight indicator when scrolled into view.

## 2. How is it used?

The fix replaces the broken `IntersectionObserver` threshold with a `rootMargin` approach:

```javascript
// ❌ BEFORE — broken for long/tall sections
const observer = new IntersectionObserver(callback, {
  threshold: 0.4
});

// ✅ AFTER — works for ALL section heights
const observer = new IntersectionObserver(callback, {
  rootMargin: "-20% 0px -70% 0px",
  threshold: 0
});
```

The active sidebar link style:

```css
.sidebar-nav a.active {
  color: #ffffff;
  background: rgba(108, 99, 255, 0.12);
  border-left: 3px solid #6c63ff;
}
```

## 3. Why is it useful?

`threshold: 0.4` requires 40% of a section to be simultaneously visible in the viewport before the IntersectionObserver fires. For long sections like `#animations` (which contains multiple large tables) and `#contributing`, this threshold is never satisfied, so the sidebar highlight silently never activates for them.

The fix uses `rootMargin: "-20% 0px -70% 0px"` which creates a narrow trigger band in the middle 10% of the viewport. Any section entering this band — regardless of how tall it is — immediately fires the observer and activates the correct sidebar link.

This fits EaseMotion CSS's philosophy of clean, minimal and reliable UI behavior. Navigation should always tell the user exactly where they are on the page.

## Bug Reference
Fixes: https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/1888
