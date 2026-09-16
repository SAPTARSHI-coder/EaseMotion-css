# Inset Positioning Utilities

An isolated positional utility package providing direct layout constraints for standard multi-axis spatial layouts.

## Utility Roster API

### Shorthand Blocks
- `.ease-inset-0`: Configures `top`, `right`, `bottom`, and `left` coordinates to `0` simultaneously.
- `.ease-inset-x-0`: Pins left and right edges to `0` for horizontal spanning layers.
- `.ease-inset-y-0`: Pins top and bottom edges to `0` for vertical spanning layers.

### Directional Rules
- `.ease-top-0` / `.ease-bottom-0`: Controls explicit layout floor/ceiling coordinates.
- `.ease-left-0` / `.ease-right-0`: Controls explicit layout sidebar/track parameters.
- `.ease-top-auto` / `.ease-right-auto` / `.ease-bottom-auto` / `.ease-left-auto`: Resets target boundaries back to standard flows.

## Usage Layout Structure
```html
<div class="relative-parent">
  <div class="absolute ease-inset-0"> Spans whole container </div>
</div>
```

Closes #13469
