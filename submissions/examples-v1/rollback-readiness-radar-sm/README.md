# Rollback Readiness Radar

## What does it do?

This submission adds a self-contained rollback readiness radar demo for EaseMotion CSS. It presents a release safety dashboard with a sweeping radar, readiness score, recovery checkpoints, rollback timeline, and dependency status rows.

## How is it used?

Open `demo.html` directly in a browser. The demo is built with plain HTML and CSS, with no JavaScript, external assets, frameworks, or build step.

```html
<div class="radar" aria-label="Rollback readiness score is 86 percent">
  <span class="radar-sweep" aria-hidden="true"></span>
  <span class="radar-blip blip-one" aria-hidden="true"></span>
  <div class="radar-score">
    <strong>86%</strong>
    <span>ready</span>
  </div>
</div>
```

Useful classes include `radar`, `radar-sweep`, `radar-blip`, `checkpoint-list`, `checkpoint-watch`, `timeline-step`, `step-active`, and `dependency-row`.

## Why is it useful for EaseMotion?

Rollback workflows need status motion that is urgent but readable. This example demonstrates practical CSS-only motion for operational readiness: radar sweep, pulsing blips, staggered checkpoints, active timeline markers, responsive layout, and reduced-motion support while staying isolated inside `submissions/examples`.
