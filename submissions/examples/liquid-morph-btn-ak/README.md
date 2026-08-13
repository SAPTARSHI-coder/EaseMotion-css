# Liquid Morph Button

## What does this do?

A pure CSS button that transitions through three states — default, loading spinner, and success checkmark — using the hidden checkbox hack with zero JavaScript.

## How is it used?

Toggle the button state by clicking. The checkbox drives the animation sequence.

```html
<label class="morph-btn-ak" role="button" aria-label="Submit" tabindex="0">
  <input type="checkbox" hidden>
  <span class="morph-btn-text-ak">Submit</span>
  <span class="morph-btn-spinner-ak"></span>
  <span class="morph-btn-check-ak"></span>
</label>
```

### Custom Properties

| Variable | Default | Purpose |
|---|---|---|
| `--morph-bg-ak` | `#6c63ff` | Button background |
| `--morph-size-ak` | `200px` | Button width |
| `--morph-duration-ak` | `0.4s` | Transition speed |

## Why is it useful?

Adds a polished micro-interaction pattern to the EaseMotion library — no JavaScript, fully accessible via keyboard, respects `prefers-reduced-motion`, and demonstrates advanced CSS state machine design using the checkbox hack.
