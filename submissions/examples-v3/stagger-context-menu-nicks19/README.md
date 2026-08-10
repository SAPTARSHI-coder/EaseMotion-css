# Stagger Context Menu (Health & Fitness Theme)

A pure CSS dropdown/context menu that utilizes dynamic staggered animations to reveal its list items. Styled with a clean, vibrant "Health & Fitness" aesthetic (Teal and clean whites), this component adds a satisfying tactile response to standard application menus.

## Features

- **Pure CSS State Management**: Uses the "Checkbox Hack" (`<input type="checkbox">` and `<label>`) to handle toggling the menu without any JavaScript.
- **Click-Outside to Close**: Implements a transparent, full-screen `.ease-menu-overlay` that catches clicks outside the menu and closes it, mimicking standard JS-based dropdown behavior.
- **Staggered Keyframe Animation**: When the menu opens, each `<li>` item executes an `@keyframes` animation (`easeStaggerSlideIn`). The `animation-delay` is calculated dynamically using a CSS custom property (`--ease-delay`) set in the HTML.
- **Spring Physics**: The list items slide in using a custom cubic-bezier timing function (`cubic-bezier(0.34, 1.56, 0.64, 1)`), giving them a bouncy, energetic "pop" suitable for a fitness app.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`.

## Usage Example

```html
<!-- State Controller -->
<input type="checkbox" id="menu-toggle-1" class="ease-menu-toggle">

<!-- Trigger Button -->
<label for="menu-toggle-1" class="ease-menu-trigger">⋮</label>

<!-- The Menu Container -->
<div class="ease-stagger-menu">
  
  <!-- Overlay to close menu when clicking outside -->
  <label for="menu-toggle-1" class="ease-menu-overlay"></label>
  
  <ul class="ease-menu-list">
    <!-- Notice the --ease-delay inline variables -->
    <li style="--ease-delay: 1"><button>▶ Start Workout</button></li>
    <li style="--ease-delay: 2"><button>✏️ Edit Details</button></li>
    <li style="--ease-delay: 3"><button>📊 View History</button></li>
    <li style="--ease-delay: 4"><button class="danger">🗑️ Delete</button></li>
  </ul>
  
</div>
```

## Why it fits EaseMotion CSS

- **Algorithmic Animation**: By using `animation-delay: calc(var(--ease-delay) * var(--ease-stagger-base-delay))`, this component avoids duplicating CSS classes for every list item (e.g., `.delay-1`, `.delay-2`). This is a highly scalable, modern CSS pattern.
- **Performant Micro-Interactions**: The entrance animation animates `transform` and `opacity`, ensuring that the staggered list items don't trigger layout repaints, resulting in a smooth 60FPS experience.
