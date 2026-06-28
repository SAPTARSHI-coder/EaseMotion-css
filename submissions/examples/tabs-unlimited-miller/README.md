# Tabs Component — Unlimited Tabs Fix

Fixes the bug where the tabs component was limited to a maximum of 6 tabs
due to hardcoded `:nth-of-type()` selectors. Tabs beyond the 6th position
failed to display or activate.

## Files
- `demo.html` - 8-tab demo (2 more than the previous 6-tab cap)
- `style.css` - Fixed tab activation logic
- `README.md` - This file

## Root Cause

The original implementation relied on positional `:nth-of-type()` rules,
which only covered a fixed list of positions (1 through 6). Any tab beyond
position 6 had no matching CSS rule, so it never displayed or activated.

## The Fix

Each tab now gets a per-tab activation rule based on its **unique ID**
rather than its **position**:

```css
.ease-tabs:has(#tab-1:checked) .ease-tab-label[for="tab-1"],
.ease-tabs:has(#tab-1:checked) #panel-1 { /* active state */ }
```

This pattern:
- Uses radio inputs (`#tab-1` ... `#tab-N`) + `:checked` + `:has()`
- Pairs each input with its label (`label[for="tab-N"]`) and panel (`#panel-N`)
- Scales to **any number of tabs** — just add another input/label/panel
  trio and one corresponding CSS rule pair, with no upper limit baked
  into the selector structure

## HTML Usage

```html
<div class="ease-tabs">
  <input type="radio" name="ease-tab-group" id="tab-1" class="ease-tab-input" checked>
  <input type="radio" name="ease-tab-group" id="tab-2" class="ease-tab-input">
  <!-- add as many tab-N inputs as needed -->

  <div class="ease-tabs-nav">
    <label for="tab-1" class="ease-tab-label">Tab 1</label>
    <label for="tab-2" class="ease-tab-label">Tab 2</label>
    <!-- one label per input -->
  </div>

  <div class="ease-tabs-panels">
    <div class="ease-tab-panel" id="panel-1">Content 1</div>
    <div class="ease-tab-panel" id="panel-2">Content 2</div>
    <!-- one panel per input, matching IDs -->
  </div>
</div>
```

## Why It Fits
- Removes the hardcoded 6-tab limit entirely
- All tabs display and function correctly regardless of count (demo includes 8)
- No JavaScript required — pure CSS state via radio inputs
- Smooth fade-in transition when switching panels

## Browser Note
`:has()` is supported in all current versions of Chrome, Edge, Firefox, and
Safari (Safari 15.4+, Firefox 121+). For projects needing older browser
support, the same ID-keyed pairing pattern can be re-implemented with the
general sibling selector (`~`) by reordering panels after the tab nav.
