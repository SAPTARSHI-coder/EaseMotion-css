# Tabs Underline Width Modifiers (Issue #4780)

## What does this do?
Adds modifier classes `.ease-tabs-2`, `.ease-tabs-3`, `.ease-tabs-4`, `.ease-tabs-5`, `.ease-tabs-6` to automatically set the `--ease-tab-width` variable to match the correct tab fraction, resolving the broken sliding underline behavior for non-3 tab groups.

## Affected File (maintainer will copy to `components/tabs.css`)
Please copy the rules inside `style.css` to the end of `components/tabs.css`:
```css
  .ease-tabs-2 { --ease-tab-width: 50%; }
  .ease-tabs-3 { --ease-tab-width: 33.333%; }
  .ease-tabs-4 { --ease-tab-width: 25%; }
  .ease-tabs-5 { --ease-tab-width: 20%; }
  .ease-tabs-6 { --ease-tab-width: 16.666%; }
```
