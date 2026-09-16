# Neumorphic Dark Mode Patch (-pr)

This submission resolves a visual layout bug in `components/cards.css` where the Neumorphism design system completely fails and flattens out when users enable Dark Mode.

## What does this do?
It patches the `@media (prefers-color-scheme: dark)` query for `.ease-card-neumorphic`. It significantly brightens the top-left highlight shadow (from a weak `0.04` alpha to `0.10` alpha) and deepens the bottom-right drop shadow (from `0.32` to `0.50`). 

## How is it used?
Just include the CSS! It seamlessly overwrites the broken core framework shadows. Any `.ease-card-neumorphic` card will now automatically look incredible in Dark Mode.

## Why is it useful?
True Neumorphism relies on the illusion of light hitting an extruded surface. The core framework's light mode achieves this perfectly. However, the core framework's dark mode override uses an `rgba(255, 255, 255, 0.04)` highlight, which is so transparent it's invisible to the human eye, resulting in a card that just looks like a muddy, flat square. This patch provides the exact CSS values the maintainer needs to restore the 3D depth to the dark mode design system!
