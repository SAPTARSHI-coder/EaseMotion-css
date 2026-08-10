# Animated Event Countdown Card

A responsive Animated Event Countdown Card component that displays upcoming event information, countdown timer blocks, registration actions, and promotional content through a modern, glassmorphic interface.

## Usage

To use this component in your project, include the styles from `style.css` and use the following HTML structure:

```html
<div class="aecc-card">
  <!-- Event details -->
  <section class="aecc-details">
    <div class="aecc-badge">🚀 FEATURED EVENT</div>
    <h1 class="aecc-title">EaseMotion CSS 2.0 Global Launch</h1>
    <p class="aecc-description">...</p>
    <div class="aecc-meta-list">...</div>
  </section>

  <!-- Countdown & Action panel -->
  <section class="aecc-action-panel">
    <h3 class="aecc-countdown-title">Event Begins In</h3>
    <div class="aecc-countdown">
      <!-- Days block (Static) -->
      <div class="aecc-time-block">
        <div class="aecc-time-num">
          <span class="aecc-static">0</span>
          <span class="aecc-static">5</span>
        </div>
      </div>
      <!-- Minutes block (Animating) -->
      <div class="aecc-time-block">
        <div class="aecc-time-num">
          <div class="aecc-digit-window">
            <div class="aecc-num-strip aecc-num-strip--tens-min">
              <span>3</span><span>2</span><span>1</span><span>0</span
              ><span>3</span>
            </div>
          </div>
          <div class="aecc-digit-window">
            <div class="aecc-num-strip aecc-num-strip--ones-min">
              <span>8</span><span>7</span><span>6</span><span>5</span
              ><span>4</span>...
            </div>
          </div>
        </div>
      </div>
      <!-- Seconds block (Animating) -->
      <div class="aecc-time-block">
        <div class="aecc-time-num">
          <div class="aecc-digit-window">
            <div class="aecc-num-strip aecc-num-strip--tens-sec">
              <span>5</span><span>4</span><span>3</span><span>2</span
              ><span>1</span><span>0</span><span>5</span>
            </div>
          </div>
          <div class="aecc-digit-window">
            <div class="aecc-num-strip aecc-num-strip--ones-sec">
              <span>9</span><span>8</span><span>7</span><span>6</span
              ><span>5</span>...
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to action form -->
    <form class="aecc-form">
      <div class="aecc-input-group">
        <input type="email" class="aecc-input" required />
        <button type="submit" class="aecc-submit-btn">
          <span>Secure Seat</span>
          <span class="aecc-btn-glare"></span>
        </button>
      </div>
    </form>
  </section>
</div>
```

## Philosophy & Usefulness

This component aligns with EaseMotion CSS because it:

- **Implements pure CSS time animations**: Demonstrates how to create a ticking numerical clock using steps and translate transitions without any JavaScript overhead.
- **Provides premium promotional aesthetics**: Features curated glassmorphic transparency (`backdrop-filter`), atmospheric glowing gradients, glowing pulses, and a sweeping button reflections.
- **Follows accessibility practices**: Supports full keyboard focus, explicit landmark structures, and stops all loops/glows under `prefers-reduced-motion: reduce`.
