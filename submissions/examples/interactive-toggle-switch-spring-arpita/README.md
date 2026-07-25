# Interactive Toggle Switch with Spring Motion

A clean, accessible toggle switch component featuring smooth spring physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

## What does this do?
Provides a modern toggle switch component where the thumb glides across the track with an elastic spring animation when checked or unchecked.

## How is it used?
```html
<label class="toggle-container" for="settings-toggle">
  <input type="checkbox" id="settings-toggle" class="toggle-input" />
  <span class="toggle-track">
    <span class="toggle-thumb"></span>
  </span>
  <span class="toggle-label">Enable Feature</span>
</label>
```

## Why is it useful?
Toggle switches are a core UI pattern across web applications (theme toggle, notification settings, audio settings). This implementation provides high accessibility (`:focus-visible` outlines, disabled state handling) combined with EaseMotion's animation-first motion curve philosophy.
