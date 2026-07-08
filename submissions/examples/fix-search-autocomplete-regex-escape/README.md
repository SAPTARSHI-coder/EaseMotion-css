# SearchAutocomplete RegExp Escape Fix

## Overview

This example demonstrates how to safely construct a regular expression using user input by escaping regular expression metacharacters before creating a `RegExp`.

---

## Problem

The vulnerable implementation directly interpolates user input into a regular expression.

```js
const parts = text.split(
    new RegExp(`(${highlight})`, "gi")
);
```

This can:

- Interpret regex metacharacters unexpectedly
- Increase the risk of Regular Expression Denial of Service (ReDoS)
- Produce incorrect highlighting behavior

---

## Solution

Escape user input before creating the regular expression.

```js
const escapeRegExp = (str) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const escapedHighlight = escapeRegExp(highlight);

const parts = text.split(
    new RegExp(`(${escapedHighlight})`, "gi")
);
```

---

## Benefits

- Prevents regex injection
- Escapes special characters safely
- Preserves intended highlighting
- Improves application stability
- Lightweight solution

---

## Files

```
demo.html
style.css
README.md
```

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## License

Example submission for demonstration purposes.