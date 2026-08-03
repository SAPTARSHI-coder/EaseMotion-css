# Fix: Tabs Auto Underline Visibility in components/tabs.css

## What does this do?
Fixes the CSS specificity issue where the `.ease-tabs-auto` variant's sliding underline wasn't properly hidden.

## How is it used?
```css
/* Before: */
.ease-tabs-auto .ease-tab-underline {
  display: none;
}

/* After: */
.ease-tabs-auto .ease-tabs-nav .ease-tab-underline {
  display: none !important;
}
```

## Why is it useful?
- The ease-tabs-auto variant now correctly hides the sliding underline
- The static border-bottom indicator displays properly
- Users get the expected behavior when using variable-width tabs
