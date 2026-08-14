# 06 — Video Scroll-Driven

## Overview
Demonstrates scroll-driven animation control using CSS `animation-timeline: scroll()` and `view-timeline`. A simulated video player advances frame-by-frame as the user scrolls the page, with a progress indicator and before/after comparison — all without JavaScript scroll listeners.

## How It Works
The `.video-scrub` element uses `animation-timeline: scroll(root)` to bind animation progress to the document's scroll position. The `animation-range` property maps the scroll range to animation keyframes. A companion progress bar uses a separate scroll-driven animation. JavaScript updates only the frame counter number and bar heights for visual variety — the core scroll-to-animation binding is purely CSS.

## Usage
Open `demo.html` in a Chromium-based browser that supports `animation-timeline` (Chrome 115+). Scroll the page to advance the video frames. The before/after section compares unanimated vs scroll-driven visuals.
