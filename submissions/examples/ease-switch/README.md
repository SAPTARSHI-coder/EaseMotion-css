# ease-switch — Animated Toggle Switch

## What does this do?

A toggle switch (iOS-style pill) for boolean settings — enable/disable, on/off, show/hide. Uses a hidden native checkbox with `role="switch"` for full accessibility.

## Variants

| Variant          | Class                         | Description                        |
| ---------------- | ----------------------------- | ---------------------------------- |
| Small            | `.ease-switch--sm`            | 32x20px track, 16px thumb          |
| Medium (default) | _(none)_                      | 40x24px track, 20px thumb          |
| Large            | `.ease-switch--lg`            | 52x32px track, 28px thumb          |
| Danger           | `.ease-switch--danger`        | Red track when on                  |
| Disabled         | `.ease-switch--disabled`      | Reduced opacity, no pointer events |
| Label right      | `.ease-switch-wrapper--right` | Label on the right side            |

## How is it used?

```html
<label class="ease-switch-wrapper">
  <span class="ease-switch__label">Enable notifications</span>
  <span class="ease-switch">
    <input type="checkbox" role="switch" />
    <span class="ease-switch__track">
      <span class="ease-switch__thumb"></span>
    </span>
  </span>
</label>
```

Toggle the `.ease-switch--checked` class on `.ease-switch` to match the checkbox state:

```js
input.addEventListener("change", function () {
  sw.classList.toggle("ease-switch--checked", input.checked);
  input.setAttribute("aria-checked", input.checked);
});
```

Without wrapper (standalone):

```html
<span class="ease-switch">
  <input type="checkbox" role="switch" aria-label="Toggle setting" />
  <span class="ease-switch__track">
    <span class="ease-switch__thumb"></span>
  </span>
</span>
```

## Why is it useful?

Toggle switches are a common UI pattern for boolean settings, privacy controls, and feature flags. This component wraps a native checkbox for full accessibility while providing the familiar iOS-style switch visual.

## Tech Stack

- HTML (native checkbox with `role="switch"`)
- CSS (pseudo-elements, custom properties)
- JavaScript (minimal — sync CSS class with checkbox state)

## Preview

Open `demo.html` directly in your browser to see all variants in action.

## Accessibility

- Hidden native checkbox with `role="switch"` and `aria-checked`
- Visible focus ring via `:focus-visible`
- Label associated via wrapping `<label>` or `aria-label`
- Keyboard operable (Space to toggle)

## Contribution Notes

- Class naming follows EaseMotion BEM convention (`ease-switch__*`)
- Uses `var(--ease-primary)` for the on-state track colour
- Maintainer may adjust naming before merging
