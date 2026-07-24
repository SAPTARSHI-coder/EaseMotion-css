# Deployment Readiness Lights

## What does this do?

Deployment Readiness Lights is a self-contained HTML and CSS launch checklist pattern with animated readiness lights, progress bars, status cards, and accessible hover/focus states.

## How is it used?

Create a `deployment-board` wrapper and add `readiness-card` items with state classes such as `ready`, `warning`, or `active`.

```html
<article class="readiness-card ready">
  <div class="status-light" aria-hidden="true"></div>
  <div class="card-content">
    <p class="card-kicker">Build</p>
    <h2>Production bundle verified</h2>
    <div class="progress-line" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available state classes:

- `ready`
- `warning`
- `active`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make release readiness easier to scan: lights pulse for attention, progress bars reveal completion, cards enter gently, and focus states keep the pattern accessible. The demo works directly by opening `demo.html` in a browser.
