# Button Print Optimization

**What does this do?**
Strips heavy background color and box-shadow from the button component when printed, replacing them with a simple bordered outline to keep the button legible while saving ink.

**How is it used?**
```html
<button class="button">Click Me</button>
```

**Why is it useful?**
Buttons with vivid backgrounds and shadows waste ink and can render as solid dark blocks when printed. This ensures buttons degrade to a clean, minimal, ink-friendly outline in print, consistent with EaseMotion's practical, real-world UI philosophy.
