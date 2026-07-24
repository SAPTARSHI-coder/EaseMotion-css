# Shrink Chip Example

Resolves #54673

A tag/filter chip design demonstrating an organic scale-reduction ("shrink") hover and click feedback state using CSS transform scaling.

## What does this do?
Interactive chip elements scale down dynamically on hover and shrink further on mouse click.

## How is it used?
```html
<div class="shrink-chips-container-rb">
  <button class="shrink-chip-rb">Design</button>
  <button class="shrink-chip-rb active-chip-rb">Coding</button>
</div>
```

## Why is it useful?
Shrinking UI elements on hover provides a reassuring "pressable" response to user focus events, encouraging click completion.
