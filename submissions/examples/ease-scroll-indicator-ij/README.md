# Scroll Indicator

A top progress bar that fills as the user scrolls through content. Percentage via `--si-pct` (0 to 1). CSS controls the bar width using `calc(var(--si-pct) * 100%)`.

## Features

- Progress bar that fills on scroll
- Percentage via `--si-pct` CSS variable
- Gradient fill (red to yellow)
- Sticky positioning at top
- Smooth linear transition

## Usage

Set `--si-pct` (0 to 1) on `.si-bar`. JS updates this based on scroll position. CSS uses `width: calc(var(--si-pct) * 100%)` for the fill.
