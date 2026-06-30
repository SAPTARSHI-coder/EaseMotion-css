# ease-input-with-prefix

## What does this do?

An elegant form input component wrapper featuring:

- A prefix segment (`ease-input-prefix`) that dynamically highlights and changes color when the associated input field receives focus
- A modern border glow shadow (`ease-input-wrapper:focus-within`) on input focus
- Complete support for custom theme accent colors via the `--ease-prefix-color` CSS custom property

## How is it used?

Wrap your prefix indicator and input field in the container class, specifying your custom accent color inline:

```html
<div class="ease-input-wrapper" style="--ease-prefix-color: #10b981;">
  <div class="ease-input-prefix">$</div>
  <input class="ease-input-field" type="number" placeholder="0.00" />
</div>
```

## Why is it useful?

It provides visual guidance during form completion. By styling the prefix on input focus and applying a soft colored glow to the entire container, users receive clear feedback on which control is active. Highly recommended for currency and username inputs.

## Tech Stack

- HTML
- CSS (Vanilla, using modern `:focus-within` selectors)

## Preview

Open `demo.html` directly in your browser. Click on any input field to see the prefix color update and the border shadow glow.
