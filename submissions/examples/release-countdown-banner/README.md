# Release Countdown Banner

A dismissible full-width countdown banner for product launches, sale deadlines, and event announcements. Features live digit flip animation, multiple colour themes, CTA button, and auto-expiry state.

## Classes

| Class | Description |
|-------|-------------|
| `.ease-countdown-banner` | Base banner (primary colour) |
| `.ease-countdown-banner--gradient` | Primary → secondary gradient |
| `.ease-countdown-banner--dark` | Dark background theme |
| `.ease-countdown-banner--success` | Green success theme |
| `.ease-countdown-banner--danger` | Red urgent theme |
| `.ease-countdown-banner--expired` | Hides digits, shows expired message |

## Elements

| Element | Purpose |
|---------|---------|
| `.ease-countdown-banner__label` | Text before the countdown |
| `.ease-countdown-banner__digits` | Container for all units |
| `.ease-countdown-banner__unit` | Single time unit (days/hours/etc) |
| `.ease-countdown-banner__digit` | Individual number block |
| `.ease-countdown-banner__unit-label` | Unit label (Days, Hours...) |
| `.ease-countdown-banner__sep` | Blinking colon separator |
| `.ease-countdown-banner__cta` | Call-to-action pill button |
| `.ease-countdown-banner__close` | Dismiss button (absolute positioned) |
| `.ease-countdown-banner__expired` | Message shown when timer reaches zero |

## CSS Custom Properties

| Token | Default | Description |
|-------|---------|-------------|
| `--ease-countdown-bg` | `--ease-color-primary` | Banner background |
| `--ease-countdown-text` | `#ffffff` | Text colour |
| `--ease-countdown-digit-bg` | `rgba(0,0,0,0.2)` | Digit block background |
| `--ease-countdown-digit-radius` | `--ease-radius-md` | Digit block border radius |

## Usage

```html
<div class="ease-countdown-banner">
  <div class="ease-countdown-banner__label">🚀 Launching in</div>
  <div class="ease-countdown-banner__digits">
    <div class="ease-countdown-banner__unit">
      <div class="ease-countdown-banner__digit" id="d">07</div>
      <div class="ease-countdown-banner__unit-label">Days</div>
    </div>
    <!-- more units... -->
  </div>
  <a class="ease-countdown-banner__cta" href="#">Notify me</a>
  <button class="ease-countdown-banner__close" 
          onclick="this.closest('.ease-countdown-banner').style.display='none'">×</button>
</div>

<script>
  // Update digits with your countdown logic
  // Add .ease-countdown-banner__digit--flip class to trigger flip animation
  // Add .ease-countdown-banner--expired when timer reaches zero
</script>
```

Closes #11966
