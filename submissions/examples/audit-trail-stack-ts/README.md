# CSS-only Audit Trail Event Stack

## What does this do?

This example displays a compact audit trail with status accents, actor metadata, and animated event entry.

## How is it used?

Add audit events with a state class:

```html
<ol class="audit-stack">
  <li class="audit-event is-success">
    <span class="audit-dot"></span>
    <div class="audit-content">
      <strong>Role updated</strong>
      <p>Admin changed project access.</p>
    </div>
  </li>
</ol>
```

## Why is it useful?

Audit trails are common in SaaS admin panels, security dashboards, and compliance tools. This example keeps the event list readable while using motion to reveal recent activity.

## Features

- Success, info, warning, and danger states
- Keyboard focus treatment
- Animated event stack
- Responsive layout
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11127
- All files are scoped to this submission folder
- No framework source files are modified
