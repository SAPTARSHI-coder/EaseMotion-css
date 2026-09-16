# Ease Copy Action

## What does this do?

Adds a compact copy-action control with default and copied feedback states.

## How is it used?

Place the control beside any URL, ID, token, or snippet and switch the wrapper class to `is-copied` when you want to present the copied confirmation state.

```html
<article class="copy-card is-copied">
  <button class="copy-action" type="button">
    <span class="copy-icon" aria-hidden="true"></span>
    <span class="copy-text">Copied</span>
  </button>
</article>
```

## Why is it useful?

It gives EaseMotion CSS a clean, dependency-free pattern for copy interactions in dashboards, code snippets, and admin interfaces.
