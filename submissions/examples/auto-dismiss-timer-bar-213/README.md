````markdown
# Floating Notification Toast Alert

A clean and minimalist floating notification toast component with an automatic
dismiss timer and animated progress bar.

## Features

- Minimalist clean UI
- Automatic 5-second dismissal
- Animated countdown timer bar
- Manual close button
- Show notification button
- Smooth entrance and exit animations
- Responsive mobile layout
- Keyboard focus states
- Reduced-motion accessibility support
- No external dependencies

## Files

```text
ease-ui-floating-notification-toast-alert-with-auto-dismiss-timer-bar-213/
├── demo.html
├── style.css
└── README.md
````

## Usage

Open `demo.html` directly in a browser.

The notification automatically appears when the page loads and disappears
after 5 seconds.

Click **Show Notification** to display it again.

Click the `×` button to dismiss the notification manually.

## Customization

The component uses CSS variables in `style.css`.

You can customize:

* Background color
* Text colors
* Accent color
* Border radius
* Shadow
* Toast spacing
* Timer duration

To change the JavaScript dismissal duration, update:

```javascript
}, 5000);
```

The timer animation duration in CSS should be updated to match:

```css
animation: dismissTimer 5s linear forwards;
```

## Accessibility

The component includes:

* `aria-live="polite"` for notification announcements
* Semantic notification markup
* Accessible close button
* Visible keyboard focus states
* `prefers-reduced-motion` support

## License

This component is contributed to the EaseMotion CSS project under its
repository license.

```
```
