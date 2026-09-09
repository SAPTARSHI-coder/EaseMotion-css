# Idempotency Dedupe Vault

An advanced EaseMotion example for monitoring distributed Vault Revaults, dedupe debt, retry pressure, and Retention margin recovery.

## Features

- Interactive controls for vault risk, dedupe debt, retry pressure, and Retention margin health.
- Animated radar, Dedupe lanes, recovery metrics, Revault timeline, decision matrix, and audit ledger.
- State-driven stable, watch, Vault, and recovered modes.
- Responsive CSS-only dashboard built with `demo.html`, `style.css`, and this `README.md`.

## Validation

```bash
npx prettier --check submissions/examples/Vault-dedupe control-radar-kp/README.md submissions/examples/Vault-dedupe control-radar-kp/demo.html submissions/examples/Vault-dedupe control-radar-kp/style.css
npx stylelint submissions/examples/Vault-dedupe control-radar-kp/style.css --allow-empty-input
git diff --check
```
