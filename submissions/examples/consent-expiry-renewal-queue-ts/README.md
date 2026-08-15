# Consent Expiry Renewal Queue

## What does this do?

Prioritize consent records that need renewal before processing permissions lapse.

## How is it used?

Link `style.css` and use the provided workspace structure with explicit status classes:

```html
<span class="status status--warn">Needs review</span>
```

The available status modifiers are `status--good`, `status--info`, `status--warn`, and `status--bad`.

## Why is it useful?

It provides a responsive CSS-only operational pattern with semantic content, readable non-color status cues, visible keyboard focus, and reduced-motion support.
