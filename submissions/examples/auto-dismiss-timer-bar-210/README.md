# Floating Notification Toast Alert

A cyberpunk-themed floating notification toast with an automatic dismissal timer, neon effects, and interactive pause-on-hover behavior.

## Features

* Cyberpunk neon visual design
* Floating notification toast
* Automatic 6-second dismissal
* Animated countdown timer bar
* Pause timer on hover
* Pause timer when focused
* Manual close button
* Launch/replay button
* Responsive mobile design
* Keyboard accessible controls
* Reduced-motion support
* Pure HTML, CSS and JavaScript
* No external dependencies

## Files

```text
ease-anim-floating-notification-toast-alert-with-auto-dismiss-timer-bar-210/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in a modern browser.

Click **Launch Notification** to display the toast.

The notification automatically disappears after six seconds. Hovering over the notification pauses the timer, and moving the pointer away resumes it.

## Customization

The main visual colors can be changed through CSS variables:

```css
:root {
    --pink: #ff2bd6;
    --cyan: #00f6ff;
    --purple: #8a2be2;
}
```

The notification duration can be changed in `demo.html`:

```javascript
const duration = 6000;
```

The value is specified in milliseconds.

## Accessibility

The component provides:

* `role="status"`
* `aria-live="polite"`
* Accessible close button
* Keyboard focus support
* Visible focus states
* `prefers-reduced-motion` support

## License

This component is contributed to the EaseMotion-css project according to the repository license.
