# ease-modal-pop

Modal dialog that pops in with a synced backdrop fade.

## Usage

```html
<div class="ease-modal-backdrop">
  <div class="ease-modal">
    <!-- modal content -->
  </div>
</div>
```

Toggle the backdrop's `display` via JS to open/close.

## Notes

- Backdrop fade and modal pop run simultaneously (0.3s each) for a cohesive open.
- No exit animation is included by default — add a `.closing` variant if you need one.

## Browser support

All modern browsers.