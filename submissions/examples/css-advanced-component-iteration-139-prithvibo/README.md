# Animated Notification Center

A responsive pure CSS notification center with animated notification cards, status badges, unread indicators, and interactive hover states.

## Features

- Staggered notification entrance animation
- Unread notification indicators
- Success, message, warning, and update states
- Priority badges
- Interactive hover effects
- Responsive mobile layout
- Reduced-motion accessibility support
- Pure HTML and CSS
- No JavaScript or external frameworks

## Usage

Open `demo.html` directly in a modern browser.

The notification cards use the `.notification` class:

```html
<article class="notification">
    <div class="notification-icon">✓</div>
    <div class="notification-content">
        <strong>Payment completed</strong>
        <p>Your payment was processed successfully.</p>
    </div>
</article>