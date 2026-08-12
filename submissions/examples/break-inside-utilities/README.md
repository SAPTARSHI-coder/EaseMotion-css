# Multi-Column Element Break Inside Utilities

An isolated text layout and printing utility package introducing fragmentation optimization classes (`.ease-break-inside-auto`, `.ease-break-inside-avoid`, `.ease-break-inside-avoid-page`, and `.ease-break-inside-avoid-column`) under issue #13835.

## Functional Mechanics

- **The Problem:** In rich CSS columns layouts or standard printing sheets, elements (like article cards, quotes, or table rows) can break uncomfortably at structural limits. The browser engine often slices the card in half, placing the header at the bottom of column 1 and pushing the body text to the top of column 2.
- **The Solution:** Modifies engine block breaking loops natively. Applying `.ease-break-inside-avoid` signals the renderer to keep the targeted boundary box completely intact, pushing the whole element to the next layout track whenever a column or page fracture line intersects it.

## Usage Layout Structure
```html

<div class="masonry-item-card ease-break-inside-avoid">
  <h4>Solid UI Card Header Fragment</h4>
  <p>Solid content text that will never be split in half.</p>
</div>
```

Closes #13835
