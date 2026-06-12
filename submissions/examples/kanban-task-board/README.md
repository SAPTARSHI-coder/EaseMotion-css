# Kanban Task Board Component

A modern Kanban-style task management component with columns for organizing tasks by status (To Do, In Progress, Completed). Task cards feature staggered reveal animations, hover lift effects, and color-coded tags.

## Classes

| Class                      | Description                                                 |
| -------------------------- | ----------------------------------------------------------- |
| `ease-kanban`              | Horizontal board container with scroll support              |
| `ease-kanban-column`       | Status column (To Do / In Progress / Completed)             |
| `ease-kanban-header`       | Column header with dot indicator, title, and count          |
| `ease-kanban-dot`          | Status indicator dot                                        |
| `ease-kanban-dot-todo`     | Blue dot for To Do column                                   |
| `ease-kanban-dot-progress` | Amber dot with pulse for In Progress column                 |
| `ease-kanban-dot-done`     | Green dot for Completed column                              |
| `ease-kanban-count`        | Task count badge                                            |
| `ease-task-card`           | Individual task card with entrance animation and hover lift |
| `ease-task-title`          | Task title text                                             |
| `ease-task-meta`           | Due date or status metadata                                 |
| `ease-task-tag`            | Category tag badge                                          |
| `ease-task-tag-dev`        | Purple tag for development tasks                            |
| `ease-task-tag-design`     | Pink tag for design tasks                                   |

## Usage

```html
<div class="ease-kanban">
  <div class="ease-kanban-column">
    <div class="ease-kanban-header">
      <span class="ease-kanban-dot ease-kanban-dot-todo"></span>
      <h3>To Do</h3>
      <span class="ease-kanban-count">3</span>
    </div>
    <div class="ease-task-card">
      <span class="ease-task-tag ease-task-tag-dev">Dev</span>
      <p class="ease-task-title">Create API documentation</p>
      <span class="ease-task-meta">Due Jun 12</span>
    </div>
  </div>

  <div class="ease-kanban-column">
    <div class="ease-kanban-header">
      <span class="ease-kanban-dot ease-kanban-dot-progress"></span>
      <h3>In Progress</h3>
      <span class="ease-kanban-count">2</span>
    </div>
    <div class="ease-task-card">
      <span class="ease-task-tag ease-task-tag-dev">Dev</span>
      <p class="ease-task-title">Authentication system</p>
      <span class="ease-task-meta">Due Jun 8</span>
    </div>
  </div>

  <div class="ease-kanban-column">
    <div class="ease-kanban-header">
      <span class="ease-kanban-dot ease-kanban-dot-done"></span>
      <h3>Completed</h3>
      <span class="ease-kanban-count">4</span>
    </div>
    <div class="ease-task-card">
      <span class="ease-task-tag ease-task-tag-dev">Dev</span>
      <p class="ease-task-title">Project setup</p>
      <span class="ease-task-meta">Done</span>
    </div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

Pure CSS Kanban board with staggered column and card entrance animations, pulsing status indicators, and hover lift effects. Uses design tokens for colors and spacing. Respects `prefers-reduced-motion`.
