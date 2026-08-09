# Liquid Number Counter

1. **What does this do?** A circular counter where a number counts up from 0 to a target value while a "liquid" fill rises inside the circle to match the current percentage, complete with an animated wavy liquid surface (two independently rotating blob layers simulating water motion).
2. **How is it used?** Apply `.liquid-counter` to a container with `data-target` (the final number) and optional `data-suffix` (e.g. `%`) attributes, containing a `.liquid-fill` div and a `.liquid-value` span. A small inline script animates the count-up using `requestAnimationFrame` and updates a `--fill-percent` CSS custom property, which the CSS uses to set the liquid's height; the wave motion itself (the rotating blob layers forming the liquid's surface) is handled entirely by CSS keyframes, independent of the JS.
   ```html
   <div class="liquid-counter" data-target="87" data-suffix="%">
     <div class="liquid-fill"></div>
     <span class="liquid-value">0</span>
   </div>
   ```
3. **Why is it useful?** Number counters/stat displays are extremely common on landing pages, but usually just animate the digits with no visual representation of "how full" the value is. This adds a genuinely sequenced, multi-layered animation — the liquid rising in sync with the count, plus a continuous independent wave motion on its surface — fitting EaseMotion CSS's animation-first philosophy. Respects `prefers-reduced-motion` by disabling the wave rotation and height transition (the final value still displays correctly, just without the animated fill).
