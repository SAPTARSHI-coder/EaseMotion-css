# Studio Docs Navigation — Issue #43232

## What does this do?

Adds an integrated documentation navigation bar to EaseMotion Studio so users can
quickly jump to any docs section without leaving or losing their current Studio state.
The header gains:

- A **Docs dropdown** (desktop) with grouped quick links to Getting Started,
  Utilities, Animations, Components, Motion Engine, and Cheat Sheet — each opening
  in a new tab so the Studio state is preserved.
- A **hamburger → slide-down drawer** (mobile, < 768 px) that exposes the same links
  in a touch-friendly list.
- Flat shortcut links to **Animations** and **Animation Builder** always visible in
  the header on tablet+.

## How is it used?

Drop the `.studio-header` markup into the Studio `<header>` element and include
the corresponding CSS. The JS is minimal — two toggle functions wired to click
and keyboard events:

```html
<!-- Docs trigger button (inside <nav class="studio-nav">) -->
<div class="studio-nav__dropdown" id="docsDropdown">
  <button class="studio-nav__trigger"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="docsMenu"
          id="docsMenuBtn">
    Docs
    <svg class="chevron">…</svg>
  </button>

  <div class="studio-nav__menu" id="docsMenu" role="menu" hidden>
    <!-- grouped menu-item links -->
    <a href="../index.html#getting-started" class="menu-item" role="menuitem"
       target="_blank" rel="noopener">
      <span class="menu-item__icon">🚀</span>
      <span>
        <strong>Getting Started</strong>
        <small>Installation &amp; quick setup</small>
      </span>
    </a>
    …
  </div>
</div>
```

```js
// Toggle open/close
docsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  docsMenu.hidden ? openMenu() : closeMenu();
});
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) closeMenu();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
```

Doc links use `target="_blank" rel="noopener"` so the Studio tab stays active.

### Responsive behaviour

| Viewport    | What shows                                              |
|-------------|---------------------------------------------------------|
| ≥ 900 px    | Docs dropdown + flat Animations & Builder links         |
| 768–900 px  | Docs dropdown only (flat links hidden)                  |
| < 768 px    | Hamburger → slide-down mobile drawer, no dropdown       |

## Why is it useful?

Right now users must switch tabs or use browser back-navigation to reference
installation guides, utility classes, or component examples while experimenting
in Studio. This creates a learning interruption — especially for new users who
need documentation most while they explore.

Integrating docs navigation directly into the Studio header solves this without:

- Changing any existing functionality
- Modifying `core/` or `components/`
- Requiring a build step (pure HTML + CSS + vanilla JS)

It aligns with EaseMotion's philosophy of keeping things accessible and
self-contained — users get a seamless experience where documentation is one
click away, not one tab switch away.
