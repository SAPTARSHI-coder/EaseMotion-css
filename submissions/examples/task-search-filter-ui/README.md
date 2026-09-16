# Task Search & Filter UI (Responsive & Accessible)

## 1. What does this do?

A clean, responsive, and accessible **Task Search & Filter UI Component** designed for task-management interfaces and productivity applications. It features a styled search bar for filtering task titles in real time, along with visually distinct radio-driven status filter tabs (**All**, **Pending**, and **Completed**).

---

## 2. How is it used?

Include `style.css` in your project and wrap your search input and radio filter group inside `.ease-task-toolbar`:

```html
<link rel="stylesheet" href="./style.css" />

<div class="ease-task-toolbar">
  <!-- Search Input -->
  <div class="ease-search-wrapper">
    <label for="task-search-input" class="sr-only">Search tasks</label>
    <div class="ease-search-input-container">
      <input
        type="text"
        id="task-search-input"
        class="ease-search-input"
        placeholder="Search task titles..."
      />
      <kbd class="ease-search-kbd">⌘K</kbd>
    </div>
  </div>

  <!-- Radio-driven Filter Controls -->
  <div class="ease-filter-group" role="radiogroup" aria-label="Task status filter">
    <!-- All Filter -->
    <input type="radio" name="task-filter" id="filter-all" class="ease-filter-radio" value="all" checked />
    <label for="filter-all" class="ease-filter-tab ease-tab-all">
      <span class="ease-tab-indicator"></span>
      <span class="ease-tab-text">All</span>
      <span class="ease-tab-count">6</span>
    </label>

    <!-- Pending Filter -->
    <input type="radio" name="task-filter" id="filter-pending" class="ease-filter-radio" value="pending" />
    <label for="filter-pending" class="ease-filter-tab ease-tab-pending">
      <span class="ease-tab-indicator"></span>
      <span class="ease-tab-text">Pending</span>
      <span class="ease-tab-count">4</span>
    </label>

    <!-- Completed Filter -->
    <input type="radio" name="task-filter" id="filter-completed" class="ease-filter-radio" value="completed" />
    <label for="filter-completed" class="ease-filter-tab ease-tab-completed">
      <span class="ease-tab-indicator"></span>
      <span class="ease-tab-text">Completed</span>
      <span class="ease-tab-count">2</span>
    </label>
  </div>
</div>
```

---

## 3. Why is it useful?

1. **Visually Distinct States**: Each status category (All, Pending, Completed) features its own curated color scheme, glowing indicator dot, active gradient background, and elevated drop shadow.
2. **Accessible by Design**: Full support for keyboard navigation (`Tab`, Arrow keys), high contrast focus rings via `:focus-visible`, screen-reader-friendly `<label>` and ARIA markup, and `prefers-reduced-motion` compliance.
3. **Pure CSS Filtering Capable**: Driven by hidden `<input type="radio">` states, allowing basic CSS status filtering without mandatory JS frameworks.
4. **Responsive Layout**: Adapts gracefully across desktop and mobile screens, converting toolbar controls into touch-friendly stacked or horizontal pill targets.

---

## 4. Key Visual & Interactive Features

| Component Element | Feature & Design Highlight |
| :--- | :--- |
| **Search Input** | Dark mode input with indigo focus glow ring (`0 0 0 3px rgba(99, 102, 241, 0.25)`), SVG icon, clear query button, and `⌘K` keyboard shortcut badge. |
| **All Filter Tab** | Vibrant Indigo gradient background (`linear-gradient(135deg, #4f46e5, #6366f1)`) when active, with glowing indicator dot. |
| **Pending Filter Tab** | Warm Amber gradient background (`linear-gradient(135deg, #d97706, #f59e0b)`) with amber indicator dot. |
| **Completed Filter Tab** | Emerald Green gradient background (`linear-gradient(135deg, #059669, #10b981)`) with emerald indicator dot. |
| **Task Items** | Custom interactive checkboxes, priority tags (`High`, `Medium`, `Low`), status pills, and completion strike-through effects. |

---

## 5. File Structure

```text
submissions/examples/task-search-filter-ui/
├── demo.html    # Full interactive showcase with sample task list
├── style.css    # Complete CSS design system and responsive styles
└── README.md    # Component documentation and integration guide
```
