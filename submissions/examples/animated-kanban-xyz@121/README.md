# Animated Kanban Board (`ease-kanban-xyz`)

A zero-dependency, CSS-only animated kanban board component designed for the **EaseMotion CSS** framework. Perfect for project management, task organization, and workflow visualization with smooth card animations and column transitions.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using flexbox and CSS animations.
- **Animation-First**: Smooth column fade-in, card slide-in, hover lift effects, and progress bar animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Columns**: Support for any number of workflow stages (To Do, In Progress, Review, Done).
- **Card States**: Default, active, and completed card variants with distinct styling.
- **Priority Badges**: High, medium, and low priority indicators with color coding.
- **Tags**: Category tags for task classification.
- **Progress Bars**: Visual progress indicators with gradient fills.
- **User Avatars**: Gradient avatars for task assignees.
- **Due Dates**: Clear date display for task deadlines.
- **Horizontal Scroll**: Swipeable columns for mobile devices.
- **Accessible**: Proper semantic HTML structure and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Kanban Board
```html
<div class="ease-kanban-xyz">
  <!-- Column -->
  <div class="ease-kanban-xyz-column">
    <div class="ease-kanban-xyz-header">
      <h3 class="ease-kanban-xyz-title">To Do</h3>
      <span class="ease-kanban-xyz-count">3</span>
    </div>
    
    <div class="ease-kanban-xyz-cards">
      <div class="ease-kanban-xyz-card">
        <div class="ease-kanban-xyz-card-header">
          <span class="ease-kanban-xyz-priority ease-kanban-xyz-priority-high">High</span>
          <span class="ease-kanban-xyz-tag">Design</span>
        </div>
        <h4 class="ease-kanban-xyz-card-title">Task title</h4>
        <p class="ease-kanban-xyz-card-desc">Task description</p>
        <div class="ease-kanban-xyz-card-footer">
          <div class="ease-kanban-xyz-avatar">JD</div>
          <span class="ease-kanban-xyz-date">Due: Dec 15</span>
        </div>
      </div>
    </div>
  </div>
</div>