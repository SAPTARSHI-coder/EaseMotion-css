# ease-sidebar-scroll-lock

Mobile sidebar overlay that locks background body scroll while open. Fixes the bug where scrolling inside the sidebar leaked the scroll event to the background `<body>`, scrolling the page underneath.

## What does this do?

- **Background scroll lock** — when the sidebar opens, a `.ease-scroll-locked` class is added to **both** `<html>` and `<body>` (`overflow: hidden` + `height: 100%`, plus `scrollbar-gutter: stable` on `<html>` so the page doesn't shift when the scrollbar disappears). The background body can no longer scroll.
- **Independent sidebar scroll** — `.ease-sidebar__nav` has `overflow-y: auto`, so the sidebar's own content scrolls normally without propagating to the body.
- **Slide-in + backdrop** — the sidebar slides in from the left (`transform: translateX`); a semi-transparent backdrop fades in and closes on click.
- **Keyboard + a11y** — Esc closes; the close button is focused on open and the trigger is refocused on close; `aria-hidden` toggles on the sidebar.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />
<button id="open">☰ Open</button>
<div class="ease-sidebar-backdrop" id="backdrop" hidden></div>
<aside class="ease-sidebar" id="sidebar" aria-hidden="true">
  <div class="ease-sidebar__head"><strong>Menu</strong>
    <button class="ease-sidebar__close" id="close" aria-label="Close">&times;</button>
  </div>
  <nav class="ease-sidebar__nav">…links…</nav>
</aside>

<script>
  const html = document.documentElement;
  function show()  { html.classList.add('ease-scroll-locked'); /* + show sidebar */ }
  function hide()  { html.classList.remove('ease-scroll-locked'); /* + hide sidebar */ }
</script>
```

The CSS rule `html.ease-scroll-locked, html.ease-scroll-locked body { overflow: hidden; height: 100%; }` does the actual locking.

## Why is this useful?

- **Directly fixes the issue** — the root cause was that the body remained scrollable under the overlay; locking `<html>` **and** `<body>` overflow stops the leak at the source (locking only `<html>` can leave `<body>` as the viewport scroller).
- **No layout jump** — `scrollbar-gutter: stable` reserves the scrollbar space so content doesn't shift horizontally when the lock engages.
- **Sidebar still scrolls** — `overflow-y: auto` on the nav means long menus scroll independently.
- **Accessible** — Esc to close, focus management, `aria-hidden` toggle, reduced-motion support.

## Files

- `demo.html` — self-contained showcase with a tall page + sidebar. No CDNs/frameworks.
- `style.css` — scroll-lock rule, backdrop, sidebar slide-in, nav scroll, reduced-motion.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions.
