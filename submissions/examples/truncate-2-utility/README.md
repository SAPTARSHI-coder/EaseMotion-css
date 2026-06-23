# 2-Line Text Truncation Utility

An isolated utility design token component implementation that wraps modern WebKit box constraints to truncate long descriptive text blocks precisely after two lines.

## Functional Controls
- **Box Orientation Restraints:** Forcing vertical block layout rendering boundaries using `-webkit-box-orient: vertical` definitions.
- **Ellipsis Overflow Management:** Triggers trailing characters to drop into ellipsis rendering layers automatically via `overflow: hidden` boundaries.
- **Layout Protection Layouts:** Keeps grid content flows uniform and guards cards from erratic height spikes during data hydration passes.

## Usage Layout Structure
```html
<p class="ease-truncate-2">
  Long copy that needs to stay limited to exactly two rows max goes here...
</p>
```

Closes #13482
