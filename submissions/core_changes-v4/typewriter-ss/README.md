# Typewriter Effect (ss)

1. **What does this do?**  
   A single-pass typewriter animation that types text character-by-character with a blinking cursor, using CSS `steps()` timing.

2. **How is it used?**  

   ```html
   <span class="typewriter-ss" id="hero">Build beautiful UIs</span>
   <script>
     document.querySelectorAll('.typewriter-ss').forEach(function (el) {
       el.style.setProperty('--tw-chars', el.textContent.trim().length);
     });
   </script>
   ```

   Variants: `typewriter-ss-fast`, `typewriter-ss-slow`, `typewriter-ss-info`/`-success`/`-warning`/`-danger`, `typewriter-ss-multi`.  
   Custom properties: `--tw-speed`, `--tw-chars`, `--tw-delay`, `--tw-primary` (cursor color).

3. **Why is it useful?**  
   EaseMotion CSS has `ease-typewriter-loop` (infinite) but no single-pass typewriter for hero sections. This fills the gap with configurable speed, delay, cursor colors, and an optional JS helper for auto-detecting character counts.
