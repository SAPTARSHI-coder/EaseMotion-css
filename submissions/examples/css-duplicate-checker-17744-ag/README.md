# CSS Duplicate Class Checker

This submission implements a visual style sheet scanner designed to identify duplicate class declarations in CSS codebases, resolving multi-selector grouping parsing bugs.

---

## Technical Overview: The Multi-Selector Parser Bug

Standard validation utilities often extract CSS class names by parsing rule headings. For instance, parsing:
```css
.card-title, .card-body { ... }
```
using naive matches like `/^\.([a-zA-Z0-9_-]+)/` only captures the first selector (`.card-title`), skipping secondary classes after commas (`.card-body`). This leads to duplicate selector declarations passing through undetected.

### The Remediation
Always split multi-selector rule headings by comma `,` before resolving individual class tokens:
```javascript
const selectorGroup = heading;
const selectors = selectorGroup.split(',');
selectors.forEach(sel => {
  const cleanSel = sel.trim();
  // Safe validation tracking
});
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Observe the sample stylesheet loaded in the editor box — it contains multi-selector rules listing `.card-title` and `.card-body` multiple times.
3. Click **Scan for Duplicates** — verify that the scanner correctly identifies that both `.card-title` and `.card-body` are declared multiple times.
