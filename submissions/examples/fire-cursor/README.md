# 🔥 Fire Cursor – Cursor Emits Sparks Like a Sparkler

Resolves: #58334

## Description
A playful cursor-trail effect where moving the pointer emits small glowing
"spark" particles that fly outward and fade, mimicking a sparkler. Built as
a lightweight, dependency-free component: CSS drives all particle motion,
scaling, and fading via keyframe animations, with a small JS helper that
spawns a spark element at the pointer's position on `mousemove` /
`touchmove`.

## Features
- Sparks spawn at the exact cursor position and fly outward in a random
  direction and distance.
- Randomized spark size, color, distance, and duration for organic variety.
- Throttled spawn rate + a max spark cap to keep performance smooth.
- Basic touch support for mobile.
- Respects `prefers-reduced-motion` — animations are effectively disabled
  for users who request reduced motion.

## Files
- `demo.html` — standalone demo page with the pointer-tracking script.
- `style.css` — all spark styling and the `fc-spark-fly` keyframe animation.
- `README.md` — this file.

## Usage
1. Include `style.css` in your page.
2. Add a container for spark elements:
   ```html
   <div id="fc-spark-container" class="fc-spark-container" aria-hidden="true"></div>
   ```
3. Copy the spark-spawning script from `demo.html` (or your own equivalent)
   and attach it to `mousemove` on the element you want the effect on.

## Customization
| CSS Custom Property | Purpose                          |
|----------------------|-----------------------------------|
| `--fc-dx`, `--fc-dy`  | Direction/distance a spark travels |
| `--fc-duration`       | How long a spark's animation lasts |

Spark color and size are randomized in JS per spark, but you can hardcode
these or expose them as additional CSS variables if you'd like a more
uniform look.

## Accessibility
Wrapped the spark animation in a `prefers-reduced-motion` media query so
users with that preference set don't see the flying-particle motion.

## Screenshots / Demo
Open `demo.html` in a browser and move your mouse over the page to see the
spark trail in action.