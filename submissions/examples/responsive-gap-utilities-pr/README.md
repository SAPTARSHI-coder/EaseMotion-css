# Responsive Gap Utilities (-pr)

This submission introduces missing responsive utilities for the `gap` property in the EaseMotion layout system.

## What does this do?
It provides `sm`, `md`, `lg`, and `xl` prefixed gap classes, allowing developers to increase or decrease the spacing between flex/grid items based on the screen size.

## How is it used?
Apply the classes alongside standard flexbox or grid classes:
```html
<div class="ease-flex ease-gap-2 ease-md-gap-6 ease-lg-gap-10">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Why is it useful?
Currently, `core/utilities.css` has responsive variations for `display` and `flex-direction`, but lacks them for `gap`. Without this, building true responsive fluid layouts requires writing custom media queries. This submission provides the exact code the maintainer needs to patch this architectural hole in the core framework!
