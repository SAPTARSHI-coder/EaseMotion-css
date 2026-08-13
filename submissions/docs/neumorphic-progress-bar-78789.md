# Neumorphic Progress Bar

## Overview

Issue #78789 documents the usage of the Neumorphic Progress Bar component.

## Basic usage

Use a progress container with a fixed track and a fill element. The component is designed for status displays where a clear percentage accompanies the visual progress.

```html
<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="72">
  <span class="progress__fill" style="width: 72%"></span>
</div>
```

## Styling notes

The neumorphic appearance comes from paired light and dark shadows around the track. Keep the contrast between the fill and background strong enough that progress remains easy to identify.

## Accessibility

Keep `role="progressbar"` and synchronize `aria-valuenow` with the visible progress value. Do not communicate the state through color or shadow alone.

## Responsive behavior

Use a fluid width for the progress track so it can shrink with its parent container. Avoid fixed pixel widths for the main track.

## Customization

Adjust the track radius, shadow intensity, fill color, and progress value to match the surrounding interface while retaining the same semantic structure.

## Issue

EaseMotion CSS issue #78789.
