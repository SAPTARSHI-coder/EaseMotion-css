# Glide Dropdown Navigation Component (`#54677`)

## What does this do?
Provides a smooth downward gliding dropdown reveal animation that expands navigation panels without jarring jumpiness.

## How is it used?
Embed menu anchor lists within an `ease-dropdown-glide` box positioned beneath your trigger:
```html
<div class="ease-dropdown-holder">
  <button>Menu ▾</button>
  <div class="ease-dropdown-glide">...</div>
</div>
```

## Why is it useful?
Solves issue #54677 by offering a reliable, hardware-composited gliding alternative to basic native menu rendering.