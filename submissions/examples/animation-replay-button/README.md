# Animation Replay Button

## Description

This example demonstrates how users can replay an animation without refreshing the page.

## Features

- Replay button that restarts a CSS animation on click
Animation reset using a forced reflow (remove class → reflow → re-add class)
- Respects prefers-reduced-motion for users sensitive to motion
Button disables itself during the animation to prevent overlapping replays
- Visible keyboard focus state (:focus-visible)
Screen-reader announcement via an aria-live status region
- Simple, responsive, dependency-free layout

## How It Works

When the replay button is clicked, the animation class is removed and re-added.

This restarts the animation immediately.

## Files

- demo.html
- style.css
- README.md

## Use Case

Useful for documentation sites, component galleries, or design-system demos where users want to repeatedly preview an animation's behavior — in an accessible way that doesn't break for keyboard users, screen-reader users, or people with motion sensitivity.