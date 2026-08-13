# Notification Bell Menu

A bell button that springs open a notification panel with a badge counter, unread highlighting, and mark-all-read behavior.

## How is it used?

Toggle `.open` on the dropdown and `.active` on the bell to show the panel:

```html
<button class="bell-btn" id="bellBtn">…</button>
<div class="dropdown" id="dropdown">…</div>
```

```css
.dropdown {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.dropdown.open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(6px);
}
```

The `.badge` counter reads the count of `.notif.unread` items; removing `.unread` (click or "Mark all read") pops the badge update.

## Why is it useful?

Notification bell panels are everywhere in SaaS dashboards, and the unread state is what drives users back to the product. This component pairs a springy open transition with unread logic and a live badge — a realistic, self-contained example of the pattern done with plain CSS transitions and a few lines of JS.
