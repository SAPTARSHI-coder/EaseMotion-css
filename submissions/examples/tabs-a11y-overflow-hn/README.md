# Tabs Component Overflow & Toggling Fix

## What does this do?
This contribution extends the CSS-only tabs content panel toggling logic to support up to 8 tabs, correcting a limitation where tabs 7 and 8 header labels were styled but their content panels remained hidden.

## How is it used?
Wrap radio inputs, labels, and panels in a tabs wrapper, matching indices up to 8:

```html
<div class="tabs-hn" style="--tab-width-hn: 12.5%;">
  <!-- Inputs -->
  <input type="radio" name="tabs-group" id="tab7" class="tab-input-hn">
  <input type="radio" name="tabs-group" id="tab8" class="tab-input-hn">

  <!-- Nav -->
  <div class="tabs-nav-hn">
    <label for="tab7" class="tab-label-hn">Tab 7</label>
    <label for="tab8" class="tab-label-hn">Tab 8</label>
    <div class="tab-underline-hn"></div>
  </div>

  <!-- Panels -->
  <div class="tabs-content-hn">
    <div class="tab-panel-hn">Content 7</div>
    <div class="tab-panel-hn">Content 8</div>
  </div>
</div>
```

## Why is it useful?
It removes a severe usability limitation from the framework's tab system. Previously, developers building dashboards with more than 6 tabs faced broken tab triggers. This resolves the bug and enables up to 8 tabs natively in pure CSS.
