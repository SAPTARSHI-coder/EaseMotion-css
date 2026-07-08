# Notification Inbox Priority Stack

## What does this do?

A stacked notification inbox with four priority states: high (red), medium (amber), low (blue), and success (green). Unread items show a coloured dot. High and medium unread dots pulse with an expanding ring animation to draw attention without being intrusive. Each card has a left accent bar that expands on hover, a slide-right entrance on hover, and a dismiss button that triggers a slide-out exit animation. An empty state is shown when all items are dismissed.

## How is it used?

Wrap notifications in `.notification-inbox`. Each notification is an `.inbox-item` — add modifier classes to set priority and read state:

```html
<section class="notification-inbox" aria-label="Notifications">

  <div class="inbox-header">
    <span class="inbox-title">
      Notifications
      <span class="inbox-count">3</span>
    </span>
    <button class="inbox-mark-all" type="button">Mark all read</button>
  </div>

  <!-- High priority, unread -->
  <article class="inbox-item is-unread is-high" tabindex="0">
    <span class="inbox-dot" aria-hidden="true"></span>
    <div class="inbox-icon" aria-hidden="true">&#9888;</div>
    <div class="inbox-body">
      <div class="inbox-item-title">Payment failed</div>
      <p class="inbox-item-desc">Update billing details to keep the workspace active.</p>
      <div class="inbox-meta">
        <span class="inbox-time">2 min ago</span>
        <span class="inbox-badge inbox-badge-high">High</span>
      </div>
    </div>
    <button class="inbox-dismiss" type="button" aria-label="Dismiss">&times;</button>
  </article>

  <!-- Medium priority, unread -->
  <article class="inbox-item is-unread is-medium" tabindex="0">
    <!-- ... -->
  </article>

  <!-- Read item (no is-unread class) -->
  <article class="inbox-item" tabindex="0">
    <!-- ... -->
  </article>

  <div class="inbox-footer">
    <button class="inbox-view-all" type="button">View all &rarr;</button>
  </div>

</section>
```

Priority modifier classes:

| Class | Dot colour | Accent bar | Badge class |
|---|---|---|---|
| `is-high` | Red, pulsing ring | Red | `inbox-badge-high` |
| `is-medium` | Amber, pulsing ring | Amber | `inbox-badge-medium` |
| `is-low` | Blue (no pulse) | — | `inbox-badge-low` |
| `is-success` | Green (no pulse) | — | `inbox-badge-success` |
| *(none)* | Indigo (no pulse) | — | `inbox-badge-info` |

Add `is-unread` to any item to activate the coloured dot and background tint. Remove it (or remove the class via JavaScript) to mark the item as read.

To dismiss an item with animation:

```js
item.classList.add('is-dismissed');
setTimeout(() => item.remove(), 300);
```

## Why is it useful?

Many apps need notification centres, but the pattern is often handled as a plain list with no motion context. This component shows how subtle, purposeful animation — a pulsing ring for urgent items, an accent bar that expands on hover, and a slide-out on dismiss — draws attention to what matters without turning every notification into an alarming toast. The priority system maps to real-world severity levels, the empty state gives the user clear closure, and the whole component works with keyboard navigation, dark mode, and `prefers-reduced-motion` out of the box.
