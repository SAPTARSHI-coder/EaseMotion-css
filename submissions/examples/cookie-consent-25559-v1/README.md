# Cookie Consent Bar

A fixed bottom/top banner for GDPR/cookie compliance with slide-in animation.

## Usage

```html
<link rel="stylesheet" href="path/to/style.css" />
<script src="path/to/script.js"></script>

<script>
  initCookieConsent();
</script>
```

## Options

| Option | Type | Default | Description |
|---|---|---|---|
| `position` | `string` | `'bottom'` | `'bottom'` or `'top'` |
| `consentDays` | `number` | `365` | Cookie expiry in days |
| `onAccept` | `function` | `null` | Callback on accept |
| `onDecline` | `function` | `null` | Callback on decline |

## Positions

- `.ease-cookie-consent--bottom` — fixed bottom (default)
- `.ease-cookie-consent--top` — fixed top, slides down

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-z-toast` | `1000` | Z-index |
| `--ease-color-surface` | `#fff` | Background |
| `--ease-color-primary` | `#6366f1` | Button/accent color |
| `--ease-speed-medium` | `0.4s` | Slide animation speed |

## Accessibility

- Uses `role="dialog"` and `aria-label="Cookie consent"`
- Respects `prefers-reduced-motion: reduce`
- Responsive layout on mobile (<=640px)
