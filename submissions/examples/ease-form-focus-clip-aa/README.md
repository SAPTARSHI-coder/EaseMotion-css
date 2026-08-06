# ease-form-focus-clip-aa

**What does this do?**
Fixes the focus ring on `ease-form` fields being clipped when the form sits inside a container with `overflow: hidden` or `overflow: auto`.

**How is it used?**
Apply the class to your form: `<form class="ease-form-focus-clip-aa">`

**Why is it useful?**
Uses an `inset` box-shadow instead of an outer outline/box-shadow, so the focus indicator always draws inside the element's own bounding box and is never clipped — fixing the accessibility issue in #59761.
