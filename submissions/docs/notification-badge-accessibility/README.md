# Dynamic Notification Alert Badge (Accessibility Setup Guide)

This guide outlines the critical accessibility requirements for building notification badges. A visual red dot with a number is intuitive for sighted users, but without proper ARIA attributes, it presents a confusing or broken experience for screen reader users.

## 1. Managing Screen Reader Output

When a button contains both an SVG icon and a numeric badge (e.g., a `<span>3</span>`), a screen reader without ARIA attributes might announce: *"Button, Graphic, 3"*. This lacks context.

**The Solution:**
1. Place a descriptive `aria-label` on the parent `<button>`.
2. Hide the physical badge from the accessibility tree using `aria-hidden="true"`.

```html
<!-- The aria-label provides the full, human-readable context -->
<button 
    type="button" 
    class="notification-btn" 
    aria-label="Notifications, 3 unread messages"
>
    <!-- SVG icon -->
    <svg>...</svg>
    
    <!-- Visual badge is hidden from screen readers to prevent redundancy -->
    <span class="notification-badge" aria-hidden="true">3</span>
</button>
```

## 2. Dynamic Updates (`aria-live`)

If your application updates the badge number dynamically via JavaScript without refreshing the page, the screen reader needs to be notified. 

Wrap the notification component in an `aria-live="polite"` region. When the `aria-label` on the button changes, the screen reader will politely wait for the user to finish their current action before announcing the new notification count.

```html
<!-- Wrap the component in an aria-live region -->
<div aria-live="polite">
    <button aria-label="Notifications, 4 unread messages">
       ...
    </button>
</div>
```

## 3. Keyboard Navigation

Because notifications are actionable items, they must be keyboard accessible.

- Use a `<button>` tag, not a `<div>`.
- Provide a clear, high-contrast `:focus-visible` outline.

```css
.notification-btn:focus-visible {
    outline: 3px solid #3b82f6; /* High contrast blue */
    outline-offset: 4px;
}
```

## 4. Reduced Motion

Dynamic badges often "pop" or bounce in when they appear. Respect users with motion sensitivities by hooking the animation to a CSS variable and overriding it with `@media (prefers-reduced-motion)`.

```css
:root {
    /* Define the default animation */
    --badge-animation: pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.notification-badge {
    animation: var(--badge-animation);
}

/* Disable the animation if requested by the OS */
@media (prefers-reduced-motion: reduce) {
    :root {
        --badge-animation: none;
    }
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
