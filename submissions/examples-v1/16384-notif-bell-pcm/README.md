# Animated Notification Bell / Badge Counter Component

1. **What does this do?** Provides an animated notification bell button with a positioned badge counter. Includes bell wiggle/shake animation on new notification, badge with count display, dot mode (no count), overflow mode ("99+" when count > 99), pulse attention animation, and CSS custom properties for full customization.

2. **How is it used?** Add the bell HTML structure with SVG icon and badge span. Use JS to add `.wiggle` class for shake animation and update the badge textContent for count changes.

```html
<button class="notif-bell" aria-label="Notifications">
  <svg viewBox="0 0 24 24">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
  <span class="notif-badge" aria-live="polite">3</span>
</button>
```

```js
// Trigger wiggle on new notification
bell.classList.remove("wiggle");
void bell.offsetWidth; // reset animation
bell.classList.add("wiggle");

// Update badge count
badge.textContent = "5";
```

3. **Why is it useful?** Notification bells with badge counters are a ubiquitous UI pattern used in dashboards, social apps, and SaaS products — but implementing the wiggle animation, badge positioning, overflow handling, and pulse effect from scratch is tedious. This component provides all of it in a compact, accessible, customizable package.

### Classes

| Class                         | Purpose                  |
| ----------------------------- | ------------------------ |
| `.notif-bell`                 | Base bell button         |
| `.notif-badge`                | Count badge (top-right)  |
| `.notif-badge.dot`            | Small dot without count  |
| `.notif-badge.overflow`       | "99+" compressed display |
| `.notif-badge.pulse`          | Scale pulse animation    |
| `.notif-bell.wiggle`          | Single shake animation   |
| `.notif-bell.wiggle-multiple` | 3-repeat shake           |

### CSS Custom Properties

`--bell-badge-bg`, `--bell-badge-color`, `--bell-badge-size`, `--bell-size`, `--bell-color`, `--bell-hover`

Fixes #16384
