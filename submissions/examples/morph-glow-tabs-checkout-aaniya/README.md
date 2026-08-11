# morph-glow-tabs-checkout-aaniya

## What does this do?
A pure CSS tab component for e-commerce checkout flows (Cart / Delivery / Payment / Confirm), with a glowing pill indicator that smoothly slides and morphs between tabs as they're selected. No JavaScript — driven entirely by hidden radio inputs and sibling combinators.

## How is it used?
```html
<div class="ease-morph-tabs">
  <div class="ease-morph-tabs__inputs">
    <input type="radio" name="ease-checkout-tabs" id="ease-tab-1" checked />
    <input type="radio" name="ease-checkout-tabs" id="ease-tab-2" />
  </div>

  <div class="ease-morph-tabs__list">
    <div class="ease-morph-tabs__indicator"></div>
    <label class="ease-morph-tabs__label" for="ease-tab-1">Cart</label>
    <label class="ease-morph-tabs__label" for="ease-tab-2">Delivery</label>
  </div>

  <div class="ease-morph-tabs__panels">
    <div class="ease-morph-tabs__panel" id="ease-panel-1">Cart contents…</div>
    <div class="ease-morph-tabs__panel" id="ease-panel-2">Delivery options…</div>
  </div>
</div>
```
Radio `id`s and their matching `#ease-panel-N` / `label[for]` targets must stay in sync — the CSS selectors are keyed to `#ease-tab-1` through `#ease-tab-4`. Radios share one `name` so only one can be checked at a time.

### CSS custom properties
| Property | Purpose |
|---|---|
| `--ease-tabs-bg` | Track background behind the tabs |
| `--ease-tabs-indicator` | Indicator pill color |
| `--ease-tabs-glow` | Indicator glow color (box-shadow) |
| `--ease-tabs-text` / `--ease-tabs-text-active` | Inactive / active label text color |
| `--ease-tabs-transition` | Slide/morph transition timing |

## Why is it useful?
Tab indicators that slide between tabs are usually built with JS to measure each tab's offset/width and animate a floating element. This version keeps the indicator as an absolutely-positioned sibling inside a CSS grid track, and uses `:checked` on hidden radios to translate it by fixed percentage steps (`0%`, `100%`, `200%`, `300%`) — matching the grid's equal-width columns, so no JS measurement is needed. The glow intensifies via `box-shadow` on the same transition, giving a "morph" feel without extra markup. Includes a `prefers-reduced-motion` override and a responsive 2×2 grid fallback with adjusted transform steps for narrow viewports.
