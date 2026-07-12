# Orbit Kanban Board (Music Player Theme)

A sleek, dark-themed Kanban board component featuring an animated "Orbit" border effect. Designed with a premium music/audio player aesthetic, tasks illuminate with a rotating, glowing border upon interaction.

## Features

- **Pure CSS Orbit Border**: Achieves a glowing, rotating border effect without JavaScript or complex SVG masking. It uses a rotating `conic-gradient` positioned behind a slightly smaller content block.
- **Hardware-Accelerated Animation**: The rotating ring is animated exclusively on the `transform` property (`rotate()`), ensuring buttery smooth 60fps rendering.
- **Premium Audio Theming**: Features deep blacks (`#121212`, `#181818`), subtle drop shadows, and a signature neon green active state (`#1db954`) reminiscent of popular music streaming apps.
- **Interactive States**: The orbit effect elegantly transitions in on `:hover` or when an `.ease-active` class is applied to denote tasks currently "In Progress" or "Now Playing."

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`.

## Usage Example

```html
<!-- The Kanban Container -->
<div class="ease-kanban-board">
  
  <!-- A Single Column -->
  <div class="ease-kanban-column">
    <h3 class="ease-kanban-title">Queue</h3>
    
    <div class="ease-kanban-cards">
      
      <!-- The Orbit Card -->
      <div class="ease-orbit-card">
        <!-- The hidden rotating gradient -->
        <div class="ease-orbit-ring"></div>
        
        <!-- The actual card content (sits on top) -->
        <div class="ease-orbit-card-content">
          <span class="ease-tag" style="--tag-color: #ff4b4b;">Design</span>
          <h4>Album Cover Art</h4>
          <p>Draft 3 variations for the new EP cover.</p>
        </div>
      </div>
      
    </div>
  </div>
</div>
```

## Why it fits EaseMotion CSS

- **CSS Ingenuity**: Creating animated gradient borders is a notoriously tricky CSS problem. This component demonstrates a robust, elegant solution utilizing `overflow: hidden`, `padding`, and `conic-gradient` that works cross-browser.
- **Motion Aesthetics**: The continuous rotation provides a mesmerizing, high-end feel that elevates a standard Kanban board into a "Premium" interface.
- **Scalability**: Because the inner content uses `border-radius` and `padding` to map to the outer container, it seamlessly scales to accommodate any amount of text or nested elements (like progress bars).
