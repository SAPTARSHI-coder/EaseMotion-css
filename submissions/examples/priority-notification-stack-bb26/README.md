# Priority Notification Stack

## What does this do?

This submission adds a responsive notification stack that communicates critical, warning, and success states through structure, motion, and accessible focus states.

## How is it used?

Place notification items inside the stack and choose a priority modifier class for each item.

```html
<section class="notification-stack">
  <article class="notice notice-critical" tabindex="0">
    <span class="notice-icon" aria-hidden="true">!</span>
    <div>Payment retry failed</div>
  </article>
</section>
```

## Why is it useful?

It gives EaseMotion a practical status-feedback pattern where animation reinforces urgency while still working with reduced motion and keyboard navigation.
