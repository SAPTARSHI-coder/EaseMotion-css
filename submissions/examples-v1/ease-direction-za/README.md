## What does this do?

Provides `ease-direction` utility classes for setting text direction — `ltr` (left-to-right) and `rtl` (right-to-left) for internationalization support.

## How is it used?

```html
<div class="ease-direction-rtl-za">هذا نص بالعربية</div>
<div class="ease-direction-ltr-za">English text</div>
```

## Why is it useful?

EaseMotion core has no direction utilities. `direction: rtl` is essential for Arabic, Hebrew, and other right-to-left language support in components, without needing to change the global `dir` attribute on the HTML element.
