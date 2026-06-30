# ease-count-up — Animated Counter Utility

1. **What does this do?**
   Adds `.ease-count-up` — a pure-CSS animated counter that uses `@property` to register a custom integer (`--ease-count-value`) which is then animated from 0 to a target via the `ease-kf-count-up` keyframe. The animated value is displayed using the `counter()` CSS function. No JavaScript required.

2. **How is it used?**

   ```html
   <!-- Basic counter (animates from 0 → 500 over 2s) -->
   <span class="ease-count-up" style="--ease-count-target: 500;"></span>

   <!-- Custom duration -->
   <span
     class="ease-count-up"
     style="--ease-count-target: 1250; --ease-count-duration: 3s;"
   ></span>

   <!-- With a suffix label -->
   <span class="ease-count-up" style="--ease-count-target: 99;"></span>
   <span class="suffix">%</span>
   ```

   **Custom properties:**

   | Variable                | Default | Description                  |
   | ----------------------- | ------- | ---------------------------- |
   | `--ease-count-target`   | `100`   | Target number to count up to |
   | `--ease-count-duration` | `2s`    | Animation duration           |

3. **Why is it useful?**
   Animated number counters ("500+ Contributors", "1.2K Stars") are a staple of landing pages and dashboards. Traditionally they require JavaScript libraries like CountUp.js. This utility delivers the same effect in pure CSS using the modern `@property` rule, aligning with EaseMotion CSS's zero-dependency, CSS-first philosophy.
