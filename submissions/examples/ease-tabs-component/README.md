# ease-tabs — CSS-Only Tabs Component

A tabs component using only radio inputs and CSS sibling selectors. Features an animated underline indicator with bounce easing.

## Classes

| Class | Description |
|---|---|
| `ease-tabs` | Wrapper element |
| `ease-tabs-nav` | Tab button row |
| `ease-tab-label` | Individual tab button (label for radio) |
| `ease-tabs-panels` | Panel container |
| `ease-tab-content` | Individual panel (needs `data-tab="N"`) |

## Usage

```html
<div class="ease-tabs">
  <input type="radio" name="tabs" id="tab1" checked />
  <input type="radio" name="tabs" id="tab2" />

  <div class="ease-tabs-nav">
    <label class="ease-tab-label" for="tab1">Tab 1</label>
    <label class="ease-tab-label" for="tab2">Tab 2</label>
  </div>

  <div class="ease-tabs-panels">
    <div class="ease-tab-content" data-tab="1">Panel 1</div>
    <div class="ease-tab-content" data-tab="2">Panel 2</div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS using radio inputs + sibling combinator. Animated underline uses `ease-bounce` cubic-bezier. Respects `prefers-reduced-motion`.
