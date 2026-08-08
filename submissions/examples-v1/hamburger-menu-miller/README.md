# Animated Hamburger Menu Icon

1. **What does this do?**
   A pure CSS hamburger icon that animates into an X on click. Uses the checkbox hack — zero JavaScript. The top and bottom lines rotate 45°/-45° and the middle line fades out with a width collapse.

2. **How is it used?**
   ```html
   <label class="hamburger">
     <input type="checkbox" />
     <span class="hamburger-line"></span>
     <span class="hamburger-line"></span>
     <span class="hamburger-line"></span>
   </label>
   ```

3. **Variants**
   - `hamburger-dark` — white lines for dark backgrounds
   - `hamburger-thick` — 3px line weight
   - `hamburger-lg` — larger 56px size
   - `hamburger-colored` — lines turn purple when open
   - `hamburger-rounded` — rounded line ends

4. **Why is it useful?**
   The transition IS the component — cubic-bezier spring easing on the rotate + fade makes it feel polished and satisfying. Pure CSS checkbox hack, no JavaScript, keyboard accessible. Respects `prefers-reduced-motion`.
