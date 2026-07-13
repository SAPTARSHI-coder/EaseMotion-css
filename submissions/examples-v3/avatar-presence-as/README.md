# Avatar With Presence Indicator

### What does this do?

It shows circular avatars with a presence dot in the corner and a matching status ring, for online, away, busy, and offline, with a soft pulse on the online dot.

### How is it used?

```html
<span class="avatar is-online" title="Online">
  <span class="avatar-initials">JD</span>
  <span class="avatar-dot" aria-hidden="true"></span>
</span>
```

Add `is-online`, `is-away`, `is-busy`, or `is-offline` to the avatar to set the ring and dot color. The online state adds a pulsing ring around its dot.

### Why is it useful?

Avatars with presence show who is available in chat apps, member lists, and dashboards. This adds a status dot and ring and pulses the live one, using only CSS with initials avatars so it is self contained. The pulse is disabled under `prefers-reduced-motion: reduce`.
