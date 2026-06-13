# ease-dropdown

## What does this do?

Provides a floating dropdown menu that opens on `:focus-within` — no JavaScript required. The panel fades in while scaling from its top edge, giving a natural top-down unfold. It closes automatically when focus leaves the trigger.

## How is it used?

```html
<!-- Wrap a trigger and a panel together -->
<div class="ease-dropdown">

  <!-- Any element works as the trigger -->
  <button class="ease-btn ease-btn-primary ease-dropdown-trigger"
          aria-haspopup="menu" type="button">
    Options
    <span class="ease-dropdown-chevron" aria-hidden="true"></span>
  </button>

  <!-- The floating panel -->
  <ul class="ease-dropdown-menu" role="menu">
    <li role="none"><a class="ease-dropdown-item" href="#" role="menuitem" tabindex="-1">Edit</a></li>
    <li role="none"><a class="ease-dropdown-item" href="#" role="menuitem" tabindex="-1">Duplicate</a></li>
    <li class="ease-dropdown-divider" role="separator"></li>
    <li role="none"><a class="ease-dropdown-item ease-dropdown-item-danger" href="#" role="menuitem" tabindex="-1">Delete</a></li>
  </ul>

</div>