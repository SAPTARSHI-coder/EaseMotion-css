# Animated Employee Attendance Dashboard

A self-contained HR dashboard component built with pure HTML and CSS, using EaseMotion CSS utility classes for entrance animations and hover interactions.

## Preview

Open `demo.html` directly in any modern browser — no build step required.

## Features

- Animated SVG progress rings (attendance, punctuality, avg hours)
- Animated leave balance bars
- Animated working hours bars
- Weekly attendance day cards with status colours (present / late / absent)
- Employee profile section with online status indicator
- Status badges (Present, On Time)
- Hover lift and grow interactions on all cards
- Responsive layout — adapts to mobile screens
- Dark theme with CSS custom properties

## EaseMotion CSS classes used

| Class                                | Purpose                     |
| ------------------------------------ | --------------------------- |
| `ease-fade-in`                       | Dashboard entrance          |
| `ease-slide-up`                      | Section entrance with delay |
| `ease-delay-100` to `ease-delay-400` | Staggered section reveals   |
| `ease-pulse`                         | Live indicator badge        |
| `ease-hover-lift`                    | Stat and leave cards        |
| `ease-hover-grow`                    | Weekly day cards            |

## File structure

```
animated-employee-attendance-dashboard/
├── demo.html
├── style.css
└── README.md
```

## How to use

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css"
/>
<link rel="stylesheet" href="style.css" />
```

Then copy the HTML structure from `demo.html` into your project.

## Customisation

All colours are CSS custom properties defined in `:root` inside `style.css`. Override any token to retheme the component:

```css
:root {
  --clr-primary: #f97316; /* swap accent colour */
  --clr-bg: #ffffff; /* light mode background */
  --clr-surface: #f1f5f9;
  --clr-text: #0f172a;
}
```
