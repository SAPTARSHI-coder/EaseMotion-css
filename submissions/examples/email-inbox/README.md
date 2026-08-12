# Email Inbox Master-Detail Component

An interactive client multi-pane split layout module handling independent panel scroll bounding, row-based selection borders, and layered lightbox overlay modals.

## Functional Controls
- **Isolated Scroll Rails:** Layout container controls locking vertical overflow rules on column feeds independently.
- **Compensation Borders:** Selection indicators using inset spacing geometry to safeguard elements from width reflow shifts.
- **Hardware Scale Modals:** Overlay panels using scaling transitions (`transform` and `opacity`) to stay decoupled from base document paint trees.

## Usage Layout Structure
```html
<div class="ease-inbox-viewport">
  <aside class="ease-inbox-sidebar"> ... </aside>
  <div class="ease-message-list-feed"> ... </div>
  <main class="ease-preview-pane"> ... </main>
</div>
```

Closes #12485
