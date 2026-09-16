# Fraud Detection Operations Center

## What does this do?
A fraud detection operations dashboard with an alert matrix, risk score
trend graph, validation action playbook checklist, and a live transaction
log feed — built with premium, pure-CSS animations and transitions.

## How is it used?

```html
<div class="ease-fraud-dashboard">

  <div class="ease-fraud-panel">
    <h4>Alert Matrix</h4>
    <div class="ease-alert-matrix">
      <div class="ease-alert-cell low"></div>
      <div class="ease-alert-cell med"></div>
      <div class="ease-alert-cell high"></div>
    </div>
  </div>

  <div class="ease-fraud-panel">
    <h4>Risk Score Trend</h4>
    <div class="ease-risk-graph">
      <div class="ease-risk-bar"></div>
      <div class="ease-risk-bar"></div>
    </div>
  </div>

  <div class="ease-fraud-panel">
    <h4>Validation Playbook</h4>
    <div class="ease-playbook-list">
      <div class="ease-playbook-item"><span class="ease-playbook-badge done">✓</span> Step done</div>
      <div class="ease-playbook-item"><span class="ease-playbook-badge pending">⟳</span> Step pending</div>
    </div>
  </div>

  <div class="ease-fraud-logfeed">
    <div class="ease-fraud-log-line">&gt; log line...</div>
  </div>

</div>
```

Alert cell severity classes: `low`, `med`, `high` (high pulses).
Playbook badge classes: `done`, `pending` (pending spins).

## Why is it useful?
Enterprise projects need ultra-premium, interactive showcase interfaces
to demonstrate design fidelity and user experience capabilities. This
example demonstrates a fraud operations center with a pulsing alert
matrix, an animated risk score bar graph with staggered entrance, a
validation playbook with spinning pending indicators, and a
typewriter-style transaction log — all pure CSS, no JS required,
showcasing professional CSS capabilities of EaseMotion CSS in
enterprise-grade configurations. Includes prefers-reduced-motion support.