# Ease Multi-Select Chips

## What does this do?
Toggleable chip/tag buttons for multi-select filters. Each chip fills with its accent color and reveals a checkmark on selection, with a spring-style pop animation. Multiple chips can be selected independently within a group.

## How is it used?
```html
<div class="ease-chips">
  <button class="ease-chip" style="--chip-color:#6366f1">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <span>Design</span>
  </button>
</div>
```
Toggle the `is-selected` class on click (a small vanilla JS snippet is included in `demo.html`). Use `ease-chip--sm` or `ease-chip--lg` for size variants. Set `--chip-color` inline per chip for custom accent colors.

## Why is it useful?
Multi-select chips are a common filter/tag UI pattern (skills, categories, preferences). The fill + checkmark + pop animation gives clear, satisfying feedback on selection state without needing checkboxes, fitting EaseMotion's animation-first philosophy.
