# Environment Badge Indicator

Environment badge indicator with animated status pulse ring. Ideal for showing deployment environment status (Production, Staging, Dev, Canary, etc.).

## Features

- Animated pulse ring indicator
- 6 themed environment variants
- Color-coded badges with custom properties
- Meta information rows (version, uptime, region)
- Dark theme card grid layout

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="ebi-badge" style="--badge-bg: #dc2626; --badge-color: #fff; --pulse-color: rgba(220,38,38,0.5);">
  <div class="ebi-pulse"></div>
  <span class="ebi-env">Production</span>
  <span class="ebi-status">Live</span>
</div>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--badge-bg` | `#6366f1` | Badge background color |
| `--badge-color` | `#fff` | Badge text color |
| `--pulse-color` | `rgba(99,102,241,0.5)` | Pulse ring color |
| `--pulse-duration` | `2s` | Pulse animation duration |
