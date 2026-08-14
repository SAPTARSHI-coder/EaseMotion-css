# Neon Flicker Text (`ease-neon-flicker-rs`)

## Description
This submission adds a **Neon Flicker Text Effect** to EaseMotion CSS.

The text glows like a neon sign and flickers subtly. On hover or keyboard focus, the flicker becomes faster and more noticeable.

## Features
- Pure CSS, zero JavaScript
- Neon glow with flicker animation
- Works on hover and keyboard focus
- Customizable color using CSS variables
- Includes `prefers-reduced-motion` support

## How to Use
Apply the class to any heading or text element:

```html
<h1 class="ease-neon-flicker-rs">
  Neon Motion
</h1>
```

## Custom Color
You can change the neon color using CSS variables:

```html
<h1
  class="ease-neon-flicker-rs"
  style="
    --neon-color-rs: #a78bfa;
    --neon-glow-rs: rgba(167, 139, 250, 0.75);
  "
>
  Purple Neon
</h1>
```

## Demo
Open `demo.html` directly in your browser. No server is required.

## Checklist
- [x] Code is placed inside `submissions/examples/neon-flicker-text-rs/`
- [x] Includes `demo.html`
- [x] Includes `style.css`
- [x] Includes `README.md`
- [x] Follows unique suffix naming rule
- [x] No changes made to `core/`
- [x] No changes made to `components/`