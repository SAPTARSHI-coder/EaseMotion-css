# Branch Filter for Job Board

## What does this do?

Demonstrates a branch filter dropdown for a student job board. Users can filter job listings by academic branch (Computer Science, Information Technology, Electronics, Mechanical) using a styled `<select>` element.

## How is it used?

Open `demo.html` in a browser. Select a branch from the dropdown — job cards instantly filter to show only matching positions. "All Branches" shows every listing.

### Key EaseMotion Classes Used

| Class | Purpose |
|---|---|
| `.ease-fade-in` | Header entrance animation |
| `.ease-slide-up` | Card entrance animation |
| `.ease-delay-*` | Staggered delays for cards |
| `.ease-card` / `.ease-card-shadow` | Card styling |
| `.ease-grid` / `.ease-gap-4` | Grid layout |
| `.ease-flex` / `.ease-gap-2` | Filter bar layout |

## Features

- Branch filter dropdown with 4 branch options
- Instant filtering on selection change
- Animated card transitions using EaseMotion
- Dark mode support
