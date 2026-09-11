# Notification Stack

1. What does this do? A stack of toast notifications that slide in from the right and stagger their arrival with cascading delays.
2. How is it used? Build a `.notification-stack` region of `.notification-stack__toast` articles, each with an icon, title, and copy. Modifiers set the accent color: `--success` (green), `--info` (blue), `--warn` (amber). Each toast uses the `ns-slide-in` entrance keyframe with an increasing `animation-delay` so they cascade in. Adjust accent/tint via `--ns-accent` and `--ns-tint`.
3. Why is it useful? It produces a polished staggered toast entrance with pure CSS (no JavaScript), supports semantic `aria-live` for screen readers, and respects `prefers-reduced-motion`.
