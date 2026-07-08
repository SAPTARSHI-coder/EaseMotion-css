# Fixing CSS Selector False Positives
**Problem:** `toContain` only checks if the text exists in the file, ignoring comments.
**Solution:** Use a CSS Parser (like `postcss` or `css-tree`) to verify that the selector exists as a real rule.

**Example Logic:**
```javascript
const css = require('css');
const ast = css.parse(cssString);
const hasSelector = ast.stylesheet.rules.some(rule => 
  rule.type === 'rule' && rule.selectors.includes('.ease-btn-primary')
);
expect(hasSelector).toBe(true);