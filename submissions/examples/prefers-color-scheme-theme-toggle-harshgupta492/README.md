# Prefers Color Scheme Theme Toggle

## Overview

This example demonstrates how to respect the user's preferred operating system color scheme during the initial page load.

If a theme preference has already been saved in `localStorage`, the saved value is used instead.

---

## Features

- Automatically detects `prefers-color-scheme`
- Falls back to system preference on first visit
- Saves theme choice using `localStorage`
- Manual light/dark theme toggle
- Smooth CSS transitions
- Pure HTML, CSS and JavaScript

---

## Folder Structure

```
prefers-color-scheme-theme-toggle-harshgupta492/
│
├── demo.html
├── style.css
└── README.md
```

---

## How it Works

1. Checks whether `em-theme` exists in `localStorage`.
2. If found, applies the saved theme.
3. Otherwise, detects the user's system preference using:

```js
window.matchMedia("(prefers-color-scheme: dark)")
```

4. Users can manually toggle themes.
5. Their choice is saved for future visits.

---

## Why it Fits EaseMotion CSS

This submission demonstrates a modern, animated theme-switching experience while respecting the user's system preferences. It showcases smooth transitions, CSS variables, and lightweight JavaScript in a reusable example.