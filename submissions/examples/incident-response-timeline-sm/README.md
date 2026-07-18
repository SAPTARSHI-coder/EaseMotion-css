# Incident Response Timeline

## What does this do?

Incident Response Timeline is a self-contained HTML and CSS operations timeline that shows response phases with animated severity markers, ownership chips, progress rails, and review-friendly incident cards.

## How is it used?

Create a `response-panel` with a `timeline`, then add `timeline-item` entries with phase modifier classes such as `phase-detect`, `phase-triage`, `phase-contain`, or `phase-review`.

```html
<article class="timeline-item phase-contain">
  <div class="timeline-marker" aria-hidden="true"></div>
  <div class="timeline-card">
    <div class="card-topline">
      <p>Contain</p>
      <span>08:38</span>
    </div>
    <h3>Import traffic throttled</h3>
    <p>Background workers were rate-limited while checkout recovered.</p>
  </div>
</article>
```

Available phase classes:

- `phase-detect`
- `phase-triage`
- `phase-contain`
- `phase-review`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to clarify incident sequence and urgency: response items enter gently, the progress rail fills in order, severity markers pulse for attention, and hover states make each phase easier to inspect. The demo works directly by opening `demo.html` in a browser.
