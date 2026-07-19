# Notification Badge

A notification bell with an animated badge count and pulsing online indicator. The badge count is controlled by `--badge-count`. CSS handles the badge pop animation and dot pulse.

## Features

- Animated badge count with pop effect on change
- Pulsing online indicator dot
- Badge via `--badge-count` CSS variable
- +1/-1 control buttons
- Pop animation via @keyframes badgePop

## Usage

Set `--badge-count` on `.badge-btn` to control the displayed number. The `.badge-num` shows the count with a scale animation and `.badge-dot` pulses continuously.
