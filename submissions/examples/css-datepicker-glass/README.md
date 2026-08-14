# CSS Datepicker: Glassmorphism Styling

An interactive, zero-JS pure CSS calendar datepicker component featuring frosted glassmorphism styling, smooth state transitions, and accessible focus states for the EaseMotion library, fully addressing feature request issue `#81520`.

## 🚀 Features

- **Zero External JavaScript Dependencies:** Built entirely using native CSS grid layouts, pseudo-classes (`:hover`, `:focus-visible`), and backdrop filters.
- **Glassmorphism Aesthetic:** Frosted glass background blur (`backdrop-filter: blur(16px)`) with indigo accent highlights.
- **Dark Mode Compatible & Accessible:** Built with proper semantic landmark roles (`role="dialog"`), keyboard focus states, and `prefers-reduced-motion` support.

## 🛠️ Usage Example

```html
<header class="em-datepicker-card" role="region" aria-label="Glassmorphism Datepicker Showcase" tabindex="0">
    <div class="em-glass-datepicker" role="dialog" aria-label="Calendar Datepicker">
        <div class="em-calendar-header">
            <span class="em-month-label">August 2026</span>
            <span class="em-year-label">2026</span>
        </div>
        <div class="em-calendar-grid">
            <button class="em-day selected" tabindex="0" aria-current="date">14</button>
        </div>
    </div>
</header>
