# Animated Checklist

A to-do / checklist component with animated checkmark toggles. Click items to toggle completion with a scaling checkmark, strikethrough text, and a progress bar.

## Features

- Click item to toggle checkmark with scale animation
- Completed items show strikethrough and reduced opacity
- Checkmark circle scales in on completion
- Progress bar fills based on completion ratio
- Add new items via input field
- Remove individual items or clear all completed

## Usage

Items are rendered from a JS array of `{ text, done }` objects. The `.lca-check` element receives `.lca-checked` class on completion. The progress bar width transitions via CSS.

Customize via `:root` variables:

```css
--lca-duration         /* animation speed */
--lca-check-color      /* checkmark fill color */
--lca-unchecked-color  /* unchecked border color */
--lca-text-color       /* default text color */
--lca-completed-color  /* completed text color */
--lca-radius           /* item border radius */
```
