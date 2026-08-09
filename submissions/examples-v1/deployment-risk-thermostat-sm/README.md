# Deployment Risk Thermostat

## What does it do?

This submission adds a self-contained deployment risk thermostat demo for EaseMotion CSS. It visualizes release health with a temperature-style risk gauge, rollout wave controls, guardrail checks, and animated status accents.

## How is it used?

Open `demo.html` directly in a browser. The example is plain HTML and CSS, so it does not require a build step, JavaScript, frameworks, or external assets.

```html
<div class="thermostat" aria-label="Deployment risk temperature is elevated">
  <div class="thermostat-tube" aria-hidden="true">
    <span class="mercury"></span>
  </div>
</div>
```

Useful classes include `thermostat`, `mercury`, `risk-card`, `wave-track`, `wave-active`, `guardrail-list`, `check-pass`, `check-warn`, and `check-stop`.

## Why is it useful for EaseMotion?

Release dashboards need motion that communicates risk quickly without depending on scripts. This demo shows practical CSS motion for rollout controls: a rising gauge, active hold ring, pacing meter, staggered guardrail checks, and reduced-motion support, all isolated inside `submissions/examples`.
