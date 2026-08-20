# Reduced Motion Accessibility Demo

## What does this do?

This example demonstrates how CSS animations can respect the user's **prefers-reduced-motion** accessibility preference.

---

## How is it used?

HTML

```html
<div class="demo-box">
    EaseMotion
</div>
```

CSS

```css
@media (prefers-reduced-motion: reduce){

.demo-box{

animation:none;
transform:none;

}

}
```

---

## Why is it useful?

Some users experience motion sensitivity or vestibular disorders.

The `prefers-reduced-motion` media query allows websites to automatically reduce or disable animations based on the user's operating system accessibility settings.

This helps create a more accessible user experience while maintaining compatibility with existing animation utilities.