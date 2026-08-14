# Animation Interruption & Recovery Regression Tests

Regression test fixture for EaseMotion CSS issue #73081.

## Purpose

This submission provides a self-contained browser test page for checking
animation behavior when an active animation is interrupted, cancelled,
restarted, replaced, or rapidly changed.

The fixture is intentionally dependency-free and can be opened directly in a
browser without a development server or build system.

## Test Coverage

The regression fixture covers the following lifecycle scenarios:

1. Animation interrupted midway
2. Same animation restarted
3. Animation replaced by another animation
4. Rapid start and stop cycles
5. Cancellation followed by restart
6. Interrupted animation cleanup
7. Animation completion cleanup
8. Reduced-motion behavior

## Files

```text
animation-interruption-recovery-73081/
├── demo.html
├── style.css
└── README.md