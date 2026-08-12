# EaseMotion CSS — Modal & Dialog Component

A modern, highly customizable, native HTML5-based modal overlay system designed for the EaseMotion CSS library. It utilizes the native `<dialog>` tag to provide built-in accessiblity controls such as keyboard focus traps and backdrop management.

## Features

- **Native Dialog Base**: Uses HTML5 `<dialog>` as a native DOM container, reducing manual JavaScript positioning logic.
- **Backdrop Blur Styling**: Integrates glassmorphism overlays via the native `::backdrop` pseudo-element with smooth CSS transitions.
- **Centering & Scale Entrance Animation**: Modal content zooms out slightly and fades in dynamically on trigger events.
- **Multiple Size Presets**: Standard layout sizing presets for small confirmation alerts, standard profiles, large scrolling content blocks, and fullscreen dashboards.
- **Accessibility Safeguards**: Automatically inherits keyboard focus trap, tab navigation capture, and built-in Escape key dismiss.
- **Intelligent Dismiss Actions**: Seamlessly closes the modal overlay when clicking anywhere outside the active panel region (the backdrop underlay).
- **Reduced Motion Support**: Suppresses coordinate animations when client settings request prefers-reduced-motion.

## File Structure

```tree
submissions/examples/modal-dialog-component/
├── demo.html     # Interactive playground showcasing modal variations and dismiss boundaries
├── style.css     # CSS rules for native dialogs, keyframe transitions, custom layouts
└── README.md     # Installation guidelines and class definitions
```

## Class Reference Guidelines

| CSS Class | Target | Description |
| :--- | :--- | :--- |
| `dialog.ease-modal` | Element | Base dialog container class resetting default browser styling. |
| `.ease-modal-content` | Div | Outer content layout wrapper holding header, body, and footer layers. |
| `.ease-modal-header` | Div | Top header bar displaying dialog titles and close button triggers. |
| `.ease-modal-close` | Button | Icon close action button positioned on the top right. |
| `.ease-modal-body` | Div | Core body content container with vertical scroll overflow protection. |
| `.ease-modal-footer` | Div | Lower action bar housing main action/dismiss buttons. |
| `.ease-modal-sm` | Modifier | Sizing variant constraining dialog width to 380px (ideal for confirm panels). |
| `.ease-modal-lg` | Modifier | Sizing variant expanding dialog width to 760px (ideal for documentation). |
| `.ease-modal-fullscreen` | Modifier | Fullscreen override filling the active client width and height. |

## Detailed Usage Pattern

### Standard Confirmation Dialog (Small)

```html
<dialog id="confirm-box" class="ease-modal ease-modal-sm">
  <div class="ease-modal-content">
    <div class="ease-modal-header">
      <h2>Confirm Task</h2>
      <button class="ease-modal-close" onclick="closeModal('confirm-box')">&times;</button>
    </div>
    <div class="ease-modal-body">
      <p>Are you sure you want to perform this operation?</p>
    </div>
    <div class="ease-modal-footer">
      <button class="demo-btn demo-btn-outline" onclick="closeModal('confirm-box')">Cancel</button>
      <button class="demo-btn demo-btn-danger" onclick="executeTask()">Confirm</button>
    </div>
  </div>
</dialog>
```

### Core Trigger Functions (JavaScript)

Native modals are opened using `.showModal()` and closed using `.close()`. Here are the recommended scripts used in our showcase:

```javascript
// Open Modal Dialog
function openModal(id) {
  document.getElementById(id).showModal();
}

// Close Modal Dialog
function closeModal(id) {
  document.getElementById(id).close();
}

// Automatically close when selecting the backdrop area (clicks outside dialog coordinates)
document.querySelectorAll('dialog.ease-modal').forEach(modal => {
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
    if (!isInDialog) {
      modal.close();
    }
  });
});
```
