# Task Search and Filter UI Component

## Abstract

The **Task Search and Filter UI Component** provides a performant, modern, and highly accessible user interface for searching and filtering task items by text query and status (`All`, `Pending`, `Completed`). Built with zero external framework dependencies using standard HTML, CSS, and Vanilla JavaScript, this component integrates seamless real-time search combined with segmented tab filter state management.

## Component Architecture & Design Tokens

### Class Conventions

- **`.ease-task-card`**: Main container boundary providing structural layout, dark theme baseline (`#0f172a`), subtle border outline (`rgba(255, 255, 255, 0.1)`), and glassmorphic elevation with `0 20px 40px rgba(0,0,0,0.5)` drop shadow.
- **`.ease-search-input`**: Full-width interactive text input styled with slate backdrop (`#1e293b`), left padding offset for search icon positioning, and high-contrast `:focus-visible` outline ring (`#38bdf8` with `0 0 0 3px rgba(56, 189, 248, 0.25)`).
- **`.ease-filter-btn.is-active`**: Active segmented control button indicating active tab selection via sky-blue accent (`#38bdf8`), high-contrast dark text (`#020617`), and tactile glow elevation (`0 2px 8px rgba(56, 189, 248, 0.3)`).
- **`.ease-badge.pending` / `.ease-badge.completed`**: Semantic, color-coded WCAG AA compliant status indicators with pill styling (`border-radius: 9999px`), semi-transparent background tints, contrasting text colors (`#fbbf24` for pending, `#34d399` for completed), and outer borders.
- **`.ease-task-item`**: Task list row item with smooth hover transform (`translateY(-2px)`) and background highlights.
- **`.ease-empty-state`**: Centered messaging overlay rendered dynamically when no task item matches active filter/query conditions.

## Accessibility & ARIA Matrix

| Element / Selector | ARIA / Role Mapping | Description |
| :--- | :--- | :--- |
| `.ease-search-wrapper` | `role="search"` | Demarcates the search input region within landmark tree for assistive tech. |
| `.ease-search-input` | `aria-label="Search task titles"` | Provides accessible naming context for screen readers. |
| `.ease-filter-group` | `role="tablist"` | Grouping container identifying the filter pill row as tab controls. |
| `.ease-filter-btn` | `role="tab"`, `aria-selected` | Identifies individual filter controls and announces tab selection state. |
| `.ease-task-list` | `aria-live="polite"` | Announces task list updates dynamically to screen reader users without interrupting flow. |
| `.ease-search-icon` | `aria-hidden="true"` | Hides decorative search magnifying glass icon from screen reader tree. |

### Keyboard Navigation
- **Focus Rings**: Full `:focus-visible` ring coverage (`outline: 2px solid #7dd3fc`) across all interactive control elements (`.ease-filter-btn` and `.ease-search-input`).
- **Tab Sequence**: Standard document tab order flows seamlessly from Search Input to Segmented Filter Buttons to individual task list focusables.

## State Transition Logic

1. **Text Query Filtering**: Listening on the input event of `#task-search`, the component extracts normalized text (`query.toLowerCase().trim()`) and checks each task title.
2. **Status Category Filtering**: Clicking any filter tab updates `currentFilter` (`'all'`, `'pending'`, or `'completed'`) and updates active visual classes (`is-active`) alongside `aria-selected` attributes.
3. **Compound Evaluation**: The filtering function combines text query matching (`matchesSearch`) and status tab matching (`matchesFilter`). Tasks failing either test are hidden via `display: none`.
4. **Empty State Trigger**: If total visible tasks equal zero, the `#empty-state` container display property toggles to `block`, providing immediate user feedback.
