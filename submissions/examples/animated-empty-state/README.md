# Animated Empty State

A polished, dependency-free empty-state component for interfaces that currently have no available content.

## Overview

Empty states are commonly used in dashboards, search results, inboxes, project management tools, and content lists.

This component combines a subtle entrance animation, an animated illustration, supporting text, and optional actions to make an empty interface feel intentional rather than unfinished.

## Features

- Illustration / icon area
- Title
- Supporting description
- Optional primary and secondary actions
- Staggered entrance animation
- Floating illustration motion
- Responsive layout
- Keyboard-accessible buttons
- `prefers-reduced-motion` support
- No external dependencies

## Usage

```html
<section
  class="empty-state"
  aria-labelledby="empty-state-title"
>
  <div
    class="empty-illustration"
    aria-hidden="true"
  >
    <!-- Illustration -->
  </div>

  <div class="empty-content">

    <span class="empty-label">
      Nothing to display
    </span>

    <h1 id="empty-state-title">
      Your workspace is empty
    </h1>

    <p>
      Projects, files, and activity will appear here
      once you add your first item.
    </p>

    <div class="empty-actions">

      <button
        class="primary-action"
        type="button"
      >
        Create project
      </button>

      <button
        class="secondary-action"
        type="button"
      >
        Explore examples
      </button>

    </div>

  </div>
</section>
```

## Animation

The component uses several subtle animation layers.

### Container entrance

The entire empty state fades and rises into position:

```css
@keyframes empty-state-enter {
  from {
    opacity: 0;
    transform:
      translateY(18px)
      scale(0.985);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }
}
```

### Illustration entrance

The illustration enters slightly after the container:

```css
@keyframes illustration-enter {
  from {
    opacity: 0;
    transform:
      translateY(18px)
      scale(0.82);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }
}
```

### Ambient floating

After entering, the icon gently floats to add subtle life to the otherwise empty interface.

## Accessibility

Interactive elements use native buttons and visible keyboard focus styles.

The illustration is marked as decorative:

```html
<div
  class="empty-illustration"
  aria-hidden="true"
>
```

The component also respects:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, decorative animations are disabled.

## Responsive Behavior

On smaller screens:

* Actions become full-width.
* Buttons stack vertically.
* Content remains centered.
* The illustration scales naturally with the available space.

## Design Philosophy

This component follows the EaseMotion CSS principles:

* **Human-readable** — class names describe the UI structure and states clearly.
* **Animation-first** — motion is used to give the empty state a sense of arrival and presence.
* **Composable** — the illustration, content, and actions can be adapted independently.
* **Lightweight** — no JavaScript or external dependencies are required.
* **Accessible** — semantic controls, focus states, and reduced-motion support are included.

## Demo

Open `demo.html` directly in a browser.

No server or build step is required.

## Files

```text
animated-empty-state/
├── demo.html
├── style.css
└── README.md
```