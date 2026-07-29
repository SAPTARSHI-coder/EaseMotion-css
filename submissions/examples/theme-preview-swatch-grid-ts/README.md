# Theme Preview Swatch Grid

## What does this do?

Displays a responsive grid of palette cards, each showing a five-step colour swatch strip, a row of UI token dots (surface, text, accent, success, danger), and a tiny mock UI preview bar. Clicking a card marks it selected: a tick badge pops in, the border highlights, and an `aria-live` banner announces the choice. The swatch strips expand on hover using a CSS `flex` transition with no JavaScript.

## How is it used?

Wrap cards in `.theme-grid`, give each card a palette modifier class (e.g. `theme-ocean`), and add `is-selected` to the default choice.

```html
<div class="theme-grid" role="radiogroup" aria-label="Theme palettes">

  <button class="theme-card theme-ocean is-selected"
          type="button"
          role="radio"
          aria-checked="true"
          aria-label="Ocean theme"
          onclick="selectTheme(this, 'Ocean')">

    <div class="swatch-row" aria-hidden="true">
      <span class="swatch swatch-1"></span>
      <span class="swatch swatch-2"></span>
      <span class="swatch swatch-3"></span>
      <span class="swatch swatch-4"></span>
      <span class="swatch swatch-5"></span>
    </div>

    <div class="token-row" aria-hidden="true">
      <span class="token-dot token-surface"></span>
      <span class="token-dot token-text"></span>
      <span class="token-dot token-accent"></span>
      <span class="token-dot token-success"></span>
      <span class="token-dot token-danger"></span>
    </div>

    <div class="theme-ui-preview" aria-hidden="true">
      <div class="theme-ui-bar"></div>
      <div class="theme-ui-body">
        <div class="theme-ui-line long"></div>
        <div class="theme-ui-line short"></div>
      </div>
    </div>

    <div class="theme-card-label">
      <span class="theme-card-name">Ocean</span>
      <span class="theme-card-desc">Cool blues, deep navy</span>
    </div>

  </button>

  <!-- repeat for each palette -->

</div>
```

Six palette modifier classes are included out of the box: `theme-ocean`, `theme-violet`, `theme-ember`, `theme-forest`, `theme-rose`, `theme-slate`. Each one sets five swatch colours, five token dot colours, and three CSS custom properties (`--theme-accent`, `--theme-surface`, `--theme-text`) used by the mini UI preview strip.

To mark a card selected from JavaScript:

```js
function selectTheme(card, name) {
  document.querySelectorAll('.theme-card').forEach(function(c) {
    c.classList.remove('is-selected');
    c.setAttribute('aria-checked', 'false');
  });
  card.classList.add('is-selected');
  card.setAttribute('aria-checked', 'true');
}
```

## Why is it useful?

Design systems and app settings screens commonly need a theme or colour scheme picker. This example shows how CSS variables and small motion details — a lift-and-shadow on hover, expanding swatch slots, and a pop-in tick badge — make palette selection feel considered rather than just functional. All six palettes are self-contained in the CSS, so adding a new one only requires one class definition block. The component is accessible (radio group semantics, `aria-live` announcement on selection), dark-mode aware, and respects `prefers-reduced-motion` by disabling the lift and swatch-expand transitions.
