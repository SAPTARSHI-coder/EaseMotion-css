# Auto-Scroll Log Viewer

1. **What does this do?**
   A terminal-style log viewer that auto-follows new output, pauses the moment the user scrolls up, and shows an animated "Jump to latest" pill with a new-line counter to resume.

2. **How is it used?**
   Apply the `.log-viewer` container with a `.log-pane` scrollable region and a `.log-jump` button:
   ```html
   <div class="log-viewer" role="log" aria-live="polite" aria-relevant="additions">
     <div class="log-pane" tabindex="0">
       <!-- .log-line elements appended dynamically -->
     </div>
     <button class="log-jump" aria-label="Jump to latest log entry">
       ↓ Jump to latest <span class="log-jump-count">0</span>
     </button>
   </div>
   ```

3. **Why is it useful?**
   Auto-scroll that fights the reader is the most common log-viewer failure. This component solves it with a scroll-position detector that pauses following the instant the user scrolls up, then offers a clear animated call-to-action to resume. It aligns with EaseMotion CSS's composable, animation-first philosophy — every motion is driven by reusable keyframes and CSS custom properties, and every animation is disabled under `prefers-reduced-motion: reduce`. Full keyboard support (`End`, `Home`, `Space`) and ARIA `role="log"` / `aria-live="polite"` announcements are built in for assistive technology.

## Accessibility

| Feature | Implementation |
|---------|---------------|
| Screen reader | `role="log"`, `aria-live="polite"`, assertive announcements for state changes |
| Keyboard | `End` → jump to latest, `Home` → jump to top, `Space` → toggle stream |
| Focus ring | Visible `:focus-visible` outlines on all interactive elements |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` disables all animations |

## Files

- `demo.html` — self-contained working demo (no server required)
- `style.css` — all component styles
- `README.md` — this file
