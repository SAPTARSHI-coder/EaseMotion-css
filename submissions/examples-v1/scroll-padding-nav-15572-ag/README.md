# CSS Scroll-Padding Anchor Navigation Example

This interactive example showcases how to resolve the common bug where sticky navigation headers overlay target section headings when anchor links are clicked.

---

## The Overlay Bug

When a sticky navigation header is active:
- Clicking a link to `#section-1` scrolls the top of `#section-1` directly to the top of the viewport.
- The sticky header (e.g. `80px` tall) sits on top, overlaying the first few lines of text or the heading of that section.

---

## The Scroll-Padding Solution

By applying `scroll-padding-top` to the `html` element or scroll container, you tell the browser to offset landing position by the height of the sticky nav.

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Offset matching header height */
}
```

This avoids the need for:
- Complex Javascript calculations on click handlers.
- Empty filler elements or huge padding/negative margin hacks inside sections.

---

## Verification Steps

1. Open `demo.html` in a web browser.
2. Click any of the section links in the sticky navigation header at the top (e.g. **Syntax**).
3. The page will smoothly scroll to the chosen section.
4. Verify that the section's title lands exactly below the frosted-glass navigation bar without being covered.
