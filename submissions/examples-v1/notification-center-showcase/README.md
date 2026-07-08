# Animated Notification Center Drawer Showcase

An isolated interactive UI component submission implementing the dynamic notification bar module preset (`.ease-notification-center`). Uses CSS scale, translation transformations, and checkbox sibling streams to orchestrate item dismissal animations smoothly without JavaScript.

## Functional Mechanics

- **Zero JS Interaction Toggling:** Leverages hidden checkbox inputs and standard CSS sibling selectors (`~` and `+`) to open or collapse the drawer container seamlessly and discard dismissed alert alerts.
- **Hardware-Accelerated Physics:** Animates the drop-down entrance slide sequences via combination metrics (`translateY()` and `scale()`) inside a GPU compositor timeline thread to isolate layers cleanly and ensure paint stability.
- **Collapsible Card Structures:** Trimming an alert removes its profile from layout tracks by applying CSS transitions across `max-height` and `padding` metrics, ensuring remaining active items slide upward into position fluidly.

## Usage Layout Structure
```html

<input type="checkbox" id="drawer-trigger" class="ease-notif-toggle" />
<label for="drawer-trigger">Open Notifications</label>

<div class="ease-notification-center">
  
  <input type="checkbox" id="item-1" class="ease-dismiss-check" />
  <div class="ease-notif-item">
    <p>Message text</p>
    <label for="item-1">&times;</label>
  </div>
</div>
```

Closes #13939
