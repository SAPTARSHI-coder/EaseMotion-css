# ⌘ Glassmorphic Command Palette

> A frosted-glass spotlight-style command palette with smooth scale-fade entrance, live fuzzy search, arrow-key navigation, grouped results, and `<kbd>` shortcut badges — built with pure HTML, CSS & minimal vanilla JS.

---

## 📖 Description

The **Glassmorphic Command Palette** is a `Cmd+K` / `Ctrl+K` triggered overlay component that lets users search and execute application commands without leaving their current context. It features:

- **Frosted-glass panel** using `backdrop-filter: blur()` and a layered dark glassmorphism aesthetic
- **Scale-fade entrance animation** — the panel scales from `0.97 → 1.0` and fades in simultaneously via a spring easing curve
- **Live fuzzy filter** — typing instantly filters result items across all groups with matched text highlighted using `<mark>` tags
- **Grouped results** — commands are organized into labelled sections (Navigation, Actions, Appearance)
- **Full keyboard navigation** — Arrow Up/Down, Enter to select, Escape to close, Tab focus trap
- **KBD shortcut badges** — per-command keyboard shortcut indicators shown on hover/selection
- **Empty state** — clear messaging when no results match the query
- **ARIA-complete** — `role="dialog"`, `aria-modal`, `aria-live`, `aria-selected`, `aria-activedescendant` all managed

---

## 🎯 Perfect For

- ✅ **SaaS dashboards** – quick command navigation
- ✅ **Developer tools** – power-user command centers
- ✅ **Documentation sites** – fast page search overlays
- ✅ **Portfolio sites** – polished interaction showcases
- ✅ **Design systems** – reference palette component

---

## ✨ Key Highlights

| Feature | Description |
|---------|-------------|
| **Glassmorphism** | `backdrop-filter: blur(28px)` frosted panel |
| **Spring entrance** | `cubic-bezier(0.34, 1.56, 0.64, 1)` spring scale-in |
| **Live search** | Instant fuzzy filter with `<mark>` text highlighting |
| **Grouped results** | Category section headings with hidden-when-empty logic |
| **Keyboard nav** | ↑ ↓ Arrow keys, Enter, Escape, Cmd+K / Ctrl+K |
| **Focus trap** | Tab key trapped inside dialog while open |
| **KBD badges** | Layered box-shadow keyboard shortcut tags |
| **ARIA complete** | Screen reader friendly with full ARIA attributes |
| **Reduced motion** | Animations disabled via `prefers-reduced-motion` |
| **Mobile sheet** | Bottom sheet layout on viewports ≤ 480px |

---

## 🚀 Quick Start

1. Place `demo.html`, `style.css`, and `script.js` in the same folder.
2. Open `demo.html` in your browser.
3. Press **⌘K** (Mac) or **Ctrl+K** (Windows/Linux) to open the palette.
4. Type to filter, use ↑↓ to navigate, Enter to select, Escape to close.

```
glassmorphic-command-palette-em/
├── demo.html      # HTML structure (overlay, groups, items, footer)
├── style.css      # Glassmorphism, tokens, animations, responsive
├── script.js      # Open/close, keyboard nav, live filter, ARIA
└── README.md      # Documentation (this file)
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `⌘K` / `Ctrl+K` | Open or close palette |
| `↑` / `↓` | Navigate result items |
| `Enter` | Execute selected command |
| `Escape` | Close palette |
| `Tab` / `Shift+Tab` | Cycle focusable elements within palette |

---

## 🎨 Customisation

All visual tokens are controlled via CSS custom properties at `:root`:

```css
:root {
  --clr-primary:       #818cf8;   /* Accent / focus color   */
  --clr-surface:       rgba(15, 18, 32, 0.76);   /* Panel background */
  --radius-palette:    16px;      /* Panel corner radius    */
  --shadow-palette:    ...;       /* Panel drop shadow      */
}
```

To add new commands, duplicate a `.cp__item` list item in `demo.html` and add the corresponding action in the `actions` object inside `script.js`.

---

## ♿ Accessibility Notes

- The overlay uses `role="dialog"` and `aria-modal="true"` to signal modal semantics to screen readers.
- `aria-hidden="true/false"` is toggled on the overlay to hide/expose it from the accessibility tree.
- The search input uses `role="combobox"` with `aria-expanded` and `aria-activedescendant` managed dynamically as the user navigates with arrow keys.
- A focus trap ensures keyboard focus does not leave the palette while open.
- All icon-only elements carry `aria-hidden="true"` to suppress redundant announcements.
- The empty state uses `aria-live="polite"` so screen readers announce "no results" without interrupting.
- `prefers-reduced-motion` is respected — all CSS transitions and blob animations are disabled.

---

## 🔍 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 76+ | ✅ Full |
| Firefox 103+ | ✅ Full |
| Safari 14+ | ✅ Full (`-webkit-backdrop-filter`) |
| Edge 79+ | ✅ Full |
