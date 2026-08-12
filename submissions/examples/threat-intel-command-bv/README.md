# Threat Intelligence Command Platform

## What does this do?
An enterprise-grade security operations center (SOC) showcase — a full dashboard featuring an Indicator of Compromise (IOC) tracker, a Risk Scorecard with an animated conic-gradient score ring, a Threat Actor Profiling Matrix with sophistication meters and tactic tags, and a live-streaming Log Telemetry panel. Pure HTML/CSS, animation-first, zero dependencies.

## How to use it
```html
<div class="tic-grid">

  <!-- IOC tracker row -->
  <div class="tic-ioc-row">
    <span class="tic-ioc-type tic-ioc-type--ip">IP</span>
    <span class="tic-ioc-value">185.220.101.47</span>
    <span class="tic-ioc-tag tic-ioc-tag--high">High Confidence</span>
    <span class="tic-ioc-source">AlienVault OTX</span>
    <span class="tic-ioc-time">2m ago</span>
  </div>

  <!-- Risk score ring -->
  <div class="tic-score-ring" style="--pct: 73">
    <span class="tic-score-value">73</span>
    <span class="tic-score-max">/100</span>
  </div>

  <!-- Threat actor card -->
  <div class="tic-actor-card">
    <div class="tic-actor-header">
      <span class="tic-actor-icon">☠</span>
      <div>
        <div class="tic-actor-name">APT-29 "CozyBear"</div>
        <div class="tic-actor-origin">State-Sponsored · Eastern Europe</div>
      </div>
    </div>
    <div class="tic-meter"><div class="tic-meter-fill" style="width: 95%"></div></div>
  </div>

  <!-- Live log line -->
  <div class="tic-log-line">
    <span class="tic-log-time">04:13:02</span>
    <span class="tic-log-level tic-log-level--crit">CRIT</span>
    <span class="tic-log-msg">Outbound connection to flagged IOC</span>
  </div>

</div>
```

## Components included
- **Status bar** — 4 live status pills (active threats, monitored assets, uptime, feed sync) with pulsing severity dots
- **IOC Tracker** — `.tic-ioc-row` with type badges (IP/Hash/Domain/Email), confidence tags (critical/high/medium/low), source attribution, and relative timestamps
- **Risk Scorecard** — `.tic-score-ring` (animated `conic-gradient` ring driven by `--pct`) plus a 3-row metric breakdown with animated fill bars
- **Threat Actor Profiling Matrix** — `.tic-actor-card` with sophistication meters and tactic tag chips
- **Live Log Telemetry** — `.tic-log-stream` with staggered fade-in log lines and severity-colored levels (INFO/WARN/CRIT/OK)

## Why it fits EaseMotion CSS
Enterprise projects need ultra-premium, interactive showcase interfaces to demonstrate design fidelity. This Phase 42 submission delivers a complete SOC dashboard with layered animations — staggered entrances, pulsing live indicators, animated score rings and bars, and a streaming log feed — built entirely with composable HTML/CSS following the framework's animation-first philosophy. `prefers-reduced-motion` disables all pulses, ring/bar growth animations, and staggered entrances while preserving the full layout and color coding.
