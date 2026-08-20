# Pulse Follow Button

A glassmorphic, interactive follow button component featuring subtle, concentric expanding pulse animations.

## Features

- **Glassmorphic Aesthetics**: Premium translucency with frosted glass backgrounds (`backdrop-filter`) and soft shadows that integrate cleanly into dark modern interfaces.
- **Dynamic CSS State Control**: Toggles between "Follow" and "Following" states using a lightweight checkbox mechanic without relying on external runtime scripts.
- **Concentric Pulse Rings**: Hardware-accelerated dual expanding rings (`pulse-follow-expand`) that run infinitely in the "Follow" state and automatically pause once the button is checked.
- **Accessibility**: Complete keyboard support (toggles on Space/Enter when focused), clear focus visible outline styling, appropriate `role` assignments, and dynamic ARIA attributes.
- **Reduced Motion**: Fallback style disables expanding keyframe loops when prefers-reduced-motion is active.

## File Structure

```text
submissions/examples/pulse-follow-button-antigravity/
├── demo.html
├── style.css
└── README.md
```

## Usage

Use the following layout structure for the button:

```html
<div class="pulse-follow-container">
  <input
    type="checkbox"
    id="follow-checkbox"
    class="pulse-follow-input"
    tabindex="-1"
    aria-hidden="true"
  />
  <label
    for="follow-checkbox"
    class="pulse-follow-btn"
    tabindex="0"
    role="button"
    aria-pressed="false"
    aria-label="Follow user"
  >
    <!-- Follow State -->
    <span class="btn-text text-follow">
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <line x1="19" y1="8" x2="19" y2="14"></line>
        <line x1="22" y1="11" x2="16" y2="11"></line>
      </svg>
      Follow
    </span>

    <!-- Following State -->
    <span class="btn-text text-following">
      <svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      Following
    </span>

    <!-- Pulse Rings -->
    <span class="pulse-rings">
      <span class="pulse-ring ring-1"></span>
      <span class="pulse-ring ring-2"></span>
    </span>
  </label>
</div>
```

### Questions Checklist:

1. **What does this do?** It provides an interactive follow/following toggle button styled with a frosted glassmorphic card look and expanding pulse rings.
2. **How is it used?** Pair the label with a hidden checkbox, including SVG paths for follow/following states and elements for the pulse rings.
3. **Why is it useful?** It provides a highly requested call-to-action button that executes states and animation control pure-CSS without heavy script overhead.

## Customization

You can customize variables directly or override EaseMotion design tokens in your root/parent scope:

```css
:root {
  --pulse-color: #6c63ff; /* Customize main color theme */
  --pulse-speed: 2.4s; /* Customize expanding speed */
  --following-color-light: #86efac; /* Following text/icon color in dark mode */
}
```

## Accessibility

- Visually hidden checkbox is marked with `tabindex="-1"` and `aria-hidden="true"`.
- Interactive label has `tabindex="0"`, `role="button"`, and receives focus styling via `:focus-visible`.
- Small JS listener handles Space/Enter interactions and maps them to click operations.
- Keyboard triggers dynamically update `aria-pressed` ("true" / "false") and `aria-label` ("Follow user" / "Unfollow user").
