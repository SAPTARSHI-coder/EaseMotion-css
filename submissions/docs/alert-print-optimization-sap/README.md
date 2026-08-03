# Alert Print Optimization

**What does this do?**
Strips the heavy background color and box-shadow from the alert component when printed, replacing them with a thin border so the alert stays visible while saving ink.

**How is it used?**
```html
<div class="alert">This is an important alert message.</div>
```

**Why is it useful?**
Alerts with solid colored backgrounds print as heavy ink blocks and can obscure text depending on printer settings. This keeps the alert legible as a bordered box in print, consistent with EaseMotion's focus on practical, real-world UI behavior.
