# Ease Native Popover

## 1. What does this do?
This component utilizes the native HTML Popover API to create a modal/dropdown overlay without requiring any JavaScript. By leveraging native browser features, popover toggling and dismiss behavior are handled entirely by standard HTML attributes.

## 2. How is it used?
Link a trigger element to a popover container using the `popovertarget` attribute matching the `id` of the `popover` element:

```html
<!-- Trigger Button -->
<button class="ease-popover-trigger" popovertarget="ease-menu">Open Settings</button>

<!-- Popover Content -->
<div id="ease-menu" class="ease-native-popover" popover>
  <h3>Settings</h3>
  <p>Popover content goes here.</p>
  <button popovertarget="ease-menu" popovertargetaction="hide" class="ease-popover-trigger" style="background: #ef4444;">Close</button>
</div>
```

## 3. Why is it useful?
Using the HTML Popover API permanently eliminates the need for JavaScript state management (`isOpen`), focus trapping logic, click-outside event listeners, and z-index wars, as the browser promotes it to the top layer natively.
