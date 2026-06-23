# ease-autocomplete-dropdown

## What does this do?
A search autocomplete suggestions dropdown that scales in from the top (`scaleY(0) → scaleY(1)`, `transform-origin: top`) with a bounce easing, and individual suggestion items stagger in via a `--i` CSS custom property delay. Includes a live filtered search demo with keyboard/click/outside-click handling and highlighted match text.

## How to use it

### HTML
```html
<div class="acd-search-wrap">
  <div class="acd-input-row">
    <input class="acd-input" type="text" />
  </div>

  <!-- Hidden by default — add .ease-autocomplete-dropdown--open to show -->
  <ul class="ease-autocomplete-dropdown">
    <li class="acd-suggestion" style="--i:0">Suggestion 1</li>
    <li class="acd-suggestion" style="--i:1">Suggestion 2</li>
    <li class="acd-suggestion" style="--i:2">Suggestion 3</li>
  </ul>
</div>
```

### JS to open/close
```js
// Open
dropdown.hidden = false;
dropdown.offsetHeight; // force reflow
dropdown.classList.add('ease-autocomplete-dropdown--open');

// Close
dropdown.classList.remove('ease-autocomplete-dropdown--open');
setTimeout(() => { dropdown.hidden = true; }, 220); // match transition duration
```

## Animation detail
- **Dropdown** — `scaleY(0) → scaleY(1)` with `transform-origin: top` and a bounce `cubic-bezier(0.34, 1.56, 0.64, 1)`, 0.22s. Opacity fades in simultaneously.
- **Suggestions** — each `li` starts at `opacity:0; translateY(-6px)` and animates to rest via `ease-kf-suggestion-in`. Delay = `0.05s + var(--i) * 0.04s`, so each suggestion is 40ms behind the previous.
- **Match highlighting** — `.acd-match` wraps the matched substring for keyboard-friendly highlighted text.

## Why it fits EaseMotion CSS
Search autocomplete is one of the most universal UX patterns — every search bar, command palette, and tag input uses it. The `scaleY` + stagger pattern is the standard professional treatment and directly implements all 3 acceptance criteria from the issue.
