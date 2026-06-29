# Fleet Maintenance Compliance Roster

## What does this do?

Review mileage, service dates, depot ownership, and compliance status across fleet assets.

## How is it used?

Link `style.css` and use the supplied workspace markup with explicit status modifiers:

```html
<span class="status status--warn">Needs review</span>
```

Available status modifiers are `status--good`, `status--info`, `status--warn`, `status--bad`, and `status--neutral`.

## Why is it useful?

It provides a responsive CSS-only operational pattern with semantic content, readable non-color status cues, visible keyboard focus, and reduced-motion support.
