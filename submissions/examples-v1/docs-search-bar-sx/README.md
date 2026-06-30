# Documentation Search Bar

A responsive, dark-themed documentation search bar with real-time filtering, keyboard navigation, and match highlighting — built for EaseMotion CSS.

---

## 1. What does this do?

It provides a **command-palette-style search bar** that filters a documentation index (animations, components, utilities, docs) in real time as the user types, with keyboard navigation, match highlighting, category badges, and an empty state — all in a single self-contained HTML file.

---

## 2. How is it used?

Drop the markup anywhere on a documentation page. The search bar is composed of a wrapper, an input, and a results dropdown.

```html
<section class="docs-search">
  <div class="docs-search-wrap">
    <span class="docs-search-icon">⌕</span>
    <input
      type="text"
      class="docs-search-input"
      placeholder="Search docs, components, animations..."
    />
    <kbd class="docs-search-kbd">/</kbd>
    <button class="docs-search-clear" hidden>×</button>
  </div>

  <div class="docs-search-results" hidden>
    <ul class="docs-result-list">
      <li class="docs-result-item">
        <div class="docs-result-main">
          <span class="docs-result-title">Fade In</span>
          <span class="docs-result-desc">Smoothly fade an element from transparent to visible.</span>
        </div>
        <span class="docs-result-cat cat-animation">Animation</span>
      </li>
      <!-- more results... -->
    </ul>

    <div class="docs-empty" hidden>
      <span class="docs-empty-icon">∅</span>
      <p>No results found</p>
    </div>

    <footer class="docs-search-footer">
      <span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span>
      <span><kbd>↵</kbd> Open</span>
      <span><kbd>Esc</kbd> Close</span>
    </footer>
  </div>
</section>
```

### Available classes

| Class | Purpose |
|-------|---------|
| `.docs-search` | Root container (positioning context for dropdown) |
| `.docs-search-wrap` | Pill-shaped input wrapper with focus glow |
| `.docs-search-input` | The search input (transparent inside wrap) |
| `.docs-search-icon` | Leading search glyph |
| `.docs-search-kbd` | `/` keyboard shortcut hint (hides on focus) |
| `.docs-search-clear` | Circular × clear button |
| `.docs-search-results` | Animated dropdown panel |
| `.docs-result-list` / `.docs-result-item` | Scrollable list of results |
| `.docs-result-item.active` | Currently-highlighted item (keyboard nav) |
| `.docs-result-title` / `.docs-result-desc` | Title and description |
| `.docs-result-cat` + `.cat-animation` / `.cat-component` / `.cat-utility` / `.cat-docs` | Color-coded category badge |
| `.docs-empty` | Empty-state panel |
| `.docs-search-footer` | Keyboard hint footer inside the dropdown |
| `<mark>` | Match-highlight styling inside titles/descriptions |

### Interaction features

- **Real-time filtering** as the user types
- **Match highlighting** with `<mark>` styling
- **Keyboard navigation** — `↑` / `↓` move, `Enter` selects, `Esc` clears
- **Global hotkey** — press `/` anywhere to focus the search
- **Click outside** to dismiss the dropdown
- **Empty state** when no results match
- **Clear button** appears when input is non-empty

---

## 3. Why is it useful?

This component fits EaseMotion CSS's human-readable, composable design philosophy:

- **Improves discoverability** — A real-time search makes large documentation sites navigable without scrolling or scanning long sidebars.
- **Familiar UX** — Mirrors the command-palette pattern used by GitHub, VS Code, Algolia DocSearch, and Linear, so users feel at home immediately.
- **Pure CSS visuals** — All styling, animations (dropdown slide-in, hover lift, focus glow), and theming are driven by CSS only; the small amount of vanilla JavaScript only handles filtering logic and keyboard events.
- **Composable** — Every class is single-purpose and namespaced under `.docs-search-*` / `.docs-result-*`, ready to be standardized to the `ease-*` convention by the maintainer.
- **Accessible** — Uses `role="search"` / `role="listbox"` / `role="option"`, supports full keyboard navigation, has visible focus states, and respects `prefers-reduced-motion`.
- **Self-contained** — Works by opening `demo.html` directly in any modern browser; no server, no install, no CDN, no external dependencies.

It turns documentation from a static reference into something developers can **navigate at the speed of thought** — exactly the kind of motion-first, polished developer experience EaseMotion CSS champions.