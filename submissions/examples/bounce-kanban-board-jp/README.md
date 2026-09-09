# Bounce Kanban Board

## What does this do?

This submission creates a responsive, pure-CSS Kanban board with springy card entrance animations, hover bounce effects, progress indicators, and accessible task-completion controls.

## How is it used?

```html
<section class="kanban-board-jp">
  <section class="kanban-column-jp">
    <header class="column-header-jp">
      <h2>Backlog</h2>
    </header>

    <div class="task-list-jp">
      <article class="task-card-jp ease-bounce-in-jp">
        <span class="task-tag-jp">Design</span>
        <h3>Refresh product card layout</h3>
        <p>Improve pricing hierarchy and mobile spacing.</p>

        <label class="task-check-jp">
          <input type="checkbox" />
          <span>Complete</span>
        </label>
      </article>
    </div>
  </section>
</section>
```

The motion system can be customized through CSS variables:

```css
:root {
  --ease-bounce-duration-jp: 760ms;
  --ease-bounce-curve-jp: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-fast-jp: 240ms;
  --ease-radius-jp: 1.25rem;
  --ease-board-gap-jp: 1rem;
  --ease-accent-jp: #6d5dfc;
}
```

Cards use the `ease-bounce-in-jp` entrance animation and a spring-like hover/focus transition. Task completion is handled through native checkboxes, with `:has()` styling used to update the card state without JavaScript.

Open `demo.html` directly in a browser. No server, JavaScript, CDN, or external framework is required.

## Why is it useful?

Kanban boards are useful for project workflows, e-commerce operations, editorial planning, support queues, and team dashboards.

This example fits EaseMotion CSS because it:

- uses bounce motion to communicate task-card hierarchy;
- provides reusable timing and easing variables;
- includes pure-CSS progress and completion states;
- uses semantic sections, headings, and labels;
- supports keyboard-accessible checkboxes;
- adapts from three columns to one column;
- respects `prefers-reduced-motion`;
- requires zero JavaScript and zero external dependencies.
