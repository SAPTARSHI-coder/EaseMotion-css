# Feature Flag Rollout Meter Feature

Submits layout utility architectures and distribution trackers for canary software deployments (`.ease-meter-shell`, `.ease-meter-track`, `.ease-meter-fill-active`) under issue #15324.

## Functional Mechanics

- **The Problem:** Tracking targeted rollouts, fractional A/B testing variations, or continuous integration release scales inside configuration pipelines with standard inputs or table values makes it tough to visualize runtime risk profile splits accurately.
- **The Solution:** Visual deployment gauges. This layout utility structures a dedicated progress profile shell that stacks key details above an absolute horizontal meter bar. It helps release managers quickly verify traffic distribution weights inside modern cloud DevOps dashboards.

## Usage Layout Structure
```html
<div class="ease-meter-shell">
  <div class="ease-meter-meta">
    <div class="ease-flag-identity">
      <h5 class="ease-flag-name">Feature String</h5>
      <span class="ease-flag-key">flag.key.string</span>
    </div>
    <span class="ease-percentage-callout">75%</span>
  </div>
  <div class="ease-meter-track">
    <div class="ease-meter-fill-active" style="width: 75%;"></div>
  </div>
</div>
```

Closes #15324
