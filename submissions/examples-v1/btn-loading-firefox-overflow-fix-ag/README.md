# Bug Fix: .ease-btn-loading Spinner in Firefox with overflow:hidden

## What does this do?
Fixes the loading spinner pseudo-element (`::after`) being clipped or invisible in Firefox when the button is inside a parent container with `overflow: hidden` and `border-radius`. The fix replaces the `translate` CSS shorthand with the `transform: translate()` longhand and adds `overflow: visible` on the loading button itself.

## How is it used?
```html
<!-- Wrap in a card with overflow:hidden — spinner still visible -->
<div style="overflow:hidden; border-radius:1rem; padding:1.5rem;">
  <button class="ease-btn ease-btn-primary ease-btn-loading" aria-busy="true" aria-label="Loading">
    Loading
  </button>
</div>
```

## Why is it useful?
The `translate` CSS shorthand (separate from `transform`) is a newer property that not all browser versions handle identically when computing stacking contexts inside `overflow: hidden` parents. By using `transform: translate(-50%, -50%)` and setting `overflow: visible` on the button, the spinner is guaranteed to be visible in all major browsers including Firefox 115+. This fix makes `.ease-btn-loading` reliable in real-world designs where buttons are often inside cards with rounded corners.

## Fixes
Fixes #9841
