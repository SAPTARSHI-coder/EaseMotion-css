# Food Safety Inspection Scorecard

## What does this do?

Summarize inspection findings, deadlines, responsible areas, and corrective-action progress.

## How is it used?

Link `style.css` and use the supplied workspace markup with explicit status modifiers:

```html
<span class="status status--warn">Needs review</span>
```

Available status modifiers are `status--good`, `status--info`, `status--warn`, `status--bad`, and `status--neutral`.

## Why is it useful?

It provides a responsive CSS-only operational pattern with semantic content, readable non-color status cues, visible keyboard focus, and reduced-motion support.
