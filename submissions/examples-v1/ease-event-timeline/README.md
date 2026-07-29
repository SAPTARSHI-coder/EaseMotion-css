# ease-event-timeline

A responsive event schedule timeline featuring time badges, speaker cards, session blocks, and smooth staggered fade-in and hover animations — suited for conferences, meetups, and workshops.

## Features

- Vertical gradient timeline line with glowing dot markers
- Staggered fade-in entrance for each session on load
- Time badge pill for each session slot
- Speaker card with avatar initials, name, and role
- Session tag (Live, Workshop, Panel, Networking, etc.)
- Card slides right and glows on hover, timeline dot brightens
- Fully responsive

## Usage

1. Link `style.css` in your HTML `<head>`.
2. Copy the `.ease-event-timeline` structure from `demo.html`, repeating `.ease-event-session` blocks for each schedule item.

```html
<div class="ease-event-timeline">
  <div class="ease-event-session">
    <span class="ease-event-time">9:00 AM</span>
    <div class="ease-event-card">
      <h3 class="ease-event-title">Session Title</h3>
      <p class="ease-event-desc">Session description.</p>
      <div class="ease-event-speaker">
        <span class="ease-event-avatar">AB</span>
        <div class="ease-event-speaker-info">
          <span class="ease-event-speaker-name">Speaker Name</span>
          <span class="ease-event-speaker-role">Role / Title</span>
        </div>
        <span class="ease-event-tag">Tag</span>
      </div>
    </div>
  </div>
</div>