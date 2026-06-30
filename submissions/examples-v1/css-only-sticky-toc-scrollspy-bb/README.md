# CSS-Only Sticky TOC Scrollspy

A sticky sidebar table of contents that highlights the current section while scrolling, with a progress bar indicator.

## What does this do?

Provides a fixed sidebar navigation that stays visible while the user scrolls through content. Includes a scroll progress bar at the top and converts to a horizontal nav bar on mobile.

## How is it used?

```html
<div class="toc-layout">
  <aside class="toc-sidebar">
    <div class="toc-sidebar__title">On this page</div>
    <nav>
      <ul class="toc-sidebar__list">
        <li class="toc-sidebar__item">
          <a
            href="#section-1"
            class="toc-sidebar__link toc-sidebar__link--active"
            >Section 1</a
          >
        </li>
        <li class="toc-sidebar__item">
          <a href="#section-2" class="toc-sidebar__link">Section 2</a>
        </li>
      </ul>
    </nav>
  </aside>

  <main class="toc-main">
    <div class="toc-progress">
      <div class="toc-progress__bar"></div>
    </div>
    <section id="section-1" class="toc-section">
      <h2>Section 1</h2>
      <p>Content here.</p>
    </section>
  </main>
</div>
```

### Active state

Add `toc-sidebar__link--active` to the currently active link. Update this class via JavaScript (IntersectionObserver) or CSS scroll-driven animations.

### Nested items

```html
<a href="#sub-section" class="toc-sidebar__link toc-sidebar__link--nested"
  >Sub Section</a
>
```

## Why is it useful?

- **Sticky positioning** — TOC stays visible while scrolling long articles
- **Scroll progress bar** — shows reading progress using CSS scroll-driven animations
- **Responsive** — converts to horizontal nav on mobile
- **Dark mode** — respects `prefers-color-scheme: dark`
- **Reduced motion** — disables transitions when `prefers-reduced-motion` is active
- **Production-ready** — suitable for documentation sites, blogs, and long-form content
