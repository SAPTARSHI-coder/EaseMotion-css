# Wave Stopwatch

A pure-CSS animated stopwatch component featuring an analytics dashboard aesthetic, interactive running state toggles, and multi-step animations (wave visualizer & slot-machine digits), utilizing EaseMotion CSS variables and utilities.

## 📋 Mandatory Questions

### 1. What does this do?

This submission provides a "Wave Stopwatch" block that visually simulates a running timer. It uses a pure CSS mechanism (hidden checkbox) to toggle between paused and running states. When running, a colorful wave animation (inspired by audio or data visualizers) starts bouncing, and the millisecond digits spin rapidly like a slot machine.

### 2. How is it used?

The component relies on a hidden checkbox state hack (`#play-pause`) and the `~` general sibling selector to control the animations of downstream elements without JavaScript:

```html
<div class="stopwatch-card ease-glass-card">
  <!-- Hidden checkbox acts as state controller -->
  <input type="checkbox" id="play-pause" class="toggle-checkbox" hidden>
  
  <div class="stopwatch-display">
    <div class="wave-container">
      <div class="wave-bar"></div>
      <!-- Add more wave-bars -->
    </div>
    
    <div class="time-display">
      <span class="digit-group ms">
        <span class="digit-reel fast">
          0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0
        </span>
      </span>
    </div>
  </div>

  <div class="controls">
    <!-- Toggles the checkbox -->
    <label for="play-pause" class="toggle-btn">Start / Pause</label>
    <!-- Resets checkbox using inline JS for convenience, but the rest is CSS -->
    <button type="reset" onclick="document.getElementById('play-pause').checked = false;">Reset</button>
  </div>
</div>
```

The animation states are triggered like so:

```css
/* Start the wave visualizer */
.toggle-checkbox:checked ~ .stopwatch-display .wave-bar {
  animation: wave-visualizer 1s var(--ease-ease-bounce) infinite;
}

/* Start the digits rolling */
.toggle-checkbox:checked ~ .stopwatch-display .time-display .digit-reel {
  animation: time-slot 1s steps(10, end) infinite;
}
```

### 3. Why is it useful?

Stopwatches are commonly requested UI elements for SaaS and analytics dashboards. This variant provides an engaging, data-driven "wave" aesthetic that gives immediate visual feedback. It perfectly illustrates how to combine stateful CSS hacks (`:checked` toggles) with EaseMotion's variables and animations to create complex, multi-element interactive components without relying on heavy JavaScript logic.
