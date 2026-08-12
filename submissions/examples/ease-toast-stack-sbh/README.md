# ease-toast-stack

Concurrent toast notifications that stack without overlapping. Fixes the bug where multiple toasts triggered at the same time rendered at identical coordinates, hiding earlier toasts.

## What does this do?

- **Flex-column viewport with a gap** — `.ease-toast-viewport` is `display: flex; flex-direction: column; gap`. Each toast is a flex child that occupies its own vertical slot, so concurrent toasts never collide (the original bug used absolute positioning at one fixed coordinate).
- **Entrance/exit animations** — slide-in-from-right + fade on appear; slide-out + fade on dismiss. Uses only `transform`/`opacity` (GPU-friendly, no layout reflow).
- **Auto-dismiss + manual close** — each toast auto-dismisses after 4.5s; the × button dismisses immediately.
- **Four types** — info / success / warning / danger, each with a colored left border + icon.
- **Accessible** — the viewport is an `aria-live="polite"` region; each toast is `role="status"`; the close button has an `aria-label`.
- **Reduced-motion** — animations disabled.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />
<div class="ease-toast-viewport" role="region" aria-live="polite" aria-label="Notifications"></div>

<script>
  const vp = document.querySelector('.ease-toast-viewport');
  const t = document.createElement('div');
  t.className = 'ease-toast ease-toast--success';
  t.innerHTML = '<span class="ease-toast__icon"></span><div class="ease-toast__body"><strong class="ease-toast__title">Done</strong><p class="ease-toast__msg">Saved.</p></div><button class="ease-toast__close" aria-label="Dismiss">&times;</button>';
  vp.appendChild(t);   // flex column places it below any existing toast
</script>
```

The demo's "Burst 5" button spawns five toasts 250ms apart to prove they stack progressively.

## Why is this useful?

- **Directly fixes the issue** — the root cause was shared coordinates; a flex column with a gap guarantees distinct slots.
- **GPU-friendly** — only `transform`/`opacity` animate (also addresses the spirit of reflow-related issues).
- **Additive** — ships under `submissions/examples/` without modifying core toast classes.

## Files

- `demo.html` — self-contained showcase with trigger buttons (4 types + a 5-toast burst). No CDNs/frameworks.
- `style.css` — viewport (flex column + gap), toast styles, entrance/exit keyframes, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions.
