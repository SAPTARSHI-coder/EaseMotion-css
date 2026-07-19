# Streak Counter

### What does this do?

It shows a daily streak counter card with a big flame and day count, a row of the last seven days marked done or missed with today highlighted, and a best streak note.

### How is it used?

```html
<div class="streak">
  <div class="st-flame"><svg>...</svg><b>14</b></div>
  <p class="st-title">day streak</p>
  <div class="st-days">
    <div class="st-day done"><span class="st-dot"><svg>...</svg></span>Mon</div>
    <div class="st-day today"><span class="st-dot"><svg>...</svg></span>Sat</div>
    <div class="st-day"><span class="st-dot"></span>Sun</div>
  </div>
</div>
```

Add `done` to completed days for a filled flame dot, `today` to mark the current day with a ring, and leave a day plain for a missed or upcoming day.

### Why is it useful?

Habit and learning apps reward daily streaks to build a habit. This renders a streak card with a flame count and a week of done and missed day dots, using only CSS and inline SVG so there are no external assets.
