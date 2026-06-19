# Fix: Button Loading Spinner Invisible on Light Variants

## Problem
When `.ease-btn-loading` is used on light or outline button variants,
the loading spinner is completely invisible because the spinner border
color was hardcoded to white.

## Root Cause
```css
/* Before — hardcoded white */
.ease-btn-loading::after {
  border-color: white white white transparent;
}
```

## Fix
```css
/* After — uses currentColor to match button text */
.ease-btn-loading::after {
  border-color: currentColor currentColor currentColor transparent;
}
```

## Result
- Primary button (dark bg) → white spinner ✅
- Outline button (light bg) → colored spinner ✅
- Light button (white bg) → dark spinner ✅

## Preview
Open `demo.html` directly in browser.