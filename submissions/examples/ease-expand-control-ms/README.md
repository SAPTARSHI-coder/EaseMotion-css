# Ease Expand Control

## What does this do?

Adds a compact expand-control pattern with collapsed and expanded states plus animated icon rotation.

## How is it used?

Place the control beside any accordion, panel, or expandable row and switch the wrapper class to `is-open` when you want to show the expanded state.

```html
<article class="expand-card is-open">
  <button class="expand-button" type="button" aria-expanded="true">
    <span class="expand-icon" aria-hidden="true"></span>
  </button>
</article>
```

## Why is it useful?

It gives EaseMotion CSS a simple, dependency-free affordance for expandable content in dashboards, settings pages, and list views.
