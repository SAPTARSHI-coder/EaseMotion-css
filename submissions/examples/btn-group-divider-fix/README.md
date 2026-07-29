# Fix: ease-btn-group Internal Divider Width Mismatch

**Issue:** [#5230](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/5230)

## Problem

`.ease-btn` sets `border: 2px solid transparent` as its base border.  
Inside `.ease-btn-group`, the separator between buttons was hardcoded as:

```css
.ease-btn-group .ease-btn:not(:last-child) {
  border-right-width: 1px;  /* ❌ mismatches the 2px outer border */
}
```

This makes internal dividers visually thinner than the outer group borders,
looking inconsistent and unpolished — especially visible on filled/primary
button groups.

## Fix

Replace the hardcoded `1px` with a CSS variable that defaults to match
the base button border width:

```css
:root {
  --ease-btn-border-width: 2px;
  --ease-btn-group-divider-width: var(--ease-btn-border-width, 2px);
  --ease-btn-group-divider-color: rgba(255, 255, 255, 0.2);
}

/* ✅ Fixed */
.ease-btn-group .ease-btn:not(:last-child) {
  border-right-width: var(--ease-btn-group-divider-width);
  border-right-color: var(--ease-btn-group-divider-color);
}
```

## Bonus: Customizable Per Group

Developers can now override the divider width for specific groups:

```css
.my-thin-group {
  --ease-btn-group-divider-width: 1px;
}
```

## How to Verify

1. Open `demo.html` and zoom in to 200%
2. Compare the **Before Fix** group — internal divider is visibly thinner
3. Compare the **After Fix** group — all borders are equal width
4. The **Custom Override** group shows the variable in action at 3px

## Files
- `style.css` — the fix with CSS variable
- `demo.html` — three groups: buggy, fixed, and custom override demo