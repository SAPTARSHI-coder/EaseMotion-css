# Magnetic Physics Button

Closes #74593

Button that is pulled toward the cursor when nearby. The closer the cursor, the stronger the pull.

## Technique

On `mousemove`, calculate the distance from cursor to button center. If within range, apply a transform translate proportional to (1 - distance/range). The result is a subtle magnetic attraction.
