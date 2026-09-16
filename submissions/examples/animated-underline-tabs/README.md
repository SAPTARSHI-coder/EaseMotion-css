# Animated Underline Tabs

A tab navigation component with a sliding underline indicator that smoothly moves to whichever tab is clicked.

## Usage
Wrap `.tab` buttons and a `.tab-underline` span inside a `.tabs` container. Call `setActiveTab(this)` on each tab's `onclick` to switch the active state and animate the underline.

```html
<div class="tabs">
  <button class="tab active" onclick="setActiveTab(this)">Home</button>
  <button class="tab" onclick="setActiveTab(this)">Profile</button>
  <span class="tab-underline"></span>
</div>
```

## Browser support
Works in all modern browsers — uses `offsetWidth`/`offsetLeft` and CSS transitions on `transform`/`width`.

## Notes
Requires a small amount of JavaScript to measure the clicked tab's position and width; the sliding motion itself is a pure CSS transition.