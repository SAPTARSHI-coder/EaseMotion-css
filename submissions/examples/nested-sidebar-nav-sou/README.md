# Nested Sidebar Navigation

A documentation-style sidebar with **expandable / collapsible nested navigation items**, smooth scrolling, active-section highlighting, and full mobile responsiveness.

> Submission for issue [#1849 — Add Nested Sidebar Navigation for Animation Categories](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/1849).

---

## 1. What does this do?

It provides a self-contained, accessible sidebar component where top-level navigation items (like **Animations**) can expand to reveal nested sub-categories (Entrance, Looping, Hover, Delay Helpers), making large documentation easier to scan, navigate, and scale.

---

## 2. How is it used?

Add the sidebar markup to your page and mark any parent item with `has-submenu`. A `sidebar-toggle` button controls a nested `sidebar-submenu` list.

```html
<nav class="sidebar">
  <ul class="sidebar-list">

    <!-- Regular item -->
    <li class="sidebar-item">
      <a href="#getting-started" class="sidebar-link">Getting Started</a>
    </li>

    <!-- Parent with nested submenu -->
    <li class="sidebar-item has-submenu">
      <button class="sidebar-toggle" aria-expanded="false" aria-controls="submenu-animations">
        <span>Animations</span>
        <svg class="chevron" ...></svg>
      </button>

      <ul id="submenu-animations" class="sidebar-submenu">
        <li><a href="#entrance" class="sidebar-sublink">Entrance Animations</a></li>
        <li><a href="#looping"  class="sidebar-sublink">Looping Animations</a></li>
        <li><a href="#hover"    class="sidebar-sublink">Hover Animations</a></li>
        <li><a href="#delay"    class="sidebar-sublink">Delay Helpers</a></li>
      </ul>
    </li>

  </ul>
</nav>
```

### Key classes

| Class              | Purpose                                                       |
| ------------------ | ------------------------------------------------------------- |
| `sidebar`          | Root sidebar container                                        |
| `sidebar-list`     | Top-level list of navigation items                            |
| `sidebar-item`     | A single navigation row                                       |
| `has-submenu`      | Marks an item that contains a nested submenu                  |
| `sidebar-toggle`   | The clickable button that expands / collapses the submenu     |
| `sidebar-submenu`  | The nested `<ul>` revealed on expand                          |
| `sidebar-sublink`  | A nested navigation link                                      |
| `is-open` (mobile) | Added to `.sidebar` when the mobile drawer is open            |
| `active`           | Added automatically to the link of the section in view        |

### Behavior included

- Click a parent item → submenu smoothly expands / collapses (chevron rotates).
- Click any link → smooth scroll to the matching section.
- Scroll the page → the corresponding sidebar link is automatically highlighted via `IntersectionObserver`.
- On mobile (≤ 768px) → sidebar becomes a slide-in drawer toggled by a hamburger button, with a dimmed backdrop.
- Respects `prefers-reduced-motion` for accessibility.

---

## 3. Why is it useful?

EaseMotion CSS is growing rapidly, and the **Animations** section in particular contains many sub-categories (entrance, looping, hover, delay helpers, and more). A flat sidebar forces users to scroll through long lists to find what they need.

This nested sidebar pattern:

- **Improves discoverability** — users can jump directly to a category instead of scrolling.
- **Scales with the framework** — new animation types can be added under a clean, organized parent.
- **Matches modern documentation conventions** (GitBook, Docusaurus, Mintlify).
- **Reduces cognitive load** for beginners exploring the docs for the first time.
- **Stays accessible** — uses semantic `<button>` + `aria-expanded` + `aria-controls` for screen-reader friendliness, and honors reduced-motion preferences.

It fits EaseMotion CSS's philosophy of providing **animation-first, developer-friendly, and beautiful-by-default** building blocks.

---

## Files

- `demo.html` — self-contained demo (open directly in a browser)
- `style.css` — all styles for the sidebar + responsive behavior
- `README.md` — this file

No external dependencies, no CDN links, no build step required.