# Reading Progress Bar

1. **What does this do?**
   A thin gradient bar fixed at the top of the page that fills as the user scrolls through content — like Medium or dev.to.

2. **How is it used?**
   ```html
   <!-- Add to your page -->
   <div class="reading-progress" id="progress"></div>

   <!-- One-line JS to update on scroll -->
   <script>
     const bar = document.getElementById('progress');
     window.addEventListener('scroll', () => {
       const p = document.documentElement;
       bar.style.width = (p.scrollTop / (p.scrollHeight - p.clientHeight) * 100) + '%';
     });
   </script>
   ```

3. **Variants**
   - `reading-progress` — default (purple → pink → amber)
   - `reading-progress-cool` — cool tone (cyan → indigo → violet)
   - `reading-progress-warm` — warm tone (amber → red → pink)
   - `reading-progress-flat` — no glow shadow
   - `reading-progress-thick` — 5px height

4. **Why is it useful?**
   Animation-first, composable, and minimal JS footprint (one line). Gradient uses EaseMotion's primary tokens. Respects `prefers-reduced-motion` for accessibility.
