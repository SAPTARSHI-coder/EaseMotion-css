# CGPA Filter for Job Listings

## What does this do?

Demonstrates a minimum CGPA filter for a student job board. Users enter a minimum CGPA value and job cards filter to show only positions with a CGPA requirement at or below that value.

## How is it used?

Open `demo.html` in a browser. Type a CGPA value (e.g. 7.5) into the number input — jobs meeting that threshold are shown with animated EaseMotion entrance effects.

### Key EaseMotion Classes Used

| Class | Purpose |
|---|---|
| `.ease-fade-in` | Header entrance |
| `.ease-slide-up` | Card entrance |
| `.ease-delay-*` | Staggered delays |
| `.ease-card` / `.ease-card-shadow` | Card styling |
| `.ease-grid` / `.ease-gap-4` | Layout |

## Features

- Minimum CGPA filter input (0–10, step 0.1)
- Real-time filtering as user types
- Shows "CGPA: X" badge on each card
- Animated card transitions
- Dark mode support
