# Animated Number Counter (Count-Up)

## What does this do?
Animates a number counting up from 0 to a target value using
requestAnimationFrame, ideal for stat/metric sections.

## How is it used?
Add .ease-counter with a data-target="N" attribute to any span, then
run the accompanying init script (can later be triggered on scroll-into-view
using the existing .ease-reveal IntersectionObserver pattern already in
core).

## Why is it useful?
- The project's own demo page already has static stat cards that could use this
- Tiny, dependency-free JS (no counting libraries needed)
- Reinforces "animation-first" on a pattern already present in the framework
- Reusable across marketing sections, dashboards, and landing pages