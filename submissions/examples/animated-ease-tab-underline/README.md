# ease-tab-underline

Underline indicator that glides between tabs on selection.

## Usage

```html
<div class="ease-tabs">
  <div class="ease-tab active">Home</div>
  <div class="ease-tab">Profile</div>
  <div class="ease-tab-indicator"></div>
</div>
```

Requires a small JS snippet (included in `demo.html`) to reposition `.ease-tab-indicator` on click, since tab widths are dynamic.

## Notes

- Call `moveIndicator()` on load to position the indicator under the initially active tab.
- Works with any number of tabs; indicator width matches the clicked tab's width automatically.

## Browser support

All modern browsers.