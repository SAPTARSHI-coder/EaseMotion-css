# Animated Toggle Switch Set

### What does this do?

It shows a settings panel of on and off toggle switches, each with a label and a knob that slides with a spring when toggled.

### How is it used?

```html
<label class="setting">
  <span class="setting-text">
    <strong>Email notifications</strong>
    <span>Get an email when something happens.</span>
  </span>
  <input type="checkbox" class="switch-input" checked />
  <span class="switch" aria-hidden="true"></span>
</label>
```

Each row is a `label` wrapping a checkbox and a `.switch`. When the checkbox is checked, the track turns accent and the knob slides across.

### Why is it useful?

Toggle switches are the standard control for settings and preferences. This slides the knob and swaps the track color with a transform and color transition driven by `:checked`, so it needs no JavaScript. The switches stay keyboard operable with a focus ring, and motion is disabled under `prefers-reduced-motion: reduce`.
