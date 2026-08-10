# Pulse Badge

## What does this do?
A small status indicator dot that emits a continuously expanding, fading "pulse" ring — the familiar "live" or "online" signal pattern used in dashboards and notification icons.

## How is it used?

**Standalone dot** (e.g. next to a status label):
```html
<span class="ease-pulse-badge"></span>
```

**Color variants:**
```html
<span class="ease-pulse-badge ease-pulse-badge--danger"></span>
<span class="ease-pulse-badge ease-pulse-badge--primary"></span>
<span class="ease-pulse-badge ease-pulse-badge--accent"></span>
```

**Labeled pill** (dot + text, e.g. "Live", "3 new"):
```html
<span class="ease-pulse-badge-pill">
  <span class="ease-pulse-badge"></span>
  Live
</span>
```

**Corner badge on an avatar/icon:**
```html
<span class="ease-pulse-avatar-wrap">
  <span class="ease-pulse-avatar">RR</span>
  <span class="ease-pulse-badge"></span>
</span>
```

## Why is it useful?
Status indicators are one of the most reused UI primitives — online presence, live streams, unread counts, active processes. This component keeps the visual language EaseMotion CSS is built around (readable class names, animation as a first-class signal rather than decoration) while staying a single, tiny, dependency-free building block that composes cleanly with avatars, pills, or plain text labels. The pulse itself uses only `transform` and `opacity`, so it stays smooth even on low-power devices, and it respects `prefers-reduced-motion` by disabling the looping ring/scale animation while keeping the solid colored dot fully visible as a static indicator.

## Accessibility notes
- Purely decorative motion — the badge's meaning (its color) is conveyed without relying on the animation, so reduced-motion users lose nothing functionally.
- `prefers-reduced-motion: reduce` disables the pulse ring and breathing scale entirely.
- Color variants use `--ease-color-success` / `--ease-color-danger` / `--ease-color-primary` / `--ease-color-accent`, matching the semantic color tokens already used elsewhere in EaseMotion CSS, so they stay consistent with the framework's theming system.