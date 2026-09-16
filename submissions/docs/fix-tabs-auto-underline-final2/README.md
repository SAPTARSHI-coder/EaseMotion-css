# Tabs Auto Variant — Underline Hidden Fix

### 1. What does this do?
Fixes `.ease-tabs-auto` so the sliding underline is properly hidden with CSS specificity instead of being overridden by transform rules.

### 2. How is it used?
Add `!important` to increase specificity:

```css
.ease-tabs-auto .ease-tabs-nav .ease-tab-underline {
  display: none !important;
}
```

### 3. Why is it useful?
The transform rules have higher specificity and include `display: block` through the shorthand. Without `!important`, the `display: none` rule gets overridden.
