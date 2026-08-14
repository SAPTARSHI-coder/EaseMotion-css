# Retro Floating Label Input

This component is a pure CSS floating-label input with a retro pixel-inspired visual treatment. The label remains associated with the native input while moving into a compact position on focus or when the field contains text.

## Features

- Native email input semantics and browser validation.
- Explicit `<label>` and `for` association for accessibility.
- Smooth focus and label transitions using EaseMotion timing variables.
- Responsive sizing for narrow, tablet, and desktop layouts.
- Visible `:focus-visible` feedback for keyboard users.
- Reduced-motion support through `prefers-reduced-motion`.
- Zero JavaScript dependencies.

## Usage

```html
<div class="field">
  <input id="email" name="email" type="email" placeholder=" " required />
  <label for="email">Email address</label>
</div>
```

The single-space placeholder keeps the input compatible with the CSS `:placeholder-shown` state without displaying placeholder text.

## Demo

Open `demo.html` directly in a modern browser. The example works without a server or build step.
