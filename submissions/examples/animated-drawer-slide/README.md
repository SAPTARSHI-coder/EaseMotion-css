# ease-drawer-slide

Off-canvas side drawer / mobile menu with a slide-in transition and dimming overlay.

## Usage

```html
<div class="ease-drawer-overlay"></div>
<div class="ease-drawer">
  <!-- menu content -->
</div>
```

Toggle the `open` class on both elements via JS.

## Notes

- Overlay uses `pointer-events: none` when closed so it doesn't block clicks underneath.
- For a right-side drawer, change `left: 0` to `right: 0` and flip the `translateX` direction.

## Browser support

All modern browsers.