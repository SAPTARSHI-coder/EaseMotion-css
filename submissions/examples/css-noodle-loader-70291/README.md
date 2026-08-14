# CSS Noodle Loader

1. What does this do? Renders a loading animation of a wavy noodle/rope that winds and unwinds while sliding along a bowl, with rising steam wisps.
2. How is it used? Drop the `.stage` block (bowl, `.noodle` with six `.noodle__seg` segments, and `.steam` wisps) into a container; the winding, sliding, and steam animations run via CSS keyframes.
3. Why is it useful? Adds a playful, no-JavaScript loading indicator with staggered segment timing and `prefers-reduced-motion` support.

Closes #70291
