# Glitch-Flicker Modal

An attention-grabbing modal component with glitch and flicker animations for urgent alerts and security notifications in fintech dashboards.

## What does this do?

Displays an urgent modal with aggressive glitch and flicker animations to draw immediate attention for security alerts, fraud warnings, or critical notifications.

## How is it used?

```html
<!-- Modal Overlay -->
<div class="modal-overlay" id="modalOverlay">
  <div class="modal glitch-modal" id="glitchModal">
    <div class="modal-header">
      <h2 class="modal-title glitch-text" data-text="Security Alert">Security Alert</h2>
      <button class="modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="modal-body">
      <!-- Content -->
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>

<script>
function openModal() {
  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById('glitchModal').classList.add('glitching');
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.getElementById('glitchModal').classList.remove('glitching');
}
</script>
```

## CSS Custom Properties

```css
--modal-bg           /* Modal background */
--modal-surface      /* Surface color */
--modal-border       /* Border color */
--modal-accent       /* Accent/warning color */
--danger             /* Danger action color */
--success            /* Success action color */
--text-primary       /* Primary text color */
--text-secondary     /* Secondary text color */
```

## Why is it useful?

- **Maximum Attention**: Glitch effects grab user focus immediately
- **Urgency Signaling**: Visual distortion conveys importance
- **Security Applications**: Perfect for fraud alerts and verification prompts
- **Accessible**: Supports `prefers-reduced-motion`
- **Customizable**: CSS variables for easy theming

## Features

- Glitch transform and brightness effects
- Flicker overlay animation
- Glitching text with RGB split
- Icon glitch animation
- Smooth open/close transitions
- Multiple button variants (primary, secondary, danger)
- Keyboard accessible (Escape to close)
- Fully responsive
