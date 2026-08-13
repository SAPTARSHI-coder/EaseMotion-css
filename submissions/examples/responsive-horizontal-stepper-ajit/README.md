# Responsive Horizontal Stepper

A simple responsive stepper component built with HTML and CSS.

## Features

- Responsive horizontal layout
- Prevents horizontal overflow on mobile devices
- Automatically switches to a vertical layout below **480px**
- Pure HTML & CSS
- Lightweight and reusable

## Files

```
demo.html
style.css
README.md
```

## Responsive Fix

The component solves the mobile overflow issue by:

- Using `width: 100%` with `max-width`
- Removing fixed-width layouts
- Switching to a vertical stepper below **480px**
- Preventing horizontal scrolling
- Keeping labels readable on small screens

## Preview

Desktop:
- Horizontal stepper

Mobile (<480px):
- Vertical stepper with connecting line