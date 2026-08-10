# Pulse Notification Dot

## What does this do?

An unread-count badge that emits a small expanding ring three times when it
appears, then goes quiet.

## How is it used?

```html
<button class="pnd-icon" aria-label="Inbox, 3 unread">
  <svg viewBox="0 0 24 24" aria-hidden="true"><!-- icon --></svg>
  <span class="pnd-dot pnd-dot--count">3</span>
</button>
```

Omit the text and the `--count` modifier for a plain unread dot.

## Why is it useful?

Notification badges that pulse on `infinite` are a recognised accessibility
problem: a permanently animating element in the corner of the viewport competes
for attention indefinitely, and WCAG 2.2.2 requires that any motion lasting more
than five seconds be pausable or stoppable. A three-iteration ring satisfies that
by construction — it stops on its own in about four seconds — while still being
impossible to miss when the count first changes.

The ring is a pseudo-element rather than an extra node, so a badge stays a single
element in the markup, and it scales from the badge's own border radius so the
same rule works for both the counted pill and the small plain dot.

The accessible name carries the count (`aria-label="Inbox, 3 unread"`) rather
than relying on the visual badge, which matters because the number is styled
small and sits outside the button's own text flow. Under `forced-colors` the
badge switches to `Highlight`/`HighlightText` so it remains distinguishable from
the icon it overlaps.
