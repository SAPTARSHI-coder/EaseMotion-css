# Wave Chat Bubble

## Description
A chat bubble component with a multi-step animation: bubbles pop in on entrance (staggered per message), and a continuous "wave" shimmer sweeps across each bubble's surface. Includes an animated typing indicator with a wave-bounce effect. Pure CSS, zero JavaScript.

## Features
- Staggered bubble entrance animation (pop/scale/fade in)
- Continuous shimmer "wave" sweep across each bubble
- Sent vs. received bubble styling with distinct tail corners
- Animated typing indicator (three dots with a wave-bounce)
- Fully responsive (max-width based, wraps naturally)
- `role="log"` for accessible live chat semantics
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-chat" role="log" aria-label="Chat conversation">
  <div class="chat-bubble is-received">Received message</div>
  <div class="chat-bubble is-sent">Sent message</div>

  <div class="chat-typing" aria-label="Typing indicator">
    <span></span><span></span><span></span>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--wave-duration` | `3s` | Shimmer sweep cycle duration |
| `--wave-easing` | `ease-in-out` | Shimmer timing function |
| `--wave-in-duration` | `0.4s` | Bubble entrance animation duration |
| `--wave-in-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Entrance timing function |
| `--wave-bg-sent` | `#38bdf8` | Sent bubble background |
| `--wave-bg-received` | `#23273a` | Received bubble background |
| `--wave-radius` | `18px` | Bubble corner rounding |

## Accessibility & Motion
Chat container uses `role="log"` for assistive technology to announce new messages appropriately. Respects `prefers-reduced-motion` by disabling both the entrance animation and the shimmer sweep, showing bubbles in their final state immediately.

## Files
- `demo.html` — live working example with a sample conversation
- `style.css` — component styles and animations
- `README.md` — this file