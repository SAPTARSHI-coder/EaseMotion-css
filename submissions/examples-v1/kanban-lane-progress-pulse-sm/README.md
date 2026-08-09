# Kanban Lane Progress Pulse

## What does this do?

Kanban Lane Progress Pulse is a self-contained HTML and CSS board pattern that shows delivery status with animated lanes, progress bars, pulsing progress markers, and hoverable task cards.

## How is it used?

Create a `kanban-board` wrapper and add `kanban-lane` sections with lane modifier classes such as `lane-backlog`, `lane-progress`, `lane-review`, or `lane-done`.

```html
<article class="kanban-lane lane-progress">
  <header class="lane-header">
    <div>
      <p>In Progress</p>
      <h2>Being built</h2>
    </div>
    <span class="lane-count">04</span>
  </header>
  <div class="progress-track" aria-hidden="true">
    <span></span>
  </div>
  <article class="task-card">
    <span class="task-tag">Frontend</span>
    <h3>Refine dashboard filters</h3>
    <p>Add tighter spacing, clearer active states, and predictable wrapping.</p>
  </article>
</article>
```

Available lane classes:

- `lane-backlog`
- `lane-progress`
- `lane-review`
- `lane-done`

## Why is it useful?

It fits EaseMotion's philosophy by using animation to communicate state: lanes enter gently, progress bars reveal their completion level, pulse markers draw attention without JavaScript, and hover states make each task feel interactive. The demo is standalone and works by opening `demo.html` directly in a browser.
