# Empty State Search example

A filtered search results list whose empty state **echoes back the exact query** ("No results for xyz") rather than being a dead end. Uses the `hidden` attribute for visibility state and degrades to the full list with JS disabled.

## What it does
- Filters the list as you type.
- When nothing matches, shows "No results for {query}" with the exact text echoed.
- With JS disabled, the full list is shown (the empty-state paragraph stays `hidden`).

## Files
- `demo.html` — copy-paste markup
- `style.css` — styles
- `filter.js` — small enhancement script (progressive)
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="./style.css" />
<section class="empty-state-search-advk" aria-labelledby="ess-title">
  <input type="search" class="empty-state-search-advk__input" placeholder="Search..." aria-label="Search" />
  <ul class="empty-state-search-advk__results" aria-live="polite">
    <li class="empty-state-search-advk__item">Apple</li>
    <li class="empty-state-search-advk__item">Banana</li>
    <li class="empty-state-search-advk__item">Cherry</li>
  </ul>
  <p class="empty-state-search-advk__empty" hidden id="ess-title">No results for <span class="empty-state-search-advk__query"></span></p>
</section>
<script src="./filter.js" defer></script>
```

## Accessibility
- `aria-live="polite"` on the results container so screen readers announce updates.
- `aria-labelledby` linking the section to the empty-state title.
- `:focus-visible` outlines for keyboard users.

## No-JS degradation
Without `filter.js`, the full list renders and the empty state stays `hidden`.

Closes #75551
