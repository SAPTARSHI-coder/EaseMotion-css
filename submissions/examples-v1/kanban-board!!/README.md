# Kanban Board

This is a self-contained example demonstrating how to create a modern, interactive Kanban board with drag-and-drop functionality, multiple columns, card details, and smooth animations using minimal JavaScript, seamlessly integrated with **EaseMotion CSS** utility classes.

## Features
- 📋 **Multiple Columns:** To Do, In Progress, Review, and Done columns.
- 🎯 **Drag and Drop:** Smooth card dragging between columns with visual feedback.
- 🎨 **Card Details:** Tags, assignees, due dates, and comment counts.
- 🏷️ **Color-Coded Tags:** Different colors for categories and priorities.
- 👥 **Team Avatars:** Overlapping avatar stack showing assignees.
- ✨ **Smooth Animations:** Card hover effects, drag animations, and column highlights.
- ➕ **Add Cards:** Click to add new cards to any column.
- ✓ **Completed State:** Visual indication for completed tasks.
- 📊 **Column Counts:** Automatic card count updates.
- ♿ **Fully Accessible:** Proper ARIA labels, keyboard navigation, and reduced motion support.
- 📱 **Responsive Design:** Horizontal scrolling on mobile devices.
- 🚫 **Minimal JavaScript:** Only for drag-and-drop functionality.

## How to Use
1. Ensure the EaseMotion CSS CDN is linked in your `<head>`.
2. Link the `style.css` file.
3. Copy the Kanban board HTML structure.
4. Customize columns, cards, and content.
5. Include the JavaScript class at the bottom of your page.
6. Initialize: `const kanbanBoard = new KanbanBoard();`

## HTML Structure

### Kanban Board
```html
<div class="kanban-board">
  <!-- Column -->
  <div class="kanban-column" data-column="todo">
    <div class="kanban-column__header">
      <div class="kanban-column__title-group">
        <div class="kanban-column__indicator kanban-column__indicator--todo"></div>
        <h3 class="kanban-column__title">To Do</h3>
        <span class="kanban-column__count">4</span>
      </div>
    </div>
    
    <div class="kanban-column__body">
      <!-- Cards -->
      <div class="kanban-card" draggable="true" data-card-id="1">
        <div class="kanban-card__tags">
          <span class="kanban-tag kanban-tag--design">Design</span>
        </div>
        <h4 class="kanban-card__title">Card Title</h4>
        <p class="kanban-card__description">Card description</p>
        <div class="kanban-card__footer">
          <div class="kanban-card__assignees">
            <div class="kanban-avatar">JD</div>
          </div>
          <div class="kanban-card__meta">
            <span class="kanban-card__date">Dec 15</span>
          </div>
        </div>
      </div>
      
      <!-- Add Card Button -->
      <button class="add-card-btn">Add Card</button>
    </div>
  </div>
</div>