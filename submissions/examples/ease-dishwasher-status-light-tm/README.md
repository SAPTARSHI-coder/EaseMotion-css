# Dishwasher Status Light

Closes #74811

Horizontal cycle progress indicator with 5 colored bulbs that light up in sequence (wash -> rinse -> dry -> cool -> done).

## Technique

Each bulb is a div with a colored background and matching `box-shadow` glow. The sibling-selector (`+`) colors the label text to match the active bulb.
