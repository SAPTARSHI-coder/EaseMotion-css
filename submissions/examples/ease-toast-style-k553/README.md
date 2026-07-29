# Ease Toast Notification

## What does this do?
A stacked toast notification system with success/error/warning/info variants,
smooth slide-in/out transitions, a manual close button, and a **countdown
progress bar** synced to the auto-dismiss timer — pausable on hover.

## How is it different from a typical toast utility?
- Includes a visual countdown bar showing exactly how much time is left
  before auto-dismiss, not just a fixed timeout with no feedback.
- Hovering a toast pauses both the timer and the progress bar; leaving
  resumes both from where they left off.
- Toasts stack in a fixed container and reflow automatically as older ones
  are dismissed, supporting multiple simultaneous notifications.
- Color-coded accent border per type via a single CSS variable
  (`--toast-accent`), easy to extend with new types.

## How is it used?
\`\`\`html
<div class="ease-toast-container" id="toastContainer"></div>
\`\`\`

Call the provided `spawnToast(type)` JS helper (see `demo.html`) with
`"success"`, `"error"`, `"warning"`, or `"info"` to create a toast. Styling
is entirely class-driven:

\`\`\`html
<div class="ease-toast ease-toast--success is-visible">
  <div class="ease-toast__content">
    <span class="ease-toast__message">Saved!</span>
    <button class="ease-toast__close">&times;</button>
  </div>
  <div class="ease-toast__progress"></div>
</div>
\`\`\`

## Why is this useful?
Real dashboards often show multiple toasts and users need to know how long
they have to read one before it disappears. The countdown bar and
hover-to-pause behavior make the notification system more usable, while
still being lightweight and easy to drop into any project.