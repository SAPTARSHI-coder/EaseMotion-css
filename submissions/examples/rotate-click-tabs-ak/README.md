# rotate-click-tabs

### What does this do?
A tab switcher where the active tab button gets a small playful rotate + scale effect on click, instead of a plain color change.

### How is it used?
```html
<div class="tabs-rotate">
  <button class="tabs-rotate__btn is-active" data-tab="1">Tab One</button>
  <button class="tabs-rotate__btn" data-tab="2">Tab Two</button>
</div>

<div class="tabs-rotate__panel is-active" data-panel="1">Content one</div>
<div class="tabs-rotate__panel" data-panel="2">Content two</div>
```
Add `is-active` to the button and matching panel you want shown by default. Clicking a button toggles `is-active` on itself and its matching panel via `data-tab` / `data-panel`.

### Why is it useful?
Standard tabs just swap color/underline on click — this adds a bit of tactile motion (rotate + scale) that makes clicking feel more responsive, fitting EaseMotion's animation-first philosophy. Includes a `prefers-reduced-motion` fallback that disables all transforms/transitions.
