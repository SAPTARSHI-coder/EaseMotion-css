# Animated Kanban Board

A modern **Kanban Board** built with **EaseMotion CSS**. Features multiple columns (Backlog, In Progress, Review, Done), task cards with priority tags, progress bars, avatar assignments, and smooth staggered entrance animations.

## ✨ Features

- **📋 4 Kanban Columns**: Backlog, In Progress, Review, and Done with color-coded indicators
- **🏷️ Priority Tags**: High, Medium, Low priority badges with color coding
- **📊 Progress Bars**: Animated progress indicators for in-progress tasks
- **👥 Avatar Assignments**: Multiple assignee avatars with overlapping layout
- **✅ Completed States**: Strikethrough titles and completion indicators
- **💬 Task Metadata**: Comment counts and due dates with urgent highlighting
- **🎬 Staggered Entrance**: Columns slide up sequentially
- **🖱️ Hover Effects**: Card lift and border glow on hover
- **📱 Responsive**: 4-column → 2-column → 1-column layout

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main page and footer |
| `ease-slide-up` | Slides columns up on entrance |
| `ease-delay-100` to `ease-delay-600` | Creates cascading staggered sequence |
| `ease-card` | Base card structure for tasks |
| `ease-hover-lift` | Lift effect on task cards |
| `ease-hover-grow` | Scale effect on buttons and avatars |
| `ease-btn` + `ease-btn-primary` | Styled add task button |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch columns slide in with staggered animations
3. Hover over task cards to see lift and glow effects
4. Observe the animated progress bars in "In Progress" column
5. Notice completed tasks have strikethrough titles
6. Hover over team avatars to see them pop up
7. Resize to see responsive column layout

## 🎨 Design Highlights

- **Dark Theme**: Modern project management aesthetic
- **Color-Coded Columns**: Purple (Backlog), Orange (Progress), Blue (Review), Green (Done)
- **Priority System**: Red/Orange/Green tags for High/Medium/Low
- **Progress Visualization**: Animated bars showing task completion
- **Card States**: Active (glowing border), Completed (dimmed + strikethrough)

## 🛠️ Technologies Used

- HTML5
- Custom CSS (Flexbox, CSS Grid, Keyframes, Custom Properties)
- EaseMotion CSS (via CDN)