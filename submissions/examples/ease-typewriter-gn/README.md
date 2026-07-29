# ease-typewriter Text Animation

1. **What does this do?** A typewriter animation that makes text appear character by character, simulating a typing effect. Supports default, slow, fast, looping, and no-cursor variants with a blinking cursor.
2. **How is it used?**
```html
<p class="ease-typewriter">Welcome to EaseMotion CSS</p>
<p class="ease-typewriter-slow">Building beautiful animations</p>
<p class="ease-typewriter-fast">Quick typing effect</p>
<p class="ease-typewriter-loop">This text types and retypes...</p>
<p class="ease-typewriter-no-cursor">Plain typewriter without blink</p>
```
3. **Why is it useful?** Pure CSS using `@keyframes` with `steps()` and `border-right` for the cursor blink — zero JavaScript, widely used in hero sections, landing pages, and portfolios, aligned with EaseMotion CSS's animation-first philosophy.