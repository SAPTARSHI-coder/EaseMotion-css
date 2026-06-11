# Duplicate Selector Audit

### What does this do?
This adds a self-contained audit demo that highlights duplicate selector risks, stale duplicate baselines, and reduced-motion ownership checks before CSS is promoted into the main bundle.

### How is it used?
Open `demo.html` directly in a browser and review the checklist cards:

```html
<article class="audit-card audit-card-danger">
  <span class="audit-label">Duplicate</span>
  <strong>.ease-btn-hover</strong>
  <p>Component hover behavior should have one owning file.</p>
</article>
```

### Why is it useful?
EaseMotion CSS is easiest to maintain when every public class has a single canonical owner. This submission gives maintainers a simple review artifact for duplicate selector cleanup, baseline pruning, and reduced-motion consistency without touching protected framework files directly.
