# Accessible Filterable Multi-Select Tag Input Pill Box

> An accessible multi-select tag input pill box component featuring interactive tag creation, keyboard navigation, autocomplete suggestions, duplicate tag rejection animations, email validation, and full ARIA combobox screen reader support.

## Features

- **Inline Tag Creation** — Type text and press <kbd>Enter</kbd> or <kbd>,</kbd> (or <kbd>Space</kbd> in email mode) to create stylized, animated tag pills inside the input field container.
- **Pop-In Scale Animation** — New tag pills scale up gracefully (`@keyframes pillPopIn`) upon creation using spring-like easing.
- **Keyboard Navigation & Removal** — 
  - <kbd>Backspace</kbd> on an empty input focuses and deletes the preceding tag pill.
  - Left (<kbd>←</kbd>) and Right (<kbd>→</kbd>) arrow keys navigate focus between pills.
  - <kbd>Delete</kbd> or <kbd>Backspace</kbd> on a focused pill removes it.
- **Duplicate Tag Rejection** — Attempting to add a duplicate tag triggers a visual shake animation (`@keyframes pillShake`) on the existing tag pill and announces the duplicate to screen readers.
- **Autocomplete Dropdown Suggestions** — Filter suggestions dynamically as you type, highlighting matching text (`<mark>`). Supports keyboard navigation with <kbd>↑</kbd> and <kbd>↓</kbd> arrow keys.
- **Accessibility & ARIA Combobox Pattern** — Full accessibility compliance featuring `role="combobox"`, `aria-expanded`, `aria-autocomplete="list"`, `aria-haspopup="listbox"`, and an `aria-live="polite"` live region that announces tag additions and removals.
- **Multi-color Mode** — Dynamic tag color assignments (`indigo`, `violet`, `cyan`, `emerald`, `amber`, `rose`) or unified theme colors.

---

## Directory Structure

```
submissions/examples/tag-input-pillbox-jw/
├── index.html    — HTML structure with 3 demo instances (Issues, Skills, Email)
├── style.css    — Glassmorphism styles, pill pop-in & duplicate shake keyframes, combobox layout
├── script.js    — Combobox logic, tag array state management, keyboard events, autocomplete filter
└── README.md    — Component documentation
```

---

## Data Attributes Configuration

| Attribute | Options / Default | Description |
|---|---|---|
| `data-suggestions` | Comma-separated list | Autocomplete suggestions available for the tag input |
| `data-max` | `number` (Default: `Infinity`) | Maximum allowed tags in the pill box |
| `data-color-mode` | `single` \| `multi` (Default: `single`) | Assign unified color or cycling color palette to pills |
| `data-delimiter` | `comma` \| `space` (Default: `comma`) | Key trigger used to split/commit input tags |
| `data-validate` | `email` (Optional) | Enforces email pattern validation before adding tag |

---

## Usage Example

```html
<div class="tag-input-root"
     id="root-example"
     data-suggestions="React,TypeScript,Node.js,Python,Docker"
     data-color-mode="multi">
  <div class="tag-pill-list" id="pills-example" role="listbox" aria-multiselectable="true"></div>
  <div class="combobox-wrap">
    <input
      id="input-example"
      class="tag-input"
      type="text"
      autocomplete="off"
      placeholder="Add tags…"
      role="combobox"
      aria-expanded="false"
      aria-autocomplete="list"
      aria-haspopup="listbox"
      aria-controls="dropdown-example"
    >
  </div>
  <ul class="dropdown-list" id="dropdown-example" role="listbox" hidden></ul>
</div>
```

---

## Acceptance Criteria Checklist ✅

- [x] Isolated in `submissions/examples/tag-input-pillbox-jw/`.
- [x] Typing text and pressing `Enter` or `,` creates a stylized tag pill inside input box.
- [x] Pressing `Backspace` in an empty input highlights and removes the preceding tag pill.
- [x] Attempting to insert a duplicate tag triggers a subtle visual shake animation.
- [x] Autocomplete suggestion menu opens on focus/typing and supports arrow key selection.
- [x] Screen reader live region announces tag additions and removals (`aria-live="polite"`).

---

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
