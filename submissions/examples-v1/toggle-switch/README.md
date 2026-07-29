# Ease Toggle Switch

A pure CSS, animated toggle switch component for the EaseMotion library. No JavaScript is required — the animation and state are handled entirely with a hidden checkbox and CSS transitions.

## Files

- `demo.html` — standalone demo page showing two toggle examples (default off, default on)
- `style.css` — the `ease-toggle` component styles and animation

## Usage

Copy this markup wherever you want a toggle:

​```html
<label class="ease-toggle">
  <input type="checkbox" />
  <span class="ease-toggle-track">
    <span class="ease-toggle-thumb"></span>
  </span>
</label>
​```

Include `style.css` in your page. That's it — no JS setup needed.

## How it works

- The actual `<input type="checkbox">` is visually hidden but still toggled on click.
- `.ease-toggle-track` changes background color based on the checkbox's `:checked` state.
- `.ease-toggle-thumb` slides across using `transform: translateX()` combined with a bouncy `cubic-bezier` easing curve, and rotates while sliding for a distinct visual signature.
- Colors and animation speed are controlled via CSS custom properties (`--toggle-off-color`, `--toggle-on-color`, `--toggle-speed`) so it's easy to re-theme.

## Accessibility

- Fully keyboard operable (native checkbox behavior).
- `:focus-visible` outline included for keyboard navigation clarity.

## Preview

Open `demo.html` directly in any browser to see it live.