# Animated Theme Toggle Switch

### What does this do?

It is a toggle switch whose knob slides and morphs from a crescent moon to a sun, and re-themes a preview panel from dark to light, using only CSS.

### How is it used?

```html
<input type="checkbox" id="theme-input" class="theme-input" aria-label="Toggle light mode" />
<label for="theme-input" class="theme-track">
  <span class="theme-knob" aria-hidden="true"></span>
</label>
<div class="theme-preview">Preview content</div>
```

The checkbox, the track label, and the preview are siblings, so `:checked` can both move the knob (adjacent sibling) and re-theme the preview (general sibling). The moon shape is drawn with an inset box-shadow and becomes a glowing sun when checked.

### Why is it useful?

A theme switch is a common control. This animates the knob and swaps the panel colors with only transforms and color transitions driven by `:checked`, so it needs no JavaScript. The checkbox stays keyboard operable with a focus ring, and transitions are disabled under `prefers-reduced-motion: reduce`.
