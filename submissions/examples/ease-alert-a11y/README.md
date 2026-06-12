# ease-alert-a11y

An accessible alert component with correct ARIA roles, dismissal announcements, focus management, and reduced-motion support.

## ARIA roles

| Alert Type | Role     | aria-live   | When to Use                                      |
| ---------- | -------- | ----------- | ------------------------------------------------ |
| Info       | `status` | `polite`    | Non-critical information that does not interrupt |
| Success    | `status` | `polite`    | Confirmation of a completed action               |
| Warning    | `alert`  | `assertive` | Time-sensitive situation requiring attention     |
| Error      | `alert`  | `assertive` | Failed action requiring immediate user response  |

Use `role="alert"` only for warnings and errors that need immediate attention. Info and success messages should use `role="status"` so screen readers do not interrupt the user on page load.

## Dismissal accessibility

When a dismissible alert is removed from the DOM, three things must happen:

1. **Aria-live announcer** — A visually hidden `#alert-announcer` region with `aria-live="polite"` receives the text "Alert dismissed" before the alert is removed, so screen readers announce the dismissal.
2. **Focus return** — After removal, focus moves to a logical fallback element (the Reset button) so keyboard users are not left without a focused element.
3. **Why focus management matters** — Removing a focused dismiss button drops focus to `<body>`, which confuses keyboard and screen-reader users. Always return focus to a nearby control after DOM removal.

## Usage

```html
<div id="alert-announcer" class="ease-sr-only" aria-live="polite"></div>

<div class="ease-alert ease-alert-success" role="status" aria-live="polite">
  <span aria-hidden="true">✓</span>
  <p>Payment processed successfully.</p>
  <button class="ease-alert-dismiss" aria-label="Dismiss success alert">
    ✕
  </button>
</div>
```

## Reduced motion

Inside `@media (prefers-reduced-motion: reduce)`, enter and exit animations are disabled. Alerts still appear and dismiss instantly without animated movement.
