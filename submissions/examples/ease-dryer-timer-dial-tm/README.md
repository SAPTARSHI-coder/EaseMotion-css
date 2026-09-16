# Dryer Timer Dial

Closes #74812

A physical-looking rotary timer dial with major and minor tick marks, labels (Off, 30, 60, 90), a center push button, and a red pointer indicator.

## Technique

Tick marks and labels are absolutely positioned and rotated around a center pivot using `transform-origin` and `rotate`. The pointer is a vertical bar with a small filled section at the bottom for the indicator.
