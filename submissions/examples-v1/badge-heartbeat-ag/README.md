# Badge Heartbeat Animation

This submission introduces a highly reusable `ease-heartbeat` animation designed specifically for the Badge component. It provides a subtle, pulsing "heartbeat" effect that naturally attracts the user's attention without being overly aggressive or distracting.

## ✨ Feature Overview

Badges are commonly used to draw attention to unread notifications, live status changes, or priority alerts. The `.ease-heartbeat` class uses a custom double-beat scale animation to give badges a sense of life and urgency.

*   **Subtle & Engaging**: Uses a double-pulse rhythm similar to a real heartbeat.
*   **Highly Performant**: Animates exclusively using the `transform` property (`scale`), completely avoiding layout thrashing.
*   **Fully Accessible**: Natively integrates `@media (prefers-reduced-motion: reduce)` to disable the animation for users who prefer static interfaces.

## 🚀 Installation & Usage

To use this animation in your project, copy the `.ease-heartbeat` class and its associated `@keyframes` from `style.css` into your project's stylesheet.

### Basic Usage

Simply add the `.ease-heartbeat` class to any badge element.

```html
<span class="badge red ease-heartbeat">99+</span>
<span class="badge badge-dot green ease-heartbeat"></span>
```

### Staggering Multiple Badges

If you have multiple pulsating badges on the screen at once, it looks more organic if they don't pulse in exact unison. You can use CSS `animation-delay` to stagger them.

```css
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.5s; }
```

```html
<span class="badge blue ease-heartbeat delay-1">NEW</span>
<span class="badge purple ease-heartbeat delay-2">SALE</span>
```

## 🛠️ Running the Demo

1.  Navigate to `submissions/examples/badge-heartbeat-ag/`.
2.  Open `demo.html` in any modern web browser.

The demo showcases five different configurations:
1.  **Notification Pill**: A standard unread count badge.
2.  **Online Indicator**: A small, circular status dot.
3.  **New Feature**: A pill badge highlighting a new UI element.
4.  **Warning Alert**: A circular icon badge.
5.  **Sale Tag**: A standard promotional badge.

## 📱 Browser Compatibility

This animation utilizes standard CSS3 animations and transforms, ensuring excellent compatibility across all modern browsers:
*   Chrome (Desktop & Android)
*   Firefox (Desktop & Android)
*   Safari (macOS & iOS)
*   Edge

## ♿ Accessibility Considerations

Animations that run infinitely can cause discomfort for users with vestibular disorders. This implementation strictly adheres to accessibility best practices by utilizing the `prefers-reduced-motion` media query.

If a user has configured their OS or browser to reduce motion, the `.ease-heartbeat` class will gracefully degrade to a static state.

```css
@media (prefers-reduced-motion: reduce) {
    .ease-heartbeat {
        animation: none;
        transform: none;
    }
}
```
