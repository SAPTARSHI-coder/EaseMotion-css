# Animation-Fill-Mode Utilities
This submission introduces utility classes for controlling how an animation applies styles to its target before and after execution.

- `.fill-none`: Default behavior.
- `.fill-forwards`: Element retains styles from the last keyframe.
- `.fill-backwards`: Element applies styles from the first keyframe during delay.
- `.fill-both`: Combines forwards and backwards behavior.

These utilities are critical for managing the state of elements after complex animation sequences.