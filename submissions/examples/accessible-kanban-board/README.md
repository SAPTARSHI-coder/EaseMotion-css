# Accessible Kanban Board Column Layout

A modern, responsive, and screen-reader-friendly Kanban Board layout highlighting grid configurations, HSL color schemes, and full keyboard drag-and-drop navigation logic.

---

## 📷 Screenshots

> [!NOTE]
> *Screenshots Placeholder: Add previews of the Kanban Board showing column lists, card focus outlines, and the active task dragging mockup.*

---

## ❓ Questions & Answers

### 1. What does this do?
It provides a high-fidelity SaaS dashboard example of a Kanban Board. It splits work item cards into four distinct state columns (`To Do`, `In Progress`, `Review`, `Done`) and allows users to rearrange tasks both within columns and between columns using either a mouse or keyboard shortcuts, announcing relocations in real-time to screen readers.

### 2. How is it used?
Structure column containers side-by-side using the `.kanban-board` grid class, adding task cards with priority badges and description fields inside the list wrappers:

```html
<main class="kanban-board">
  <section class="kanban-column" id="col-todo" aria-labelledby="title-todo">
    <div class="column-header">
      <h2 id="title-todo">To Do</h2>
      <span class="card-count">3</span>
    </div>
    <div class="card-list" role="list" aria-label="To Do Tasks">
      <div class="kanban-card" tabindex="0" role="listitem" id="task-1">
        <!-- Card elements -->
      </div>
    </div>
  </section>
</main>
```

Keyboard support is active natively on focus. Press:
*   <kbd>Tab</kbd> to focus a card.
*   <kbd>↑</kbd> / <kbd>↓</kbd> to reorder the active card up and down.
*   <kbd>←</kbd> / <kbd>→</kbd> to move the active card between columns.

### 3. Why is it useful?
Most Kanban interfaces depend on heavy third-party drag-and-drop JavaScript packages (e.g. SortableJS) which are often difficult to style and fail to comply with keyboard accessibility standards. This showcases a lightweight, performant, and screen-reader-safe way to design Kanban boards using CSS and raw layout structures.

---

## 🏆 Why It Fits EaseMotion CSS Philosophy

1.  **Layout Composability**: Builds on standard layout structures and custom timing overrides defined inside the core variables.
2.  **Native Accessibility Compliance**: Replaces mouse-only interactions with semantic `role="list"`, `role="listitem"`, and live region announcements (`aria-live="polite"`).
3.  **Modern CSS Customization**: Implements prefers-color-scheme overrides and motion reduction features using standard variables, aligning with EaseMotion tokens.
