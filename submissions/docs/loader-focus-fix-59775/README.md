# Loader Focus Fix

1. What does this do? Fixes an accessibility bug where the `ease-loader` focus ring is clipped when placed inside an `overflow: hidden` parent.
2. How is it used? Apply `.loader-focus-fix` to the loader element.
3. Why is it useful? It ensures that screen-reader and keyboard users can always see when a loader component is focused, complying with accessibility standards by containing the focus ring within the element's bounding box using a negative `outline-offset`.
