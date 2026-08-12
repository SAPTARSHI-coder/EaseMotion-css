# ease-spotlight-search-sap

A macOS Spotlight-style command palette overlay — opens via `Ctrl+K`/`⌘K`, filters results live, closes on `Escape` or backdrop click.

## Usage
1. Include `style.css`.
2. Add markup: full-screen overlay containing a search input + results list.
3. Attach the keyboard shortcut, filter, and close handlers from `demo.html`.

## Customization
- `items` array (JS): the searchable command/action list — replace with real data source.
- Overlay backdrop blur/opacity.
- `padding-top: 14vh`: vertical position of the search box.

## Notes
- `Ctrl+K`/`⌘K` global shortcut uses `e.preventDefault()` to stop the browser's own bookmark-search shortcut from firing.
- Closing via backdrop click checks `e.target === overlay` specifically, so clicks inside the search box itself don't propagate-close it.
- Input focus uses a short `setTimeout` after the open class is added, ensuring focus lands only once the element is actually visible/interactive.
- Respects `prefers-reduced-motion`: box scale/slide-in is removed, only a quick opacity fade signals open/close.