# Event Card

### What does this do?

It shows an event card with a date badge, a title, time and location rows with icons, a stack of overlapping attendee avatars, and a register button.

### How is it used?

```html
<article class="event">
  <div class="ev-top">
    <div class="ev-date"><b>12</b><span>JUL</span></div>
    <h3 class="ev-title">Design systems meetup</h3>
  </div>
  <div class="ev-rows">
    <div class="ev-row"><svg>...</svg>6:30 PM to 8:30 PM</div>
    <div class="ev-row"><svg>...</svg>The Loft, 2nd floor</div>
  </div>
  <div class="ev-foot">
    <div class="ev-attendees"><span>AL</span><span class="more">+9</span></div>
    <button class="ev-cta">Register</button>
  </div>
</article>
```

The attendee avatars overlap with a negative margin, and the last chip can use `more` to show an overflow count. Icons are inline SVG.

### Why is it useful?

Event listings and calendars show cards for meetups and sessions. This lays out an event card with a date badge, detail rows, overlapping attendee avatars, and a call to action, using only CSS and initials avatars so there are no external images.
