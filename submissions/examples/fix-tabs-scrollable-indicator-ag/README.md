# Fix ease-tabs Scrollable Active Indicator

## What does this do?
Replaces the absolute-positioned underline indicator with an in-flow
`border-bottom` on the active tab button, preventing overflow in
horizontally scrollable tab bars on mobile.

## How is it used?
```html
<div class="ease-tabs">
  <ul class="ease-tabs__list" role="tablist">
    <li><button class="ease-tabs__tab is-active" role="tab" aria-selected="true">Tab 1</button></li>
  </ul>
</div>
```

## Why is it useful?
Absolute-positioned indicators ignore the scroll container's bounds.
An in-flow border naturally scrolls with its tab. Fixes: #35833
