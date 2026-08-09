# Card Print Optimization

**What does this do?**
Strips heavy background colors, box-shadows, and hover transition scales from the card component when printed, replacing them with a simple outlined border to keep the card content legible while saving printer ink.

**How is it used?**

```html
<div class="card">
  <div class="card-title">Card Title</div>
  <div class="card-subtitle">Card Subtitle</div>
  <div class="card-body">Card content goes here.</div>
</div>
```

**Why is it useful?**
Cards with rich, dark, or vivid backgrounds and complex drop-shadows waste significant ink when printed. They can also result in solid black or dark grey blocks that obscure text on standard black-and-white printers. This optimization ensures cards degrade gracefully to a clean, minimal, ink-friendly outline in print mode.
