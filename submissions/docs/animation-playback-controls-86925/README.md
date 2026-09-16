# Animation Playback Controls

## Overview

This submission demonstrates runtime playback controls for animations using the
Web Animations API.

It provides controls for:

- Play
- Pause
- Resume
- Restart
- Reverse
- Cancel

The demo also shows how the controls can be applied to multiple animations
simultaneously.

## Features

### Play

Starts the animation from its current position.

### Pause

Temporarily stops the animation while preserving its current progress.

### Resume

Continues a paused animation from its current position.

### Restart

Cancels the existing animation and starts it again from the beginning.

### Reverse

Changes the playback direction of the animation.

### Cancel

Stops the animation and removes its active playback state.

## Multiple Animation Support

The demo contains three independent animated elements.

The following controls operate on all of them:

- Play All
- Pause All
- Restart All
- Cancel All

This demonstrates that playback controls can be coordinated across multiple
animations.

## Usage

The controls are implemented using the Web Animations API:

```javascript
const animation = element.animate(
  [
    { transform: "translateX(0)" },
    { transform: "translateX(200px)" }
  ],
  {
    duration: 1000,
    easing: "ease-in-out",
    fill: "both"
  }
);

animation.play();
animation.pause();
animation.reverse();
animation.cancel();