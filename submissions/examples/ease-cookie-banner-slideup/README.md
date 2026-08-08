# Ease Cookie Banner — Slide Up

## Overview

A responsive cookie consent banner that appears from the bottom of the page with a smooth slide-up animation.

The component allows users to accept cookies, dismisses the banner with a slide-down animation, and stores the user's choice in `localStorage` so the banner does not reappear on subsequent visits.

## Features

- Bottom-fixed cookie consent banner
- Slide-up entrance animation
- Slide-down dismissal animation
- Accept Cookies button
- `localStorage` persistence
- Responsive layout
- Keyboard focus support
- `prefers-reduced-motion` support
- Pure HTML, CSS, and minimal inline JavaScript

## Files

- `demo.html` — Cookie banner markup and persistence behavior
- `style.css` — Banner styling, animations, and responsive behavior
- `README.md` — Component documentation

## How It Works

When the page loads, the component checks:

```js
localStorage.getItem("cookieAccepted")