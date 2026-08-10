# Expand Avatar Example

## What does this do?

An avatar that gently expands as a loading indicator.

## How is it used?

Open `demo.html` in a browser:

```html
<div class="expand-avatar-sp">Hover me</div>
```

## Why is it useful?

Expanding avatars give a soft loading signal on profile/chat UIs without a separate spinner. The pattern is readable and easy to reuse.

## Accessibility

- `role="status"` and `aria-live="polite"` announce loading state
- Screen-reader text: “Loading…”
- Under `prefers-reduced-motion: reduce`, motion stops and a dashed outline remains as a static cue

## Files

```
submissions/examples/feature-expand-avatar-example-sp/
├── demo.html
├── style.css
└── README.md
```
