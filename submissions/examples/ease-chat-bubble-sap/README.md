# ease-chat-bubble-sap

A floating chat entry-point button with a gentle idle float animation, hover lift, and an unread-count badge — pure CSS.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <button class="chat-bubble-btn" aria-label="Open chat">
     <svg viewBox="0 0 24 24">...</svg>
     <span class="chat-bubble-badge">3</span>
   </button>
```

## Customization
- `chat-float-sap` keyframes: idle bob distance/speed.
- `background` gradient on `.chat-bubble-btn` for theming.
- `.chat-bubble-badge`: swap count, color, or remove entirely if unread state isn't needed.
- `bottom`/`right` on `.chat-bubble-btn`: reposition the fixed button.

## Notes
- Idle float animation pauses on hover (`animation-play-state: paused`) so the hover scale/shadow transition isn't fighting the float loop at the same time.
- Badge appears with a short pop-in (`backwards` fill mode) rather than being visible immediately on load.
- Respects `prefers-reduced-motion`: idle float and badge pop are disabled, and hover/active still work via instant state changes with no transition.
- `aria-label` is included since the button has no visible text, only an icon.