# Rotate-Click Popover

### 1. What does this do?
A pure CSS popover that rotates into view (from a slight tilt to upright, with a scale-up) when its trigger button is clicked, styled with cyberpunk neon accents. Built with the native HTML Popover API — no JavaScript required.

### 2. How is it used?
\`\`\`html
<div class="cyber-wrap">
  <button class="cyber-trigger" popovertarget="cyber-pop-1">
    SYSTEM.INFO
  </button>
  <div class="cyber-popover" id="cyber-pop-1" popover>
    <h3 class="cyber-popover-title">Node Status</h3>
    <p class="cyber-popover-body">Details go here.</p>
  </div>
</div>
\`\`\`
- Link a trigger `<button>` to a popover via matching `popovertarget` / `id`, and add the `popover` attribute to the popover element. The browser handles open/close, click-outside dismissal, and Escape-to-close natively.
- Customize the motion with CSS custom properties on `.cyber-popover`:
  - `--cyber-timing` — transition duration (default `0.35s`)
  - `--cyber-easing` — transition easing function (default a slight overshoot cubic-bezier)
  - `--cyber-rotate` — starting rotation angle (default `10deg`)

### 3. Why is it useful?
Cyberpunk/neon-themed interfaces favor sharp, deliberate motion over soft fades. A rotate-in transition combined with neon glow (box-shadow) and monospace type gives popovers a distinctive "terminal coming online" feel, fitting EaseMotion's animation-first philosophy while staying keyboard accessible (native focus handling, Escape to dismiss) and dependency-free.
