# Emoji Picker

### What does this do?

It shows an emoji picker popup with a search field, a row of category tabs, and a scrollable grid of emoji. The active category tab is underlined, and hovering an emoji highlights and enlarges it.

### How is it used?

```html
<div class="emoji-pick" role="dialog" aria-label="Emoji picker">
  <input class="ep-search" type="text" placeholder="Search emoji" />
  <div class="ep-tabs">
    <button class="is-active" aria-label="Smileys">😀</button>
    <button aria-label="Animals">🐶</button>
  </div>
  <div class="ep-cat">Smileys</div>
  <div class="ep-grid">
    <button>😀</button><button>😂</button>
  </div>
</div>
```

The grid is a seven column layout that scrolls when it overflows. Mark the current category tab with `is-active`.

### Why is it useful?

Chat and comment inputs open an emoji picker. This lays out an emoji picker with a search box, category tabs, and a scrollable emoji grid, using only CSS. Emoji buttons have hover and focus states and the scale is removed under reduced motion.
