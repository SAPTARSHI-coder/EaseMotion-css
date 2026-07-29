# Accordion Chevron Rotate

Accordion panel with a chevron that rotates 180 degrees on open/close. Uses smooth max-height transition for the panel reveal.

## Features

- Chevron rotates 180&#176; on toggle
- Smooth expand/collapse animation
- Dynamic max-height via JavaScript for natural panel sizing
- Fully customizable duration and easing via CSS custom properties

## Usage

Toggle `.acr-open` class on `.acr-item`. JS handles click toggling and sets `max-height` based on `scrollHeight`. CSS handles chevron rotation and panel transitions.
