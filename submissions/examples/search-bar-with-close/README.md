# Search Bar with Close Icon

A modal-style search overlay component — hidden by default, opens on trigger, closes via close icon, Escape key, or backdrop click. Includes live filtering and keyboard navigation.

## Features

- **Hidden by default** — `opacity: 0; visibility: hidden` on `.ease-search-overlay`
- **Smooth open animation** — fade + slide-down with bounce easing on `.is-active`
- **Close icon (✕)** — styled button inside the input row
- **Backdrop click** — clicking outside `.ease-search-box` closes the overlay
- **Escape key** — closes the search
- **`Ctrl+K` / `⌘K`** — keyboard shortcut to open
- **Live filtering** — results filter as you type
- **Keyboard navigation** — ↑↓ arrows to navigate results, Enter to select
- **Dark mode** — via `prefers-color-scheme: dark`

## Classes

| Class | Description |
|-------|-------------|
| `.ease-search-overlay` | Fixed backdrop overlay (hidden by default) |
| `.ease-search-overlay.is-open` | Visible state |
| `.ease-search-box` | White card container |
| `.ease-search-input-row` | Icon + input + close button row |
| `.ease-search-icon` | Leading magnifier icon |
| `.ease-search-input` | Text input field |
| `.ease-search-close` | Close (✕) button |
| `.ease-search-results` | Scrollable results list |
| `.ease-search-result-item` | Single result row |
| `.ease-search-result-item.is-active` | Keyboard-focused result |
| `.ease-search-empty` | No-results message |
| `.ease-search-footer` | Keyboard hint bar |
| `.ease-search-trigger` | Pill-style trigger button |

## Usage

```html
<!-- Trigger -->
<button class="ease-search-trigger" onclick="openSearch()">🔍 Search…</button>

<!-- Overlay -->
<div class="ease-search-overlay" id="search-overlay" role="dialog" aria-modal="true">
  <div class="ease-search-box">
    <div class="ease-search-input-row">
      <span class="ease-search-icon">🔍</span>
      <input class="ease-search-input" type="search" placeholder="Search…" />
      <button class="ease-search-close" onclick="closeSearch()">✕</button>
    </div>
    <div class="ease-search-results" id="results"></div>
  </div>
</div>

<script>
  function openSearch() {
    document.getElementById('search-overlay').classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeSearch() {
    document.getElementById('search-overlay').classList.remove('is-open');
    document.body.style.overflow = '';
  }
  // Close on backdrop click
  document.getElementById('search-overlay').addEventListener('click', e => {
    if (e.target.classList.contains('ease-search-overlay')) closeSearch();
  });
  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
  });
</script>
```

## Accessibility

- `role="dialog"` + `aria-modal="true"` on overlay
- `aria-label` on input and close button
- Focus moved to input on open
- Full keyboard navigation (↑↓ arrows, Enter, Escape)

Closes #12245
