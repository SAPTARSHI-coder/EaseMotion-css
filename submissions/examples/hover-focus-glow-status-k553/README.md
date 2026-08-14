# Hover/Focus Glow — Status Variants

**EaseMotion Submission** · Contributor: kavin553

---

## 1. What does this do?

Adds a `box-shadow` glow that triggers on both hover **and** keyboard focus, with semantic status modifiers (default, success, error, warning) as a single composable system.

## 2. How is it used?

```html
<button class="glow-status">Default</button>
<button class="glow-status glow-success">Success</button>
<button class="glow-status glow-error">Error</button>
<input class="glow-status glow-warning" placeholder="Focus me" />