# Notification Badge Count

## What does this do?

An unread-count badge on a notification bell that truncates its *display*
to "99+" above 99, while keeping the exact underlying number in a
`data-count` attribute for any logic that needs the real value rather than
the display string.

## How is it used?

```html
<button class="nbc-bell" id="nbc-bell" aria-label="Notifications">
  <span class="nbc-badge" id="nbc-badge" data-count="3">3</span>
</button>
```

```js
nbcSet(count); // updates both the truncated display text and data-count
```

`nbcSet` writes `count > 99 ? '99+' : count` as the badge's visible text,
but always stores the real number in `data-count` — `nbcBump` reads that
attribute back (not the possibly-truncated `textContent`) to compute the
next increment correctly even once the display has already switched to
"99+".

## Why is it useful?

Once a badge starts displaying a capped "99+" label, any code that later
needs the actual count — deciding whether polling should continue, sending
an analytics event with the real unread total, incrementing on a new
notification — breaks if it reads that value back from the badge's own
`textContent`, since `parseInt('99+')` either produces `99` (wrong, if the
real count is higher) or `NaN` depending on how it's parsed. Keeping the
true integer in a separate `data-count` attribute, untouched by the display
truncation, means the visual "99+" cap never leaks into logic that needs
the exact number.

The badge's `aria-label` on the parent button is also recomputed on every
count change ("3 unread notifications", "1 unread notification", or plain
"Notifications" at zero) rather than left static — a screen reader user
landing on the bell hears the actual current count, not a generic
"Notifications, badge 3" announcement that depends on the badge's visual
text being read out correctly (badges are frequently `aria-hidden` or
otherwise skipped, which this label doesn't depend on).
