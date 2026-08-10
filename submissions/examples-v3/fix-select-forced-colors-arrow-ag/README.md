# Fix ease-select Arrow in Forced-Colors Mode

## What does this do?
Adds a `@media (forced-colors: active)` block so the custom dropdown arrow
remains visible in Windows High Contrast / forced-colors mode.

## How is it used?
```html
<select class="ease-select">
  <option>Option 1</option>
</select>
```

## Why is it useful?
CSS `background-image` SVGs are stripped in forced-colors mode.
Without a fallback, the select looks like a plain text box with no affordance
that it is interactive. `forced-color-adjust: none` + system color keywords
(`ButtonText`, `Field`) restore the visual correctly. Fixes: #35778
