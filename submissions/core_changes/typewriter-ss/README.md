# Typewriter Effect (ss)

1. **What does this do?**  
   A single-pass typewriter animation that types out text character by character with a blinking cursor, using CSS `steps()` timing for precise character-by-character reveal.

2. **How is it used?**  

   ```html
   <span class="typewriter-ss" id="hero-text">
     Build beautiful UIs with EaseMotion CSS
   </span>

   <script>
     document.querySelectorAll('.typewriter-ss').forEach(function (el) {
       el.style.setProperty('--tw-chars', el.textContent.trim().length);
     });
   </script>
   ```

   Variants:
   - `typewriter-ss-fast` — faster typing (0.04s per char)
   - `typewriter-ss-slow` — slower typing (0.15s per char)
   - `typewriter-ss-multi` — preserves whitespace for code/multiline
   - Cursor colors: `.typewriter-ss-cursor-info`, `-success`, `-warning`, `-danger`

   Custom properties:
   - `--tw-speed`: seconds per character (default: 0.08s)
   - `--tw-chars`: total character count (required for `steps()`)
   - `--tw-delay`: delay before typing starts (default: 0s)
   - `--tw-primary`: cursor color (default: #6366f1)

3. **Why is it useful?**  
   EaseMotion CSS has `ease-typewriter-loop` (infinite loop) but no single-pass typewriter for hero sections and landing pages. This fills that gap with configurable speed, delay, cursor color variants, and an optional JS helper for auto-detecting character counts — all while staying animation-first and respecting `prefers-reduced-motion`.
