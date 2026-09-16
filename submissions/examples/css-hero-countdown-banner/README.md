# CSS Hero Countdown Banner

A responsive full-width hero banner with a visually animated countdown timer.

## Features

- Pure CSS presentation
- Responsive hero layout
- Animated countdown number cards
- CSS custom properties for easy theming
- Light and dark mode support
- Accessible semantic structure
- Reduced-motion support
- No external libraries or dependencies

## Usage

Add the following HTML structure:

```html
<section class="countdown-hero" aria-labelledby="countdown-title">
  <div class="countdown-content">
    <p class="countdown-label">Coming Soon</p>

    <h1 id="countdown-title">Something Amazing Is Coming</h1>

    <p class="countdown-description">
      Join us for our upcoming launch.
    </p>

    <div class="countdown" aria-label="Countdown timer">
      <div class="countdown-unit">
        <span class="countdown-value">12</span>
        <span class="countdown-name">Days</span>
      </div>

      <div class="countdown-unit">
        <span class="countdown-value">08</span>
        <span class="countdown-name">Hours</span>
      </div>

      <div class="countdown-unit">
        <span class="countdown-value">42</span>
        <span class="countdown-name">Minutes</span>
      </div>

      <div class="countdown-unit">
        <span class="countdown-value">19</span>
        <span class="countdown-name">Seconds</span>
      </div>
    </div>
  </div>
</section>