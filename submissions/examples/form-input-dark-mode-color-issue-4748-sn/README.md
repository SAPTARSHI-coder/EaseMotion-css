# Form Field Dark Mode Readability (Issue #4748)

## What does this do?
Ensures form fields (inputs, textareas, selects) and labels adapt their text color to light-scheme colors in dark mode to remain readable.

## How is it used?
When inputs, textareas, selects, or labels are displayed in a dark theme, their text color automatically shifts to a readable light color.

## Why is it useful?
It prevents text contrast and legibility issues where dark text is rendered against a dark surface background.

## Affected File (maintainer will copy to `components/forms.css`)
Modify the `@media (prefers-color-scheme: dark)` media query block in `components/forms.css`:
```css
  @media (prefers-color-scheme: dark) {
    .ease-input,
    .ease-textarea,
    .ease-select {
      background-color: var(--ease-color-surface, #141e33);
      border-color: var(--ease-color-neutral-700, #334155);
      color: var(--ease-color-text, #e2e8f0);
    }
    .ease-field-label {
      color: var(--ease-color-text, #e2e8f0);
    }
  }
```
