# ease-input focus ring clipping fix

**What does this do?**
Fixes the input focus ring so it stays visible even inside a parent with `overflow: hidden` or `overflow: auto`, by drawing the ring inward (`inset`) instead of outward.

**How is it used?**
Wrap any input in a container and apply the class:

    <div class="field-wrapper">
      <input class="demo-input" type="text">
    </div>

**Why is it useful?**
The current focus ring is an outward box-shadow, which any ancestor with `overflow: hidden` will clip — a real accessibility regression for keyboard users, since the focus indicator can disappear entirely. Using `inset` keeps the ring inside the element's own bounding box regardless of ancestor overflow, matching the issue's requested expected behavior.

Note: core's `forms.css` also has two competing rules for `.ease-input` — a `:focus-visible` rule and a separate `:focus` rule (tagged `Issue #10869`) with equal specificity, where `:focus` wins on keyboard focus too and dims the ring's alpha (0.18 → 0.1). Flagging this for the maintainer since it's adjacent but likely a separate cleanup.
