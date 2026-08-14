# Search Bar for Job Listings

## What does this do?

Demonstrates a search bar implementation for job listings with real-time case-insensitive matching against job titles and company names, with debounced input (300ms) for performance.

## How is it used?

Open `demo.html` in a browser. Start typing in the search box — job cards filter in real-time as you type. The search matches against both the job title and company name fields.

### Key EaseMotion Classes Used

| Class | Purpose |
|---|---|
| `.ease-fade-in` | Entrance animation for the header |
| `.ease-slide-up` | Entrance animation for job cards |
| `.ease-delay-*` | Staggered animation delays |
| `.ease-card` / `.ease-card-shadow` | Card styling |
| `.ease-grid` / `.ease-gap-4` | Responsive grid layout |
| `.ease-btn` / `.ease-btn-primary` | Button styling |

## Features

- Real-time search by title or company
- Case-insensitive matching
- 300ms debounce to avoid excessive re-renders
- Staggered card animations on render
- Dark mode support
