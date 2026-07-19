# Action Center Priority Ribbons

## What does this do?

Action Center Priority Ribbons is a self-contained HTML and CSS dashboard alert board that highlights notification priority with animated entry cards, angled ribbons, status icons, and compact action buttons.

## How is it used?

Place the shared `action-card` class on each notification card and combine it with one priority modifier class. The card can include a `priority-ribbon`, `card-icon`, `card-copy`, and `card-footer` block.

```html
<article class="action-card action-critical">
  <div class="priority-ribbon" aria-hidden="true">
    <span>Critical</span>
  </div>
  <div class="card-icon" aria-hidden="true">!</div>
  <div class="card-copy">
    <p class="card-topic">Security review</p>
    <h2>Unusual sign-in attempt</h2>
    <p>Review the session details before the approval window expires.</p>
  </div>
  <footer class="card-footer">
    <span>2 min ago</span>
    <button type="button">Review</button>
  </footer>
</article>
```

Available priority classes:

- `action-critical`
- `action-high`
- `action-medium`
- `action-low`

## Why is it useful?

It fits EaseMotion's philosophy by making motion functional instead of decorative: cards enter softly, ribbons make urgency easy to scan, hover states provide quick feedback, and the reduced-motion media query keeps the experience accessible. The demo is completely standalone and works by opening `demo.html` directly in a browser.
