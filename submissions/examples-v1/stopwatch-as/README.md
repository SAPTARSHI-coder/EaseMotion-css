# Stopwatch

### What does this do?

It shows a stopwatch with a large monospace time display down to hundredths, three controls (Lap, Stop, Reset), and a list of recorded laps. Each lap row shows its number, its time, and the delta from the previous lap, with the fastest and slowest laps highlighted.

### How is it used?

```html
<div class="sw-display"><span class="sw-main">01:42</span><span class="sw-cs">.<b>68</b></span></div>
<div class="sw-controls"><button class="sw-btn stop">Stop</button></div>
<ul class="sw-laps"><li><span class="lap-no">Lap 3</span><span class="lap-t">00:31.02</span><span class="lap-d best">-1.14</span></li></ul>
```

The display splits the main time from the hundredths so they can be styled separately. Control buttons carry `lap`, `stop`, and `reset` classes, and lap rows use `best` and `worst` classes to color the fastest and slowest deltas.

### Why is it useful?

Fitness, timing, and productivity apps need a stopwatch with laps. This provides the full layout, display, controls, and lap list styled with CSS, ready to drive with timing logic.
