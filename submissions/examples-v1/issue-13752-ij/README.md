# ease-shadow-creep

**Closes #13752**

A shadow that creeps across a target element from left to right using `clip-path` animation on a `::after` pseudo-element.

## Acceptance Criteria

- [ ] `clip-path` animates from `inset(0 100% 0 0)` to `inset(0 0 0 0)`
- [ ] Dark gradient overlay with soft edge (linear-gradient)
- [ ] Trigger button replays the creep animation
- [ ] Pseudo-element approach, no extra DOM nodes

## Files

- `style.css` – Shadow creep via clip-path on ::after
- `demo.html` – Target box with trigger button
- `README.md` – Issue documentation
