# Page Zoom View Transition

A lightweight page transition powered by the View Transitions API.

## Features

- Uses the native View Transitions API
- Current page zooms away while fading out
- Incoming page scales from the center while fading in
- 300ms animation duration
- Pure HTML, CSS and minimal JavaScript
- No dependencies

## Files

```
demo.html
style.css
README.md
```

## How to Use

Open `demo.html` in a browser that supports the View Transitions API (latest Chromium-based browsers).

Click the button to transition between pages.

## Animation

Outgoing Page

- Scale: `1 → 1.15`
- Opacity: `1 → 0`

Incoming Page

- Scale: `0.82 → 1`
- Opacity: `0 → 1`

Duration

- **300ms**

## Why it fits EaseMotion CSS

- Clean and reusable page transition
- Uses native browser View Transitions
- Smooth zoom-based navigation animation
- Lightweight and easy to integrate into existing projects