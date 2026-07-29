# Workflow Swimlane Board Showcase

## What does this do?

This adds a premium, self-contained interactive Workflow Swimlane Board component that shows dynamic horizontal rows (swimlanes representing cross-functional projects or categories) mapped across vertical stages (columns representing Todo, In Progress, In Review, Completed).

## How is it used?

The component can be integrated as a dashboard widget or canvas view:

```html
<div class="swimlane-board">
  <div class="swimlane-row">
    <div class="swimlane-row-header">...</div>
    <div class="board-cell">
      <div class="task-card card-purple">...</div>
    </div>
  </div>
</div>
```

## Why is it useful?

It provides teams with a multi-dimensional way to organize and track workflows by priority/project streams and progress states on a single layout. The design features beautiful CSS custom property variable scaling, accessibility-focused `:focus-visible` outline treatments, dark mode adaptability, and `prefers-reduced-motion` compliance.
