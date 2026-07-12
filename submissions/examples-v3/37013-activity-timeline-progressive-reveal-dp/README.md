# Expandable Activity Timeline with Progressive Reveal

## Overview

A vertical activity timeline, styled after a deployment or audit log, where each event expands in place to reveal extra detail without disrupting the surrounding chronology. It solves the production problem of showing dense event history without overwhelming the page: summaries stay compact while detail is available on demand. Progressive reveal lets users scan the full sequence first, then drill into only the events they care about. Implemented entirely with native HTML and CSS, no JavaScript.

## Features

- Vertical timeline with a connecting line and status-colored markers
- Six expandable events using native `<details>`/`<summary>`
- Event metadata: timestamp, title, and status badge
- Progressive reveal of nested detail using opacity, transform and max-height transitions
- Timeline structure and other events remain visible while one expands
- Highlighted active/in-progress event
- Status indicators for info, success, warning, error and in-progress states
- CSS custom properties for spacing, color, duration and easing
- Fully responsive, lightweight, and reusable markup

## File Structure

- demo.html
- style.css
- README.md

## How It Works

- **Timeline layout**: an ordered list with a positioned pseudo-element line running behind circular markers for each event
- **Expandable events**: each event is a native `<details>` element with a `<summary>` header, requiring no scripting to open or close
- **Progressive reveal**: the default browser behavior of hiding non-summary content is overridden so the body stays in the layout at `max-height: 0`, then transitions to its open state on the `[open]` attribute, combined with opacity and a small upward-to-resting transform
- **CSS-only interaction**: the `open` attribute and `:hover`/`:focus-visible` states on the summary handle all interactivity
- **Responsive layout**: the timeline connector, marker offsets, and summary grid adjust at smaller breakpoints so metadata stacks cleanly on narrow screens

## Example Use Cases

- Project management tools
- Issue trackers
- Deployment dashboards
- Audit logs
- Workflow history

## Why This Example?

Progressive disclosure keeps a timeline readable by showing only summaries by default and letting detail appear only when requested, instead of forcing every event to display its full content at once. Keeping the timeline's connecting line and surrounding events visible while one expands preserves chronological context, so users never lose track of where an event sits in the sequence. This fits EaseMotion CSS as a focused example of using transitions to reveal nested content smoothly, and it is production-inspired because expandable, status-coded activity logs are a standard pattern across deployment, project and audit tooling.
