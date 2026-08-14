# Priority-Stacked Toast Queue Motion

## Overview

A notification stack where scale, opacity, and elevation communicate
recency — the newest toast stands fully emphasized while older ones
progressively recede — built entirely with HTML and CSS. Production
apps often stack many notifications with identical visual weight,
making it hard to tell which one just arrived. This example solves
that by using motion hierarchy instead of a flat list, implemented
using only HTML and CSS.

## Features

- Fixed top-right notification stack
- Newest toast rendered at full scale, opacity, and elevation
- Older toasts progressively scaled down, faded, and blurred
- CSS-only "new notification" simulation via a hidden checkbox
- Existing toasts smoothly shift down when a new one arrives
- Fully responsive layout with mobile-friendly positioning
- CSS custom properties for hierarchy values

## File Structure

- `demo.html`
- `style.css`
- `README.md`

## How It Works

Each toast sets its own `--toast-scale`, `--toast-opacity`, and
`--toast-y` custom properties, decreasing in emphasis the further down
the stack it sits, so the hierarchy is visible even before any
interaction occurs.

A hidden checkbox, toggled by the "Trigger New Notification" label,
controls a `.toast--incoming` element positioned above the stack with
zero opacity and a negative margin collapsing its space. When the
checkbox is checked, the general sibling combinator (`~`) matches the
incoming toast and every existing toast, updating their custom
properties simultaneously: the incoming toast expands into view while
the others shift down in scale and opacity, reinforcing that a new,
higher-priority notification just arrived.

All of this happens through `:checked` and sibling selectors — no
JavaScript triggers any of the motion.

## Example Use Cases

- Admin dashboards with real-time alerts
- Messaging applications
- Productivity software with background task notifications
- Monitoring and observability systems
- Notification centers in web applications

## Why This Example?

A flat stack of identical-looking toasts forces users to read every
notification to figure out which is newest. Motion hierarchy solves
this instantly: the eye is drawn to the toast with the most scale,
opacity, and elevation, without needing to read timestamps.

This fits EaseMotion CSS's CSS-first philosophy by expressing
notification priority entirely through custom properties and
transitions, and it's production-inspired because stacked, priority-aware
notifications are a near-universal pattern in dashboards and messaging
products — this example shows the core motion logic can exist without
any JavaScript notification manager.
