# ease-loading-text-fade-cycle-sap

**Level: Beginner**

A loading label that cycles through multiple status messages with a crossfade, instead of showing a single static "Loading...".

## Usage

```html
<div class="text-fade-cycle-sap">
  <span class="active">Loading assets...</span>
  <span>Preparing your dashboard...</span>
</div>
```

Cycle the `active` class between spans via JS (`setInterval` example in `demo.html`).

## Notes

- All spans are absolutely positioned within the container so only one is visible at a time without layout shift.
- Set a fixed container `height` matching your tallest message to avoid jumpiness.

## Browser support

All modern browsers.