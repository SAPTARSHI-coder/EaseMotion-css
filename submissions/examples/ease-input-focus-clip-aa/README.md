# ease-input-focus-clip-aa

**What does this do?**
Fixes the focus ring on `ease-input` being clipped when placed inside a container with `overflow: hidden` or `overflow: auto`.

**How is it used?**
Apply the class to your input: `<input class="ease-input-focus-clip-aa" />`

**Why is it useful?**
Instead of an outer `outline`/`box-shadow` that can be cut off by a parent's overflow, this uses an `inset` box-shadow, which draws inside the element's own bounding box and is never clipped — fixing the accessibility issue in #59767.
