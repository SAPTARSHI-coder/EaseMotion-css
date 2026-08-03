# Runbook Step Progress

## What does this do?

Runbook Step Progress is a self-contained HTML and CSS incident runbook pattern with animated step cards, progress rails, owner chips, and clear action states for responders.

## How is it used?

Create a `runbook-panel` wrapper and add `step-card` items with step state classes such as `step-done`, `step-active`, or `step-waiting`.

```html
<article class="step-card step-active">
  <div class="step-marker" aria-hidden="true">2</div>
  <div class="step-content">
    <p class="step-kicker">Stabilize</p>
    <h2>Apply temporary mitigation</h2>
    <div class="step-bar" aria-hidden="true">
      <span></span>
    </div>
  </div>
</article>
```

Available step classes:

- `step-done`
- `step-active`
- `step-waiting`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to make incident work easier to follow: steps enter gently, markers pulse for current attention, progress bars show completion, and focus states keep actions accessible. The demo works directly by opening `demo.html` in a browser.
