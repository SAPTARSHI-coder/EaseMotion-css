# Drag and Drop Visual Feedback

A robust, reusable drag-and-drop visual feedback pattern perfectly suited for Kanban boards, dashboards, and file managers. Integrates effortlessly with existing EaseMotion CSS layout utilities.

## Features

- 🤚 **Interactive Lift Effect:** When a card is dragged, it scales up, tilts slightly, and projects a deep shadow to communicate that it has been "lifted" off the page.
- 🎯 **Drop Zone Highlighting:** Automatically highlights the active drop zone (`.drop-zone.drag-over`) with a subtle background and border color change so users know exactly where they are dropping.
- 👻 **Animated Placeholder:** Injects a dynamically sized `.drop-placeholder` where the card will land if dropped, pushing other items smoothly out of the way.
- ⚡ **Native HTML5 API:** Relies on the highly performant native HTML5 Drag and Drop API (`draggable="true"`), rather than bulky absolute-positioning libraries.
- 🛑 **Prefers-Reduced-Motion:** Fully respects OS-level accessibility settings. Disables tilts, scales, and transitions if reduced motion is preferred, while maintaining core functionality.

## Usage

1. Copy the HTML structure from `demo.html`.
2. Ensure your draggable items have the `draggable="true"` attribute and a unique `id` so the JavaScript can track them properly.
3. Define your drop zones by adding the `.drop-zone` class to the container elements.
4. Include `style.css` for the visual feedback states.
5. Include `script.js` to handle the native drag events and placeholder injection logic.

## Customization

Easily adapt the colors to match your brand's theme by editing the CSS variables:

```css
:root {
  --bg-column: #e5e7eb;
  --bg-card: #ffffff;
  --drop-zone-bg: rgba(59, 130, 246, 0.1); /* Highlight color */
  --drop-zone-border: #3b82f6; /* Highlight border */
}
```

## Contributed by

- Man1ac-1773
