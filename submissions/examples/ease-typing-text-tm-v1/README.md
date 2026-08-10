# ease-typing-text

Typing text animation for EaseMotion CSS.

## CSS Only

```css
.typing-demo { overflow: hidden; border-right: 2px solid #6c63ff; white-space: nowrap; width: 0; animation: typewriter 1s steps(14) forwards, blink 0.7s step-end infinite; }
@keyframes typewriter { to { width: 100%; } }
@keyframes blink { 50% { border-color: transparent; } }
```
