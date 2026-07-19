# Timezone Converter

An interactive timezone converter that displays a selected time across 20 world cities simultaneously. Uses the native `Intl.DateTimeFormat` API — no external libraries required.

## Features

- **20 world cities** — New York, London, Tokyo, Mumbai, Sydney and more
- **Source timezone selector** — auto-detects your local timezone on load
- **"Now" button** — instantly sets the current local time
- **Live conversion** — updates all cards on every time or timezone change
- **UTC offset labels** — shows GMT offset for each city
- **Source city highlight** — the selected source timezone is visually distinguished
- **Date awareness** — shows the correct date for each timezone (handles day crossings)

## Styling

All visual properties use `--ease-*` design tokens:

| Token | Purpose |
|-------|---------|
| `--ease-color-primary` | Source card gradient, focus states |
| `--ease-color-muted` | Secondary text, offset labels |
| `--ease-radius-lg` | Card border radius |
| `--ease-space-*` | All spacing and gaps |
| `--ease-text-*` | Typography scale |
| `--ease-speed-fast` | Input transition duration |

## Usage

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="timezone-converter/style.css" />

<div class="ease-tz-converter">
  <!-- See demo.html for full markup and JS -->
</div>
```

## Browser Support

Uses `Intl.DateTimeFormat` with `timeZone` support — available in all modern browsers (Chrome 24+, Firefox 29+, Safari 10+, Edge 12+).

Closes #11326
