# Newton's Cradle Animation

A pure CSS physics simulation of a Newton's Cradle desk toy.

## Preview
Open `demo.html` in your browser. You will see 5 steel balls hanging from strings. The left ball swings out and strikes the others, sending the right ball flying outward, in an infinite physics loop.

## Implementation
- The `.ball` has `transform-origin: top center` (adjusted up to where the string attaches) so they swing like pendulums.
- The `::before` pseudo-element draws the string attaching the ball to the ceiling.
- `swing-left` and `swing-right` keyframes are used. `swing-left` animates the left ball falling for 50% of the time, then resting. `swing-right` rests for 50%, then swings out.
- The `cubic-bezier` provides the accelerating gravity curve for a realistic strike.
