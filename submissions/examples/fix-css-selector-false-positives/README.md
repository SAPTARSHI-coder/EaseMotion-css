# Fix: CSS Selector Tests False Positives (#2511)

This submission outlines a robust solution to address the false positives in `tests/smoke.test.js`. 

## 🐛 The Problem
Currently, the smoke test relies on generic string matching to verify the presence of CSS selectors:
```javascript
expect(css).toContain('.ease-btn-primary');
```
This is vulnerable to false positives because the assertion passes even if the selector is only mentioned in a CSS comment or forms part of another unrelated string.

## 🛠️ The Solution
Instead of raw substring matching, the test suite should construct a virtual `JSDOM` stylesheet and query the actual parsed `cssRules`. This guarantees that the selectors exist as valid CSS rules.

### Proposed Code Patch for `tests/smoke.test.js`
Replace the `toContain` checks with these helper functions:

```javascript
// 1. Extract all selectors from the CSSOM
const getAllSelectors = (rules) => {
  let result = new Set();
  const process = (rlist) => {
    for (const rule of rlist) {
      if (rule.selectorText) {
        rule.selectorText.split(',').forEach(s => result.add(s.trim()));
      }
      if (rule.cssRules) {
        process(rule.cssRules);
      }
    }
  };
  process(rules);
  return result;
};

// 2. Safely verify a class within the selectors
const hasSelectorWithClass = (selectors, className) => {
  const name = className.startsWith('.') ? className.slice(1) : className;
  const regex = new RegExp(`(^|[\\s.,:()#])${name}(\\.|\\s|:|#|\\)|,|$)`);
  return Array.from(selectors).some(s => regex.test(s));
};

// Usage:
// const selectors = getAllSelectors(document.styleSheets[0].cssRules);
// expect(hasSelectorWithClass(selectors, '.ease-btn-primary')).toBe(true);
```

## Directory Structure
- `demo.html`: A visual representation and explanation of the bug vs. the fix.
- `style.css`: Styling for the demo page.
- `README.md`: This documentation.
