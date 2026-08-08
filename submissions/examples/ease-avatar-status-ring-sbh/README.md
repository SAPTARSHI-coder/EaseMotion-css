# ease-avatar-status-ring

Avatars with an animated status ring that gently pulses to signal presence (online, away, busy, offline).

## What does this do?

Adds an **avatar-status-ring**: a circular avatar image with a colored ring drawn just outside it. For online/away/busy states the ring continuously pulses (scale + opacity) to signal "live" presence; the offline ring is static and dimmed. A small status dot in the corner reinforces the state at a glance.

## How is it used?

1. Build a `.avatar` `<figure>` with an `.avatar__img`, an `.avatar__ring`, an `.avatar__dot`, and a visually-hidden `<figcaption>` for screen readers.
2. Set the status by adding a modifier: `avatar--online`, `avatar--away`, `avatar--busy`, or `avatar--offline`.

```html
<link rel="stylesheet" href="style.css" />

<figure class="avatar avatar--online" tabindex="0">
  <img class="avatar__img" src="avatar.jpg" alt="Ada Lovelace" width="64" height="64" />
  <span class="avatar__ring" aria-hidden="true"></span>
  <span class="avatar__dot" aria-hidden="true"></span>
  <figcaption class="avatar__sr">Ada Lovelace, online</figcaption>
</figure>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes asr-pulse` scaling the ring (1 → 1.08) and fading its opacity (0.7 → 0.25) on an infinite loop, so presence feels live. Offline is intentionally still.
- **Glassmorphism aesthetic** — avatars sit on the frosted dark background; the ring and dot use semantic status colors.
- **Accessible** — the visible status is decorative (`aria-hidden`); a visually-hidden `<figcaption>` carries "Name, status" for screen readers. `tabindex="0"` + `:focus-visible` ring. Full `prefers-reduced-motion` support (pulse disabled; ring shown as a steady colored border).
- **Reusable** — configurable via CSS custom properties (`--pulse-duration`, `--pulse-ease`, `--avatar-size`, status color tokens).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks).
- `style.css` — avatar base, four status variants, pulse keyframes, status dot, focus-visible ring, responsive + reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
