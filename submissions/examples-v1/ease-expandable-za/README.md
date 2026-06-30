# Expandable Sections

## What does this do?

CSS-only expand/collapse components using the checkbox hack with smooth max-height transitions, nesting, and styled variants.

## How is it used?

```html
<div class="ex-item">
  <input type="checkbox" id="id" class="ex-chk" /><label
    for="id"
    class="ex-trig"
    >Toggle</label
  >
  <div class="ex-body">
    <div class="ex-inner"><p>Content</p></div>
  </div>
</div>
```

## Why is it useful?

Pure CSS accordion behavior without JavaScript. Supports nested sections. Multiple style variants. Smooth max-height animations. Ideal for FAQ, docs, and menus.
