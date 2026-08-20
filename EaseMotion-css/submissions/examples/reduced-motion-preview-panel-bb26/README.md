# Reduced Motion Preview Panel

## What does this do?

This submission adds a self-contained reduced-motion preview panel that compares full, soft, and reduced motion states for UI feedback cards.

## How is it used?

Use the panel markup with the included classes and radio inputs to let reviewers switch motion intensity without JavaScript.

```html
<section class="preview-panel">
  <fieldset class="motion-toggle">
    <input type="radio" name="motion" id="motion-full" checked>
    <label for="motion-full">Full motion</label>
  </fieldset>
  <div class="motion-stage">
    <article class="motion-card">Dialog entrance</article>
  </div>
</section>
```

## Why is it useful?

It helps EaseMotion demonstrate animation choices that remain expressive while respecting `prefers-reduced-motion`, keyboard focus, and responsive layouts.
