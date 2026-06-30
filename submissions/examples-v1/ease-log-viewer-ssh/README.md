# ease-log-viewer (`ease-log-viewer-ssh`)

A terminal-style log viewer component with scrollable output, fade-in-up animations, log-level color coding, an auto-scroll toggle, and a clear button — built with **pure HTML + CSS**. No JavaScript, no external libraries.

---

## 1. What does this do?

It renders a polished, terminal-aesthetic log/console viewer that displays color-coded log lines (info / warn / error) with smooth entry animations, an interactive auto-scroll toggle, and a clear button — all powered entirely by CSS state management (hidden checkboxes + `:checked` selectors).

---

## 2. How is it used?

The component uses hidden checkboxes to manage Auto-scroll and Clear state, with `<label>` elements as the visible interactive controls.

```html
<section class="log-viewer">
  <!-- Hidden state controls -->
  <input
    type="checkbox"
    id="autoscroll-toggle"
    class="log-viewer__state"
    checked
  />
  <input type="checkbox" id="clear-toggle" class="log-viewer__state" />

  <!-- Toolbar with window dots, title, and controls -->
  <div class="log-viewer__toolbar">
    <div class="log-viewer__title">
      <span class="log-viewer__dot log-viewer__dot--red"></span>
      <span class="log-viewer__dot log-viewer__dot--yellow"></span>
      <span class="log-viewer__dot log-viewer__dot--green"></span>
      <span class="log-viewer__name">system.log</span>
    </div>

    <div class="log-viewer__controls">
      <label for="autoscroll-toggle" class="log-viewer__toggle">...</label>
      <label for="clear-toggle" class="log-viewer__clear-btn">Clear</label>
    </div>
  </div>

  <!-- Output area with color-coded log lines -->
  <div class="log-viewer__output">
    <div class="log-viewer__lines">
      <div class="log-line log-line--info">
        <span class="log-line__time">12:04:11</span>
        <span class="log-line__level">INFO</span>
        <span class="log-line__msg">Server started on port 3000</span>
      </div>

      <div class="log-line log-line--warn">
        <span class="log-line__time">12:04:15</span>
        <span class="log-line__level">WARN</span>
        <span class="log-line__msg">Deprecated API used</span>
      </div>

      <div class="log-line log-line--error">
        <span class="log-line__time">12:04:20</span>
        <span class="log-line__level">ERROR</span>
        <span class="log-line__msg">Payment service timeout</span>
      </div>
    </div>
  </div>

  <!-- Status bar -->
  <div class="log-viewer__statusbar">
    <span>3 lines</span>
    <span class="log-viewer__status-info">● ready</span>
  </div>
</section>
```

### Available log-level modifiers

| Class              | Color  | Use case                        |
| ------------------ | ------ | ------------------------------- |
| `.log-line--info`  | Blue   | Standard informational messages |
| `.log-line--warn`  | Yellow | Warnings, deprecations, retries |
| `.log-line--error` | Red    | Errors, exceptions, failures    |

Just open `demo.html` in any modern browser — no server, no build step, no dependencies.

---

## 3. Why is it useful?

This submission fits EaseMotion CSS's philosophy because it:

- **Pure CSS state management** — Auto-scroll toggle and Clear button work without a single line of JavaScript, using the classic hidden-checkbox + `:checked` + sibling-selector pattern.
- **Animation-first** — every log line animates in with a staggered `ease-fade-in-up` keyframe (the exact animation name requested in the issue), giving a fluid console-streaming feel.
- **Practical & reusable** — terminal/log components are common in dashboards, dev tools, CI panels, and admin UIs. This component drops in anywhere.
- **Accessible** — respects `prefers-reduced-motion` for users who prefer no animation, uses semantic `<label>` controls for keyboard/screen-reader compatibility, and uses high-contrast color coding.
- **Responsive** — gracefully adapts to mobile by hiding non-essential labels and reducing padding.
- **Self-contained** — zero dependencies, zero external assets.

It demonstrates how rich, interactive components can be built entirely with CSS — perfectly aligned with EaseMotion's CSS-only design ethos.

---

## Features Checklist (matches issue #19889)

- [x] Dark terminal aesthetic
- [x] New log lines: `ease-fade-in-up` animation
- [x] Auto-scroll toggle
- [x] Log level color coding (info / warn / error)
- [x] Clear button

---

## Browser Support

Works on all modern browsers:

- ✅ Chrome / Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

---

## Author

Submitted by **@soumyasekharshee265-ux** as part of issue [#19889](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/19889).
