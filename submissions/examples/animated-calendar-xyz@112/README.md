# Animated Calendar Component (`ease-calendar-xyz`)

A zero-dependency, CSS-only animated calendar component designed for the **EaseMotion CSS** framework. Perfect for date selection, scheduling, and booking interfaces with smooth hover effects and selection animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using grid layouts and CSS animations.
- **Animation-First**: Smooth fade-in, hover scale, selection bounce, and event pulse animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Basic calendar, date range selection, event calendar, and compact size.
- **Date Selection**: Single date and range selection with visual indicators.
- **Today Highlight**: Special styling for current date.
- **Event Indicators**: Animated dots showing days with events.
- **Navigation**: Previous/next month buttons with hover effects.
- **Other Month Days**: Visual distinction for days from adjacent months.
- **Accessible**: Proper semantic HTML structure and keyboard navigation support.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Calendar
```html
<div class="ease-calendar-xyz">
  <div class="ease-calendar-xyz-header">
    <button class="ease-calendar-xyz-nav">‹</button>
    <h3 class="ease-calendar-xyz-title">August 2026</h3>
    <button class="ease-calendar-xyz-nav">›</button>
  </div>
  
  <div class="ease-calendar-xyz-weekdays">
    <span>Sun</span>
    <span>Mon</span>
    <!-- ... -->
  </div>
  
  <div class="ease-calendar-xyz-days">
    <div class="ease-calendar-xyz-day">1</div>
    <div class="ease-calendar-xyz-day ease-calendar-xyz-today">4</div>
    <div class="ease-calendar-xyz-day ease-calendar-xyz-selected">13</div>
    <!-- ... -->
  </div>
</div>