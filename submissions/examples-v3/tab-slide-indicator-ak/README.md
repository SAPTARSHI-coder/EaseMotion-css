# Tab Slide Indicator

## What does this do?

A pure CSS tabbed content panel where the active tab indicator slides smoothly between tabs using the radio-button hack. No JavaScript needed.

## How is it used?

Radio inputs with the same `name` drive tab selection. Each tab's content is shown/hidden via the `:checked` pseudo-class.

```html
<div class="tabs-wrapper-ak">
  <input type="radio" name="tabs-ak" id="tab1-ak" checked hidden>
  <input type="radio" name="tabs-ak" id="tab2-ak" hidden>
  <input type="radio" name="tabs-ak" id="tab3-ak" hidden>

  <nav class="tabs-bar-ak">
    <label for="tab1-ak" class="tab-label-ak" data-tab="Features">Features</label>
    <label for="tab2-ak" class="tab-label-ak" data-tab="Pricing">Pricing</label>
    <label for="tab3-ak" class="tab-label-ak" data-tab="About">About</label>
    <span class="tab-indicator-ak"></span>
  </nav>

  <div class="tab-panel-ak" data-panel="tab1-ak">...</div>
  <div class="tab-panel-ak" data-panel="tab2-ak">...</div>
  <div class="tab-panel-ak" data-panel="tab3-ak">...</div>
</div>
```

### Custom Properties

| Variable | Default | Purpose |
|---|---|---|
| `--tab-indicator-color-ak` | `#6c63ff` | Color of the sliding underline |
| `--tab-radius-ak` | `8px` | Border radius of tab labels |
| `--tab-duration-ak` | `0.3s` | Slide transition speed |

## Why is it useful?

Provides a fully accessible, animated tab component with zero JavaScript. Ideal for documentation pages, feature showcases, pricing tables, and any content that needs organized switching without framework overhead.
