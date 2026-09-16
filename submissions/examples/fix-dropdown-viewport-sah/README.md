# Bottom Viewport Dropdown Cutoff Fix (`#56078`)

## What does this do?
Prevents floating dropdown menus placed near the bottom of the viewport from getting clipped by window boundaries by introducing an upward-pivoting modifier class.

## How is it used?
Attach the `ease-dropdown-up` modifier class to dropdown menus anchored in footers or bottom control panels:
```html
<div class="dropdown-group">
  <button>Trigger ▲</button>
  <div class="ease-dropdown-menu ease-dropdown-up">...</div>
</div>
```

## Why is it useful?
Solves issue #56078 by providing reliable vertical pivoting that preserves dropdown usability without relying on complex JavaScript viewport positioning calculation algorithms.