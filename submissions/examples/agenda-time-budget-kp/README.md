# Agenda Time Budget KP

## What does this do?

Agenda Time Budget KP adds an interactive meeting agenda with animated time allocations, completion controls, and a balanced-session summary.

## How is it used?

Wrap each agenda topic in an `agenda-item`, include its checkbox and time track, then set a topic-specific width through a modifier class.

```html
<label class="agenda-item agenda-item--design">
  <input type="checkbox" />
  <span class="agenda-item__check" aria-hidden="true"></span>
  <span class="agenda-item__content">
    <span class="agenda-item__title">
      <strong>Design decisions</strong>
      <small>12 min</small>
    </span>
    <span class="agenda-item__track" aria-hidden="true">
      <span></span>
    </span>
  </span>
</label>
```

## Why is it useful?

It gives EaseMotion CSS a practical meeting-planning pattern where motion communicates time distribution and completion while preserving semantic controls, keyboard focus, responsive behavior, and reduced-motion support.
