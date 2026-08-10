# Animated Segmented Toggle Control

### What does this do?

It is a segmented control whose highlight pill slides to the selected segment, built with native radio inputs so it works with no JavaScript and stays keyboard accessible.

### How is it used?

```html
<div class="segmented" role="radiogroup" aria-label="Billing period">
  <input type="radio" name="seg" id="seg-1" checked />
  <label for="seg-1">Monthly</label>
  <input type="radio" name="seg" id="seg-2" />
  <label for="seg-2">Yearly</label>
  <input type="radio" name="seg" id="seg-3" />
  <label for="seg-3">Lifetime</label>
  <span class="segmented-highlight" aria-hidden="true"></span>
</div>
```

Each `input` is visually hidden and paired with a `label`. Selecting a segment moves the `.segmented-highlight` pill with a transform, and the checked label brightens.

### Why is it useful?

Segmented toggles are common for billing switches, view switchers, and filters. This turns the native `:checked` state into a smooth sliding animation using only a transform transition, so it needs no JavaScript. It uses a `radiogroup` role, keeps arrow-key navigation from native radios, shows a visible focus ring, and disables motion under `prefers-reduced-motion: reduce`.
