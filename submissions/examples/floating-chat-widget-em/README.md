# Collapsible Floating Support Chat Widget Window

> A fixed-corner floating chat support widget that expands from a FAB bubble into a full conversation window featuring animated message bubbles, a 3-dot typing indicator, quick reply chips, and an auto-resizing input field.

## Features

- **Scale-Fade Open/Close Animation** — The chat window uses `transform: scale()` and `opacity` transitions with a custom cubic-bezier spring for a polished entrance/exit.
- **FAB Icon Morphing** — The trigger button smoothly swaps its chat icon for a close icon using opacity and rotation transforms when the window is open (`aria-expanded="true"`).
- **3-Dot Typing Indicator** — Three dots bounce using staggered `animation-delay` on `@keyframes dot-bounce` to simulate an agent actively typing.
- **Agent / User Bubble Alignment** — Agent messages align left with a white card style; user messages align right with the brand violet background. Each bubble has a `pop-in` micro-animation.
- **Quick Reply Chips** — Pill-shaped shortcut buttons inject a message and trigger a simulated agent response. They hide after first interaction.
- **Auto-resize Textarea** — The message input height grows dynamically as the user types multi-line messages, capped at 100px.
- **Keyboard Accessible** — `Escape` closes the window, `Enter` sends a message, `role="dialog"` with `aria-modal` for correct screen reader focus trapping.

## Files

```
submissions/examples/floating-chat-widget-em/
├── demo.html    — FAB trigger, full chat window (header, body, chips, footer)
├── style.css    — Fixed positioning, scale-fade keyframes, dot-bounce, bubble variants, mobile layout
├── script.js    — Toggle state management, bubble injection, typing simulation, chip handlers
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--primary` | `#6366f1` | Brand Indigo for buttons, user bubbles |
| `--bubble-agent` | `#ffffff` | Agent message bubble background |
| `--bubble-user` | `#6366f1` | User message bubble background |
| `--widget-width` | `360px` | Desktop chat window width |
| `--fab-size` | `56px` | Diameter of the FAB trigger button |

## Usage

Include the fixed elements before `</body>` in your HTML:

```html
<!-- Chat Window -->
<div class="chat-window" id="chat-window" role="dialog" aria-modal="true" aria-hidden="true">
  ...
</div>

<!-- FAB -->
<button type="button" class="chat-fab" id="chat-fab" aria-expanded="false" aria-controls="chat-window">
  ...
</button>
```

Then include `script.js` which handles all toggle logic automatically.

## Acceptance Criteria ✅

- [x] Chat window opens and closes with a smooth scale-fade animation.
- [x] 3-dot typing indicator pulses continuously when active (staggered `dot-bounce` keyframes).
- [x] Message bubbles align correctly — agent (left) and user (right).
- [x] Responsive design resizes cleanly on viewports below `420px`.
- [x] Keyboard accessible — `Escape` closes, `Enter` sends, `role="dialog"` configured.
- [x] Conforms to repository CI structure (`demo.html`, `style.css`, `script.js`, `README.md`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
