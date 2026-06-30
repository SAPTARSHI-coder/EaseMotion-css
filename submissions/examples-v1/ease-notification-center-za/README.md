# CSS Notification Center Component

## What does this do?
A complete notification center with tabbed navigation, notification list with read/unread states, colored category icons, dismiss buttons, and header actions.

## How is it used?
```html
<div class="nc-item nc-item-unread">
  <div class="nc-icon nc-icon-blue">&#128276;</div>
  <div class="nc-body">
    <div class="nc-text"><strong>User</strong> commented on your post.</div>
    <div class="nc-time">2 minutes ago</div>
  </div>
  <button class="nc-dismiss">&times;</button>
</div>
```

## Why is it useful?
Creates a professional notification center for web applications. Features a header with notification count badge and action buttons, five category tabs for filtering, and a scrollable notification list with colored category icons, read and unread states with left border accent, rich text with bold highlights, relative timestamps, and dismiss buttons that appear on hover. Unread items have a distinct blue left border and subtle background. Fully responsive with mobile-optimized layout.
