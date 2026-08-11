# File Upload Progress

Animated file upload progress bar. Shows upload progress with animated gradient fill, percentage display, and completion state. Progress via `--fu-pct` CSS variable.

## Features

- Progress bar fills with animation during upload via `--fu-pct`
- Percentage display tied to progress
- Completion state with checkmark
- Gradient fill (red to yellow)
- Upload button with hover effect

## Usage

Set `--fu-pct` (0 to 1) on `.fu-progress-wrap`. CSS controls bar width using `width: calc(var(--fu-pct) * 100%)`. JS sets the progress value during upload simulation.
