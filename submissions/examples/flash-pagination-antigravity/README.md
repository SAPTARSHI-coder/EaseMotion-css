# Flash Pagination

A pagination component featuring active neon glow and expanding border ripple animations.

## Features

- **Active Pulse**: Neon highlight and expanding ripple ring upon page selection.
- **CSS State Control**: Uses standard input triggers for state tracking without script dependencies.
- **Accessibility**: Includes focus states, keyboard triggers (Space/Enter), and ARIA landmark markup.
- **Reduced Motion**: Disables animations for users with system motion reduction.

## File Structure

```text
submissions/examples/flash-pagination-antigravity/
├── demo.html
├── style.css
└── README.md
```

## Usage

Use the following layout structure for the pagination items:

```html
<nav class="flash-pagination" aria-label="Pagination">
  <ul class="page-items">
    <li>
      <label
        for="page-1"
        class="page-item-btn item-1"
        tabindex="0"
        role="button"
        aria-label="Page 1"
      >
        1
        <span class="flash-ring"></span>
      </label>
    </li>
  </ul>
</nav>
```

### Questions Checklist:

1. **What does this do?** It provides a pagination component that runs a neon border flash and expanding ripple animation when page selection changes.
2. **How is it used?** Place labels with `page-item-btn` and `flash-ring` inside a `<nav class="flash-pagination">` wrapper corresponding to radio targets.
3. **Why is it useful?** It offers an interactive pagination effect that runs efficiently on hardware-accelerated transitions without requiring JavaScript for styling states.

## Customization

You can customize styling variables in your stylesheet:

```css
:root {
  --glow-color: #22d3ee;
  --glow-color-light: #67e8f9;
  --transition-speed: 400ms;
}
```

## Accessibility

- Focus outline styling is defined.
- Keyboard support maps Space/Enter key presses to click operations on labels.
- ARIA states (`aria-current` and `aria-disabled`) are handled dynamically.
