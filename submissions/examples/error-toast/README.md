# Error Toast

1. What does this do? A red alert toast that shakes once on appear with an attention-grabbing glow; hovering the toast replays the shake.
2. How is it used? Build a `.error-toast` element with an `.error-toast__icon`, a `.error-toast__body` (title + message), and an `.error-toast__close` button. Customize the red and soft red and the shake speed via `--et-red`, `--et-red-soft`, and `--et-speed`.
3. Why is it useful? It conveys errors with a clear, physical urgency using only CSS animations (no JavaScript), and respects `prefers-reduced-motion`.
