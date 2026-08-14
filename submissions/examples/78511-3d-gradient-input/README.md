# 3D Input Field with Gradient Styling

A responsive 3D input field component featuring layered depth, animated
gradient borders, subtle highlights, and modern form styling.

## Features

- 3D-inspired layered input surface
- Animated gradient edge
- Focus-triggered sheen effect
- Floating visual depth
- Name, email, and password inputs
- Gradient CTA button
- Interactive hover states
- Responsive layout
- Semantic labels
- Native form controls
- Visible keyboard focus states
- `prefers-reduced-motion` support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

A basic input can be created with:

```html
<div class="input-field">
  <label class="input-field__label" for="email">
    Email address
  </label>

  <div class="input-field__shell">
    <span class="input-field__glow" aria-hidden="true"></span>

    <input
      class="input-field__control"
      id="email"
      name="email"
      type="email"
      placeholder="you@example.com"
    />
  </div>
</div>