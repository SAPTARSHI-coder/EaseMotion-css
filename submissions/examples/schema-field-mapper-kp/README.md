# Schema Field Mapper KP

## What does this do?

Schema Field Mapper KP adds an interactive CSV-to-CRM field mapping interface with animated connectors, an optional mapping toggle, and a live imported-record preview.

## How is it used?

Place each source and destination field inside a `mapping-row`, connect them with `mapping-connector`, and use a semantic checkbox for optional mappings.

```html
<label class="mapping-row mapping-row--optional">
  <input type="checkbox" id="map-company" checked />
  <span class="field-box">
    <span class="field-box__icon">O</span>
    <span>
      <strong>company</strong>
      <small>Text column</small>
    </span>
  </span>
  <span class="mapping-connector" aria-hidden="true"><i></i></span>
  <span class="field-box field-box--target">
    <span class="field-box__icon">A</span>
    <span>
      <strong>Account name</strong>
      <small>Company property</small>
    </span>
  </span>
</label>
```

## Why is it useful?

It gives EaseMotion CSS a practical data-import pattern where motion clarifies field relationships and optional states while preserving semantic controls, keyboard focus, responsive behavior, and reduced-motion support.
