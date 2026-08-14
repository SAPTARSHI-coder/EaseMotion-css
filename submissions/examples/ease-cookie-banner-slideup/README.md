# Ease Cookie Banner (Slide-Up)

## Overview

A reusable slide-up cookie consent banner built with HTML, CSS, and JavaScript. The banner appears on the first visit, slides into view from the bottom of the page, and remembers the user's choice using `localStorage`.

---

## Features

- Bottom-fixed cookie consent banner
- Smooth slide-up entrance animation
- Accept and Decline actions
- Stores user preference in `localStorage`
- Prevents banner from appearing again after a choice is made
- Responsive design
- Accessible button interactions
- Supports `prefers-reduced-motion`

---

## Files

- `demo.html` — Demo page
- `style.css` — Component styling
- `script.js` — Banner logic and persistence
- `README.md` — Documentation

---

## Customization

You can customize:

- Banner colors
- Button styles
- Animation duration
- Banner position
- Cookie message
- Privacy policy link

---

## Browser Support

Works in all modern browsers supporting:

- CSS Flexbox
- CSS Transitions
- localStorage
- ES6 JavaScript

---

## Accessibility

- Keyboard-accessible buttons
- Responsive layout
- Supports `prefers-reduced-motion`
- Semantic HTML

---

## Demo Behavior

1. Banner appears automatically on first visit.
2. User clicks **Accept** or **Decline**.
3. Choice is stored in `localStorage`.
4. Banner remains hidden on future visits.