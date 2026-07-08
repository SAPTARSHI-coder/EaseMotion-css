# Animated Notification Stack

## What does this do?

This example creates a stack of overlapping notification cards that smoothly expand apart when hovered.

The component includes multiple notification variants:

- Success
- Information
- Warning
- Error

Each notification supports hover interactions and subtle entrance animations.

---

## How is it used?

### Basic Structure

```html
<div class="notification-stack">

  <div class="notification success">
    <h4>Success</h4>
    <p>Operation completed successfully.</p>
  </div>

</div>
```

### Available Variants

```html
success
info
warning
error
```

---

## Why is it useful?

Notification stacks are commonly used in:

- Dashboards
- SaaS applications
- Admin panels
- Productivity tools
- Monitoring systems

The stacked layout saves space while still allowing users to quickly review multiple messages. Hover interactions improve discoverability and align with EaseMotion CSS's animation-first philosophy.