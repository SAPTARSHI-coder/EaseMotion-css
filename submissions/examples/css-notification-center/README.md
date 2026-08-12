# CSS Notification Center

A pure CSS notification center: a bell icon with an animated
unread badge that toggles a dropdown panel of grouped,
categorized notifications — no JavaScript required.

## What it does

Clicking (or tabbing to and pressing Enter/Space on) the bell
icon toggles a dropdown panel showing notifications grouped by
time period (e.g. "Today"), each categorized as success, info,
warning, or error via a colored left border and icon. Unread
notifications show a highlighted title and a small indicator
dot. A footer action lets the user clear all notifications.

## How to use it

```html
<div class="notif-center">
  <input type="checkbox" id="notif-toggle" class="notif-toggle-input">
  <label for="notif-toggle" class="notif-bell">
    <svg><!-- bell icon --></svg>
    <span class="notif-badge">3</span>
  </label>
  <label for="notif-toggle" class="notif-overlay"></label>

  <div class="notif-panel">
    <div class="notif-panel-header">
      <h2>Notifications</h2>
      <span class="notif-panel-count">3 new</span>
    </div>

    <div class="notif-group">
      <p class="notif-group-label">Today</p>
      <ul class="notif-list">
        <li class="notif-row success unread" tabindex="0">
          <span class="notif-row-icon"><svg><!-- icon --></svg></span>
          <span class="notif-row-text">
            <p class="notif-row-title">Payment received</p>
            <p class="notif-row-message">Your invoice was paid.</p>
            <p class="notif-row-time">2m ago</p>
          </span>
          <span class="notif-row-dot"></span>
        </li>
      </ul>
    </div>

    <div class="notif-panel-footer">
      <button class="notif-clear-btn">Clear all</button>
    </div>
  </div>
</div>
```

Available row category classes: `success`, `info`, `warning`,
`error`. Add `unread` to `.notif-row` to show the unread
indicator and highlighted title.

## Why it fits EaseMotion CSS

- **Pure CSS, zero dependencies** — the toggle interaction uses
  the checkbox-hack pattern instead of JavaScript.
- **Accessible** — notification rows are keyboard-focusable
  (`tabindex="0"`) with visible `:focus-visible` states, and the
  bell toggle has a proper focus outline.
- **Readable, semantic class names** — `notif-row`,
  `notif-badge`, `notif-panel-footer`, etc.
- **Smooth, purposeful motion** — the badge pops in on load, and
  the panel fades and scales in/out on toggle, in line with the
  library's animation-first philosophy.

## Notes

Scrollbar styling (`::-webkit-scrollbar`) is WebKit-only;
Firefox falls back to its default scrollbar. On small screens
(≤420px), the panel widens to 88vw so it doesn't clip off-screen.
