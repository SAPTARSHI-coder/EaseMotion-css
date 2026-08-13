# Flip Scoreboard

An animated basketball scoreboard with 3D split-flap digits that turn when a team scores.

## How is it used?

Add a digit pair per team and a control button that calls the score handler:

```html
<div class="digit-group" data-team="home">
  <span class="digit" id="homeTens">0</span>
  <span class="digit" id="homeOnes">0</span>
</div>
<button class="ctrl-btn" data-team="home" data-delta="3">+3</button>
```

The `.digit.flipping` class triggers the `digitFlip` keyframe, and a small script swaps the value at the midpoint of the flip.

## Why is it useful?

Scoreboards, counters, and odometer-style readouts are common in sports and dashboard UIs. This component shows how a single reusable keyframe (`digitFlip`) plus a two-digit layout can deliver a believable hardware-flap feel with pure CSS animation, matching EaseMotion's "human-readable class + curated motion" philosophy.
