# Underline Draw Stopwatch

1. **What does this do?** A functional stopwatch (Start / Stop / Reset) displaying MM:SS.CS, featuring an animated underline that continuously "draws" itself left-to-right and retracts right-to-left on a loop while the stopwatch is running, combined with a subtle synchronized pulse on the time display.
2. **How is it used?** Wrap the stopwatch in a `.uds-stopwatch` container. The time text goes in `.uds-display`, sitting inside a `.uds-display-wrap` alongside a `.uds-underline` element (which holds the animated underline). Three buttons (`.uds-btn-start`, `.uds-btn-stop`, `.uds-btn-reset`) trigger the timing logic. A small inline script handles the actual elapsed-time counting (using `requestAnimationFrame` and `Date.now()`, since real elapsed-time measurement isn't achievable in pure CSS); all visual animation — the underline draw/retract loop and the display pulse — is handled entirely by CSS, toggled via a single `.is-running` class the script adds/removes.
   ```html
   <div class="uds-stopwatch">
     <div class="uds-display-wrap">
       <span class="uds-display">00:00.00</span>
       <span class="uds-underline"></span>
     </div>
     <div class="uds-controls">
       <button class="uds-btn-start">Start</button>
       <button class="uds-btn-stop">Stop</button>
       <button class="uds-btn-reset">Reset</button>
     </div>
   </div>
   ```
3. **Why is it useful?** Stopwatches are a commonly needed UI element, but usually presented as flat digit displays. This variant adds a signature animated underline that visually communicates "time is actively passing" through a continuous draw/retract loop, synchronized with a subtle pulse on the digits themselves — genuine sequenced, multi-layered animation rather than a single effect. Freezes cleanly on Stop (via `animation-play-state: paused`) and respects `prefers-reduced-motion` by showing a static full underline and disabling the pulse for users who request reduced motion.
