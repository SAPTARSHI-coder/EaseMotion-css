# Workflow Swimlane Board Showcase (`ease-workflow-swimlane-board`)

A premium, production-ready Kanban/Swimlane layout designed for product operations, team planning, and multi-stage processes. This showcases advanced CSS Grid & Flexbox combinations alongside micro-interactions tailored for drag-and-drop interfaces.

## 🚀 Architectural Highlights

- **Horizontal Scroll Architecture**: Implements a locked `100vh` body with an independently scrolling horizontal board area, a critical requirement for advanced web applications.
- **Scrollable Columns**: Each swimlane column independently scrolls vertically (`overflow-y: auto`) while leaving its header firmly docked at the top.
- **Micro-Interactions**: The task cards (`.task-card`) feature sophisticated hover states (`translateY` + `box-shadow`) and grabbing interactions via `cursor: grab / grabbing` and `transform: scale(0.98)` to simulate physical depth.
- **Dark Mode Support**: Seamlessly shifts to a deep navy and slate color palette via `@media (prefers-color-scheme: dark)`.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. 

You can resize the browser window to see how the horizontal overflow scrolling automatically activates while maintaining strict column widths (`width: 320px; flex-shrink: 0;`).

### Interacting

- Hover over the task cards to see the interactive lift effect.
- Click and hold a task card to see the "grabbing" interaction state.
- Toggle your OS-level Dark Mode setting to see the color tokens instantly shift.

## 🔗 Related Issue
Resolves Issue #17928
