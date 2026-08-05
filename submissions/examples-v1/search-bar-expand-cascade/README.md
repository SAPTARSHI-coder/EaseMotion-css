# Search Bar Expand

An expandable search bar with smooth width animation, focus effects, and clear button functionality for content discovery.

## What does this do?

This creates an expandable search bar with smooth width animation using CSS transitions, focus effects with `:focus-within` pseudo-class, clear button that appears when text is entered, and multiple size and style variants.

## How is it used?

```html
<div class="search-bar">
  <input type="text" class="search-bar-input" placeholder="Search...">
  <button class="search-bar-button search-clear">✕</button>
  <button class="search-bar-button">🔍</button>
</div>

<!-- Size variants -->
<div class="search-bar search-bar-sm">...</div>
<div class="search-bar search-bar-lg">...</div>

<!-- Style variants -->
<div class="search-bar search-bar-solid">...</div>
<div class="search-bar search-bar-glass">...</div>
<div class="search-bar search-bar-minimal">...</div>
```

The expand animation uses CSS transitions:

```css
.search-bar {
  width: 200px;
  transition: width 0.3s ease, box-shadow 0.3s ease;
}

.search-bar:focus-within {
  width: 400px;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
}
```

## Why is it useful?

Search bars are fundamental for content discovery in web applications. An expandable search bar with smooth animation provides better UX by saving space when not in use and expanding when needed. Focus effects with the `:focus-within` pseudo-class provide clear visual feedback when the search bar is active. The clear button that appears when text is entered improves usability by allowing users to quickly reset their search. Multiple size and style variants make it versatile for different design contexts. The CSS-first approach using transitions and pseudo-classes keeps the implementation lightweight, with minimal JavaScript only for the clear button functionality. This component demonstrates practical form patterns used in modern web applications for search functionality.
<arg_value><arg_key>EmptyFile</arg_key><arg_value>false
