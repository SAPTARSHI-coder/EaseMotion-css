# CSS Push Notification

A pure CSS mobile push notification card featuring a smooth entrance animation, notification icon, message content, timestamp, and action buttons.

## Features

- Pure HTML and CSS
- No JavaScript
- Mobile-inspired notification card
- Smooth slide and scale entrance animation
- Notification icon and timestamp
- Dismiss and View action buttons
- Close button with hover interaction
- Keyboard accessible
- Visible focus states
- Responsive design
- `prefers-reduced-motion` support

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then add the notification markup:

```html
<section class="notification" aria-label="Notification">
    <div class="notification-icon" aria-hidden="true">
        🔔
    </div>

    <div class="notification-content">
        <div class="notification-header">
            <h1>New Message</h1>
            <time datetime="PT2M">2 min ago</time>
        </div>

        <p>
            You have a new message waiting for you.
        </p>

        <div class="notification-actions">
            <button type="button" class="notification-button dismiss">
                Dismiss
            </button>

            <button type="button" class="notification-button view">
                View
            </button>
        </div>
    </div>

    <button
        type="button"
        class="notification-close"
        aria-label="Close notification"
    >
        ×
    </button>
</section>
```

Place the notification inside your desired container.

## Customization

Change the notification width:

```css
.notification {
    width: min(100%, 420px);
}
```

Change the notification background:

```css
.notification {
    background: #191919;
}
```

Change the border radius:

```css
.notification {
    border-radius: 20px;
}
```

Change the entrance animation speed:

```css
.notification {
    animation-duration: 0.55s;
}
```

Change the notification icon:

```html
<div class="notification-icon" aria-hidden="true">
    🔔
</div>
```

## How It Works

The notification uses CSS keyframes to create a smooth entrance animation.

The animation combines opacity, translation, and scaling:

```css
@keyframes notification-enter {
    0% {
        opacity: 0;
        transform: translateY(-28px) scale(0.94);
    }

    60% {
        opacity: 1;
        transform: translateY(5px) scale(1.01);
    }

    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
```

This creates a subtle:

```text
Slide → Fade → Overshoot → Settle
```

The buttons and close control use CSS transitions for hover, active, and focus interactions.

No JavaScript or external libraries are required.

## Accessibility

The notification uses semantic HTML elements and accessible controls.

The notification icon is decorative and uses:

```html
aria-hidden="true"
```

The close button includes an accessible label:

```html
aria-label="Close notification"
```

All actions use native `<button>` elements, providing keyboard interaction without JavaScript.

Visible `:focus-visible` states are included for keyboard users.

## Reduced Motion

When `prefers-reduced-motion: reduce` is enabled, the entrance animation and transitions are disabled.

```css
@media (prefers-reduced-motion: reduce) {
    .notification,
    .notification-button,
    .notification-close {
        animation: none;
        transition: none;
    }
}
```

## Demo

Open `demo.html` directly in a browser.

No server or JavaScript is required.

## Browser Testing

- Microsoft Edge

## Why It Fits EaseMotion CSS

This example demonstrates how CSS animations, transforms, transitions, responsive layouts, and accessible HTML can create a modern push notification interface without JavaScript.

It can be used for:

- Mobile notifications
- Messaging interfaces
- Dashboard alerts
- System notifications
- Web applications
- Feedback messages
- Notification center interfaces

## Files

- `demo.html` — Demo page
- `style.css` — Notification styling and animations
- `README.md` — Documentation

## License

This example is part of the EaseMotion CSS project.