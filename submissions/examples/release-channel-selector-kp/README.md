# Release Channel Selector KP

## What does this do?

Release Channel Selector KP adds a CSS-only stable, beta, and canary channel picker with an animated selection track and channel-specific release details.

## How is it used?

Place radio inputs and labels inside `channel-picker__controls`, then use the `channel-preview` elements to display the selected channel state.

```html
<div class="channel-picker__controls">
  <span class="channel-picker__track" aria-hidden="true"></span>

  <input type="radio" id="stable" name="channel" />
  <label for="stable">
    <strong>Stable</strong>
    <small>Recommended</small>
  </label>
</div>
```

## Why is it useful?

It gives EaseMotion CSS a practical settings pattern that turns a release preference into clear animated feedback while preserving keyboard access, responsive behavior, and reduced-motion support.
