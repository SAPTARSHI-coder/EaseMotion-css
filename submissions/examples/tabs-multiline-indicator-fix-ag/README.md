# Tabs Multiline Indicator Fix

## What does this do?
Fixes `.ease-tabs` active indicator misalignment when tab labels wrap to multiple lines, by enforcing `white-space: nowrap` with `text-overflow: ellipsis` on tab labels so the tab height is always consistent and the indicator aligns correctly.

## How is it used?
```html
<div class="ease-tabs" role="tablist">
  <button class="ease-tab active" role="tab" aria-selected="true">Tab 1</button>
  <button class="ease-tab" role="tab" aria-selected="false">Tab 2</button>
</div>
```

## Why is it useful?
Tabs with long labels wrap text and break the active indicator position. The correct fix is to prevent text wrapping on tab buttons and use horizontal scroll for overflow, which is the standard UX pattern.

## Fixes
Fixes #9846
