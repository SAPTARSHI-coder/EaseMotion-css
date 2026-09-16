# Animated Radio Button Set

## What does this do?

A styled radio button group with 4 options (Basic, Pro, Team, Enterprise). Each option uses a hidden `<input type="radio">` paired with a styled `<label>` showing a custom circular indicator, a label, and a description.

## How is it used?

Open `demo.html` in a browser. Click any option to select it. The selected option gains a glowing accent border and a filled checkmark-style dot inside the indicator, with smooth transitions between selections.

## Why is it useful?

Demonstrates how to build accessible, visually rich form controls using pure CSS with `:checked` pseudo-class selectors and sibling combinators. The glow and indicator animation provide clear selection feedback without JavaScript. Respects `prefers-reduced-motion`.
