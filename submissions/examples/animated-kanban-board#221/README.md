## 📋 Issue Description

### Is your feature request related to a problem?
The `submissions/examples/` directory lacks a **project management/Kanban board** example that showcases multi-column layouts, task card components, priority systems, and progress indicators. Kanban boards are essential UI patterns used in tools like Trello, Jira, Linear, and Notion.

### Describe the solution you'd like
I would like to add an **Animated Kanban Board** example that demonstrates:
- **Multi-column layout**: Four columns (Backlog, In Progress, In Review, Done) with responsive grid
- **Task card components**: Cards with labels, priorities, progress bars, avatars, and metadata
- **Color-coded systems**: Status dots, priority badges, and category labels
- **Staggered entrance**: Columns and cards animating in sequence
- **Interactive hover effects**: Card lift, button scale, avatar interactions
- **Progress visualization**: Animated fill bars showing task completion

### Why is this useful?
Kanban boards are fundamental to project management tools. This example will show developers how to:
1. Build multi-column responsive layouts with CSS Grid
2. Create complex card components with multiple sub-elements
3. Implement color-coded classification systems (labels, priorities)
4. Add progress indicators with CSS animations
5. Compose a complete productivity tool interface with EaseMotion

### Proposed File Structure
```text
submissions/examples/animated-kanban-board/
├── demo.html
├── style.css
└── README.md