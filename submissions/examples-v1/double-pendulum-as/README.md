# Double Pendulum

A pure CSS/HTML double pendulum, run twice from starting angles that differ by one thousandth of a radian.

## What it shows

Hang one pendulum off another and you get the standard teaching example of **deterministic chaos**.

Nothing about it is random. The equations of motion are exact, derived from the Lagrangian, and given the starting state the entire future is fixed. Yet the motion is **unpredictable in practice**, because the system has *sensitive dependence on initial conditions*: two starts that differ by an amount too small to measure end up doing completely different things.

That is what this component shows. Two double pendulums are released from identical positions except that the second arm of one starts **0.001 radians** further along, about a twentieth of a degree. For the first second or so they are indistinguishable. Then they separate, and within a few seconds they are in unrelated configurations, one swinging over the top while the other doubles back.

This is why weather forecasts have a horizon. The atmosphere is deterministic too; the problem is that you cannot measure its current state precisely enough, and the error grows exponentially. Lorenz found this in 1961 when he restarted a simulation from a printout rounded to three decimals and got a totally different forecast.

A single pendulum, by contrast, is completely predictable. Adding one joint is enough to destroy that.

## How it is built

- **The motion is simulated, not drawn.** Both pendulums are integrated from the real coupled equations of motion with **RK4** at a 2ms timestep, and the resulting 201 frames are baked into keyframes for the rods and bobs.
- **The physics is checked by conservation of energy.** Total energy (kinetic plus potential) is computed at every step of the simulation and drifts by only **1.7 × 10⁻⁷ relative** across the whole 8-second run. A hand-animated pendulum would not conserve anything; this one does, which is the evidence that it is real dynamics.
- **The chaos is measured in the browser, on the rendered elements.** Sweeping the paused animation across 201 steps and tracking the two tip positions: they start **0.07px** apart and grow to **127.4px**, an amplification of about **1800×**. The tiny difference is not smoothed away, it is magnified.
- **The rods stay rigid, and that is checked too.** Both arms measure 62px at every frame, varying by **0.04px**. The bobs really are swinging on fixed-length rods rather than drifting.
- **The second pendulum is drawn as a ghost**, so you can watch the two agree and then part company.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` pauses both pendulums mid-swing.

## Files

- `demo.html` - markup
- `style.css` - the whole component
