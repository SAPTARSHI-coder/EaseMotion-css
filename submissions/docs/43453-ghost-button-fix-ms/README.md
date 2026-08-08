# Ghost Button Transition Fix

Resolves #43453.

### What does this do?
Adds a smooth CSS transition to the `.ease-btn-ghost` class for `background-color` and `color` properties on hover state.

### How is it used?
Simply use the ghost button normally: `<button class="ease-btn ease-btn-ghost">Hover Me</button>`. The hover effect will now animate smoothly instead of snapping.

### Why is it useful?
Improves the interactive feel of the UI by ensuring consistency with the transitions present on other button variants (like primary, success, danger).
