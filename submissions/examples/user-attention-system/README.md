# User Attention System

A semantic motion system for intent-driven alerts and notifications. Developers can choose urgency by meaning — `notice`, `success`, `warning`, and `critical` — instead of selecting animation mechanics directly.

## Available classes

- `.ease-notice`
- `.ease-success`
- `.ease-warning`
- `.ease-critical`

## Overview

This feature introduces a consistent motion language for user-facing alerts and feedback. Each utility class communicates a different urgency level through animation intensity, while preserving readability and production-safe behavior.

## How to use it

### Notice

```html
<div class="ease-notice">New analytics report available.</div>
```

### Success

```html
<div class="ease-success">Settings updated successfully.</div>
```

### Warning

```html
<div class="ease-warning">Your trial ends tomorrow.</div>
```

### Critical

```html
<div class="ease-critical">Unable to connect to the server.</div>
```

## Dashboard example

```html
<div class="alert-grid">
  <div class="ease-notice">New feature unlocked.</div>
  <div class="ease-success">Backup completed successfully.</div>
  <div class="ease-warning">Storage is running low.</div>
  <div class="ease-critical">Payment processing failed.</div>
</div>
```

## Why it fits EaseMotion CSS

- Uses human-readable classes that express intent, not animation details.
- Enables consistent timing and urgency scaling across UI notifications.
- Works naturally with existing EaseMotion components like cards, badges, toasts, and alerts.
- Includes reduced-motion support so content remains visible and readable without motion.

## Accessibility notes

- `prefers-reduced-motion: reduce` disables the urgency animations.
- Elements remain fully visible, readable, and hierarchy is preserved with simple styling.
- The system avoids rapid or excessive movement for production-safe use.
