# .ease-kbd Keyboard Key Component

Adds a keyboard key component for displaying keyboard shortcuts in documentation, shortcut guides, and help modals.

## Problem

`<kbd>` tags render in browser default monospace with no visual distinction. No `.ease-kbd` class exists to style them as physical keys.

## Proposed CSS to Add to `components/kbd.css`

```css
.ease-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.15rem 0.5rem;
  font-family: "JetBrains Mono", "Fira Code", monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: #374151;
  background: #f1f5f9;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 0 #cbd5e1;
  line-height: 1.4;
  white-space: nowrap;
}

.ease-kbd-sm { font-size: 0.65rem; padding: 0.1rem 0.35rem; }
.ease-kbd-lg { font-size: 0.9rem; padding: 0.25rem 0.65rem; }

.ease-kbd-group {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
```

## Usage

```html
<p>Press <kbd class="ease-kbd">Ctrl</kbd> + <kbd class="ease-kbd">K</kbd> to search</p>

<span class="ease-kbd-group">
  <kbd class="ease-kbd">⌘</kbd>
  <kbd class="ease-kbd">⇧</kbd>
  <kbd class="ease-kbd">P</kbd>
</span>

<!-- Size variants -->
<kbd class="ease-kbd ease-kbd-sm">Esc</kbd>
<kbd class="ease-kbd ease-kbd-lg">Enter</kbd>
```

## Benefits
- Physical key appearance: light bg, subtle border, rounded corners, shadow
- Group container for key combinations with proper spacing
- sm / lg size variants

## Files
- `README.md` — this file
- `demo.html` — demo page
- `style.css` — kbd component CSS
