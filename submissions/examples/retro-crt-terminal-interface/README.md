# Retro CRT Terminal Interface

## What does this do?
This adds a highly stylized retro CRT monitor interface. It replicates the physical constraints of 1980s monitors by adding curvature via `border-radius` and `inset box-shadow`, mimicking scanlines with `linear-gradient` backgrounds, creating RGB color-split aberration via `text-shadow`, and generating an unstable phosphor flicker via rapid opacity `@keyframes`.

## How is it used?
Include the CSS in your stylesheet and use the HTML structure for the monitor container. To output text, simply add paragraph tags inside `.terminal-content`. It's ideal for Easter eggs, 404 pages, or portfolio sites aiming for a hacker/retro aesthetic.

## Why is it useful?
Creating realistic CRT effects purely in CSS avoids the need for WebGL shaders or heavy HTML5 canvas manipulation, providing an extremely lightweight and thematic component. It demonstrates the creative power of stacking multiple background layers and text shadows.
