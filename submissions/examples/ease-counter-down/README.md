# Ease Counter Down

A CSS-only animated counter that counts down from a configurable starting value to 0 on hover.

Uses `@property` to register `--ease-count-from` as an animatable integer, then leverages `counter-reset` and `content: counter()` to display the animated value.

## Usage

Set `--ease-count-from` on any `.counter-card` element to define the starting value. Hover to trigger the countdown animation.
