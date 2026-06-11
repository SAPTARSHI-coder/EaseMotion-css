# Ease Toggle

CSS-only toggle switch component with default, success, danger, and warning color variants.

## Usage

```html
<div class="toggle-field">
  <input
    type="checkbox"
    id="dark-mode"
    class="ease-toggle"
    role="switch"
    aria-label="Enable dark mode"
  >
  <label for="dark-mode">
    <span class="ease-toggle-sr-only">Enable dark mode</span>
  </label>
</div>
```

```html
<script>
document.querySelectorAll('input.ease-toggle[role="switch"]').forEach(function(toggle) {
  toggle.setAttribute('aria-checked', toggle.checked ? 'true' : 'false');
  toggle.addEventListener('change', function() {
    this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
  });
});
</script>
```

## Variants

| Class | Description |
| --- | --- |
| `.ease-toggle` | Default blue checked state |
| `.ease-toggle.success` | Green checked state |
| `.ease-toggle.danger` | Red checked state |
| `.ease-toggle.warning` | Amber checked state |

## Accessibility

- Each toggle uses `role="switch"` and `aria-checked` to communicate state to screen readers.
- Provide a descriptive `aria-label` on each input (e.g. `aria-label="Enable dark mode"`).
- Include visually hidden text inside the `<label>` matching the `aria-label` for broader assistive-tech support.
- A JavaScript snippet keeps `aria-checked` in sync with the checkbox state — include it in your page.
- Keyboard users will see a focus ring on the toggle label when navigating by Tab.
