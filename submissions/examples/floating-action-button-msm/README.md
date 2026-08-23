# Floating Action Button

## What does this do?

This submission adds a pure HTML and CSS floating action button that expands into four labeled actions with staggered reveals.

## How is it used?

Add the checkbox toggle, action links, and trigger label to your page, then include the local stylesheet.

```html
<input class="fab-toggle" type="checkbox" id="fab-toggle-msm" />
<div class="fab-actions">
  <a class="fab-action" href="#note"><span>Note</span><strong>+</strong></a>
</div>
<label class="fab-button" for="fab-toggle-msm">+</label>
```

## Why is it useful?

It gives EaseMotion CSS a compact action menu pattern with CSS-only interaction, staggered motion, visible focus states, responsive placement, dark-mode support, and reduced-motion safety without JavaScript.
