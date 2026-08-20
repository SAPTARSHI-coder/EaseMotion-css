# Modal CSS.escape Guard

A demo showing `CSS.escape()` usage without feature detection — and how to properly guard it with a fallback.

---

## What does this show?

Issue [#5746](https://github.com/anomalyco/easemotion/issues/5746) identified that the modal component calls `CSS.escape()` to sanitize ID selectors without checking if the API is available. In older browsers or testing environments, this throws a TypeError.

### The problem

```js
const safeId = CSS.escape(userProvidedId);
// TypeError if CSS.escape is not defined
```

### The fix

```js
function safeEscape(id) {
  if (typeof CSS !== 'undefined' && typeof CSS.escape === 'function') {
    return CSS.escape(id);
  }
  return id.replace(/[!"#$%&'()*+,./:;<=>?@[\]^`{|}~]/g, '\\$&');
}
```

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison of CSS.escape guarding |
| `style.css` | Demo styles |
| `README.md` | This file |
