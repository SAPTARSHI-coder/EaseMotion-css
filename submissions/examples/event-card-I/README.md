 
# Event Listing Card (ease-card-event)

Event listing card with date badge, title, location, time, and register CTA.

## Files

- demo.html - Interactive demo
- style.css - Event card styles
- README.md - Documentation

## Features

- 📅 Prominent date badge (day + month)
- 📝 Event title, location, time
- 🔘 Register/RSVP button
- ✨ Hover lift effect
- ⏱️ Optional countdown timer

## Usage

```html
<div class="ease-card-event" data-date="2024-07-15">
    <div class="event-date-badge">
        <span class="event-day">15</span>
        <span class="event-month">Jul</span>
    </div>
    <div class="event-content">
        <h3 class="event-title">Event Title</h3>
        <p class="event-location">📍 Location</p>
        <p class="event-time">🕐 Time</p>
        <div class="event-countdown">
            <span class="countdown-label">Starts in</span>
            <span class="countdown-timer" data-target="2024-07-15">--d --h --m</span>
        </div>
        <a href="#" class="event-cta">Register Now →</a>
    </div>
</div>