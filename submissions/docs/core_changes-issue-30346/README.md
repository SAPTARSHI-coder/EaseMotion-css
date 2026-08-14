# Job Board with Search & Filter

## What does this do?

Demonstrates a student job board UI with search-by-title/company, branch filter, and minimum CGPA filter — all styled with EaseMotion CSS animation classes. The demo shows how EaseMotion can be used to build interactive, animated data-driven interfaces.

## How is it used?

Open `demo.html` in a browser. The page loads sample job listings. Users can:

- **Search** by typing a title or company name in the search box
- **Filter by branch** using the dropdown (Computer Science, IT, Electronics, Mechanical)
- **Filter by minimum CGPA** using the number input

The job cards animate with EaseMotion fade-in and slide-up classes, and cards dynamically show/hide as filters are applied.

### Key EaseMotion Classes Used

| Class | Purpose |
|---|---|
| `.ease-fade-in` | Entrance animation for the page header |
| `.ease-slide-up` | Entrance animation for job cards |
| `.ease-delay-*` | Staggered animation delays for cards |
| `.ease-card` | Card component styling |
| `.ease-card-shadow` | Card shadow variant |
| `.ease-btn` / `.ease-btn-primary` | Button styling |
| `.ease-flex` / `.ease-grid` | Layout utilities |
| `.ease-center` | Centering utility |
| `.ease-gap-*` | Gap spacing utilities |

## Why is it useful?

This submission provides a real-world pattern for building interactive, filterable data displays with EaseMotion CSS. It demonstrates:

- Dynamic DOM manipulation with CSS transitions
- Debounced search input for performance
- Multi-criteria filtering (text + dropdown + number)
- Staggered entrance animations for list items
- Responsive grid layout using EaseMotion utilities

## Features

- Real-time search by job title or company name
- Branch filter dropdown (Computer Science, IT, Electronics, Mechanical)
- Minimum CGPA filter
- Combined filter logic (all filters work together)
- Debounced search input (300ms) to avoid excessive re-renders
- Staggered card entrance animations using EaseMotion delay classes
- Dark mode support via EaseMotion variables
