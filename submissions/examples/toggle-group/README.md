# Toggle Group

**Category:** Input
**Issue:** #86872

A segmented multi-select control. Each option is an independent toggle chip;
selected chips fill with the accent color and stay highlighted until toggled
off again.

## What it does
- Multiple chips can be active at once (unlike radio-style segmented controls).
- Selecting a chip fills its background and plays a short "pop" animation.
- Fully keyboard accessible — chips are real `<button>` elements, so Tab/Space/Enter
  work out of the box.
- Respects `prefers-reduced-motion` and `prefers-color-scheme`.

## How to use

```html
<div class="ease-toggle-group" role="group" aria-label="Select tags">
  <button type="button" class="ease-toggle-chip" aria-pressed="false">Design</button>
  <button type="button" class="ease-toggle-chip" aria-pressed="true">Animation</button>
</div>

<script>
  document.querySelectorAll('.ease-toggle-group').forEach((group) => {
    group.addEventListener('click', (e) => {
      const chip = e.target.closest('.ease-toggle-chip');
      if (!chip || chip.disabled) return;
      const pressed = chip.getAttribute('aria-pressed') === 'true';
      chip.setAttribute('aria-pressed', String(!pressed));
    });
  });
</script>
```

Add `ease-toggle-group--sm` for a smaller/compact variant.

## Why it fits EaseMotion CSS
- Zero dependencies, pure CSS + a few lines of vanilla JS.
- Uses CSS custom properties so consumers can retheme via `--ease-toggle-fill`, etc.
- Consistent with the framework's animation-first philosophy (spring-like
  `cubic-bezier` easing and a selection "pop" keyframe).

## Browser support
Chrome, Firefox, Edge, Safari (uses `:focus-visible` and `aria-pressed`, both
widely supported).
