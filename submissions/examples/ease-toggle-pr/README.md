# ease-toggle-pr

Pure CSS toggle switch with smooth slide animation using the checkbox hack.

## Features

- Hidden native checkbox for accessibility and form submission
- Visual toggle track with animated thumb slide
- Checked state changes track color and moves thumb
- Focus ring for keyboard navigation
- Disabled state with reduced opacity

## Files

- `style.css` — the toggle switch styles
- `demo.html` — working demo with ON, OFF, and disabled states
- `README.md` — usage documentation

## Usage

```html
&lt;label class="toggle-pr"&gt;
  &lt;input type="checkbox" class="toggle-pr-input"&gt;
  &lt;span class="toggle-pr-track"&gt;
    &lt;span class="toggle-pr-thumb"&gt;&lt;/span&gt;
  &lt;/span&gt;
  &lt;span class="toggle-pr-label"&gt;Label Text&lt;/span&gt;
&lt;/label&gt;